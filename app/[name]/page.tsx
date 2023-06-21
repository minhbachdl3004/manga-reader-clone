import React from "react";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import PageContent from "./ContentPage";

async function getMangaById(mangaId: string) {
  // try {
  //   const res = await axiosInstance(`manga/genre/${name}?page=1`);
  //   return res.data;
  // } catch (error) {
  //   return error;
  // }
  const res = await fetch(`http://localhost:8080/api/manga/mangaId/${mangaId}`);
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    return undefined;
  }

  return res.json();
}

export async function generateMetadata({
  params,
}: {
  params: { name: string };
}): Promise<Metadata> {
  let nameArr = params.name.split("-");
  let mangaId = nameArr[nameArr.length - 1];
  const data = await getMangaById(mangaId);

  if (!data) return notFound();

  return {
    title: `${data.manga.name} Manga Online`,
    description: "Generated by create next app",
  };
}

export default async function Page({ params }: { params: { name: string } }) {
  let nameArr = params.name.split("-");
  let mangaId = nameArr[nameArr.length - 1];
  const data = await getMangaById(mangaId);

  return (
    <div className="max-w-[1400px] w-full overflow-hidden bg-[#1f1f1f]">
      <PageContent manga={data.manga} />
    </div>
  );
}
