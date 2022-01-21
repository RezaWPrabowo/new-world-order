import React from "react";

import * as Comp from "./body/index";

const Body = () => {
  return (
    <div>
      <Comp.Banner />
      <Comp.Title />
      <Comp.Register />
      <Comp.Program />
      <Comp.Session />
      <Comp.Faqs />
    </div>
  );
};

export default Body;
