import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default AppLayout;
