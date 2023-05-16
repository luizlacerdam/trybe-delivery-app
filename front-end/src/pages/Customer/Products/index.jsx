import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Card from './components/Card';
import { requestData } from '../../../services/requests';
import Loading from '../../components/Loading';

export default function ProductPage() {
  const [products, setProducts] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const getProductsList = async () => {
      const data = await requestData('/customer/products');
      setProducts(data);
      setLoaded(true);
    };
    getProductsList();
  }, []);
  console.log(products);

  return (
    <div>
      {/* <Navbar /> */}
      <section className="cards">
        { !loaded ? <Loading /> : (
          products.allProducts.map(({ id, imgUrl, price, name }, index) => (
            <Card
              id={ id }
              role="costumer"
              imgUrl={ imgUrl }
              price={ price }
              title={ name }
              key={ index }
            />
          ))
        )}
      </section>
    </div>
  );
}
