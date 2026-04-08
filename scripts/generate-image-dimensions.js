#!/usr/bin/env node
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const imagesDir = path.join(__dirname, "..", "public", "images");
const outFile = path.join(__dirname, "..", "src", "lib", "image-dimensions.json");

function getPngSize(buf) {
  if (buf.length < 24) return null;
  // PNG signature
  if (buf.readUInt32BE(0) !== 0x89504e47) return null;
  const width = buf.readUInt32BE(16);
  const height = buf.readUInt32BE(20);
  return { width, height };
}

function getGifSize(buf) {
  if (buf.length < 10) return null;
  const sig = buf.toString("ascii", 0, 6);
  if (sig !== "GIF87a" && sig !== "GIF89a") return null;
  const width = buf.readUInt16LE(6);
  const height = buf.readUInt16LE(8);
  return { width, height };
}

function getJpegSize(buf) {
  if (buf.length < 4) return null;
  if (buf[0] !== 0xff || buf[1] !== 0xd8) return null; // not JPEG
  let offset = 2;
  while (offset < buf.length) {
    if (buf[offset] !== 0xff) {
      offset++;
      continue;
    }
    const marker = buf[offset + 1];
    // SOF markers that contain size info
    const sofMarkers = new Set([0xc0, 0xc1, 0xc2, 0xc3, 0xc5, 0xc6, 0xc7, 0xc9, 0xca, 0xcb, 0xcd, 0xce, 0xcf]);
    const len = buf.readUInt16BE(offset + 2);
    if (sofMarkers.has(marker)) {
      const height = buf.readUInt16BE(offset + 5);
      const width = buf.readUInt16BE(offset + 7);
      return { width, height };
    }
    offset += 2 + len;
  }
  return null;
}

function getWebpSize(buf) {
  // RIFF header "RIFF" + size + "WEBP"
  if (buf.length < 30) return null;
  if (buf.toString("ascii", 0, 4) !== "RIFF") return null;
  if (buf.toString("ascii", 8, 12) !== "WEBP") return null;
  // Simple approach: search for VP8/VP8L chunk
  let offset = 12;
  while (offset + 8 <= buf.length) {
    const chunkHeader = buf.toString("ascii", offset, offset + 4);
    const chunkSize = buf.readUInt32LE(offset + 4);
    if (chunkHeader === "VP8 ") {
      // lossy bitstream: extract width/height from frame header
      // Not implementing full parser here
      return null;
    }
    if (chunkHeader === "VP8L") {
      // lossless
      return null;
    }
    offset += 8 + chunkSize + (chunkSize % 2);
  }
  return null;
}

function detectSize(filePath) {
  const buf = fs.readFileSync(filePath);
  let size = getPngSize(buf) || getGifSize(buf) || getJpegSize(buf) || getWebpSize(buf);
  return size;
}

function main() {
  if (!fs.existsSync(imagesDir)) {
    console.error("Images directory not found:", imagesDir);
    process.exit(1);
  }
  const files = fs.readdirSync(imagesDir).filter((f) => /\.(png|jpe?g|gif|webp)$/i.test(f));
  const result = {};
  files.forEach((f) => {
    const p = path.join(imagesDir, f);
    try {
      const size = detectSize(p);
      if (size && size.width && size.height) {
        result[`/images/${f}`] = size;
        console.log(f, size.width + "x" + size.height);
      } else {
        console.warn("Could not detect size for", f);
      }
    } catch (err) {
      console.error("Error reading", f, err.message);
    }
  });

  // ensure output dir exists
  const outDir = path.dirname(outFile);
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(outFile, JSON.stringify(result, null, 2));
  console.log("Wrote", outFile);
}

main();
