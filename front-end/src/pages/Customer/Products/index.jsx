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
      <Navbar role="customer" username="Luiz Lacerda" />
      <section className="cards">
        { !loaded ? <Loading /> : (
          products.allProducts.map(({ id, urlImage, price, name }, index) => (
            <Card
              id={ id }
              urlImage={ urlImage }
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
