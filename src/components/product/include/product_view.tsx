"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import ProductDisplay from "./expand_card";
import BannerElevated from "./banner-elevated";
import { Title } from "@/components/common/title-comp";
import { fetchProducts } from "@/store/products";
import { productDetailsTreats } from "@/constants/meal-data";

export interface ProductDetailsProps {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  productImage?: string;
  nutritionValue?: string;
  route_link: string;
  ingredients: string[];
}

export default function ProductView() {
  const searchParams = useSearchParams();
  const scrollTo = searchParams.get("scrollTo");

  useEffect(() => {
    if (scrollTo) {
      const el = document.getElementById(scrollTo);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [scrollTo]);
  const [products, setProducts] = useState<ProductDetailsProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (error) {
        console.error("Error loading products:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadProducts();
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-700"></div>
      </div>
    );
  }

  // Split products into two columns
  const leftColumn = products.filter((_, i) => i % 2 === 0);
  const rightColumn = products.filter((_, i) => i % 2 !== 0);

  return (
    <section className="flex flex-col overflow-visible">
      <div className="flex flex-col mx-auto place-content-center items-center">
        <Title variant="h2" textStyle="primary" className="text-[#028391] leading-normal">
          Our Products
        </Title>
      </div>
      <div className="flex flex-row gap-12 px-4 md:px-0 pt-6 md:pt-12">
        <div className="flex flex-col gap-12 flex-1">
          {leftColumn.map((item, idx) => (
            <ProductDisplay key={idx} productDetails={item} />
          ))}
        </div>
        <div className="flex flex-col gap-12 flex-1">
          {rightColumn.map((item, idx) => (
            <ProductDisplay key={idx} productDetails={item} />
          ))}
        </div>
      </div>

      <div className="min-h-12" />

      <BannerElevated
        imgUrl="https://ik.imagekit.io/funlogic/pawfull/all_snacks-cut%20out%20.png?updatedAt=17457398316361351500517"
        value={
          "Treats Made with Fresh Ingredients with no added preservatives.\nMake snack time a healthy time for your pet babies."
        }
        borderColor="#e3ad6b"
        borderRadius="rounded-3xl"
        borderWidth="border-2"
        borderStyle="border-solid"
        imagePosition="right-0 bottom-[70px]"
        imageHide={false}
      />
      <div className="flex flex-col mx-auto place-content-center items-center" id="treatsec">
        <Title variant="h2" textStyle="primary" className={`text-[#028391] leading-normal`}>
          Fresh treats
        </Title>
      </div>
      <div className="flex flex-col md:flex-col-2 gap-8 py-4 md:py-12 mx-4 md:px-0">
        {productDetailsTreats.map((item: ProductDetailsProps, index: number) => (
          <ProductDisplay key={index} productDetails={item} />
        ))}
      </div>
    </section>
  );
}
