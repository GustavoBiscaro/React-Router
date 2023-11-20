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
      console.log("Erro: " + e);
    }

  };

  useEffect(() => {
    getQuote();
  }, []) //Será executado uma única vez

  return (
    
    <div className="mainContainer">
      <h1>Sobre a organização</h1>
      <h4>Tentamos conscientizar as pessoas para um futuro economicamente e ecologicamente sustentável!</h4>
      <div className="filosofias">
      <h2>Filosofia do site</h2>
      {
     <h3><p>Reflexões: </p>{quote}</h3>
      }
      </div>
    </div>
    
  );
};


export default Sobre