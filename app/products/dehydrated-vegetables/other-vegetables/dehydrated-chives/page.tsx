import React from "react";
import ProductDetailLayout from "../../../../../components/ProductDetailLayout";
import { products } from "../../../../../data/products";

export default function DehydratedChivesPage() {
  const product = products.find(p => p.slug === "dehydrated-chives");

  if (!product) return null;

  return (
    <ProductDetailLayout 
      product={product} 
      backUrl="/products/dehydrated-vegetables/other-vegetables"
      backLabel="Back to Other Vegetables"
    />
  );
}
