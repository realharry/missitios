export interface Business {
  id: string
  name: string
  description: string
  website: string
  category: string
  location: string
  image: string
  featured: boolean
  tags: string[]
}

export const businesses: Business[] = [
  {
    id: '1',
    name: 'Café La Roma',
    description: 'Café artesanal y panadería tradicional en el corazón de la Roma Norte. Ofrecemos los mejores granos de café mexicano tostados diariamente.',
    website: 'https://cafelaroma.mx',
    category: 'Restaurantes',
    location: 'Roma Norte, CDMX',
    image: '/placeholder-cafe.jpg',
    featured: true,
    tags: ['café', 'panadería', 'artesanal', 'roma norte']
  },
  {
    id: '2',
    name: 'Librería Gandhi',
    description: 'La librería más emblemática de México con una amplia selección de libros en español e inglés, eventos culturales y café literario.',
    website: 'https://gandhi.com.mx',
    category: 'Cultura',
    location: 'Polanco, CDMX',
    image: '/placeholder-books.jpg',
    featured: true,
    tags: ['libros', 'cultura', 'eventos', 'polanco']
  },
  {
    id: '3',
    name: 'Taquería El Fogoncito',
    description: 'Auténtica comida mexicana desde 1962. Los mejores tacos al pastor y guisados tradicionales de la Ciudad de México.',
    website: 'https://elfogoncito.com',
    category: 'Restaurantes',
    location: 'Centro Histórico, CDMX',
    image: '/placeholder-tacos.jpg',
    featured: false,
    tags: ['tacos', 'comida mexicana', 'tradicional', 'centro histórico']
  },
  {
    id: '4',
    name: 'Boutique Frida',
    description: 'Moda mexicana contemporánea inspirada en nuestras tradiciones. Piezas únicas diseñadas por artesanos locales.',
    website: 'https://boutiquefrida.mx',
    category: 'Moda',
    location: 'Coyoacán, CDMX',
    image: '/placeholder-fashion.jpg',
    featured: true,
    tags: ['moda', 'diseño mexicano', 'artesanías', 'coyoacán']
  },
  {
    id: '5',
    name: 'Mezcalería Los Amantes',
    description: 'Bar especializado en mezcales artesanales de Oaxaca. Ambiente auténtico con música en vivo los fines de semana.',
    website: 'https://losamantesmezcal.mx',
    category: 'Bares',
    location: 'Condesa, CDMX',
    image: '/placeholder-bar.jpg',
    featured: false,
    tags: ['mezcal', 'bar', 'música en vivo', 'condesa']
  },
  {
    id: '6',
    name: 'Estudio Yoga Namaste',
    description: 'Centro de bienestar integral con clases de yoga, meditación y terapias alternativas en un ambiente zen.',
    website: 'https://yoganamaste.mx',
    category: 'Bienestar',
    location: 'Del Valle, CDMX',
    image: '/placeholder-yoga.jpg',
    featured: false,
    tags: ['yoga', 'meditación', 'bienestar', 'del valle']
  },
  {
    id: '7',
    name: 'Flores Xochimilco',
    description: 'Floristería tradicional con arreglos únicos y plantas ornamentales. Servicios para eventos especiales y bodas.',
    website: 'https://floresxochimilco.mx',
    category: 'Servicios',
    location: 'Xochimilco, CDMX',
    image: '/placeholder-flowers.jpg',
    featured: true,
    tags: ['flores', 'plantas', 'eventos', 'bodas', 'xochimilco']
  },
  {
    id: '8',
    name: 'Tech Solutions CDMX',
    description: 'Desarrollo de software y consultoría tecnológica para empresas. Especialistas en aplicaciones web y móviles.',
    website: 'https://techsolutionscdmx.com',
    category: 'Tecnología',
    location: 'Santa Fe, CDMX',
    image: '/placeholder-tech.jpg',
    featured: false,
    tags: ['tecnología', 'software', 'desarrollo web', 'santa fe']
  }
]

export const categories = [
  'Todos',
  'Restaurantes',
  'Cultura',
  'Moda',
  'Bares',
  'Bienestar',
  'Servicios',
  'Tecnología'
]