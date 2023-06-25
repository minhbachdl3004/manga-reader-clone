"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface Props {
  styles: string;
  children?: React.ReactNode;
  poster: string;
  link?: string;
}

export const MangaPoster1 = ({ link, styles, children, poster }: Props) => {
  return (
    <>
      <Link
        href={link ? link : ""}
        className={`${styles}`}
      />

      {children}
      <Image
        alt=""
        fill
        className="absolute w-full h-full object-cover top-0 left-0 right-0 bottom-0"
        src={poster}
      />
    </>
  );
};

export const MangaPoster2 = ({ link, poster, styles, children }: Props) => {
  return (
    <>
      <Link
        href={link ? link : ""}
        className={`${styles}`}
      >
        {children}
        <Image
          fill
          alt=""
          src={poster}
          className="absolute w-full h-full object-cover top-0 left-0 right-0 bottom-0"
        />
      </Link>
    </>
  );
};

export const MangaPoster3 = ({ link, poster, styles, children }: Props) => {
  return (
    <>
      <Link
        href={link ? link : ""}
        className={`${styles}`}
      >
        <Image
          fill
          alt=""
          src={poster}
          className="absolute w-full h-full object-cover top-0 left-0 right-0 bottom-0"
        />
      </Link>
    </>
  );
};
