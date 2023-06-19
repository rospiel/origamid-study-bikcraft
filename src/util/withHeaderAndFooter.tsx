import React from "react";
import Footer from "../app/views/Footer.view";
import Header from "../app/views/Header.view";
import Head, { HeadProps } from "./Head";

export default function withHeaderAndFooter<T extends object>(Component: React.ComponentType<T>, { title, description }: HeadProps) {
  return function (props: T) {
    return (
      <>
        <Head title={title} description={description} />
        <Header />
        <Component {...props} />
        <Footer />
      </>
    )
  }
}