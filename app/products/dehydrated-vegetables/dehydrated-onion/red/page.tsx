import React from "react";
import ProductDetailLayout from "../../../../../components/ProductDetailLayout";
import { products } from "../../../../../data/products";

export default function DehydratedRedOnionPage() {
  const productData = products.find(p => p.slug === "dehydrated-red-pink-onion");
  
  if (!productData) return null;

  const product = {
    ...productData,
    title: "Dehydrated Red Onion",
    detailedDesc: productData.detailedDesc.replace("red and pink", "red").replace("reddish-pink", "red"),
    specs: productData.specs.map(spec => spec.label === "Color" ? { ...spec, value: "Red" } : spec)
  };

  return (
    <ProductDetailLayout 
      product={product} 
      backUrl="/products/dehydrated-vegetables/dehydrated-onion"
      backLabel="Back to Dehydrated Onion"
    />
  );
}
