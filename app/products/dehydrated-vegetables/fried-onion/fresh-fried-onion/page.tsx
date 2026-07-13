import React from "react";
import ProductDetailLayout from "../../../../../components/ProductDetailLayout";
import { products } from "../../../../../data/products";

export default function FreshFriedOnionPage() {
  const product = products.find(p => p.slug === "fresh-fried-onion");

  if (!product) return null;

  return (
    <ProductDetailLayout 
      product={product} 
      backUrl="/products/dehydrated-vegetables/fried-onion"
      backLabel="Back to Fried Onion"
    />
  );
}
