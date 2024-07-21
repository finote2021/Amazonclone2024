import React, { useState, useEffect } from "react";
import Layout from "../../Components/Layout/Layout";
import { useParams } from "react-router-dom";
import axios from "axios";
import { ProductUrl } from "../../Api/endPoints";
import ProductCard from "../../Components/Product/ProductCard";
import Loader from "../../Components/Loader/Loader";

function Results() {
  const [results, setResults] = useState([]);
  const { categoryName } = useParams();
  const [IsLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${ProductUrl}/products/category/${categoryName}`)
      .then((res) => {
        setResults(res.data);
        console.log(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, [categoryName]);

  return (
    <Layout>
      <section>
        <h1 style={{ padding: "30px" }}>Results</h1>
        <p style={{ padding: "30px" }}>Category / {categoryName}</p>
        <hr />
        {IsLoading ? (
          <Loader />
        ) : (
          <div className="products_container">
            {results?.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </section>
    </Layout>
  );
}

export default Results;
