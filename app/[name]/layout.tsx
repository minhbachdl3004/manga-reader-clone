import Navbar from "@/components/navbar/Navbar";
export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="max-xl:flex max-xl:flex-col max-xl:gap-[25px]">
      <div className="w-full h-[80px] bg-[#7b36ce]">
        <Navbar styles="py-[5px]" />
      </div>
      {children}
    </div>
  );
}
