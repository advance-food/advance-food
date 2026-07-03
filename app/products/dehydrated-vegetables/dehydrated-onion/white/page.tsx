import React from "react";
import ProductDetailLayout from "../../../../../components/ProductDetailLayout";
import { products } from "../../../../../data/products";

export default function DehydratedWhiteOnionPage() {
  const product = products.find(p => p.slug === "dehydrated-white-onion");

  if (!product) return null;

  return (
    <ProductDetailLayout 
      product={product} 
      backUrl="/products/dehydrated-vegetables/dehydrated-onion"
      backLabel="Back to Dehydrated Onion"
    />
  );
}
