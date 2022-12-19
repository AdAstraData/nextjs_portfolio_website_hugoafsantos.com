// import { NextScript } from 'next/document';
// import Head from 'next/head'
// import styles from '../styles/Home.module.css';

// // import Plotly from 'plotly.js';

// export default function Home() {
// }

import { subtract } from "./app";

function init() {
    const form = document.querySelector("form");
    form?.addEventListener("submit", submitHandler);
  }

  function submitHandler(e: Event) {
    e.preventDefault();
    const num1 = document.querySelector("input[name='firstnumber']") as HTMLInputElement;
    const num2 = document.querySelector("input[name='secondnumber']") as HTMLInputElement;
    const result = subtract(Number(num1.value), Number(num2.value));
    const resultElement = document.querySelector("p");
    if (resultElement) {
      resultElement.textContent = result.toString();
    }
  }

  init();
  