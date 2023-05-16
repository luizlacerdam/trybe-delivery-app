import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Card from './components/Card';
import { requestData } from '../../../services/requests';

export default function ProductPage() {
  const [products, setProducts] = useState([{}]);

  useEffect(() => {
    const getProductsList = async () => {
      const data = await requestData('/customer/products');
      setProducts(data);
    };
    getProductsList();
  }, []);
  return (
    <body>
      {/* <Navbar /> */}
      <section className="cards">
        {products.map(({ id, role, imgUrl, price, title }, index) => (
          <Card
            id={ id }
            role={ role }
            imgUrl={ imgUrl }
            price={ price }
            title={ title }
            key={ index }
          />
        ))}
      </section>
    </body>
  );
}
