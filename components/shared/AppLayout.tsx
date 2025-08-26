import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Demo from "./Demo";

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      {children}
      <Demo />
      <Footer />
    </>
  );
};

export default AppLayout;
