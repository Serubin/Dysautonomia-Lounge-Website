import { metaDescription, title } from './data';

const images = [
  {
    url: 'https://dysautonomia.chat/banner-800-600.png',
    width: 800,
    height: 600,
    alt: 'Dysautonomia Lounge Banner',
  },
  {
    url: 'https://dysautonomia.chat/banner-600-400.png',
    width: 600,
    height: 400,
    alt: 'Dysautonomia Lounge Banner',
  }
];

const seo = {
  defaultTitle: `${title} - A Community for Dysautonomic Disorders`,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://dysautonomia.chat/',
    siteName: title,
    description: metaDescription,
    images,
  },
};

export default seo;