import React from "react";
import ProductDetailLayout from "../../../../components/ProductDetailLayout";
import { spiceProducts } from "../../../../data/spiceProducts";
import { notFound } from "next/navigation";

export default function Page() {
  const product = spiceProducts.find(p => p.slug === "sesame-seeds");
  
  if (!product) {
    return notFound();
  }

  return (
    <ProductDetailLayout
      product={product}
      backUrl="/products/spices"
      backLabel="Back to Spices"
    />
  );
}
