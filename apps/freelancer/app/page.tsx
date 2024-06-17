import Image from "next/image";
import TopNavbar from "@/components/topnavbar";
import Content1 from "@/components/content1";
import Content2 from "@/components/content2";
import Content3 from "@/components/content3";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between space-y-[0.5rem] p-24 bg-[#1B1B1B]">
      <TopNavbar></TopNavbar>
      End of topnavbar
      <Content1></Content1>
      End of Content1
      <Content2></Content2>
      End of Content2
      <Content3></Content3>
      End of Content3
    </main>
  );
}
