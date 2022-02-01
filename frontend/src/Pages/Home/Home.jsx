import { useEffect, useState } from 'react';
import axios from 'axios';
import moment from 'moment';

export const HomePage = () => {
  const [BTCprice, setBTCprice] = useState('');

  const fetchBTC = () => {
    axios
      .get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then((res) => {
        const actualPrice = res.data.bpi.USD.rate_float;
        return setBTCprice(actualPrice);
      });
  };

  useEffect(() => {
    fetchBTC();
  });
  return (
    <>
      <h1>Home</h1>
      <p>{moment().format('MMMM Do YYYY, h:mm')}</p>
      <p>BTC Price {BTCprice}</p>
      <button className="btn btn-blue">login</button>)
    </>
  );
};
