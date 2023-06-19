import { mangaProps } from "utils/type";
import { apiUrl } from "utils/urlConfig";

export const getMangas = async (params : string) => {
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

