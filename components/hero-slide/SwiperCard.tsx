import React from "react";
import CardCover from "./CardCover";
import CardPoster from "./CardPoster";
import CardContent from "./CardContent";
import { poppins } from "@/components/navbar/Menu";

const buttons = [
  { title: "Read Now", bgColor: "bg-[#ffd702]" },
  { title: "View Info", bgColor: "bg-[#fff]" },
];

interface swiperCardProps {
  cardCover: string;
  cardPoster: string;
  isActive: boolean;
  title: string;
  description: string;
  genres: string[];
  totalChapter: number;
}


const SwiperCard = ({
  cardCover,
  cardPoster,
  isActive,
  title,
  description,
  genres,
  totalChapter,
}: swiperCardProps) => {
  return (
    <div
      className={`w-full h-full absolute top-0 left-0 right-0 bottom-0 ${poppins.className}`}
    >
      <CardCover cardCover={cardCover} />
      <CardPoster cardPoster={cardPoster} isActive={isActive} />
      <CardContent
        subText={`Chapter: ${totalChapter} [EN]`}
        title={title}
        description={description}
        genres={genres}
        buttons={buttons}
      />
    </div>
  );
};

export default SwiperCard;
