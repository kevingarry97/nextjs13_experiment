import React from "react";

interface Props {
  children: React.ReactNode;
}

const AboutLayout = ({ children }: Props) => {
  return (
    <div>
      <h1>This is Amazing!!</h1>
      {children}
    </div>
  );
};

export default AboutLayout;
