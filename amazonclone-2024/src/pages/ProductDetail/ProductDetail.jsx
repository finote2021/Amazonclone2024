import React, { useEffect, useState } from "react";
import classes from "./ProductDetail.module.css";
import Layout from "../../Components/Layout/Layout";
import { useParams } from "react-router-dom";
import axios from "axios";
import { ProductUrl } from "../../Api/endPoints";
import ProductCard from "../../Components/Product/ProductCard";

function ProductDetail() {
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const { productId } = useParams();

  useEffect(() => {
    axios
      .get(`${ProductUrl}/products/${productId}`)
      .then((res) => {
        console.log("API Response:", res.data);
        setProduct(res.data);
      })
      .catch((err) => {
        console.error("API Error:", err);
        setError(err.message);
      });
  }, [productId]);

  console.log("Product State:", product);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <Layout>
      <ProductCard product={product} />
    </Layout>
  );
}

export default ProductDetail;
