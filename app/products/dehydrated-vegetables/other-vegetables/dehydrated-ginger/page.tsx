import React from "react";
import ProductDetailLayout from "../../../../../components/ProductDetailLayout";
import { products } from "../../../../../data/products";

export default function DehydratedGingerPage() {
  const product = products.find(p => p.slug === "dehydrated-ginger");

  if (!product) return null;

  return (
    <ProductDetailLayout 
      product={product} 
      backUrl="/products/dehydrated-vegetables/other-vegetables"
      backLabel="Back to Other Vegetables"
    />
  );
}
