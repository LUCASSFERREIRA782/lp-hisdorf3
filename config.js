/**
 * Configuração central do cliente.
 *
 * Para reutilizar este template, altere apenas os valores deste arquivo,
 * as imagens em assets/images e as variáveis de tema em css/variables.css.
 */
const siteConfig = {
  business: {
    name: 'Barbearia Hils Dorf',
    segment: 'Barbearia premium',
    slogan: 'Estilo, precisão e tradição em cada detalhe.',
    description:
      'Uma experiência de barbearia premium criada para quem valoriza cuidado, estilo e atendimento personalizado.',
    phone: '(11) 99420-1652',
    whatsapp: 'Wesley',
    email: 'contato@hilsdorf.com.br',
    address: 'Rua Exemplo, 123 - Centro, São Paulo - SP',
    mapsUrl: 'https://maps.google.com/',
    bookingUrl: 'https://www.boksy.com/',
    social: {
      instagram: 'https://www.instagram.com/',
      facebook: 'https://www.facebook.com/'
    }
  },

  navigation: [
    { label: 'Início', target: '#inicio' },
    { label: 'Sobre', target: '#sobre' },
    { label: 'Serviços', target: '#servicos' },
    { label: 'Galeria', target: '#galeria' },
    { label: 'Contato', target: '#contato' }
  ],

  hero: {
    eyebrow: 'Barbearia premium',
    title: 'Seu estilo merece atenção aos detalhes.',
    subtitle: 'Cortes, barba e cuidado masculino com excelência.',
    image: 'assets/images/hero-barbershop.jpg',
    primaryAction: 'Agendar pelo Boksy',
    secondaryAction: 'Falar no WhatsApp'
  },

  about: {
    title: 'Mais que um corte, uma experiência.',
    text: 'Unimos técnica, ambiente e atendimento para criar um momento exclusivo em cada visita.',
    image: 'assets/images/about-barbershop.jpg'
  },

  services: [
    {
      name: 'Corte masculino',
      description: 'Consultoria de estilo, corte personalizado e finalização impecável.',
      price: 'R$ 70',
      icon: '✦'
    },
    {
      name: 'Barba completa',
      description: 'Toalha quente, desenho preciso e cuidados para a pele.',
      price: 'R$ 55',
      icon: '✦'
    },
    {
      name: 'Corte + barba',
      description: 'A combinação ideal para renovar seu visual com praticidade.',
      price: 'R$ 115',
      icon: '✦'
    }
  ],

  differentials: [
    'Profissionais especializados',
    'Atendimento com hora marcada',
    'Ambiente confortável e exclusivo'
  ],

  gallery: [
    {
      src: 'assets/images/gallery-01.jpg',
      alt: 'Profissional realizando corte masculino'
    },
    {
      src: 'assets/images/gallery-02.jpg',
      alt: 'Detalhe de acabamento de barba'
    },
    {
      src: 'assets/images/gallery-03.jpg',
      alt: 'Interior da Barbearia Hils Dorf'
    }
  ],

  reviews: [
    {
      author: 'Carlos M.',
      text: 'Atendimento excelente, ambiente impecável e corte sempre preciso.',
      rating: 5
    },
    {
      author: 'Rafael S.',
      text: 'Profissionais atenciosos e uma experiência que vale cada visita.',
      rating: 5
    },
    {
      author: 'Bruno A.',
      text: 'Meu lugar de confiança para cuidar do visual.',
      rating: 5
    }
  ],

  hours: [
    { days: 'Segunda a sexta', hours: '09h às 20h' },
    { days: 'Sábado', hours: '09h às 18h' },
    { days: 'Domingo', hours: '10h às 15h' }
  ],

  whatsappMessage: 'Olá! Gostaria de agendar um horário na Barbearia Hils Dorf.'
};
