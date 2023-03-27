import React from "react";

const headComponents = [
    <link rel="shortcut icon" href="assests/favicon.png" type="image/x-icon" key="favicon" />
  ]
  
  export const onRenderBody = ({ setHeadComponents }) => {
    setHeadComponents(headComponents)
  }