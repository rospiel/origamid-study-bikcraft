import React from "react";
import Footer from "../app/views/Footer.view";
import Header from "../app/views/Header.view";

export default function withHeaderAndFooter<T extends object>(Component: React.ComponentType<T>) {
  return function (props: T) {
    return (
      <>
        <Header />
        <Component {...props} />
        <Footer />
      </>
    )
  }
}