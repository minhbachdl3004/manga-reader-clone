import "./globals.css";

export const metadata = {
  title: "MangaReader - Read Manga website",
  description: "Generated by create next app",
  icons: {
    icon: "https://mangareader.to/favicon.ico?v=0.1",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="w-full h-screen bg-[#1f1f1f] relative">
        {children}
      </body>
    </html>
  );
}
