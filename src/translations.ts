export type Language = "es" | "ja" | "pt";

export interface ServiceTranslation {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface ProjectTranslation {
  id: string;
  title: string;
  category: string;
  location: string;
  description: string;
  image: string;
  scope: string[];
}

export interface TranslationSchema {
  brandTagline: string;
  menu: {
    home: string;
    services: string;
    standard: string;
    about: string;
    contact: string;
    ctaButton: string;
    portfolio: string;
  };
  complianceNotice: {
    registered: string;
    division: string;
    iec: string;
    quality: string;
  };
  hero: {
    badge: string;
    directives: string;
    engineeringBadge: string;
    headlineStart: string;
    headlineHighlight: string;
    headlineEnd: string;
    tier: string;
    subtitle: string;
    ctaButton: string;
    ctaSecondary: string;
    ctaNote: string;
    scrollCue: string;
  };
  trust: {
    title: string;
    subtitle: string;
    col1Title: string;
    col1Text: string;
    col2Title: string;
    col2Text: string;
    col3Title: string;
    col3Text: string;
  };
  services: {
    titleStart: string;
    titleHighlight: string;
    subtitle: string;
  };
  portfolio: {
    titleStart: string;
    titleHighlight: string;
    subtitle: string;
    badge: string;
  };
  about: {
    title: string;
    text: string;
    tagline: string;
  };
  contact: {
    titleStart: string;
    titleHighlight: string;
    subtitle: string;
    hotline: string;
    division: string;
    consultation: string;
    consultationDesc: string;
    nodeNetwork: string;
    infrastructureActive: string;
    operationsHQ: string;
    reliability: string;
    aesEngaged: string;
    labelName: string;
    placeholderName: string;
    labelEmail: string;
    placeholderEmail: string;
    labelMessage: string;
    placeholderMessage: string;
    transmitting: string;
    transmitButton: string;
    successTitle: string;
    successDesc: string;
    submitAnother: string;
  };
  modal: {
    engineeringTitle: string;
    descriptionLabel: string;
    descriptionText: string;
    scopeLabel: string;
    callbackLabel: string;
    phonePlaceholder: string;
    callbackButton: string;
    submittingStatus: string;
    successTitle: string;
    successDesc: string;
  };
  footer: {
    rights: string;
    compliance: string;
    backToTop: string;
    privacy: string;
    contactInfo: string;
    coverageTitle: string;
    coverageArea: string;
  };
}

export const translations: Record<Language, TranslationSchema> = {
  es: {
    brandTagline: "CONTRATACIÓN ELÉCTRICA ・ INFRAESTRUCTURA Y SISTEMAS DE ENERGÍA",
    menu: {
      home: "Inicio",
      services: "Servicios",
      standard: "Por Qué Elegirnos",
      about: "Sobre Nosotros",
      contact: "Contacto",
      ctaButton: "Solicitar Presupuesto",
      portfolio: "Galería",
    },
    complianceNotice: {
      registered: "Registro de Empresa: N° T7010401165137",
      division: "Ingeniería de Instalaciones Eléctricas e Interiores",
      iec: "Cumplimiento de normativas técnicas verificado",
      quality: "CALIDAD DE INSTALACIÓN Y ARTESANÍA DE MÁXIMA PRECISIÓN",
    },
    hero: {
      badge: "EXCLUSIVIDAD LUDEN • INGENIERÍA ELÉCTRICA PROFESIONAL EN JAPÓN",
      directives: "DIRECTRICES PARA FÁBRICAS, LOCALES COMERCIALES Y APOYO TÉCNICO (応援)",
      engineeringBadge: "CONTRATISTA ELÉCTRICO LICENCIADO EN TOKIO, JAPÓN",
      headlineStart: "Soluciones Eléctricas Seguras y de",
      headlineHighlight: "Alto Rendimiento para Fábricas, Locales y Apoyo (Ouen)",
      headlineEnd: "",
      tier: "Experiencia, Seguridad y Cumplimiento de Plazos",
      subtitle: "Servicio de ingeniería eléctrica para fábricas y locales comerciales. También ofrecemos apoyo de personal técnico calificado (Ouen/常用・応援) para otros contratistas en Tokio y Kanagawa.",
      ctaButton: "Solicitar Presupuesto Gratis",
      ctaSecondary: "Nuestros Servicios",
      ctaNote: "Diagnósticos técnicos rápidos programados con total claridad",
      scrollCue: "LUDEN ELECTRICIDAD • EST. EN TOKIO",
    },
    trust: {
      title: "¿Por qué elegir a LUDEN?",
      subtitle: "ESTÁNDARES RIGUROSOS • RESPONSABILIDAD CORPORATIVA TOTAL EN JAPÓN",
      col1Title: "Corporación Registrada",
      col1Text: "LUDEN Co., Ltd. es una empresa legalmente registrada en Japón (N° T7010401165137), lo que garantiza total responsabilidad técnica, emisión de facturas comerciales y fiscales (sistema Invoice) y un estricto cumplimiento de los códigos de seguridad.",
      col2Title: "Sede en Minato-ku, Tokio",
      col2Text: "Con sede en Kaigan, Minato-ku, lo que nos permite un despliegue ágil, tiempos de respuesta rápidos y visitas técnicas prioritarias en toda el área metropolitana de Tokio y la prefectura de Kanagawa.",
      col3Title: "Transparencia del 100%",
      col3Text: "Ofrecemos presupuestos detallados para proyectos comerciales e industriales, además de tarifas diarias claras y desglosadas para soporte técnico y subcontratación (Ouen). Sin sorpresas.",
    },
    services: {
      titleStart: "Especialidades",
      titleHighlight: "Técnicas",
      subtitle: "INFRAESTRUCTURA ROBUSTA • CONEXIONES Y CABLEADO IMPECABLES",
    },
    portfolio: {
      titleStart: "Proyectos",
      titleHighlight: "Recientes",
      subtitle: "GALERÍA DE TRABAJOS RECIENTES REALIZADOS POR LUDEN",
      badge: "NUESTRAS OBRAS",
    },
    about: {
      title: "Sobre Nosotros",
      text: "LUDEN Co., Ltd. (representada por Luis Matsuoka) es una empresa de ingeniería eléctrica con sede en Minato-ku, Tokio. Nos especializamos en el diseño, instalación y mantenimiento de infraestructura eléctrica para fábricas, locales comerciales (inquilinos) y obras de interiores. También ofrecemos apoyo de personal técnico calificado (Ouen/人工) para colaborar con otras empresas y contratistas del sector.",
      tagline: "LUDEN INGENIERÍA • SOPORTE MULTILINGÜE DISPONIBLE EN PORTUGUÉS, JAPONÉS Y ESPAÑOL",
    },
    contact: {
      titleStart: "Solicite su",
      titleHighlight: "Presupuesto",
      subtitle: "Envíe un mensaje para cotizar proyectos comerciales/industriales o solicitar servicios de apoyo técnico de subcontratación (Ouen)",
      hotline: "Línea Directa (Representante)",
      division: "Correo Electrónico Corporativo",
      consultation: "Área de Cobertura Principal",
      consultationDesc: "Tokio (sede en Minato-ku) y toda la prefectura de Kanagawa (incluyendo Yokohama y Kawasaki).",
      nodeNetwork: "NÚCLEO LUDEN",
      infrastructureActive: "LICENCIA CORPORATIVA ACTIVA",
      operationsHQ: "Minato-ku, Tokio",
      reliability: "FACTOR DE ESTABILIDAD: 100% CRÍTICO",
      aesEngaged: "ESTADO DEL CANAL SEGURO: ACTIVO",
      labelName: "Nombre Completo",
      placeholderName: "Ejemplo: Luis Matsuoka",
      labelEmail: "Correo Electrónico",
      placeholderEmail: "Ejemplo: contacto@luden-ele.com",
      labelMessage: "Detalles del Proyecto y Servicios Solicitados",
      placeholderMessage: "Describa la instalación o servicio que necesita (ej. tendido de cables principales, remodelación de oficinas, soporte técnico/応援, etc.)...",
      transmitting: "Transmitiendo a Luis Matsuoka...",
      transmitButton: "Enviar Solicitud de Presupuesto",
      successTitle: "Solicitud de Presupuesto Registrada",
      successDesc: "Luis Matsuoka revisará su mensaje de inmediato y se pondrá en contacto para programar una inspección técnica presencial priorizada y gratuita.",
      submitAnother: "Enviar otro mensaje",
    },
    modal: {
      engineeringTitle: "Sistemas de Precisión Luden",
      descriptionLabel: "Descripción del Servicio Seleccionado:",
      descriptionText: "Diseñado para ofrecer una vida útil excepcional, nuestro trabajo se enfoca en el cumplimiento estricto de las normas, enrutamiento físico limpio, conexiones robustas, materiales de alto rendimiento y estabilidad de voltaje activa.",
      scopeLabel: "Alcance del Trabajo Incluido:",
      callbackLabel: "Proporcione su número de teléfono para recibir una llamada prioritaria de Luis Matsuoka:",
      phonePlaceholder: "Ejemplo: 050-6861-3659",
      callbackButton: "Solicitar Llamada Prioritaria",
      submittingStatus: "Registrando solicitud...",
      successTitle: "¡Llamada Registrada!",
      successDesc: "Luis Matsuoka lo llamará directamente en breve para responder a sus preguntas técnicas.",
    },
    footer: {
      rights: "© 2026 LUDEN Co., Ltd. Todos los derechos reservados.",
      compliance: "Compañía Eléctrica Registrada en Japón • Licencia T7010401165137",
      backToTop: "Volver al inicio",
      privacy: "Política de Privacidad",
      contactInfo: "Información de Contacto",
      coverageTitle: "Área de Cobertura",
      coverageArea: "Tokio (sede en Minato-ku) y Kanagawa",
    },
  },
  ja: {
    brandTagline: "電気設備設計工事 ・ 工場・テナント電気工事（常用・応援対応）",
    menu: {
      home: "ホーム",
      services: "施工技能",
      standard: "選ばれる理由",
      about: "会社案内",
      contact: "お問い合わせ",
      ctaButton: "見積り依頼",
      portfolio: "施工実績",
    },
    complianceNotice: {
      registered: "登録番号 : T7010401165137",
      division: "電気設備工事・内装工事",
      iec: "電気設備技術基準・内線規程完全適合",
      quality: "安全第一・高精度電気工事施工管理",
    },
    hero: {
      badge: "LUDENクオリティ • 安全第一主義電気施工",
      directives: "工場・テナント設備設計施工（応援・人工対応）",
      engineeringBadge: "株式会社LUDEN ・ 東京都港区拠点",
      headlineStart: "工場やテナントビルの、安全で高品質な",
      headlineHighlight: "電気設備工事ソリューションを提供",
      headlineEnd: "",
      tier: "専門知識・徹底された透明性・完璧な施工品質",
      subtitle: "東京都港区を拠点に、工場、商業テナントビル等の電気設備工事・内装工事を施工。他社現場への常用・応援対応（人工対応）も柔軟に対応いたします。",
      ctaButton: "無料お見積りを依頼する",
      ctaSecondary: "提供サービスを見る",
      ctaNote: "出張現地調査や見積もり相談は完全無料にて承ります",
      scrollCue: "LUDEN施工技術 • 東京都港区海岸",
    },
    trust: {
      title: "LUDENが選ばれる 3つの理由",
      subtitle: "確かな法人技術規格 • 東京・神奈川エリア完全責任施工",
      col1Title: "安心の法人組織",
      col1Text: "株式会社LUDENは、国税庁に登記済みの安心の法人組織です（登録番号: T7010401165137）。信頼の施工体制、適格請求書（インボイス）の発行、日本の電気安全法令に則った誠実な責任施工をお届けします。",
      col2Title: "東京都港区拠点・機動的な対応",
      col2Text: "東京都港区海岸に本社を置き、港区を中心とした都内近郊、神奈川県内（横浜・川崎など）へ迅速に急行。現場調査や緊急時の点検・電気トラブルにもスピーディに対応いたします。",
      col3Title: "徹底した明瞭会計",
      col3Text: "事前現場調査に基づき、工場設備、テナント改装等の精確な御見積書をご提示。また、他社応援の常用・人工単価のご相談にもクリアにお応えします。",
    },
    services: {
      titleStart: "確かな施工",
      titleHighlight: "専門分野",
      subtitle: "強靭な下地インフラ配管からミリ単位の美緻なコンセント・器具仕上がりまで",
    },
    portfolio: {
      titleStart: "施工",
      titleHighlight: "実績",
      subtitle: "LUDENが手掛けた電気設備工事の事例ギャラリー",
      badge: "施工ギャラリー",
    },
    about: {
      title: "会社案内",
      text: "株式会社LUDEN（代表取締役 松岡ルイス）は、東京都港区に拠点を置く電気工事の専門集団です。工場、商業テナント施設などの電気設備工事および店舗等の内装工事を主力業務としており、東京都や神奈川県エリアを中心に活動しています。また、繁忙期の常用・応援対応（人工出し）にもスピーディに対応。確かな技術力でプロジェクトを支えます。",
      tagline: "株式会社LUDEN • 日本語、ポルトガル語、スペイン語でのシームレスなコミュニケーションに対応",
    },
    contact: {
      titleStart: "お見積り・",
      titleHighlight: "工事のご相談",
      subtitle: "工場電気設備、テナント内装工事、他社現場への常用・応援対応のご依頼など、お気軽にお問い合わせください",
      hotline: "代表直通電話",
      division: "公式メールアドレス",
      consultation: "主な対応エリア",
      consultationDesc: "東京都（港区中心・都内全域）、神奈川県（横浜・川崎含む県内全域）。",
      nodeNetwork: "LUDEN 基地",
      infrastructureActive: "有資格者による施工",
      operationsHQ: "東京都港区海岸",
      reliability: "品質・安全基準: 100%適合",
      aesEngaged: "暗号化セキュアチャンネル接続",
      labelName: "お名前 (漢字・氏名)",
      placeholderName: "例: 山田 太郎",
      labelEmail: "メールアドレス",
      placeholderEmail: "例: yamada@luden-ele.com",
      labelMessage: "工事内容・ご相談の詳細",
      placeholderMessage: "工事の具体的な箇所やご要望（例: 幹線引き込み、分電盤・ブレーカー結線、スラブ内配管、テナント内装照明、応援対応等）をご自由にご記入ください...",
      transmitting: "松岡ルイス宛へ送信中...",
      transmitButton: "お問い合わせ内容を送信する",
      successTitle: "送信が完了いたしました",
      successDesc: "お問い合わせ誠にありがとうございます。内容を確認し、代表の松岡ルイスより24時間以内に折り返しご連絡させていただきます。",
      submitAnother: "追加でメッセージを送信する",
    },
    modal: {
      engineeringTitle: "LUDEN電気工事・高基準仕様",
      descriptionLabel: "本施工技術の概要:",
      descriptionText: "将来の経年劣化を見据えた耐久設計。厳選された純銅線材、防湿・耐食に優れた合成樹脂および金属電線管、そして端子台への一糸乱れぬトルク接続により、完璧な電力品質と絶対的な安心を提供します。",
      scopeLabel: "標準に含まれる施工要件:",
      callbackLabel: "技術的な質問や工程確認等、代表の松岡ルイスからの折り返し電話をご希望ですか？:",
      phonePlaceholder: "例: 050-6861-3659",
      callbackButton: "折り返し連絡を希望する",
      submittingStatus: "送信手続き中...",
      successTitle: "お電話の予約が完了しました",
      successDesc: "代表の松岡ルイスより、近日中に個別にご連絡差し上げます。ありがとうございました。",
    },
    footer: {
      rights: "© 2026 株式会社LUDEN. All rights reserved.",
      compliance: "登録電気工事業者・高品質施工",
      backToTop: "トップへ戻る",
      privacy: "プライバシーポリシー",
      contactInfo: "ご連絡先",
      coverageTitle: "サービス提供エリア",
      coverageArea: "東京都内・神奈川県エリア一円",
    },
  },
  pt: {
    brandTagline: "CONTRATAÇÃO ELÉTRICA ・ INFRAESTRUTURA E SISTEMAS DE ENERGIA",
    menu: {
      home: "Início",
      services: "Serviços",
      standard: "Por Que Escolher-nos",
      about: "Sobre Nós",
      contact: "Contato",
      ctaButton: "Solicitar Orçamento",
      portfolio: "Obras",
    },
    complianceNotice: {
      registered: "Registro Corporativo: N° T7010401165137",
      division: "Divisão de Instalações Elétricas e Interiores",
      iec: "Conformidade com regulamentações técnicas locais",
      quality: "QUALIDADE E TRABALHO DE ENGENHARIA DE ALTÍSSIMA PRECISÃO",
    },
    hero: {
      badge: "EXCLUSIVIDADE LUDEN • ENGENHARIA ELÉTRICA PROFISSIONAL NO JAPÃO",
      directives: "DIRETRIZES DE ENERGIA PARA FÁBRICAS, COMÉRCIO E SUPORTE TÉCNICO (応援)",
      engineeringBadge: "EMPRESA ELÉTRICA REGISTRADA E LICENCIADA EM TÓQUIO",
      headlineStart: "Instalações Elétricas de",
      headlineHighlight: "Alto Desempenho para Fábricas, Comércio e Apoio (Ouen)",
      headlineEnd: "",
      tier: "Presteza, Segurança e Transparência no Atendimento",
      subtitle: "Serviço técnico de engenharia focado em segurança e estabilidade. Atendemos a fábricas, comércios e oferecemos suporte de pessoal técnico (Ouen) para parceiros em Tóquio e Kanagawa.",
      ctaButton: "Solicitar Orçamento Gratuito",
      ctaSecondary: "Conhecer Nossos Serviços",
      ctaNote: "Consultas técnicas agendadas rapidamente com total clareza",
      scrollCue: "LUDEN ELETRICIDADE • ESTABELECIDO EM TÓQUIO",
    },
    trust: {
      title: "Por que escolher a LUDEN?",
      subtitle: "MÁXIMA RESPONSABILIDADE • ORGANIZAÇÃO CORPORATIVA INTEGRAL",
      col1Title: "Corporação Registrada",
      col1Text: "A LUDEN Co., Ltd. é uma empresa de engenharia elétrica legalmente registrada no Japão (N° T7010401165137), garantindo responsabilidade técnica civil, emissão de notas fiscais comerciais e cumprimento de todas as leis elétricas nacionais.",
      col2Title: "Sede em Minato-ku, Tóquio",
      col2Text: "Baseados em Kaigan, Minato-ku, oferecendo grande agilidade no deslocamento, vistorias técnicas pioneiras e visitas rápidas em toda a região de Tóquio e província de Kanagawa.",
      col3Title: "Transparência Total",
      col3Text: "Orçamentos prévios detalhados para obras comerciais ou industriais, além de custos claros de diárias para suporte técnico e subcontratação (Ouen). Sem surpresas.",
    },
    services: {
      titleStart: "Nossos",
      titleHighlight: "Serviços",
      subtitle: "ESPECIALIDADES TÉCNICAS E SISTEMAS DE ALTO DESEMPENHO",
    },
    portfolio: {
      titleStart: "Nossas",
      titleHighlight: "Obras",
      subtitle: "GALERIA DE OBRAS RECENTES E TRABALHOS EXECUTADOS PELA LUDEN",
      badge: "GALERIA DE TRABALHOS",
    },
    about: {
      title: "Sobre Nós",
      text: "A LUDEN Co., Ltd. (representada por Luis Matsuoka) é uma empresa de engenharia elétrica com sede em Minato-ku, Tóquio. Especializamo-nos no projeto, instalação e manutenção de infraestrutura elétrica para fábricas, estabelecimentos comerciais (inquilinos) e reformas de interiores. Também oferecemos suporte técnico sob demanda (Ouen/人工) para parceiros do setor, prestando serviços de altíssima qualidade técnica.",
      tagline: "LUDEN ENGENHARIA • SUPORTE EXCLUSIVO EM PORTUGUÊS, JAPONÊS E ESPANHOL PARA SUA COMODIDADE",
    },
    contact: {
      titleStart: "Solicite seu",
      titleHighlight: "Orçamento",
      subtitle: "Entre em contato para orçamentos de projetos industriais/comerciais ou para solicitar suporte técnico e diárias de subcontratação (Ouen)",
      hotline: "Linha Direta (Representante)",
      division: "E-mail Corporativo",
      consultation: "Área de Cobertura Principal",
      consultationDesc: "Tóquio (sede em Minato-ku) e toda a província de Kanagawa (incluindo Yokohama e Kawasaki).",
      nodeNetwork: "REDE LUDEN",
      infrastructureActive: "LICENÇA CORPORATIVA ACTIVA",
      operationsHQ: "Minato-ku, Tóquio",
      reliability: "QUALIDADE DE CONEXÃO: 100% DISPONÍVEL",
      aesEngaged: "CANAL ENCRIPTADO DE CONTATO",
      labelName: "Nome Completo",
      placeholderName: "Ex: Luis Matsuoka",
      labelEmail: "E-mail Corporativo de Contato",
      placeholderEmail: "Ex: contato@luden-ele.com",
      labelMessage: "O que você precisa fazer no seu imóvel?",
      placeholderMessage: "Descreva os detalhes do serviço (ex: passagem de cabos tronco, fechamento de quadro de força, tubulações em lajes, reforma de escritórios, suporte técnico/応援, etc.)...",
      transmitting: "Enviando seus detalhes para Luis Matsuoka...",
      transmitButton: "Enviar Solicitação de Orçamento",
      successTitle: "Solicitação Enviada com Sucesso!",
      successDesc: "Luis Matsuoka analisará sua mensagem e entrará em contato em breve para agendar uma vistoria técnica presencial.",
      submitAnother: "Enviar outra mensagem",
    },
    modal: {
      engineeringTitle: "Sistemas de Precisão Luden",
      descriptionLabel: "Informações Técnicas do Serviço:",
      descriptionText: "Projetado e executado seguindo os padrões das maiores companhias de engenharia integradora. Usamos núcleos de cobre maciço, isolamentos duplos antichama e conexões robustas blindadas contra ruídos elétricos.",
      scopeLabel: "O que está incluído no escopo padrão:",
      callbackLabel: "Se preferir, deixe seu número para que o Luis Matsuoka ligue diretamente:",
      phonePlaceholder: "Ex: 050-6861-3659",
      callbackButton: "Solicitar Ligação Direta",
      submittingStatus: "Salvando seu número...",
      successTitle: "Agendamento Efetuado!",
      successDesc: "Luis Matsuoka ligará para você diretamente no número informado.",
    },
    footer: {
      rights: "© 2026 LUDEN Co., Ltd. Todos os direitos reservados.",
      compliance: "Empreiteira Credenciada no Japão • Licença T7010401165137",
      backToTop: "Voltar ao topo",
      privacy: "Política de Privacidade",
      contactInfo: "Contato Direto",
      coverageTitle: "Área de Cobertura",
      coverageArea: "Tóquio (sede em Minato-ku) e província de Kanagawa",
    },
  },
};

export const serviceTranslations: Record<Language, ServiceTranslation[]> = {
  es: [
    {
      id: "cable-trunking",
      title: "Tendido de Cables Troncales (幹線引き)",
      description: "Tendido y estructuración de líneas eléctricas principales hacia salas eléctricas. Gestionamos enrutamientos complejos, tanto horizontales como entre pisos, utilizando tracción mecánica para líneas pesadas o largas distancias con total seguridad.",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "concrete-slab",
      title: "Tubería y Cableado en Losas (スラブ配管・配線)",
      description: "Instalación estratégica de tuberías y conductos empotrados en cimientos de hormigón crudo. Preparación de la infraestructura central para almacenes, locales comerciales y fábricas.",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "structural-wiring",
      title: "Cableado de Techos y Paredes (天井・壁の配線)",
      description: "Paso de líneas de alimentación y señal en techos y tabiques durante la fase de estructura. Enrutamos cables de energía primaria (VVF, CV) así como alarmas contra incendios y señales de automatización antes del cierre de paneles de yeso.",
      image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "device-installation",
      title: "Instalación de Equipos y Dispositivos (器具の取り付け)",
      description: "Etapa final de acabado de precisión. Montaje y conexión segura de iluminación, cajas de enchufes, interruptores y reguladores después del panel de yeso/pintura. Incluye el desmontaje seguro de unidades para proyectos de renovación.",
      image: "device_installation.png"
    },
    {
      id: "panel-termination",
      title: "Paneles de Fuerza y Terminales (電力盤結線)",
      description: "Estructuración, peinado y conexión de baja impedancia de alimentadores de distribución principal a tableros y disyuntores, garantizando una disipación de calor limpia, pruebas de torque y un balanceo de carga estructurado.",
      image: "panel_termination.png"
    },
    {
      id: "cable-racks",
      title: "Soportes de Cables y Bandejas Pesadas (ケーブルラック・盤取り付け)",
      description: "Fijación de anclajes al techo y montaje de bandejas portacables de acero de alta capacidad. Incluye la instalación robusta de cajas de distribución industrial, sistemas disyuntores pesados y rutas seguras.",
      image: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=600&q=80"
    }
  ],
  ja: [
    {
      id: "cable-trunking",
      title: "幹線引きこみ・電力配線 (幹線引き)",
      description: "高圧・幹線受電設備の電気室への引き込み、長距離や多層階にまたがる太物ケーブル敷設を行います。パワーボール等のパワー引き込み機を使用し、安全かつ完璧に布設管理します。",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "concrete-slab",
      title: "コンクリートスラブ配管工事 (スラブ配管・配線)",
      description: "ビル・倉庫・店舗の生コンクリート打設前の鉄筋組に、PF管やCD管などの埋込電線管を戦略的に配管・立ち上げ固定を行い、構造体一体の下地施工を頑強に実施します。",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "structural-wiring",
      title: "天井内・二重壁内配線 (天井・壁の配線)",
      description: "建方フレーム段階における天井・内壁の間仕切り内部の配線ルート設計。高容量のVVFケーブルや外部CVFケーブル、弱電（防災・音響機器）などの適正・安全離隔配線を遵守します。",
      image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "device-installation",
      title: "器具取り付け・機器設置 (器具の取り付け)",
      description: "内装（壁紙・塗装）フィニッシュ段階での器具付け。トグルスイッチ、高級コンセントプレート、ダウンライト等のミリ単位の傾き・曲がりを排した設置、店舗改装時の安全解体取付を実施します。",
      image: "device_installation.png"
    },
    {
      id: "panel-termination",
      title: "分電盤・動力盤結線処理 (電力盤結線)",
      description: "低圧から高圧幹線受電盤、幹線分配、圧着端子への規定トルクネジ締め、結線ルートの美緻な整線を行い、各サーキットブレーカーへの安全負荷分散接続を保証します。",
      image: "panel_termination.png"
    },
    {
      id: "cable-racks",
      title: "ケーブルラック・盤据付 (ケーブルラック・盤の取り付け)",
      description: "ビルや大型店舗の天井部に支持用の全アンカー吊り具を取付け、重量ケーブル群を格納誘導する鋼製・アルミ製ラックの組み立て。頑固な分電盤ボックス本体 of 物理的固定を含みます。",
      image: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=600&q=80"
    }
  ],
  pt: [
    {
      id: "cable-trunking",
      title: "Lançamento de Cabos Tronco (幹線引き)",
      description: "Passagem e estruturação de cabos principais para salas elétricas. Executamos roteamentos complexos, tanto horizontais quanto verticais entre andares, utilizando equipamentos de tração (power balls) para longas distâncias com total segurança.",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "concrete-slab",
      title: "Tubulação e Fiação em Lajes (スラブ配管・配線)",
      description: "Instalação estratégica de tubulações e conduítes embutidos em fundações de concreto. Preparamos a infraestrutura base para novas construções, atendendo galpões, comércios e instalações de fábricas.",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "structural-wiring",
      title: "Cabeamento e Fiação Estrutural (天井・壁の配線)",
      description: "Passagem de fios em tetos e paredes na fase de obra (antes do fechamento com gesso/drywall). Trabalhamos com cabos de energia (VVF, CV) e também cabos de baixa tensão para alarmes de incêndio e sistemas de automação.",
      image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "device-installation",
      title: "Instalação de Equipamentos (器具の取り付け)",
      description: "Fase de acabamento técnico. Realizamos a conexão final e fixação milimétrica de luminárias, tomadas e interruptores após o revestimento das paredes. Também executamos a remoção segura de equipamentos em reformas de escritórios e lojas.",
      image: "device_installation.png"
    },
    {
      id: "panel-termination",
      title: "Fechamento de Quadros de Força (電力盤結線)",
      description: "Montagem, organização e ligação de cabos em quadros de distribuição e painéis de força. Garantimos conexões precisas desde redes convencionais até conexões de alta capacidade para painéis industriais de grande porte.",
      image: "panel_termination.png"
    },
    {
      id: "cable-racks",
      title: "Montagem de Eletrocalhas e Painéis (ケーブルラック・盤の取り付け)",
      description: "Fixação de ancoragens no teto e montagem completa de rotas de eletrocalhas (cable racks) para organização industrial. Executamos também a instalação física de quadros de distribuição e disjuntores robustos.",
      image: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=600&q=80"
    }
  ]
};

export const projectTranslations: Record<Language, ProjectTranslation[]> = {
  es: [
    {
      id: "proj-1",
      title: "Instalación Externa de Prumadas",
      category: "Infraestructura",
      location: "Tokio / Minato-ku",
      description: "Tendido, soporte y fijación aérea de cables alimentadores principales de alta capacidad y prumadas de distribución externa en fachadas comerciales.",
      image: "work_1.jpg",
      scope: [
        "Voltaje: Trifásico 200V / 400V",
        "Conductores: Cable CV 8sq / 14sq",
        "Equipo: Elevadora Nishio",
        "Padrão: Conformidad DENAN"
      ]
    },
    {
      id: "proj-2",
      title: "Tableros de Bomberos y Alarmas",
      category: "Sistemas",
      location: "Yokohama / Kanagawa",
      description: "Peinado, torqueado y conexionado técnico de disyuntores de protección en el cuadro de control eléctrico principal para bombas de hidrantes.",
      image: "work_2.png",
      scope: [
        "Tablero: Disyuntores y SPD",
        "Torque: Calibrado JIS C 2805",
        "Cables: Doble aislamiento",
        "Seguridad: 100% Homologado"
      ]
    },
    {
      id: "proj-3",
      title: "Iluminación Vial y de Áreas Comunes",
      category: "Iluminación",
      location: "Kawasaki / Kanagawa",
      description: "Retrofit completo a tecnología LED de alta potencia en reflectores y postes de iluminación en zonas de tránsito y estacionamientos externos.",
      image: "work_3.jpg",
      scope: [
        "Luminarias: LED IP66 Exterior",
        "Sensores: Fotocélula integrados",
        "Altura: 8 a 10 metros",
        "Ahorro: 60% Consumo Activo"
      ]
    },
    {
      id: "proj-4",
      title: "Canalizaciones Metálicas e Infraestructura",
      category: "Infraestructura",
      location: "Shibuya / Tokio",
      description: "Tendido de tuberías metálicas corrugadas flexibles y paso de cables de fuerza y control en el interior de tabiques de drywall.",
      image: "work_4.png",
      scope: [
        "Conductos: Metal flexible (FMS)",
        "Accesorios: Conexiones de latón",
        "Líneas: Aislamiento fuerza/señal",
        "Norma: Reglamento de Japón"
      ]
    },
    {
      id: "proj-5",
      title: "Infraestructura Industrial de Cableado",
      category: "Industrial",
      location: "Kawasaki / Kanagawa",
      description: "Montaje de canalizaciones metálicas suspendidas pesadas para distribución de cables de fuerza en galpón logístico comercial.",
      image: "work_5.png",
      scope: [
        "Soportes: Acero galvanizado pesado",
        "Distribución: Rota aérea limpia",
        "Carga Máxima: 120 kg/metro",
        "Uso: Fábricas y almacenes"
      ]
    },
    {
      id: "proj-6",
      title: "Instalación de Dispositivos de Diseño",
      category: "Comercial",
      location: "Tokio / Minato-ku",
      description: "Instalación final, conexionado y nivelación milimétrica a láser de apagadores, tomacorrientes y redes Cat6 en oficinas de alto estándar.",
      image: "work_6.png",
      scope: [
        "Diseño: Placas mate premium",
        "Pruebas: Continuidad e isolación",
        "Red: RJ45 Cat6 blindados",
        "Alineación: Nivelación a láser"
      ]
    }
  ],
  ja: [
    {
      id: "proj-1",
      title: "高所作業車幹線配線工事",
      category: "インフラ",
      location: "東京都港区",
      description: "商業ビルの外壁部における幹線ケーブル敷設および強靭な支持ルートの構築。高所リフトを用いた安全施工。",
      image: "work_1.jpg",
      scope: [
        "電圧: 三相 200V / 400V",
        "使用電線: 幹線 CV 8sq / 14sq",
        "高所機械: 西尾レントオール高所リフト",
        "安全規格: 電気用品安全法（DENAN）適合"
      ]
    },
    {
      id: "proj-2",
      title: "消火ポンプ・消火用結線盤",
      category: "防災設備",
      location: "神奈川県横浜市",
      description: "非常用消火用動力ポンプ制御盤内の二次端子圧着、整線、規定トルクによるネジ締め管理と受電試験の実施。",
      image: "work_2.png",
      scope: [
        "動力盤: 避雷器（SPD）搭載保護盤",
        "締付管理: JIS C 2805 規定トルク締付",
        "配線: 耐熱・難燃二重シース仕様",
        "点検: 消防検査適合・受電試験実施済"
      ]
    },
    {
      id: "proj-3",
      title: "高所街路灯LED化整備",
      category: "屋外照明",
      location: "神奈川県川崎市",
      description: "高所作業車を活用した街路灯・駐車場照明の水銀灯撤去および省エネ防水LED灯具へのリニューアル工事。",
      image: "work_3.jpg",
      scope: [
        "照明器具: 高効率防水LED IP66",
        "自動制御: 光電センサー自動点滅器連動",
        "高所作業: 屈折式高所リフト作業（8〜10m）",
        "効果: 消費電力約60%削減（水銀灯比）"
      ]
    },
    {
      id: "proj-4",
      title: "フレーム内二重壁金属配管",
      category: "配管インフラ",
      location: "東京都渋谷区",
      description: "オフィス間仕切りLGSフレーム内におけるフレキシブル金属電線管（プリカ）の曲げ配管および接地ボンド施工。",
      image: "work_4.png",
      scope: [
        "保護管: 二種金属製可とう電線管（プリカ）",
        "コネクタ: 接地ボンド付き亜鉛合金",
        "離隔要件: 弱電・強電の法令遵守離隔",
        "適合規程: 内線規程・電気設備技術基準"
      ]
    },
    {
      id: "proj-5",
      title: "工場内動力幹線設備",
      category: "工業用",
      location: "神奈川県川崎市",
      description: "倉庫・工場内の天井部における吊り全ネジ及び重量級金属製ケーブルラックの組み立てと強電幹線誘導配線。",
      image: "work_5.png",
      scope: [
        "支持金物: 溶融亜鉛めっき製重量ラック",
        "配線整理: 系統別仕切り板による整線布設",
        "耐荷重: 設計荷重最大120kg/m対応",
        "用途: 動力・制御用大容量メタルラック"
      ]
    },
    {
      id: "proj-6",
      title: "コンセント・スイッチ器具設置",
      category: "店舗・テナント",
      location: "東京都港区",
      description: "ハイエンドオフィス改装時の最終仕上がり工程。レーザー墨出し器によるミリ単位プレート水平垂直設置および検電確認。",
      image: "work_6.png",
      scope: [
        "デザイン: 艶消しマット仕上プレート",
        "検証: 絶縁抵抗試験・極性確認検電",
        "LAN用コネクタ: CAT6シールド付き端子",
        "取付精度: レーザー墨出し器による設置"
      ]
    }
  ],
  pt: [
    {
      id: "proj-1",
      title: "Instalação Externa de Prumadas",
      category: "Infraestrutura",
      location: "Tóquio / Minato-ku",
      description: "Passagem, fixação aérea e roteamento de cabos alimentadores principais em fachadas comerciais para distribuição de energia.",
      image: "work_1.jpg",
      scope: [
        "Voltagem: Trifásico 200V / 400V",
        "Cabos: CV 8sq / CV 14sq",
        "Equipamento: Plataforma Elevatória Nishio",
        "Padrão: Conformidade Técnica DENAN"
      ]
    },
    {
      id: "proj-2",
      title: "Fechamento de Quadro de Hidrantes",
      category: "Sistemas",
      location: "Yokohama / Kanagawa",
      description: "Organização interna, torqueamento dos conectores e fechamento do quadro de comando das bombas de hidrantes e alarmes.",
      image: "work_2.png",
      scope: [
        "Quadros: Disjuntores e DPS integrados",
        "Torque: Calibrado padrão JIS C 2805",
        "Cabos: Antichama com dupla isolação",
        "Segurança: Testado e homologado"
      ]
    },
    {
      id: "proj-3",
      title: "Manutenção de Iluminação Pública",
      category: "Iluminação",
      location: "Kawasaki / Kanagawa",
      description: "Substituição de antigas luminárias de descarga por tecnologia LED moderna de alta potência em áreas de trânsito externo.",
      image: "work_3.jpg",
      scope: [
        "Luminárias: Projetores LED IP66",
        "Automação: Fotocélula integrada",
        "Altura de Trabalho: 8 a 10 metros",
        "Economia: Redução de 60% no consumo"
      ]
    },
    {
      id: "proj-4",
      title: "Tubulações Metálicas em Drywall",
      category: "Infraestrutura",
      location: "Shibuya / Tóquio",
      description: "Instalação de eletrodutos metálicos flexíveis e passagem de cabos de força em estruturas de gesso acartonado.",
      image: "work_4.png",
      scope: [
        "Conduítes: Eletrodutos flexíveis metálicos",
        "Conectores: Latão com aterramento",
        "Fiação: Separação de redes força/sinal",
        "Regulação: Normas técnicas de energia"
      ]
    },
    {
      id: "proj-5",
      title: "Infraestrutura Industrial de Cabos",
      category: "Industrial",
      location: "Kawasaki / Kanagawa",
      description: "Instalação de rotas elevadas de eletrocalhas metálicas para suporte de circuitos elétricos industriais em galpão logístico.",
      image: "work_5.png",
      scope: [
        "Suportes: Aço galvanizado robusto",
        "Distribuição: Rota suspensa organizada",
        "Capacidade: Até 120 kg de cabos/metro",
        "Aplicação: Galpões e indústrias"
      ]
    },
    {
      id: "proj-6",
      title: "Instalação de Tomadas e Interruptores",
      category: "Comercial",
      location: "Tóquio / Minato-ku",
      description: "Fixação milimétrica, testes de polaridade e isolamento em interruptores e tomadas de embutir de design em escritórios corporativos.",
      image: "work_6.png",
      scope: [
        "Design: Placas minimalistas premium",
        "Testes: Isolamento e aterramento",
        "Rede: RJ45 Cat6 blindados para TI",
        "Acabamento: Nivelamento a laser"
      ]
    }
  ]
};
