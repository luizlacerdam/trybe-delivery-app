import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Card from './components/Card';
import { requestData } from '../../../services/requests';
import Loading from '../../components/Loading';

import { getLocalStorage } from '../../../utils/localStorageHandling';
import CheckoutButton from './components/CheckoutButton';

export default function ProductPage() {
  const [products, setProducts] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const localS = getLocalStorage('user');

  useEffect(() => {
    const getProductsList = async () => {
      const data = await requestData('/customer/products');
      setProducts(data);
      setLoaded(true);
    };
    getProductsList();
  }, []);

  useEffect(() => () => { localStorage.setItem('test', 'test'); }, []);

  return (
    <div>
      <Navbar role={ localS.role } username={ localS.name } />
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
      <CheckoutButton total={ 0.001 } />
    </div>
  );
}
