import axios from "axios"
import React from 'react';
import { useState, useEffect } from "react";

import "./Sobre.css";
import { Link } from "react-router-dom";


const Sobre = () => {
  const [quote, setQuote] = useState([])

  const getQuote = async () => {

    try {
      const response = await axios.get("https://api.kanye.rest/"
      );

      const frase = response.data.quote;

      setQuote(frase);
 

    } catch (e) {
      console.log(e);
    }

  }

  useEffect(() => {

    getQuote();

  }, []) //Será executado uma única vez

  return (
    <div>
      <h1>Filosofia do site</h1>
      <h2></h2>
    </div>
  );
};


export default Sobre