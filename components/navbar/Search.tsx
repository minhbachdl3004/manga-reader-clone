"use client";
import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import Link from "next/link";
import { AiOutlineSearch } from "react-icons/ai";
import { poppins } from "./Menu";
import { useRouter, useSearchParams } from "next/navigation";
import { createUrl } from "utils/createUrl";
import "./styles.css";
import fetcher from "configs/fetcherConfig";
import { mangaProps } from "utils/type";
import useSWR from "swr";
import Image from "next/image";
import { axiosInstance } from "configs/axiosConfig";
import { linkManga } from "app/data/dataFetching";

interface Props {
  active?: boolean;
  onChange?: (e: any) => void;
}

interface dataProps {
  mangas: mangaProps;
  isLoading: any;
  isError: any;
}

const GetMangasByKeyword = (keyword: string) => {
  const { data, error, isLoading } = useSWR(
    `manga/name/search?name=${keyword}&page=1`,
    fetcher
  );

  return {
    mangas: data,
    isLoading,
    isError: error,
  };
};

export const Search = ({ active }: Props) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState<boolean>(false);
  const [mangaData, setMangaData] = useState<mangaProps>();
  const [inputValue, setInputValue] = useState<string>("");
  const [isFocus, setIsFocus] = useState<boolean>(false);
  console.log(isFocus);

  const handleSearch = async (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  useEffect(() => {
    const searchingMangaName = async (keyword: string) => {
      try {
        if (inputValue) {
          setLoading(true);
          const res = await axiosInstance
            .get(`manga/name/search?name=${keyword}&page=1`)
            .then((res) => res.data);
          setMangaData(res);
        } else {
          setMangaData({
            mangas: [],
          })
        }
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    searchingMangaName(inputValue);
  }, [inputValue]);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newParams = new URLSearchParams(searchParams.toString());

    if (inputValue) {
      newParams.set("q", inputValue);
    } else {
      newParams.delete("q");
    }

    router.push(createUrl("/search", newParams));
  };
  return (
    <div className={`search-bar ${active ? "active-search" : ""}`}>
      <div className="relative box-border flex flex-col">
        <form
          action="/search"
          onSubmit={onSubmit}
          className="box-border text-[#ddd]"
        >
          <Link
            href="/filter"
            className="h-[26px] cursor-pointer leading-[26px] text-[11px] bg-[#e9daff] text-[#5f25a6] px-[6px] rounded-[6px] absolute left-[7px] top-[7px] z-3 hover:bg-[#5f25a6] hover:text-[#fff]"
          >
            FILTER
          </Link>
          <input
            type="text"
            className={`relative w-full h-[40px] text-[#111] pr-[40px] pl-[60px] text-[13px] font-normal bg-[#fff] rounded-[8px] border-none shadow-input outline-none ${poppins.className} }`}
            placeholder="Search manga..."
            defaultValue={searchParams?.get("q") || ""}
            onChange={handleSearch}
            onFocus={() => setIsFocus(!isFocus)}
          />
          <button
            type="submit"
            className="w-[40px] h-[40px] px-[10px] leading-[40px] inline-block text-[#111] text-center absolute top-0 right-0 z-3 cursor-pointer font-black"
          >
            <AiOutlineSearch
              style={{ fontSize: "20px", fontWeight: "900", color: "#111" }}
            />
          </button>
        </form>
        <div
          className={`${
            isFocus ? "block" : "none"
          } search-result-pop w-full flex flex-col bg-[#3f3f3f] rounded-[8px]`}
        >
          {loading ? (
            <div className="loader flex justify-center gap-[6px] items-center py-[20px]">
              <div className="dot-pulse"></div>
            </div>
          ) : (
            <div className="flex flex-col w-full max-h-[400px]">
              {mangaData &&
                mangaData.mangas.slice(0, 4).map((manga) => (
                  <Link
                    key={manga._id}
                    href={linkManga(manga.name, manga.mangaId)}
                    className="px-[10px] pb-[20px] hover:bg-[#2f2f2f]"
                  >
                    <div className="float-left w-[50px] pb-[70px] top-[10px] rounded-[6px] relative overflow-hidden bg-[#eee]">
                      <Image
                        alt=""
                        src={manga.poster}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="pl-[65px] pt-[0.7rem] text-[12px]">
                      <h3 className="text-[14px] leading-[1.2em] max-w-full mb-[8px] h-[18px] overflow-hidden text-ellipsis whitespace-nowrap font-medium">
                        {manga.name}
                      </h3>
                      <div>
                        {manga.genres.slice(0, 3).map((genre, i) => (
                          <>
                            <span key={i}>{genre}</span>
                            {i === 2 ? null : <div className="small-dot"></div>}
                          </>
                        ))}
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export const MobileSearch = ({ onChange }: Props) => {
  return (
    <div
      className="left-auto hidden right-[40px] top-[20px] max-xl:inline-block p-0 text-[#fff] cursor-pointer absolute z-[4] w-[26px] h-[26px] text-center rounded-[3px] font-extrabold"
      onClick={onChange}
    >
      <AiOutlineSearch
        style={{ width: "100%", height: "100%", fontWeight: "900" }}
      />
    </div>
  );
};
