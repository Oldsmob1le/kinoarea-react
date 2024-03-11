import Image from "next/image";
import Banner from "@/ui/icons/banner.png";
import Arrow from "@/ui/icons/arrow.svg";
import ButtonFooter from "@/components/footer/button";
import CatalogMain from "@/components/main-page/catalog/catalog";


export default function Home() {
  return (
    
    <div className="flex flex-col justify-between w-full">
      <CatalogMain />
      <div className="flex items-center justify-between">
        <div className="text-display-3 font-semibold text-white">
          <h2>Ожидаемые новинки</h2>
        </div>
        <div className="mt-s">
          <Arrow />
        </div>
      </div>

    
      </div>
  );
}