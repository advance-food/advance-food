import React from "react";
import ProductDetailLayout from "../../../../../components/ProductDetailLayout";
import { products } from "../../../../../data/products";

export default function DehydratedPinkOnionPage() {
  const productData = products.find(p => p.slug === "dehydrated-red-pink-onion");
  
  if (!productData) return null;

  const product = {
    ...productData,
    title: "Dehydrated Pink Onion"
  };

  return (
    <ProductDetailLayout 
      product={product} 
      backUrl="/products/dehydrated-vegetables/dehydrated-onion"
      backLabel="Back to Dehydrated Onion"
    />
  );
}
