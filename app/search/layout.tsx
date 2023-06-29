import Navbar from "@/components/navbar/Navbar";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col">
      <div className="w-full h-[90px] pt-[10px] relative bg-[#7b36ce]">
        <Navbar />
      </div>
      <div className="w-full relative mx-auto my-0">{children}</div>
    </div>
  );
}
