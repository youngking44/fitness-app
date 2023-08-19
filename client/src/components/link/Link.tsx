import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

interface IProp {
  id: string;
  active?: string;
  children: React.ReactNode;
}

const Link = ({ id, active, children }: IProp) => {
  return (
    <AnchorLink
      href={id}
      className={`${active === "yes" && "text-accent-500"}`}
    >
      {children}
    </AnchorLink>
  );
};

export default Link;
