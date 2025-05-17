"use client";
import React, { useMemo } from "react";
import DogMealPlan from "./includes/banner-2-grid";
import { useParams } from "next/navigation";
import { getProductById } from "@/store/services/mock/product_mock";
import { Product } from "@/store/interfaces/product";
import Marquee from "../common/marquee";
import ProductInfo from "./includes/product-info";
import ProductTestimonials from "../product/include/product_testimonials";
import TempletGridSmall from "../common/section-templets/templet-grid-small";

export default function ProductDetail() {
  const params = useParams();
  const id: any = params.id;

  const product: Product | undefined = useMemo(() => {
    const data = getProductById(id);
    if (data) {
      return data;
    } else {
      console.error("Product not found");
      return undefined;
    }
  }, [id]);

  return (
    <div className="flex flex-col pt-20 bg-[#FFF8EF] min-h-screen">
      {product ? (
        <>
          <DogMealPlan product={product} />
          <Marquee />
          <ProductInfo product={product} />
          <div className="min-h-12"></div>
          <TempletGridSmall />
          <div className="min-h-12"></div>
          <ProductTestimonials />
        </>
      ) : (
        <div className="flex justify-center items-center h-96 text-lg text-gray-500">
          No data found for this product.
        </div>
      )}
    </div>
  );
}
