import ImageSlides from "@/components/image_slides";
import TopLogo from "@/components/top_logo";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <ImageSlides />
      <div className="flex flex-col w-full h-full items-center justify-center p-4 gap-3">
        <div className="flex flex-row w-full h-full items-start justify-center bg-current rounded-lg">
          <p className="text-background text-md text-justify p-3 px-4 pb-4">
            Brazilian Armed Forces Mod (BRAF Mod) é um mod que inclui as Forças Armadas Brasileiras à plataforma Arma 3. Tendo início em 2020 em uma coalizão de gamers brasileiros, o mod une diferentes áreas do conhecimento para planejar, agrupar e desenvolver um novo mod, aberto a desenvolvedores que queiram entregar contribuições ao mod.</p>
        </div>
        <div className="flex flex-row w-full h-full items-start justify-center gap-4">
          <div className="flex flex-col items-center justify-between w-full bg-current h-72 p-3 rounded-lg shadow-lg">
            <p className="text-background text-sm text-justify">
              Neste exato momento, o projeto, que atualmente conta com XXXXX inscritos, está disponível única e exclusivamente na plataforma Steam Workshop, confira!
            </p>
            <Button className="w-full" variant={"secondary"}>Steam</Button>
          </div>
          <div className="flex flex-col items-center justify-between w-full bg-current h-72 p-3 rounded-lg shadow-lg">
            <p className="text-background text-sm text-justify">
              Se você está procurando por uma comunidade brasileira de jogadores de Arma 3 para interagir, discussões sobre o mod, missões informais semanalmente ou um grupo para integrar-se, encontre tudo isso em nosso discord!
            </p>
            <Button className="w-full" variant={"secondary"}>Discord</Button>
          </div>
        </div>
      </div>
      <TopLogo />
    </>
  );
}
