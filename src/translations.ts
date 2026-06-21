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
    brandTagline: "CONTRATACIÓN ELÉCTRICA ・ SISTEMAS DE ENERGÍA INTELIGENTE",
    menu: {
      home: "Inicio",
      services: "Servicios",
      standard: "Por Qué Elegirnos",
      about: "Sobre Mí",
      contact: "Contacto",
      ctaButton: "Solicitar Presupuesto",
    },
    complianceNotice: {
      registered: "Certificado de Contratista Registrado en Japón",
      division: "División de Ingeniería Especializada",
      iec: "Cumplimiento de normas IEC verificado",
      quality: "CALIDAD Y ARTESANÍA COMPROMETIDAS",
    },
    hero: {
      badge: "EXCLUSIVIDAD LUDEN • ELECTRICISTA PREMIUM",
      directives: "ELECTRICIDAD INDUSTRIAL, COMERCIAL Y RESIDENCIAL",
      engineeringBadge: "CONTRATISTA ELÉCTRICO LICENCIADO EN JAPÓN",
      headlineStart: "Soluciones Eléctricas Seguras y de",
      headlineHighlight: "Alta Calidad para su Hogar o Empresa",
      headlineEnd: "",
      tier: "Experiencia, Seguridad y Cumplimiento Total",
      subtitle: "Servicio técnico especializado y transparente enfocado en su seguridad, atendiendo directamente a Yokohama, Kohoku-ku y áreas vecinas.",
      ctaButton: "Solicitar Presupuesto Gratis",
      ctaSecondary: "Nuestros Servicios",
      ctaNote: "Diagnósticos rápidos programados con presupuestos transparentes",
      scrollCue: "LUDEN ELECTRICIDAD • EST. EN YOKOHAMA",
    },
    trust: {
      title: "¿Por qué elegirme?",
      subtitle: "ESTÁNDARES RIGUROSOS • RESPONSABILIDAD TOTAL EN JAPÓN",
      col1Title: "Contratista Registrado",
      col1Text: "Empresa registrada formalmente (Kojin Jigyo) en Japón, lo que garantiza una total responsabilidad de ingeniería, emisión de facturas legales y estricto cumplimiento de los códigos nacionales de seguridad.",
      col2Title: "Respuesta Local Rápida",
      col2Text: "Con sede en Nippa, Kohoku-ku, lo que garantiza una gran proximidad, tiempos de respuesta rápidos para llamadas de emergencia y visitas de inspección rápidas en Yokohama.",
      col3Title: "Transparencia del 100%",
      col3Text: "Presupuestos claros, detallados y desglosados de antemano. Sabrá exactamente qué tareas se necesitan y cuánto cuesta antes de comenzar cualquier cableado o perforación. Sin sorpresas.",
    },
    services: {
      titleStart: "Especialidades",
      titleHighlight: "Técnicas",
      subtitle: "INFRAESTRUCTURA ROBUSTA • CONEXIONES Y CABLEADO IMPECABLES",
    },
    about: {
      title: "Conozca a su Electricista de Confianza",
      text: "Hola, soy Vitor. Soy un contratista eléctrico independiente calificado, apasionado por ofrecer instalaciones eléctricas impecables y de alta fidelidad. Entiendo que la red eléctrica es el corazón esencial de cualquier propiedad. Mi compromiso inquebrantable es garantizar que su espacio residencial o comercial funcione con absoluta seguridad, eficiencia a largo plazo y cero fallas operativas.",
      tagline: "LUDEN ELECTRICIDAD • SERVICIO MULTILINGÜE DISPONIBLE EN PORTUGUÉS, JAPONÉS Y ESPAÑOL",
    },
    contact: {
      titleStart: "Solicite su",
      titleHighlight: "Presupuesto",
      subtitle: "Envíe un mensaje para solicitar una cita de diagnóstico técnico gratuita y sin compromiso",
      hotline: "Teléfono de Contacto Directo",
      division: "Correo Electrónico Profesional",
      consultation: "Área de Cobertura Principal",
      consultationDesc: "Yokohama (enfoque en Kohoku-ku, Nippa, Tsurumi) y ciudades vecinas del Gran Tokio.",
      nodeNetwork: "NÚCLEO LUDEN",
      infrastructureActive: "LICENCIA ACTIVA",
      operationsHQ: "Kohoku-ku, Yokohama",
      reliability: "FACTOR DE ESTABILIDAD: 100% CRÍTICO",
      aesEngaged: "ESTADO DEL CANAL SEGURO: ACTIVO",
      labelName: "Su Nombre Completo",
      placeholderName: "Ejemplo: Arthur Pendragon",
      labelEmail: "Su Correo Electrónico",
      placeholderEmail: "Ejemplo: arthur@luden-grid.jp",
      labelMessage: "Detalles del Proyecto y Servicios Solicitados",
      placeholderMessage: "Describa el problema eléctrico o la instalación de infraestructura que necesita (ej. actualización de panel, conexiones de disyuntores, tubería en losa, cableado en techo)...",
      transmitting: "Transmitiendo de forma segura a Vitor...",
      transmitButton: "Enviar Solicitud de Presupuesto",
      successTitle: "Solicitud de Presupuesto Registrada",
      successDesc: "Vitor revisará su mensaje de inmediato y se pondrá en contacto para programar una inspección técnica presencial priorizada y gratuita.",
      submitAnother: "Enviar otro mensaje",
    },
    modal: {
      engineeringTitle: "Sistemas de Precisión Luden",
      descriptionLabel: "Descripción del Servicio Seleccionado:",
      descriptionText: "Diseñado para ofrecer una vida útil excepcional, nuestro trabajo se enfoca en el cumplimiento estricto de las normas, enrutamiento físico limpio, conexiones robustas, materiales de alto rendimiento y estabilidad de voltaje activa.",
      scopeLabel: "Alcance del Trabajo Incluido:",
      callbackLabel: "Proporcione su número de teléfono para recibir una llamada prioritaria de Vitor:",
      phonePlaceholder: "Ejemplo: +81 90-1234-5678",
      callbackButton: "Solicitar Llamada Prioritaria",
      submittingStatus: "Registrando solicitud...",
      successTitle: "¡Llamada Registrada!",
      successDesc: "Vitor lo llamará directamente en breve para responder a sus preguntas técnicas.",
    },
    footer: {
      rights: "© 2026 Luden Co. Ltd. Todos los derechos reservados.",
      compliance: "Electricista Licenciado e Ingeniería de Infraestructura Homologada",
      backToTop: "Volver al inicio",
      privacy: "Política de Privacidad",
      contactInfo: "Información de Contacto",
      coverageTitle: "Área de Cobertura",
      coverageArea: "Yokohama (enfoque en Kohoku-ku) y alrededores",
    },
  },
  ja: {
    brandTagline: "電気設備設計工事 ・ 高級スマートエネルギーシステム",
    menu: {
      home: "ホーム",
      services: "施工技能",
      standard: "選ばれる理由",
      about: "代表挨拶",
      contact: "お問い合わせ",
      ctaButton: "見積り依頼",
    },
    complianceNotice: {
      registered: "登録電気工事業者登録：第20260408号",
      division: "高級電気設備設計 ・ DENKIYA",
      iec: "JIS・内線規程適合性完全実証済",
      quality: "安全第一・高精度電気工事施工管理",
    },
    hero: {
      badge: "LUDENクオリティ • 安全第一主義電気施工",
      directives: "産業用・商業用・住宅用電気工事技術基準適合",
      engineeringBadge: "国家一級電気技能管理・安心の有資格者施工",
      headlineStart: "ご家庭や企業に、安全で高品質な",
      headlineHighlight: "電気工事ソリューションを提供",
      headlineEnd: "",
      tier: "専門知識・徹底された透明性・完璧な施工品質",
      subtitle: "横浜市の港北区・都筑区・鶴見区を中心に、徹底した透明性、安全性、 tender提案で駆けつける安心の技術パートナー。",
      ctaButton: "無料お見積りを依頼する",
      ctaSecondary: "提供サービスを見る",
      ctaNote: "出張現地調査や見積もり相談は完全無料にて承ります",
      scrollCue: "LUDEN施工技術 • 横浜市港北区新羽町",
    },
    trust: {
      title: "LUDENが選ばれる3つの理由",
      subtitle: "確かな国家技能基準 • 完全な地域責任施工体制",
      col1Title: "登録電気工事業者",
      col1Text: "個人事業 (Kojin Jigyo) として完全登記済。責任ある有資格者による丁寧な実施工、領収書・請求書の発行、そして厳しい日本の電気安全法令基準に則った施工をお届けします。",
      col2Title: "地域密着・迅速な対応",
      col2Text: "横浜市港北区新羽町（Nippa）を本拠地とし、お急ぎのトラブル時や緊急 of 点検訪問にも、横浜市内どこへでも最善のルートにて迅速に急行いたします。",
      col3Title: "徹底した明瞭会計",
      col3Text: "事前の丁寧な現場調査に基づき、不要な項目を除いた分かりやすく精確な見積書をご提示。不明瞭な追加料金は一切発生いたしません。ご納得いただいてからの着手となります。",
    },
    services: {
      titleStart: "確かな施工",
      titleHighlight: "専門分野",
      subtitle: "強靭な下地インフラ配管からミリ単位の美緻なコンセント・器具仕上がりまで",
    },
    about: {
      title: "安心できる、あなたの専属電気工事士",
      text: "初めまして、ヴィトル（Vitor）です。私は卓越した配線技法と絶対的な安全性を追求する電気工事専門のプロフェッショナルです。電気配線は建物の心臓そのものであり、お客様の貴重な住宅や商業空間が、将来にわたり高い安全性と電力の安定性を保ã、安心して生活・営業できるよう誠意をもってサポートいたします。",
      tagline: "LUDEN（ルーデン）電気工事 • ポルトガル語、日本語、スペイン語でのお客様に合わせたシームレスなコミュニケーションが可能",
    },
    contact: {
      titleStart: "お見積り・",
      titleHighlight: "工事のご相談",
      subtitle: "ご質問や現地調査のご依頼など、どうぞお気軽にお問い合わせフォームからお送りください",
      hotline: "お電話・直接相談",
      division: "業務用公式メールアドレス",
      consultation: "対応サービスエリア",
      consultationDesc: "横浜市（港北区、都筑区、鶴見区、神奈川区、青葉区など全域）および神奈川県内・東京都隣接市区。",
      nodeNetwork: "LUDEN 基地",
      infrastructureActive: "有資格認証運転",
      operationsHQ: "横浜市港北区新羽町",
      reliability: "安定性管理: 100% 準拠安全",
      aesEngaged: "暗号化セキュアチャンネル接続",
      labelName: "お名前 (漢字・氏名)",
      placeholderName: "例: 山田 太郎",
      labelEmail: "メールアドレス",
      placeholderEmail: "例: yamada@luden-grid.jp",
      labelMessage: "工事内容・ご相談の詳細",
      placeholderMessage: "工事の具体的な箇所やご要望（例: コンセントの増設、分電盤の結線配線、新築スラブ内配管、オフィス照明の取り替え等）をご自由にご記入ください...",
      transmitting: "ヴィトル（Vitor）宛へ送信中...",
      transmitButton: "お問い合わせ内容を送信する",
      successTitle: "送信が完了いたしました",
      successDesc: "お問い合わせ誠にありがとうございます。内容を確認し、ヴィトル（Vitor）より24時間以内に折り返し現地調査もしくはご提案のご案内をさせていただきます。",
      submitAnother: "追加でメッセージを送信する",
    },
    modal: {
      engineeringTitle: "LUDEN電気工事・高基準仕様",
      descriptionLabel: "本施工技術の概要:",
      descriptionText: "将来の経年劣化を見据えた耐久設計。厳選された純銅線材、防湿・耐食に優れた合成樹脂および金属電線管、そして端子台への一糸乱れぬトルク接続により、完璧な電力品質と絶対的な安心を提供します。",
      scopeLabel: "標準に含まれる施工要件:",
      callbackLabel: "技術的な質問やスケジュールのご確認など、折り返し電話をご希望ですか？:",
      phonePlaceholder: "例: 090-1234-5678",
      callbackButton: "折り返し連絡を希望する",
      submittingStatus: "送信手続き中...",
      successTitle: "お電話の予約が完了しました",
      successDesc: "近日中にヴィトル（Vitor）が個別にご連絡し、技術要件をお伺いします。ありがとうございました。",
    },
    footer: {
      rights: "© 2026 LUDEN. All rights reserved.",
      compliance: "電気工事業者登録済・内線施工一級技能品質",
      backToTop: "トップへ戻る",
      privacy: "プライバシーポリシー",
      contactInfo: "ご連絡先",
      coverageTitle: "サービス提供エリア",
      coverageArea: "横浜市全域（港北区密着）および隣接周辺エリア",
    },
  },
  pt: {
    brandTagline: "CONTRATAÇÃO ELÉTRICA ・ SISTEMAS DE ENERGIA INTELIGENTE",
    menu: {
      home: "Início",
      services: "Serviços",
      standard: "Sobre Mim",
      about: "Eletricista",
      contact: "Contato",
      ctaButton: "Solicitar Orçamento",
    },
    complianceNotice: {
      registered: "Certificado de Empreiteiro Registrado no Japão",
      division: "Divisão de Engenharia de Instalações",
      iec: "Conformidade técnica com normas locais",
      quality: "QUALIDADE E TRABALHO DE ALTÍSSIMA PRECISÃO",
    },
    hero: {
      badge: "EXCLUSIVIDADE LUDEN • ELETRICISTA PROFISSIONAL NO JAPÃO",
      directives: "DIRETRIZES DE ENERGIA RESIDENCIAL, COMERCIAL E INDUSTRIAL",
      engineeringBadge: "EMPREITEIRO ELÉTRICO REGISTRADO E LICENCIADO NO JAPÃO",
      headlineStart: "Soluções Elétricas Seguras e de",
      headlineHighlight: "Alta Qualidade para sua Casa ou Empresa",
      headlineEnd: "",
      tier: "Presteza, Segurança e Transparência no Atendimento",
      subtitle: "Atendimento técnico especializado, transparente e focado na sua segurança, direto na região de Yokohama, Nippa e arredores.",
      ctaButton: "Solicitar Orçamento Gratuito",
      ctaSecondary: "Conhecer Nossos Serviços",
      ctaNote: "Consultas de diagnóstico agendadas rapidamente com total clareza",
      scrollCue: "LUDEN ELETRICIDADE • ESTABELECIDO EM YOKOHAMA",
    },
    trust: {
      title: "Por que me escolher?",
      subtitle: "MÁXIMA RESPONSABILIDADE • SERVIÇO AUTORREGULADO E INTEGRAL",
      col1Title: "Profissional Registrado",
      col1Text: "Empresa formalizada (Kojin Jigyo), garantindo responsabilidade técnica civil, emissão de notas fiscais e total cumprimento de todas as rigorosas normas e leis elétricas japonesas.",
      col2Title: "Atendimento Rápido e Local",
      col2Text: "Baseado em Nippa (Kohoku-ku), oferecendo grande agilidade no deslocamento para serviços urgentes, emergências técnicas e vistorias rápidas em toda a região de Yokohama.",
      col3Title: "Transparência Total",
      col3Text: "Orçamentos claros e detalhados. Você sabe exatamente o que precisa ser feito e o preço de cada etapa antes de qualquer fiação ou quebra começar. Sem taxas surpresas.",
    },
    services: {
      titleStart: "Nossos",
      titleHighlight: "Serviços",
      subtitle: "ESPECIALIDADES TÉCNICAS E SISTEMAS DE ALTO DESEMPENHO",
    },
    about: {
      title: "Conheça seu Eletricista de Confiança",
      text: "Olá, sou o Vitor. Sou um profissional autônomo apaixonado por entregar instalações elétricas impecáveis e altamente seguras. Entendo que a rede elétrica é o coração pulsante de qualquer imóvel, e o meu compromisso definitivo é garantir que sua casa ou comércio funcione com total segurança, eficiência de consumo e máxima durabilidade.",
      tagline: "LUDEN ELÉTRICA • SUPORTE EXCLUSIVO EM PORTUGUÊS, JAPONÊS E ESPANHOL PARA SUA COMODIDADE",
    },
    contact: {
      titleStart: "Solicite seu",
      titleHighlight: "Orçamento",
      subtitle: "Entre em contato agora mesmo para solicitar seu orçamento gratuito em Yokohama",
      hotline: "Telefone de Contato Direto",
      division: "E-mail Profissional",
      consultation: "Área de Cobertura Principal",
      consultationDesc: "Yokohama (com forte atuação em Kohoku-ku, Nippa, Tsurumi) e demais cidades vizinhas.",
      nodeNetwork: "RED LUDEN",
      infrastructureActive: "INFRAESTRUTURA ATIVA",
      operationsHQ: "Kohoku-ku, Yokohama",
      reliability: "QUALIDADE DE CONEXÃO: 100% DISPONÍVEL",
      aesEngaged: "CANAL ENCRIPTADO DE CONTATO",
      labelName: "Seu Nome Completo",
      placeholderName: "Ex: Vitor Silva",
      labelEmail: "Seu E-mail de Contato",
      placeholderEmail: "Ex: vitorsilva@luden.jp",
      labelMessage: "O que você precisa fazer no seu imóvel?",
      placeholderMessage: "Descreva de maneira simples os detalhes do serviço (ex: passagem de cabos tronco, novas tomadas, fechamento de quadro de luz, tubulações em lajes, etc)...",
      transmitting: "Enviando seus detalhes de obra para o Vitor...",
      transmitButton: "Enviar Solicitação de Orçamento",
      successTitle: "Solicitação Enviada com Sucesso!",
      successDesc: "O Vitor recebeu sua mensagem e entrará em contato em pouquíssimo tempo para tirar suas dúvidas e agendar sua vistoria in loco.",
      submitAnother: "Enviar outra mensagem",
    },
    modal: {
      engineeringTitle: "Sistemas de Precisão Luden",
      descriptionLabel: "Informações Técnicas do Serviço:",
      descriptionText: "Projetado e executado seguindo os padrões das maiores companhias de engenharia integradora. Usamos núcleos de cobre maciço, isolamentos duplos antichama e conexões robustas blindadas contra ruídos elétricos.",
      scopeLabel: "O que está incluído no escopo padrão:",
      callbackLabel: "Se preferir, deixe seu número para que eu te ligue diretamente:",
      phonePlaceholder: "Ex: 090-1234-5678",
      callbackButton: "Solicitar Ligação Direta",
      submittingStatus: "Salvando seu número...",
      successTitle: "Agendamento Efetuado!",
      successDesc: "O Vitor ligará para você diretamente em instantes no número informado.",
    },
    footer: {
      rights: "© 2026 Luden Co. Ltd. Todos os direitos reservados.",
      compliance: "Eletricista Credenciado no Japão • Instalação Homologada de Segurança",
      backToTop: "Voltar ao topo",
      privacy: "Política de Privacidade",
      contactInfo: "Contato Direto",
      coverageTitle: "Área de Cobertura",
      coverageArea: "Yokohama (foco em Kohoku-ku, Nippa) e distritos próximos",
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
      description: "Instalación estratégica de tuberías y conductos empotrados en cimientos de hormigón crudo. Preparación de la infraestructura central para nuevas construcciones, sirviendo a hogares, apartamentos, almacenes y fábricas.",
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
      description: "内装（壁紙・塗装）フィニッシュ段階での器具付け。トグルスイッチ、高級コンセントプレート、ダウンライト等のミリ単位の傾き・曲がりを排した設置、リフォーム時の安全解体取付を実施します。",
      image: "https://images.unsplash.com/photo-1618090584126-129cd1f3fbaa?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "panel-termination",
      title: "分電盤・動力盤結線処理 (電力盤結線)",
      description: "ご家庭の単相3線からビル向けの電気容量 of 幹線分配、圧着端子への規定トルクネジ締め、結線ルートの美緻な整線を行い、各サーキットブレーカーへの安全負荷分散接続を保証します。",
      image: "https://images.unsplash.com/photo-1621905252507-b354bc25edac?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "cable-racks",
      title: "ケーブルラック・盤据付 (ケーブルラック・盤の取り付け)",
      description: "ビルや大型店舗の天井部に支持用の全アンカー吊り具を取付け、重量ケーブル群を格納誘導する鋼製・アルミ製ラックの組み立て。頑固なキュービクル・分電盤ボックス本体の物理的固定を含みます。",
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
      description: "Instalação estratégica de tubulações e conduítes embutidos em fundações de concreto. Preparamos a infraestrutura base para novas construções, atendendo residências, condomínios, galpões e instalações de fábricas.",
      image: "https://images.unsplash.com/photo-1590069261209-f8e9b8642343?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "structural-wiring",
      title: "Cabeamento e Fiação Estrutural (天井・壁の配線)",
      description: "Passagem de fios em tetos e paredes na fase de obra (antes do fechamento com gesso/drywall). Trabalhamos com cabos de energia (VVF, CV) e também cabos de baixa tensão para alarmes de incêndio e sistemas de som.",
      image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "device-installation",
      title: "Instalação de Equipamentos (器具の取り付け)",
      description: "Fase de acabamento técnico. Realizamos a conexão final e fixação milimétrica de luminárias, tomadas e interruptores após o revestimento das paredes. Também executamos a remoção segura de equipamentos em obras de reforma.",
      image: "https://images.unsplash.com/photo-1618090584126-129cd1f3fbaa?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "panel-termination",
      title: "Fechamento de Quadros de Força (電力盤結線)",
      description: "Montagem, organização e ligação de cabos em quadros de distribuição e painéis de força. Garantimos conexões precisas desde redes convencionais até conexões de alta capacidade para painéis principais de grande porte.",
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
