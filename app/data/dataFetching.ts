import { mangaProps } from "utils/type";
import { apiUrl } from "utils/urlConfig";

export const getMangas = async (params: string) => {
  const res = await fetch(`${apiUrl}${params}`);
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    return undefined;
  }

  return res.json();
};


export async function getMangaById(mangaId: string) {
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

export async function searchManga(query : string) {
  // try {
  //   const res = await axiosInstance(`manga/genre/${name}?page=1`);
  //   return res.data;
  // } catch (error) {
  //   return error;
  // }
  const res = await fetch(`${apiUrl}/manga/name/search?name=${query}&page=1`);
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    return undefined;
  }

  return res.json();
}


export const linkManga = (mangaName : string, mangaId : any) => {
  return `/${
    mangaName
      .toLowerCase()
      .replace(/\s/g, "-")
      .replace(/[^a-zA-Z0-9-]/g, "") + `-${mangaId}`
  }`;
};