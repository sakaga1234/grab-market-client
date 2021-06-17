import { useParams } from "react-router-dom";

import axios from "axios";
import { useEffect, useState } from "react";
function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  useEffect(function () {
    axios
      .get(
          `https://71eea40a-3623-42e5-b436-47721d0417d2.mock.pstmn.io/products/${id}`
        )
        .then(function (result) {
            setProduct(result.data);
          })
          .catch(function (error) {
            console.error(error);
          });
      }, []);
      console.log(product);
      return <h1>상품 상세 페이지 {id} 상품</h1>;
    }
export default ProductPage;