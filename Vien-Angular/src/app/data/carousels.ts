export interface ICarouselItem {
  id: string;
  title: string;
  img: string;
  detail: string;
  category: string;
  badges: string[];
}

export interface ICarouselImage {
  id: string;
  img: string;
}

export const carouselData: ICarouselItem[] = [
  {
    id: 'carousel-0',
    title: 'Homemade Cheesecake with Fresh Berries and Mint',
    img: '/assets/img/card-thumb-1.jpg',
    detail: '10.12.2019',
    category: 'Cupcakes',
    badges: ['NEW']
  },
  {
    id: 'carousel-1',
    title: 'Wedding Cake with Flowers Macarons and Blueberries',
    img: '/assets/img/card-thumb-2.jpg',
    detail: '10.06.2020',
    category: 'Cakes',
    badges: ['TRENDING']
  },
  {
    id: 'carousel-2',
    title: 'Cheesecake with Chocolate Cookies and Cream Biscuits',
    img: '/assets/img/card-thumb-3.jpg',
    detail: '03.01.2020',
    category: 'Cupcakes',
    badges: ['PROCESSED']
  },
  {
    id: 'carousel-3',
    title: 'Homemade Cheesecake with Dried Lemon on Top',
    img: '/assets/img/card-thumb-1.jpg',
    detail: '22.02.2020',
    category: 'Cakes',
    badges: ['']
  },
  {
    id: 'carousel-4',
    title: 'Cupcake with Cream Biscuit Bananas and Sour Cherry',
    img: '/assets/img/card-thumb-2.jpg',
    detail: '12.05.2020',
    category: 'Cakes',
    badges: ['DONE']
  }
];

export const carouselImages: ICarouselImage[] = [
  {
    id: 'large-0',
    img: '/assets/img/primary-1.png',
  },
  {
    id: 'large-1',
    img: '/assets/img/primary-2.png',
  },
  {
    id: 'large-2',
    img: '/assets/img/primary-3.png',
  },
];

export const carouselThumbs: ICarouselImage[] = [
  {
    id: 'large-0',
    img: '/assets/img/primary-1.png',
  },
  {
    id: 'large-1',
    img: '/assets/img/primary-2.png',
  },
  {
    id: 'large-2',
    img: '/assets/img/primary-3.png',
  },
];

