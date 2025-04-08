"use client";
import React, { useMemo, useState } from "react";
import DogMealPlan from "./includes/banner-2-grid";
import { useParams } from "next/navigation";
import { getProductById } from "@/store/services/mock/product_mock";
import { Product } from "@/store/interfaces/product";
import Marquee from "../common/marquee";
import ProductInfo from "./includes/product-info";
import ProductTestimonials from "../product/include/product_testimonials";

export default function ProductDetail() {
  const params = useParams();
  const id: any = params.id;

  //   const [product, setProduct] = useState<Product>();

  const product: Product | undefined = useMemo(() => {
    const data = getProductById(id);
    if (data) {
      return data;
    } else {
      console.error("Product not found");
    }
  }, [id]);

  return (
    <div className="flex flex-col pt-20 bg-[#FFF8EF]">
      {product ? (
        <>
          <DogMealPlan product={product} />
          <Marquee />
          <ProductInfo product={product} />
          <div className="min-h-12"></div>
          <div className="min-h-12"></div>
          <ProductTestimonials />
        </>
      ) : (
        <div></div>
      )}
    </div>
  );
}
