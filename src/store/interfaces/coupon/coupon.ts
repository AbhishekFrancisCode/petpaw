export interface Cupon {
  data: CuponData;
  message: string;
  error?: string;
}

export interface CuponData {
  amount: number;
  apply: string;
  coupon_name: string;
}
