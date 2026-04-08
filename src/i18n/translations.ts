export type Lang = 'es' | 'en' | 'ca';

export const translations: Record<Lang, Record<string, string>> = {
  es: {
    // Nav
    home: 'Inicio',
    'products-fans-title': 'Ventilación',
    'products-fans-duct': 'Axial',
    'products-fans-radial': 'Centrífuga',
    'products-fans-roof': 'De techo',
    'products-filters-title': 'Filtración',
    'products-filters-dust': 'Partículas',
    'products-filters-liquid': 'Líquidos',
    'products-filters-air': 'Gases',
    solutions360: 'Soluciones 360º',
    about: 'Quienes somos',
    // Banner
    'banner-title': 'EcoAir Plastics',
    'banner-description': 'Soluciones Ambientales para la Calidad del Aire.',
    // Hero
    'hero-title': 'Soluciones industriales para medios corrosivos',
    'hero-description':
      'Diseñamos y comercializamos sistemas para la ventilación y filtrado de gases, aparte de otro equipamiento relacionado con el manejo y almacenamiento de fluidos.',
    // Turnkey
    'turnkey-title': 'Sistemas llaves en mano',
    'turnkey-description':
      'Somos una ingeniería dónde aportamos soluciones medioambientales para el sector industrial.\nDisponemos de taller propio dónde fabricamos y probamos todos nuestros equipos.\nNuestros ingenieros y técnicos se ocupan del estudio de la captación, el diseño de los conductos de aspiración y la elección del sistema de depuración necesario.',
    'turnkey-button': 'Soluciones 360',
    // Products
    'fans-title': 'Ventilación',
    'fans-description':
      'Disponemos de nuestra gama propia de ventiladores industriales fabricados con plásticos técnicos, aptos para trabajar con gases altamente corrosivos en condiciones de servicio permanente.',
    'filters-title': 'Filtración',
    'filters-description':
      'Descubre nuestras soluciones de filtración para el sector industrial. Disponemos de filtros de polvo, líquidos y gases adaptados a las necesidades de cada proceso y diseñados para cumplir con los requerimientos más restrictivos.',
    more: 'Más información',
    // Industries
    'industries-farming-title': 'Agricultura, acuicultura y ganadería',
    'industries-farming-description':
      'Depósitos de almacenamiento de sólidos, líquidos, cerramientos y balsas de cría, trasvase de líquidos, adición controlada de productos, sistemas de aspiración y filtración de polvo, entre otros.',
    'industries-automobile-title': 'Industria automotriz',
    'industries-automobile-description': 'Filtración de gases y partículas de pintado, soldado, etc.',
    'industries-food-title': 'Industria de alimentos y bebidas',
    'industries-food-description':
      'Desodorización de precursores de malos olores y otros contaminantes, que se generan durante todo el proceso de elaboración o conversión de productos y subproductos alimentarios.',
    'industries-textile-title': 'Industria textil y de confección',
    'industries-textile-description':
      'Aspiración y recuperación de productos valiosos utilizados comúnmente en la industria del curtido.',
    'industries-chemical-title': 'Industria química',
    'industries-chemical-description':
      'Equipos adaptados a las necesidades de cada proceso y diseñados para cumplir con los requerimientos más restrictivos. Uso de materiales específicos de alta pureza, para atmósferas ATEX, etc.',
    'industries-metallurgy-title': 'Industria metalúrgica y maquinaria',
    'industries-metallurgy-description':
      'Control de las emisiones generadas durante el proceso de tratamiento de piezas. Instalaciones de extracción y filtrado de todo tipo de gases. Depósitos y cubas para el tratamiento superficial.',
    'industries-construction-title': 'Construcción',
    'industries-construction-description':
      'Depósitos de almacenamiento, sistemas de aspiración y filtración de polvo. Silos de descarga, cintas transportadoras, etc.',
    'industries-energy-title': 'Energía e industria verde',
    'industries-energy-description':
      'Equipos para procesos productivos, el procesado de productos cómo biogás y purines.',
    // Team
    'team-title': 'Nuestro equipo',
    'team-description':
      'Somos un equipo de ingenieros especializados en sistemas de filtración con más de 10 años de experiencia conjunta.',
    'team-button': 'Conócenos',
    // Footer
    contact_us: '¿Interesado en obtener más información? Contacta con nosotros:',
    legal: 'Aviso legal',
    copyright: 'Todos los derechos reservados',
    developed_by: 'Desarrollado por',
    based_on: 'Basado en Alpha de',
    // Cookies
    'cookies-title':
      'Este sitio web utiliza cookies propias y de terceros (Google Ads) para fines analíticos.\nPuedes obtener más información en nuestra',
    'cookies-link': 'Política de Cookies',
    'cookies-accept': 'Aceptar todas',
    'cookies-reject': 'Rechazar',
  },

  en: {
    // Nav
    home: 'Home',
    'products-fans-title': 'Ventilation',
    'products-fans-duct': 'Axial',
    'products-fans-radial': 'Centrifugal',
    'products-fans-roof': 'Roof',
    'products-filters-title': 'Filtration',
    'products-filters-dust': 'Particles',
    'products-filters-liquid': 'Liquids',
    'products-filters-air': 'Gases',
    solutions360: 'Solutions 360º',
    about: 'About Us',
    // Banner
    'banner-title': 'EcoAir Plastics',
    'banner-description': 'Environmental Solutions for Air Quality.',
    // Hero
    'hero-title': 'Industrial solutions for corrosive environments',
    'hero-description':
      'We design and market systems for gas ventilation and filtration, as well as other equipment related to fluid handling and storage.',
    // Turnkey
    'turnkey-title': 'Turnkey systems',
    'turnkey-description':
      'We are an engineering company providing environmental solutions for the industrial sector.\nWe have our own workshop where we manufacture and test all our equipment.\nOur engineers and technicians handle the capture study, the design of suction ducts and the selection of the required treatment system.',
    'turnkey-button': '360º Solutions',
    // Products
    'fans-title': 'Ventilation',
    'fans-description':
      'We have our own range of industrial fans manufactured with technical plastics, suitable for working with highly corrosive gases under continuous service conditions.',
    'filters-title': 'Filtration',
    'filters-description':
      'Discover our filtration solutions for the industrial sector. We offer dust, liquid and gas filters adapted to the needs of each process and designed to meet the most stringent requirements.',
    more: 'More information',
    // Industries
    'industries-farming-title': 'Agriculture, aquaculture and livestock',
    'industries-farming-description':
      'Storage tanks for solids and liquids, enclosures and breeding ponds, liquid transfer, controlled product dosing, dust aspiration and filtration systems, and more.',
    'industries-automobile-title': 'Automotive industry',
    'industries-automobile-description': 'Filtration of gases and particles from painting, welding, etc.',
    'industries-food-title': 'Food and beverage industry',
    'industries-food-description':
      'Deodorisation of bad odour precursors and other contaminants generated throughout the processing or conversion of food products and by-products.',
    'industries-textile-title': 'Textile and garment industry',
    'industries-textile-description':
      'Aspiration and recovery of valuable products commonly used in the tanning industry.',
    'industries-chemical-title': 'Chemical industry',
    'industries-chemical-description':
      'Equipment adapted to the needs of each process and designed to meet the most stringent requirements. Use of specific high-purity materials, for ATEX atmospheres, etc.',
    'industries-metallurgy-title': 'Metallurgical and machinery industry',
    'industries-metallurgy-description':
      'Control of emissions generated during part treatment processes. Extraction and filtration installations for all types of gases. Tanks and vats for surface treatment.',
    'industries-construction-title': 'Construction',
    'industries-construction-description':
      'Storage tanks, dust aspiration and filtration systems. Discharge silos, conveyor belts, etc.',
    'industries-energy-title': 'Energy and green industry',
    'industries-energy-description':
      'Equipment for production processes and the processing of products such as biogas and slurry.',
    // Team
    'team-title': 'Our team',
    'team-description':
      'We are a team of engineers specialised in filtration systems with over 10 years of combined experience.',
    'team-button': 'About us',
    // Footer
    contact_us: 'Interested on further information? Contact with us:',
    legal: 'Legal notice (Spanish)',
    copyright: 'All rights reserved',
    developed_by: 'Developed by',
    based_on: 'Based on Alpha by',
    // Cookies
    'cookies-title':
      'This website uses own cookies and from third parties (Google Ads) for analytical purposes.\nYou can get more information in our',
    'cookies-link': 'Cookies Policy',
    'cookies-accept': 'Accept all',
    'cookies-reject': 'Reject',
  },

  ca: {
    // Nav
    home: 'Inici',
    'products-fans-title': 'Ventilació',
    'products-fans-duct': 'Axial',
    'products-fans-radial': 'Centrífuga',
    'products-fans-roof': 'De sostre',
    'products-filters-title': 'Filtració',
    'products-filters-dust': 'Partícules',
    'products-filters-liquid': 'Líquids',
    'products-filters-air': 'Gases',
    solutions360: 'Solucions 360º',
    about: 'Qui som',
    // Banner
    'banner-title': 'EcoAir Plastics',
    'banner-description': "Solucions Ambientals per a la Qualitat de l'Aire.",
    // Hero
    'hero-title': 'Solucions industrials per a mitjans corrosius',
    'hero-description':
      "Dissenyem i comercialitzem sistemes per a la ventilació i filtrat de gasos, a més d'altre equipament relacionat amb el maneig i emmagatzematge de fluids.",
    // Turnkey
    'turnkey-title': 'Sistemes clau en mà',
    'turnkey-description':
      "Som una enginyeria on aportem solucions mediambientals per al sector industrial.\nDisposem de taller propi on fabriquem i provem tots els nostres equips.\nEls nostres enginyers i tècnics s'ocupen de l'estudi de la captació, el disseny dels conductes d'aspiració i l'elecció del sistema de depuració necessari.",
    'turnkey-button': 'Solucions 360',
    // Products
    'fans-title': 'Ventilació',
    'fans-description':
      'Disposem de la nostra gamma pròpia de ventiladors industrials fabricats amb plàstics tècnics, aptes per treballar amb gasos altament corrosius en condicions de servei permanent.',
    'filters-title': 'Filtració',
    'filters-description':
      'Descobreix les nostres solucions de filtració per al sector industrial. Disposem de filtres de pols, líquids i gasos adaptats a les necessitats de cada procés i dissenyats per complir amb els requeriments més restrictius.',
    more: 'Més informació',
    // Industries
    'industries-farming-title': 'Agricultura, aqüicultura i ramaderia',
    'industries-farming-description':
      "Dipòsits d'emmagatzematge de sòlids, líquids, tancaments i basses de cria, trasvàs de líquids, addició controlada de productes, sistemes d'aspiració i filtració de pols, entre d'altres.",
    'industries-automobile-title': 'Indústria automobilística',
    'industries-automobile-description': 'Filtració de gasos i partícules de pintat, soldat, etc.',
    'industries-food-title': "Indústria d'aliments i begudes",
    'industries-food-description':
      "Desodorització de precursors de mals olors i altres contaminants que es generen durant tot el procés d'elaboració o conversió de productes i subproductes alimentaris.",
    'industries-textile-title': 'Indústria tèxtil i de confecció',
    'industries-textile-description':
      'Aspiració i recuperació de productes valuosos utilitzats comunament en la indústria del curtiment.',
    'industries-chemical-title': 'Indústria química',
    'industries-chemical-description':
      "Equips adaptats a les necessitats de cada procés i dissenyats per complir amb els requeriments més restrictius. Ús de materials específics d'alta puresa, per a atmosferes ATEX, etc.",
    'industries-metallurgy-title': 'Indústria metal·lúrgica i maquinària',
    'industries-metallurgy-description':
      "Control de les emissions generades durant el procés de tractament de peces. Instal·lacions d'extracció i filtrat de tot tipus de gasos. Dipòsits i cubes per al tractament superficial.",
    'industries-construction-title': 'Construcció',
    'industries-construction-description':
      "Dipòsits d'emmagatzematge, sistemes d'aspiració i filtració de pols. Silos de descàrrega, cintes transportadores, etc.",
    'industries-energy-title': 'Energia i indústria verda',
    'industries-energy-description':
      'Equips per a processos productius, el processament de productes com el biogàs i els purins.',
    // Team
    'team-title': 'El nostre equip',
    'team-description':
      "Som un equip d'enginyers especialitzats en sistemes de filtració amb més de 10 anys d'experiència conjunta.",
    'team-button': 'Coneix-nos',
    // Footer
    contact_us: 'Interessat en obtenir més informació? Contacteu amb nosaltres:',
    legal: 'Avís legal (Castellà)',
    copyright: 'Tots els drets reservats',
    developed_by: 'Desenvolupat per',
    based_on: 'Basat en Alpha de',
    // Cookies
    'cookies-title':
      'Aquest lloc web utilitza cookies propis i de tercers (Google Ads) amb finalitats analítiques.\nPodeu obtenir més informació en la nostra',
    'cookies-link': 'Política de Cookies',
    'cookies-accept': 'Aceptar',
    'cookies-reject': 'Rebutjar',
  },
};

export function getLang(): Lang {
  if (typeof window === 'undefined') return 'es';
  const params = new URLSearchParams(window.location.search);
  const lang = params.get('lang');
  if (lang === 'en' || lang === 'ca') return lang;
  return 'es';
}
