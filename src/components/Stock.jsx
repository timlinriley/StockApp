import React from 'react'
import Dashboard from './Dashboard'
import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';

function Stock() {
  const apiKey = "975cecfc0c6f31c746dd4a278155c535"
  const params = useParams();
  const symbol = params.symbol;
  const url = `https://financialmodelingprep.com/api/v3/quote/${symbol}?apikey=${apiKey}
  `;
  const [stock, setStock] = useState({})

  const getStock = async () => {
    const response = await axios.get(url)
    let {data} = response;
    setStock(data);
    console.log(stock.symbol)
  }

useEffect(() => {
  getStock()
},[])


  const stockDisplay = () => {
  return (
    <div>
      <div>
      <h1>{stock.symbol}</h1>
      <h5>{stock.ytd}</h5>
      </div>
    </div>
  )
}
useEffect(() => {
  stockDisplay()
},[])
}

export default Stock