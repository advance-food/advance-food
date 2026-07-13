import React from "react";
import ProductDetailLayout from "../../../../components/ProductDetailLayout";
import { products } from "../../../../data/products";

export default function DehydratedGarlicPage() {
  const product = products.find(p => p.slug === "dehydrated-garlic");

  if (!product) return null;

  return (
    <ProductDetailLayout 
      product={product} 
      backUrl="/products/dehydrated-vegetables"
      backLabel="Back to Dehydrated Vegetables"
    />
  );
}
