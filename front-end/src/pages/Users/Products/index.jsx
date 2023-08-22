import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Card from './components/Card';
import { requestDataWithToken } from '../../../services/requests';
import Loading from '../../components/Loading';

import { getLocalStorage } from '../../../utils/localStorageHandling';
import CheckoutButton from './components/CheckoutButton';
import ErrorComponent from '../components/ErrorComponent';

export default function ProductPage() {
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState();

  const localS = getLocalStorage('user');

  useEffect(() => {
  }, [total]);
  useEffect(() => {
    const getProductsList = async () => {
      try {
        const data = await requestDataWithToken('/customer/products', localS.token);
        setProducts(data);
        setLoaded(true);
      } catch (e) {
        setError(e.response);
        console.log(e.response);
      }
    };

    getProductsList();
  }, []);

  return (
    <div>
      { error ? <ErrorComponent
        status={ error.status }
        statusText={ error.statusText }
        message={ error.data.error }
      /> : (
        <div>
          <Navbar role={ localS.role } username={ localS.name } />
          <section className="all-cards">
            { !loaded ? <Loading /> : (
              products.allProducts.map(({ id, urlImage, price, name }, index) => (
                <Card
                  setTotal={ setTotal }
                  total={ total }
                  id={ id }
                  urlImage={ urlImage }
                  price={ price }
                  title={ name }
                  key={ index }
                />
              ))
            )}
          </section>
          <CheckoutButton total={ total } setTotal={ setTotal } />
        </div>

      )}
    </div>
  );
}
