"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface Props {
  styles: string;
  children?: React.ReactNode;
}

export const MangaPoster1 = ({ styles, children }: Props) => {
  return (
    <>
      <Link
        href="/"
        className={`${styles}`}
      />

      {children}
      <Image
        alt=""
        fill
        className="absolute w-full h-full object-cover top-0 left-0 right-0 bottom-0"
        src="https://img.mreadercdn.com/_m/300x400/100/9e/b3/9eb352aed77fac4ab19cd3291a4ba58f/9eb352aed77fac4ab19cd3291a4ba58f.jpg"
      />
    </>
  );
};

export const MangaPoster2 = ({ styles, children }: Props) => {
  return (
    <>
      <Link
        href="/"
        className={`${styles}`}
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
  );
};

export const MangaPoster3 = ({ styles, children }: Props) => {
  return (
    <>
      <Link
        href="/"
        className={`${styles}`}
      >
        <Image
          fill
          alt=""
          src="https://img.mreadercdn.com/_m/300x400/100/c7/72/c7726c763052ec75a107321a954e56cc/c7726c763052ec75a107321a954e56cc.jpg"
          className="absolute w-full h-full object-cover top-0 left-0 right-0 bottom-0"
        />
      </Link>
    </>
  );
};
