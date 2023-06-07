"use client";
import React, { useState } from "react";
import MangaPoster from "./MangaPoster";
import Number from "./Number";

const MangaItem = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  return (
    <div
      className="w-full h-auto pb-[115%] relative inline-block overflow-hidden"
      onMouseOver={() => setToggle(true)}
      onMouseOut={() => setToggle(false)}
    >
      <MangaPoster toggle={toggle} />
      <Number />
    </div>
  );
};

export default MangaItem;
