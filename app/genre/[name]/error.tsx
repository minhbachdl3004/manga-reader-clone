"use client"; // Error components must be Client Components

import { poppins } from "@/components/navbar/Menu";
import Image from "next/image";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { useRouter } from 'next/navigation'

export default function Error() {
  const router = useRouter()

  return (
    <div
      className={`${poppins.className} max-w-[1400px] h-screen flex flex-col justify-center items-center`}
    >
      <Image
        alt=""
        width="200"
        height="200"
        className="mb-[40px]"
        src={"https://mangareader.to/images/404.png"}
      ></Image>
      <h3 className="text-[#ddd] text-[30px] font-normal mb-[15px]">
        404 Error
      </h3>
      <p className="text-[#ddd] text-[14px] mb-[20px]">
        Oops! We can find this page.
      </p>
      <button className=" bg-[#5f25a6] flex justify-center items-center rounded-full py-[10px] px-[15px]" onClick={() => router.push("/")}>
        <MdKeyboardArrowLeft style={{ height: "24px", width: "24px" }} />
        Back to Homepage
      </button>
    </div>
  );
}
