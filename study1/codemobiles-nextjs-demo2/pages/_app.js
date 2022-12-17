import React from "react";
import App from "next/app";
import Head from "next/head";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import "../assets/css/index.css";

export default function CMApp({ Component, pageProps }) {
  // console.log(JSON.stringify(pageProps));
  return (
    <div>
      <Head>
        <title>Next.JS</title>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
          integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
          crossOrigin="anonymous"
        />
      </Head>
      <Nav />
      <div className="index-content">
        <Component {...pageProps} />
      </div>
      <Footer />
      <style jsx>
        {`
          .main-content {
            margin-top: 30px;
          }
        `}
      </style>
    </div>
  );
}
