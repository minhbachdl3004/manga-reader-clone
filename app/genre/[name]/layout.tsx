import Navbar from "@/components/navbar/Navbar";


export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="w-full h-[80px] mb-[20px]">
        <Navbar styles="py-[5px]" />
      </div>
      {children}
    </>
  );
}
