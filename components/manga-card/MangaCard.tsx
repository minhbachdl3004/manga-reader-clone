"use client";
import React, { useState } from "react";
import MangaPoster from "./MangaPoster";
import Description from "./Description";
import { poppins } from "../navbar/Menu";
import Tick from "./Tick";

interface Props {
  isDisplay: boolean;
  styles: string;
  children: React.ReactNode;
}

const MangaCard = ({ isDisplay, styles, children }: Props) => {
  const [toggle, setToggle] = useState<boolean>(false);
  return (
    <div
      onMouseOver={() => setToggle(true)}
      onMouseOut={() => setToggle(false)}
    >
      <div className={` ${styles} ${poppins.className}`}>
        <MangaPoster>
          <Tick isDisplay={isDisplay} />
          <Description toggle={toggle} />
        </MangaPoster>
      </div>
      {children}
    </div>
  );
};

export default MangaCard;
