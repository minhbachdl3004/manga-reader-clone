import React from "react";
import { Metadata } from "next";
import { getMangaById } from "app/data/dataFetching";
import Navbar from "@/components/navbar/Navbar";
import MangaDetailPage from "./Detail";
import Loading from "./loading";

export async function generateMetadata({
  params,
}: {
  params: { name: string };
}): Promise<Metadata> {
  let nameArr = params.name.split("-");
  let mangaId = nameArr[nameArr.length - 1];
  const data = await getMangaById(mangaId);

  // if (!data) return notFound();

  return {
    title: ` Manga Online`,
    description: "Generated by create next app",
  };
}

export default async function Page({ params }: { params: { name: string } }) {
  let nameArr = params.name.split("-");
  let mangaId = nameArr[nameArr.length - 1];
  const data = await getMangaById(mangaId);

  if (!data) {
    return <Loading />;
  }


  // Update the URL to reflect the manga's title and ID
  

  return (
    <div className="max-w-[1400px] w-full overflow-hidden bg-[#1f1f1f]">
      <div className="flex flex-col">
        <div className="w-full h-[90px] pt-[10px] relative bg-[#7b36ce]">
          <Navbar />
        </div>
        <MangaDetailPage manga={data.manga} />
      </div>
    </div>
  );
}
