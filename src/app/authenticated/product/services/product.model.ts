export interface Product {
  id: string;
  title: string;
  purchasePrice: number;
  salePrice: number;
  stock: number;
  brand?: string;
  model?: string;
  productCode?: string;
}
