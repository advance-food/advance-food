import React from "react";
import ProductDetailLayout from "../../../../../components/ProductDetailLayout";
import { products } from "../../../../../data/products";

export default function DehydratedCarrotPage() {
  const product = products.find(p => p.slug === "dehydrated-carrot");

  if (!product) return null;

  return (
    <ProductDetailLayout 
      product={product} 
      backUrl="/products/dehydrated-vegetables/other-vegetables"
      backLabel="Back to Other Vegetables"
    />
  );
}
