"use client";
import React from "react";
import { poppins } from "@/components/navbar/Menu";

interface Props {
  styles: string;
  children?: React.ReactNode;
}

const Detail = ({ styles, children }: Props) => {
  return (
    <div className={`${styles} ${poppins.className}`}>
      {children}
    </div>
  );
};

export default Detail;
