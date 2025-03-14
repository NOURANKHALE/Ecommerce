import { product } from "./products";
export interface ProductCardProps {
    product: product;
    cardWidth?: string; 
    imageHeight?: string;
    showFooter?: boolean; 
  }