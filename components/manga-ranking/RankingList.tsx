"use client";
import React from "react";
import { poppins } from "@/components/navbar/Menu";

interface Props {
  children: React.ReactNode;
}
const RankingList = ({ children }: Props) => {
  return <div className={`${poppins.className}`}>
    {children}
  </div>;
};

export default RankingList;
