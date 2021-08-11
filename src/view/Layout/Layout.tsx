import React from "react";
import Header from "src/view/Layout/Header";
import Menue from "./Menue";
import { useRouteMatch } from "react-router-dom";
import LayoutWrapper from "src/view/Layout/styles/LayoutWrapper";

function Layout(props: any) {
  const match = useRouteMatch();

  return (
    <LayoutWrapper>
      <Menue url={match.url} />
      <div className='main'>
        <Header />
        <div className='container-fluid'>{props.children}</div>
      </div>
    </LayoutWrapper>
  );
}

export default Layout;
