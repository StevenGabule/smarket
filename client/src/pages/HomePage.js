import {Row} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {listProducts} from "../store/actions/product.action";
import {useEffect} from "react";
import Loader from "../utils/Loader";
import Message from "../utils/Message";
import Product from "../components/homepage/Product";

function HomePage() {
  const dispatch = useDispatch();
  const {productList: {loading, error, products}} = useSelector((state) => state)

  useEffect(() => {
    dispatch(listProducts())
  }, [dispatch]);

  return (<>
      <h4>Latest Products</h4>
      {loading ? (
        <Loader/>
      ) : error ? (
        <Message>{error}</Message>
      ) : (
        <Row>
          {products.map(product => <Product key={product._id} {...product} />)}
        </Row>
      )}
    </>
  )
}

export default HomePage;
