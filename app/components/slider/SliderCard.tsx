"use client";
import React from "react";
import CardCover from "./CardCover";
import CardPoster from "./CardPoster";
import CardContent from "./CardContent";

const detail = {
  detailTitle:
    "The winner of the MILLION TAG manga competition! A new era of manga begins with this series about the struggle and joy of creating art. Anime and music collide in this new series about growing up and...",
  genres: ["Comedy", "Music", "Shounen"],
};

const buttons = [
  { title: "Read Now", bgColor: "bg-[#ffd702]" },
  { title: "View Info", bgColor: "bg-[#fff]" },
];

const SliderCard = () => {
  return (
    <div
      className="w-[1311px] h-full opacity-100 duration-0 relative overflow-hidden bg-[#20152d]"
      style={{ transform: "translate3d(0px, 0px, 0px)" }}
    >
      <div className="w-full h-full absolute top-0 left-0 right-0 bottom-0 box-border">
        <CardCover />
        <CardPoster />
        <CardContent
          subText="Chapter: 7 [EN]"
          title="Beat and Motion"
          detail={detail}
          buttons={buttons}
        />
      </div>
    </div>
  );
};

export default SliderCard;
