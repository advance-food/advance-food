import React from "react";
import ProductDetailLayout from "../../../../../components/ProductDetailLayout";
import { products } from "../../../../../data/products";

export default function DehydratedPinkOnionPage() {
  const productData = products.find(p => p.slug === "dehydrated-red-pink-onion");
  
  if (!productData) return null;

  const product = {
    ...productData,
    title: "Dehydrated Pink Onion",
    image: "/images/products/pink-onion.jpeg",
    desc: productData.desc.replace("red onions", "pink onions"),
    detailedDesc: productData.detailedDesc.replace("red and pink", "pink").replace("reddish-pink", "pink"),
    specs: productData.specs.map(spec => spec.label === "Color" ? { ...spec, value: "Pink" } : spec)
  };

  return (
    <ProductDetailLayout 
      product={product} 
      backUrl="/products/dehydrated-vegetables/dehydrated-onion"
      backLabel="Back to Dehydrated Onion"
    />
  );
}
