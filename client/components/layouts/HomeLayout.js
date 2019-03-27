import Head from "next/head";
import Navbar from "../Navbar";
import React from "react";

const Layout = props => (
  <div>
    <Head>
      <title>goodWork</title>
      <link
        href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css"
        rel="stylesheet"
      />
      <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js" />
    </Head>
    <Navbar />
    <div>{props.children}</div>
  </div>
);

export default Layout;