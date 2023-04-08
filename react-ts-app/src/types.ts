export interface Product {
  brand: string;
  category: string;
  description: string;
  discountPercentage: number;
  id: number;
  images: Array<string>;
  price: number;
  ratimg: undefined;
  thumbnail: string;
  title: string;
}
export interface setModalContentValues {
  brand?: string;
  category?: string;
  description?: string;
  discountPercentage?: number;
  images?: Array<string>;
  price?: number;
  ratimg?: undefined;
  title?: string;
}

export default interface CardType {
  brand: string;
  category: string;
  description: string;
  discountPercentage: number;
  id: number;
  images: Array<string>;
  price: number;
  ratimg: undefined;
  thumbnail: string;
  title: string;
  setModalContent: ({}: setModalContentValues) => void;
  setModalActive: (value: boolean) => void;
}
export interface GET200_Products {
  products: Product[];
}

export interface CardContainerProps {
  products: Array<Product>;
}
