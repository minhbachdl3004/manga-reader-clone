"use client";
import React, { useState } from "react";
import { MangaPoster1 } from "@/components/common/MangaPoster";
import Description from "./Description";
import { poppins } from "@/components/navbar/Menu";
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
        <MangaPoster1 styles="absolute left-0 right-0 bottom-0 top-0 z-[98]">
          <Tick isDisplay={isDisplay} />
          <Description toggle={toggle} />
        </MangaPoster1>
      </div>
      {children}
    </div>
  );
};

export default MangaCard;
