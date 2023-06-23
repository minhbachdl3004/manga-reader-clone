export interface MangaProps {
  _id: string;
  name: string;
  otherName: string;
  mangaId: Number;
  poster: string;
  genres: string[];
  description: string;
  moreInfo: any;
  chapters: any[];
  totalChapter: any;
  views: string;
}

export interface mangaProps {
  mangas: MangaProps[];
  pagination?: {};
}

export interface specificMangaProps {
  manga: MangaProps
}

export interface PromiseProps {
  promise: Promise<mangaProps>
}

export interface chapterProps {
  _id: string;
  chapterId: string;
  chapterName: string;
  images: string[]
}
