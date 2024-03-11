import Image from "next/image";
import Banner from "@/ui/icons/banner.png";
import Arrow from "@/ui/icons/arrow.svg";
import ButtonFooter from "@/components/footer/button";
import CatalogMain from "@/components/main-page/catalog/catalog";
import NewMain from "@/components/main-page/new/new";


export default function Home() {
  return (
    
    <div className="flex flex-col justify-between w-full">
      <CatalogMain />
      <NewMain />
      </div>
  );
}