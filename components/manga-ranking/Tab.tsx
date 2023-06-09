"use client";
import React from 'react'

const charts = ["Today", "Week", "Month"];

interface Props {
  selectedId: number;
  onChange: (e : any) => void;
}

const Tab = ({ selectedId = 0, onChange }: Props) => {
  return (
    <div className="bg-[#2f2f2f] text-[#ddd] my-[15px] rounded-[4px] overflow-hidden flex justify-between h-[40px]">
        {charts.map((chart, i) => (
          <div
            key={i}
            onClick={() => onChange(i)}
            className={`text-center flex-1 px-[10px] text-[14px] cursor-pointer hover:text-[#c49bff] leading-[40px] font-medium ${
              selectedId === i ? "text-[#fff] hover:text-[#c49bff] bg-[#5f25a6]" : ""
            }`}
          >
            {chart}
          </div>
        ))}
      </div>
  )
}

export default Tab