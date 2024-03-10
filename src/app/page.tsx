import Image from "next/image";
import Banner from "@/ui/icons/banner.png";
import Arrow from "@/ui/icons/arrow.svg";
import ButtonFooter from "@/components/footer/button";


export default function Home() {
  return (
    <div>
      <Image className="z-[-100]"
        src={Banner}
        alt="Banner"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
      />

      <div className="mt-[144px] flex items-center justify-between w-full text-white font-semibold">
        <div className="text-[65px]">
          <h1>Сейчас в кино</h1>
        </div>
        <div className="w-[51px] h-0 border-2 border-white ml-[100px] mr-[136px]"></div>
        <div className="flex gap-7 text-slate-400" style={{ letterSpacing: '1px' }}>
          <a href="#" className="text-white">Все</a>
          <a href="#">Боевики</a>
          <a href="#">Приключения</a>
          <a href="#">Комедии</a>
          <a href="#">Фантастика</a>
          <a href="#">Триллеры</a>
          <a href="#">Драма</a>
        </div>
      </div>

      <div className="text-center">
        <ButtonFooter />
      </div>

      <div className="flex items-center justify-between">
        <div className="text-[55px] font-semibold text-white">
          <h2>Ожидаемые новинки</h2>
        </div>
        <div className="mt-[10px]">
          <Arrow />
        </div>
      </div>

    </div>
  );
}