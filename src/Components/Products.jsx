import React from "react";
import useProducts from "../Hooks/useProducts";
import PlaceholderCards from "./PlaceholderCards";
import ProductCards from "./ProductCards";
import { useTranslation } from "react-i18next";

const Products = () => {
  const [products, loading] = useProducts();
  const { t } = useTranslation();

  return (
    <div className="container py-3">
      <h1>{t("hello", { USERNAME: "Eshmatjon" })}</h1>
      {loading ? <PlaceholderCards /> : <ProductCards products={products} />}
    </div>
  );
};

export default Products;
