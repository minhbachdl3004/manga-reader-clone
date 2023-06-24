import { mangaProps } from "utils/type";
import { apiUrl } from "utils/urlConfig";

export const getMangas = async (params: string) => {
  const res = await fetch(`${apiUrl}${params}`, {
    next: { revalidate: 10 },
    cache: "no-store",
  });
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
  const res = await fetch(`${apiUrl}/manga/mangaId/${mangaId}`, {
    next: { revalidate: 10 },
    cache: "no-store",
  });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    return undefined;
  }

  return res.json();
}

export async function searchManga(query: string) {
  const res = await fetch(`${apiUrl}/manga/name/search?name=${query}&page=1`, {
    next: { revalidate: 10 },
    cache: "no-store",
  });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    return undefined;
  }

  return res.json();
}

export const linkManga = (mangaName: string, mangaId: any) => {
  return `/${
    mangaName
      .toLowerCase()
      .replace(/\s/g, "-")
      .replace(/[^a-zA-Z0-9-]/g, "") + `-${mangaId}`
  }`;
};
