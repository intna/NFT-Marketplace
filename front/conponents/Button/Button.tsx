import React from "react";

interface Props {
  btntext: string;
}

const Button = ({ btntext }: Props) => {
  return <div>{btntext}</div>;
};

export default Button;
