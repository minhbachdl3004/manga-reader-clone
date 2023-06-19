export interface MangaProps {
  mangas: any;
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

export interface PromiseProps {
  promise: Promise<mangaProps>
}