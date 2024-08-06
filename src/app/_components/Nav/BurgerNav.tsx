import { useState } from "react";
import styled from "styled-components";
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
import { CustomLink } from "../Link/Link";

const StyledBurger = styled.div<{ open: boolean }>`
  width: 2rem;
  height: 2rem;
  position: absolute;
  top: 25px;
  right: 20px;
  z-index: 101;
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;

  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => (open ? "#F4F4EF" : "#F4F4EF")};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.2s linear;
    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }
    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

type BurgerNavProps = {
  links: { text: string; path: string }[];
};

export const BurgerNav: React.FC<BurgerNavProps> = ({ links }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <SlidingPane
        className="bg-dark-shades relative"
        overlayClassName="z-[100]"
        isOpen={open}
        from="right"
        width="80%"
        onRequestClose={() => setOpen(false)}
        hideHeader
      >
        <div className="bg-dark-shades flex flex-col items-center gap-2 pt-[60px]">
          {links.map((link) => (
            <CustomLink
              key={link.text}
              text={link.text}
              path={link.path}
              onClick={() => setOpen(false)}
            />
          ))}
        </div>
      </SlidingPane>
    </>
  );
};
