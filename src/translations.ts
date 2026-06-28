export type Language = "es" | "ja" | "pt";

export interface ServiceTranslation {
  id: string;
  title: string;
  description: string;
  image: string;
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
    },
    complianceNotice: {
      registered: "Registro de Empresa: N° T7010401165137",
      division: "Ingeniería de Instalaciones Eléctricas e Interiores",
      iec: "Cumplimiento de normativas técnicas verificado",
      quality: "CALIDAD DE INSTALACIÓN Y ARTESANÍA DE MÁXIMA PRECISIÓN",
    },
    hero: {
      badge: "EXCLUSIVIDAD LUDEN • INGENIERÍA ELÉCTRICA PROFESIONAL EN JAPÓN",
      directives: "DIRECTRICES PARA APARTAMENTOS, FÁBRICAS Y LOCALES COMERCIALES",
      engineeringBadge: "CONTRATISTA ELÉCTRICO LICENCIADO EN TOKIO, JAPÓN",
      headlineStart: "Soluciones Eléctricas Seguras y de",
      headlineHighlight: "Alto Rendimiento para Empresas y Condominios",
      headlineEnd: "",
      tier: "Experiencia, Seguridad y Cumplimiento de Plazos",
      subtitle: "Servicio técnico especializado y transparente enfocado en su seguridad y estabilidad energética, operando en Tokio, Kanagawa y áreas vecinas.",
      ctaButton: "Solicitar Presupuesto Gratis",
      ctaSecondary: "Nuestros Servicios",
      ctaNote: "Diagnósticos técnicos rápidos programados con total claridad",
      scrollCue: "LUDEN ELECTRICIDAD • EST. EN TOKIO",
    },
    trust: {
      title: "¿Por qué elegir a LUDEN?",
      subtitle: "ESTÁNDARES RIGUROSOS • RESPONSABILIDAD CORPORATIVA TOTAL EN JAPÓN",
      col1Title: "Corporación Registrada",
      col1Text: "LUDEN Co., Ltd. es una empresa legalmente registrada en Japón (N° T7010401165137), lo que garantiza una total responsabilidad de ingeniería, emisión de facturas comerciales e impositivas (Invoice) y estricto cumplimiento de los códigos de seguridad.",
      col2Title: "Sede en Minato-ku, Tokio",
      col2Text: "Con sede en Kaigan, Minato-ku, lo que nos permite un despliegue ágil, tiempos de respuesta rápidos y visitas técnicas prioritarias en toda el área metropolitana de Tokio y la prefectura de Kanagawa.",
      col3Title: "Transparencia del 100%",
      col3Text: "Ofrecemos presupuestos detallados y desglosados de antemano para proyectos comerciales e industriales de cualquier escala. Sabrá exactamente los costos antes de iniciar la instalación. Sin sorpresas.",
    },
    services: {
      titleStart: "Especialidades",
      titleHighlight: "Técnicas",
      subtitle: "INFRAESTRUCTURA ROBUSTA • CONEXIONES Y CABLEADO IMPECABLES",
    },
    about: {
      title: "Sobre Nosotros",
      text: "LUDEN Co., Ltd. (representada por Luis Matsuoka) es una empresa de ingeniería eléctrica con sede en Minato-ku, Tokio. Nos especializamos en el diseño, instalación y mantenimiento de infraestructura eléctrica para condominios (apartamentos), fábricas y locales comerciales (inquilinos), además de obras de interiores. Nos comprometemos a entregar soluciones de alta fidelidad que garanticen la máxima seguridad, eficiencia energética y durabilidad de las instalaciones.",
      tagline: "LUDEN INGENIERÍA • SOPORTE MULTILÍNGUE DISPONIBLE EN PORTUGUÉS, JAPONÉS Y ESPAÑOL",
    },
    contact: {
      titleStart: "Solicite su",
      titleHighlight: "Presupuesto",
      subtitle: "Envíe un mensaje para solicitar una cita de diagnóstico técnico o cotización para su condominio, fábrica o local comercial",
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
      placeholderMessage: "Describa la instalación o renovación que necesita (ej. cableado de bandeja, actualización de tableros de disyuntores, tendido de cables principales, remodelación de oficinas, etc)...",
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
      compliance: "Corporación Eléctrica Registrada en Japón • Licencia T7010401165137",
      backToTop: "Volver al inicio",
      privacy: "Política de Privacidad",
      contactInfo: "Información de Contacto",
      coverageTitle: "Área de Cobertura",
      coverageArea: "Tokio (sede en Minato-ku) y Kanagawa",
    },
  },
  ja: {
    brandTagline: "電気設備設計工事 ・ マンション・工場・テナント電気工事",
    menu: {
      home: "ホーム",
      services: "施工技能",
      standard: "選ばれる理由",
      about: "会社案内",
      contact: "お問い合わせ",
      ctaButton: "見積り依頼",
    },
    complianceNotice: {
      registered: "登録番号 : T7010401165137",
      division: "電気設備工事・内装工事",
      iec: "電気設備技術基準・内線規程完全適合",
      quality: "安全第一・高精度電気工事施工管理",
    },
    hero: {
      badge: "LUDENクオリティ • 安全第一主義電気施工",
      directives: "マンション・工場・テナント設備設計施工",
      engineeringBadge: "株式会社LUDEN ・ 東京都港区拠点",
      headlineStart: "マンションや工場の、安全で高品質な",
      headlineHighlight: "電気設備工事ソリューションを提供",
      headlineEnd: "",
      tier: "専門知識・徹底された透明性・完璧な施工品質",
      subtitle: "東京都港区を拠点に、マンション、工場、テナントビル等の電気設備工事・内装工事を施工。安全性と安定供給に特化した技術パートナー。",
      ctaButton: "無料お見積りを依頼する",
      ctaSecondary: "提供サービスを見る",
      ctaNote: "出張現地調査や見積もり相談は完全無料にて承ります",
      scrollCue: "LUDEN施工技術 • 東京都港区海岸",
    },
    trust: {
      title: "LUDENが選ばres 3つの理由",
      subtitle: "確かな法人技術規格 • 東京・神奈川エリア完全責任施工",
      col1Title: "安心の法人組織",
      col1Text: "株式会社LUDENは、国税庁に登記済みの安心の法人組織です（登録番号: T7010401165137）。信頼の施工体制、適格請求書（インボイス）の発行、日本の電気安全法令に則った誠実な責任施工をお届けします。",
      col2Title: "東京都港区拠点・機動的な対応",
      col2Text: "東京都港区海岸に本社を置き、港区を中心とした都内近郊、神奈川県内（横浜・川崎など）へ迅速に急行。現場調査や緊急時の点検・電気トラブルにもスピーディに対応いたします。",
      col3Title: "徹底した明瞭会計",
      col3Text: "事前現場調査に基づき、マンション改修、工場設備、テナント改装等の精確な御見積書をご提示。法人案件における明瞭な予算管理をサポートいたします。",
    },
    services: {
      titleStart: "確かな施工",
      titleHighlight: "専門分野",
      subtitle: "強靭な下地インフラ配管からミリ単位の美緻なコンセント・器具仕上がりまで",
    },
    about: {
      title: "会社案内",
      text: "株式会社LUDEN（代表取締役 松岡ルイス）は、東京都港区に拠点を置く電気工事の専門集団です。マンション、工場、商業テナント施設などの電気設備工事および店舗等の内装工事を主力業務としており、東京都や神奈川県エリアを中心に活動しています。確かな技術力と法令遵守の姿勢で、長きにわたり安全で効率的なインフラ環境を構築いたします。",
      tagline: "株式会社LUDEN • 日本語、ポルトガル語、スペイン語でのシームレスなコミュニケーションに対応",
    },
    contact: {
      titleStart: "お見積り・",
      titleHighlight: "工事のご相談",
      subtitle: "マンション改修、工場電気設備、テナント内装工事のお見積りや現地調査のご相談など、お気軽にお問い合わせください",
      hotline: "代表直通電話",
      division: "公式メールアドレス",
      consultation: "主な対応エリア",
      consultationDesc: "東京都（港区中心・都内全域）、神奈川県（横浜・川崎含む県内全域）。",
      nodeNetwork: "LUDEN 基地",
      infrastructureActive: "有資格認証運転",
      operationsHQ: "東京都港区海岸",
      reliability: "安定性管理: 100% 準拠安全",
      aesEngaged: "暗号化セキュアチャンネル接続",
      labelName: "お名前 (漢字・氏名)",
      placeholderName: "例: 山田 太郎",
      labelEmail: "メールアドレス",
      placeholderEmail: "例: yamada@luden-ele.com",
      labelMessage: "工事内容・ご相談の詳細",
      placeholderMessage: "工事の具体的な箇所やご要望（例: 幹線引き込み、分電盤・ブレーカー結線、スラブ内配管、テナント内装照明、オフィス改修等）をご自由にご記入ください...",
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
      compliance: "登録電気工事業者・内線施工一級技能品質",
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
      standard: "Sobre Nós",
      about: "Sobre Nós",
      contact: "Contato",
      ctaButton: "Solicitar Orçamento",
    },
    complianceNotice: {
      registered: "Registro Corporativo: N° T7010401165137",
      division: "Divisão de Instalações Elétricas e Interiores",
      iec: "Conformidade com regulamentações técnicas locais",
      quality: "QUALIDADE E TRABALHO DE ENGENHARIA DE ALTÍSSIMA PRECISÃO",
    },
    hero: {
      badge: "EXCLUSIVIDADE LUDEN • ENGENHARIA ELÉTRICA PROFISSIONAL NO JAPÃO",
      directives: "DIRETRIZES DE ENERGIA PARA APARTAMENTOS, FÁBRICAS E COMÉRCIO",
      engineeringBadge: "EMPRESA ELÉTRICA REGISTRADA E LICENCIADA EM TÓQUIO",
      headlineStart: "Instalações Elétricas de",
      headlineHighlight: "Alto Desempenho para Empresas e Condomínios",
      headlineEnd: "",
      tier: "Presteza, Segurança e Transparência no Atendimento",
      subtitle: "Serviço técnico de engenharia focado em segurança e estabilidade energética, atendendo diretamente a Tóquio, Kanagawa e áreas vizinhas.",
      ctaButton: "Solicitar Orçamento Gratuito",
      ctaSecondary: "Conhecer Nossos Serviços",
      ctaNote: "Consultas técnicas agendadas rapidamente com total clareza",
      scrollCue: "LUDEN ELETRICIDADE • ESTABELECIDO EM TÓQUIO",
    },
    trust: {
      title: "Por que escolher a LUDEN?",
      subtitle: "MÁXIMA RESPONSABILIDADE • ORGANIZAÇÃO CORPORATIVA E INTEGRAL",
      col1Title: "Corporação Registrada",
      col1Text: "A LUDEN Co., Ltd. é uma empresa de engenharia elétrica legalmente registrada no Japão (N° T7010401165137), garantindo responsabilidade técnica civil, emissão de notas fiscais comerciais e cumprimento de todas as leis elétricas nacionais.",
      col2Title: "Sede em Minato-ku, Tóquio",
      col2Text: "Baseados em Kaigan, Minato-ku, oferecendo grande agilidade no deslocamento, vistorias técnicas prioritárias e visitas rápidas em toda a região de Tóquio e província de Kanagawa.",
      col3Title: "Transparência Total",
      col3Text: "Orçamentos claros e detalhados prévios para obras comerciais ou industriais. Você sabe exatamente o custo de cada etapa e serviço antes de qualquer instalação começar. Sem surpresas.",
    },
    services: {
      titleStart: "Nossos",
      titleHighlight: "Serviços",
      subtitle: "ESPECIALIDADES TÉCNICAS E SISTEMAS DE ALTO DESEMPENHO",
    },
    about: {
      title: "Sobre Nós",
      text: "A LUDEN Co., Ltd. (representada por Luis Matsuoka) é uma empresa de engenharia elétrica com sede em Minato-ku, Tóquio. Especializamo-nos no projeto, instalação e manutenção de infraestrutura elétrica para condomínios (apartamentos), fábricas e estabelecimentos comerciais (inquilinos), além de reformas de interiores. Nosso compromisso é entregar soluções de alta fidelidade que garantam segurança operacional, eficiência de consumo e máxima durabilidade.",
      tagline: "LUDEN ENGENHARIA • SUPORTE EXCLUSIVO EM PORTUGUÊS, JAPONÊS E ESPANHOL PARA SUA COMODIDADE",
    },
    contact: {
      titleStart: "Solicite seu",
      titleHighlight: "Orçamento",
      subtitle: "Entre em contato para agendar uma vistoria técnica ou orçamento para seu condomínio, fábrica ou estabelecimento comercial",
      hotline: "Linha Direta (Representante)",
      division: "E-mail Corporativo",
      consultation: "Área de Cobertura Principal",
      consultationDesc: "Tóquio (sede em Minato-ku) e toda a província de Kanagawa (incluindo Yokohama e Kawasaki).",
      nodeNetwork: "RED LUDEN",
      infrastructureActive: "LICENÇA CORPORATIVA ATIVA",
      operationsHQ: "Minato-ku, Tóquio",
      reliability: "QUALIDADE DE CONEXÃO: 100% DISPONÍVEL",
      aesEngaged: "CANAL ENCRIPTADO DE CONTATO",
      labelName: "Nome Completo",
      placeholderName: "Ex: Luis Matsuoka",
      labelEmail: "E-mail Corporativo de Contato",
      placeholderEmail: "Ex: contato@luden-ele.com",
      labelMessage: "O que você precisa fazer no seu imóvel?",
      placeholderMessage: "Descreva os detalhes do serviço (ex: passagem de cabos tronco, fechamento de quadro de força, tubulações em lajes, reforma de escritórios, infraestrutura para inquilinos, etc)...",
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
      image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "concrete-slab",
      title: "Tubería y Cableado en Losas (スラブ配管・配線)",
      description: "Instalación estratégica de tuberías y conductos empotrados en cimientos de hormigón crudo. Preparación de la infraestructura central para nuevas construcciones, sirviendo a apartamentos, almacenes y fábricas.",
      image: "https://images.unsplash.com/photo-1590069261209-f8e9b8642343?auto=format&fit=crop&w=600&q=80"
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
      image: "https://images.unsplash.com/photo-1618090584126-129cd1f3fbaa?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "panel-termination",
      title: "Paneles de Fuerza y Terminales (電力盤結線)",
      description: "Estructuración, peinado y conexión de baja impedancia de alimentadores de distribución principal a tableros y disyuntores. Garantizando una disipación de calor limpia, pruebas de torque y balanceo de carga estructurado.",
      image: "https://images.unsplash.com/photo-1621905252507-b354bc25edac?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "cable-racks",
      title: "Soportes de Cables y Bandejas Pesadas (ケーブルラック・盤取り付け)",
      description: "Fijación de anclajes al techo y montaje de bandejas portacables de acero de alta capacidad. Incluye la instalación robusta de cajas de distribución industrial, sistemas disyuntores pesados y rutas seguras.",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=600&q=80"
    }
  ],
  ja: [
    {
      id: "cable-trunking",
      title: "幹線引きこみ・電力配線 (幹線引き)",
      description: "高圧・幹線受電設備の電気室への引き込み、長距離や多層階にまたがる太物ケーブル敷設を行います。パワーボール等のパワー引き込み機を使用し、安全かつ完璧に布設管理します。",
      image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "concrete-slab",
      title: "コンクリートスラブ配管工事 (スラブ配管・配線)",
      description: "マンション・戸建・倉庫の生コンクリート打設前の鉄筋組に、PF管やCD管などの埋込電線管を戦略的に配管・立ち上げ固定を行い、構造体一体の下地施工を頑強に実施します。",
      image: "https://images.unsplash.com/photo-1590069261209-f8e9b8642343?auto=format&fit=crop&w=600&q=80"
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
      image: "https://images.unsplash.com/photo-1618090584126-129cd1f3fbaa?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "panel-termination",
      title: "分電盤・動力盤結線処理 (電力盤結線)",
      description: "低圧から高圧幹線受電盤、幹線分配、圧着端子への規定トルクネジ締め、結線ルートの美緻な整線を行い、各サーキットブレーカーへの安全負荷分散接続を保証します。",
      image: "https://images.unsplash.com/photo-1621905252507-b354bc25edac?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "cable-racks",
      title: "ケーブルラック・盤据付 (ケーブルラック・盤の取り付け)",
      description: "ビルや大型店舗の天井部に支持用の全アンカー吊り具を取付け、重量ケーブル群を格納誘導する鋼製・アルミ製ラックの組み立て。頑固な分電盤ボックス本体の物理的固定を含みます。",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=600&q=80"
    }
  ],
  pt: [
    {
      id: "cable-trunking",
      title: "Lançamento de Cabos Tronco (幹線引き)",
      description: "Passagem e estruturação de cabos principais para salas elétricas. Executamos roteamentos complexos, tanto horizontais quanto verticais entre andares, utilizando equipamentos de tração (power balls) para longas distâncias com total segurança.",
      image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "concrete-slab",
      title: "Tubulação e Fiação em Lajes (スラブ配管・配線)",
      description: "Instalação estratégica de tubulações e conduítes embutidos em fundações de concreto. Preparamos a infraestrutura base para novas construções, atendendo apartamentos, condomínios, galpões e instalações de fábricas.",
      image: "https://images.unsplash.com/photo-1590069261209-f8e9b8642343?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "structural-wiring",
      title: "Cabeamento e Fiação Estrutural (天井・壁 de 配線)",
      description: "Passagem de fios em tetos e paredes na fase de obra (antes do fechamento com gesso/drywall). Trabalhamos com cabos de energia (VVF, CV) e também cabos de baixa tensão para alarmes de incêndio e sistemas de automação.",
      image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "device-installation",
      title: "Instalação de Equipamentos (器具の取り付け)",
      description: "Fase de acabamento técnico. Realizamos a conexão final e fixação milimétrica de luminárias, tomadas e interruptores após o revestimento das paredes. Também executamos a remoção segura de equipamentos em reformas de escritórios e lojas.",
      image: "https://images.unsplash.com/photo-1618090584126-129cd1f3fbaa?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "panel-termination",
      title: "Fechamento de Quadros de Força (電力盤結線)",
      description: "Montagem, organização e ligação de cabos em quadros de distribuição e painéis de força. Garantimos conexões precisas desde redes convencionais até conexões de alta capacidade para painéis industriais de grande porte.",
      image: "https://images.unsplash.com/photo-1621905252507-b354bc25edac?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "cable-racks",
      title: "Montagem de Eletrocalhas e Painéis (ケーブルラック・盤の取り付け)",
      description: "Fixação de ancoragens no teto e montagem completa de rotas de eletrocalhas (cable racks) para organização industrial. Executamos também a instalação física de quadros de distribuição e disjuntores robustos.",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=600&q=80"
    }
  ]
};

export const projectTranslations: Record<Language, any[]> = {
  es: [],
  ja: [],
  pt: []
};
