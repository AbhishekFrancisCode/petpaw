import { Metadata } from "next";
import { TITLES } from "@/constants/title-constants";
import Product from "@/components/product/product";

export const metadata: Metadata = {
  title: TITLES.product
};

export default function ProductPage() {
  return (
    <div className="mx-auto">
      <Product />
    </div>
  );
}
