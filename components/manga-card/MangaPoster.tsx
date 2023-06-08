"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Tick from "./Tick";

interface Props {
  type?: number;
  children: React.ReactNode;
}

const MangaPoster = ({ type = 1, children }: Props) => {
  return (
    <>
      {type === 1 ? (
        <>
          <Link
            href="/"
            className="absolute left-0 right-0 bottom-0 top-0 z-[98]"
          />

          {children}
          <Image
            alt=""
            fill
            className="absolute w-full h-full object-cover top-0 left-0 right-0 bottom-0"
            src="https://img.mreadercdn.com/_m/300x400/100/9e/b3/9eb352aed77fac4ab19cd3291a4ba58f/9eb352aed77fac4ab19cd3291a4ba58f.jpg"
          />
        </>
      ) : (
        <>
          <Link
            href="/"
            className="top-[1em] left-[1em] w-[140px] absolute h-auto pb-[200px]"
          >
          {children}
            <Image
              fill
              alt=""
              src="https://img.mreadercdn.com/_m/300x400/100/c7/72/c7726c763052ec75a107321a954e56cc/c7726c763052ec75a107321a954e56cc.jpg"
              className="absolute w-full h-full object-cover top-0 left-0 right-0 bottom-0"
            />
          </Link>
        </>
      )}
    </>
  );
};

export default MangaPoster;
