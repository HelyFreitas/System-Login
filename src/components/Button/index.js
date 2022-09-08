import React from "react";
import * as C from "./styles"

const Button = ({ Text, onClick, Type = "buton" }) => {
  return(
    <C.Button type={Type} onClick={onClick}>
      {Text}
    </C.Button>
  )
};

export default Button; 
