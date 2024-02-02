import Logo from "@/assets/LogoHeader.svg"
import User from "@/assets/icon-user.svg"
import IgmaLogo from "@/assets/logotipoIgma.svg"
import BlockImage from "@/assets/vetorImage.svg";
import Vulcan from "@/assets/vulcan.png";
import Mrv from "@/assets/mrv.svg";
import BrasilPrev from "@/assets/brasilprev.svg";
import Idb from "@/assets/idb.svg";
import Comgas from "@/assets/comgas.svg";
import Bayer from "@/assets/bayer.svg";
import Cvc from "@/assets/cvc.svg";
import Centauro from "@/assets/centauro.svg";
import NeoEnergia from "@/assets/neoenergia.svg";
import Google from "@/assets/google.svg";
import Honda from "@/assets/honda.svg";
import Ambev from "@/assets/ambev.svg";
import Hsl from "@/assets/hsl.svg";
import Celular1 from "@/assets/celular1.png"
import Celular2 from "@/assets/celular2.png"
import Celular3 from "@/assets/celular3.png"
import Celular4 from "@/assets/celular4.png"


const App = () => {
  return (
    <div>
      <header className="w-full h-stack-xxl pr-inline-xxs flex items-center justify-between ">
        <img src={Logo} alt="logotipo" className="w-inline-xl" />
        <button className="w-inline-sm h-stack-sm bg-primary-main rounded-circle flex justify-center items-center">
          <img src={User} alt="user button" />
        </button>
      </header>
      <main>
        <section className="flex flex-col pt-stack-xxs gap-stack-xxl">
          <div className="px-inline-xxs">
            <header className="flex gap-inline-nano items-center">
              <p className="text-xxs leading-sm font-medium">Prazer, somos</p> <img src={IgmaLogo} alt="Igma - Delightful digital products." />
            </header>
            <p className="pt-stack-xl text-lg font-semibold leading-sm text-base-dark-highlight">Acreditamos em um mundo onde experiências incríveis são essenciais.</p>
            <p className="pt-stack-xs text-xs font-semibold leading-lg">Unimos design e tecnologia para resolver problemas complexos de empresas. Criamos produtos digitais que revolucionam o relacionamento entre empresas e consumidores.</p>
          </div>
          <div className="relative pl-inline-xxs">
            <img src={BlockImage} alt="Decorative block" className="absolute top-1/2 -translate-y-1/2 -translate-x-inline-xxxs" />
            <img src={Vulcan} alt="Vulcanic eruption like Igma feelings." className="h-[560px]" />
          </div>
        </section>
        <section className="flex flex-col gap-stack-sm pt-stack-xxl px-inline-xxs">
          <p className="text-xs">Expressamos mais de 20 anos de experiência criando plataformas digitais para as maiores empresas do Brasil, impactando milhões de pessoas.</p>
          <div className="grid grid-cols-2 items-center">
            <img src={Mrv} alt="MRV" />
            <img src={BrasilPrev} alt="Brasil Prev" />
            <img src={Idb} alt="IDB" />
            <img src={Comgas} alt="Comgas" />
            <img src={Bayer} alt="Bayer" />
            <img src={Cvc} alt="CVC" />
            <img src={Centauro} alt="Centauro" />
            <img src={NeoEnergia} alt="NeoEnergia" />
            <img src={Google} alt="Google" />
            <img src={Honda} alt="Honda" />
            <img src={Ambev} alt="Ambev" />
            <img src={Hsl} alt="Hospital Sírio-Libanês" />
          </div>
        </section>
        <section className="flex flex-col gap-stack-xxl py-stack-xxl">
          <form onSubmit={(e) => e.preventDefault()} className="px-inline-xxs">
            <p className="text-xxs font-medium leading-sm">Assine nossa newsletter</p>
            <p className="pt-stack-md text-xs font-semibold leading-lg">Desenvolva-se conosco com conteúdos sobre  Tecnologia e Design a cada 15 dias.</p>
            <input className="mt-stack-md h-stack-lg w-full outline-none border-b-thin border-b-base-dark-main font-semibold text-base-dark-main placeholder:text-base-dark-main" placeholder="Nome"></input>
            <input className="mt-stack-xxs h-stack-lg w-full outline-none border-b-thin border-b-base-dark-main font-semibold text-base-dark-main placeholder:text-base-dark-main" placeholder="Email"></input>
            <button className="mt-stack-lg px-inline-xxxs py-3 bg-base-dark-main text-base-light-contrast font-semibold">Assinar Newsletter</button>
          </form>
          <div className="overflow-hidden whitespace-nowrap">
            <div className="inline-flex gap-inline-xxs pl-inline-xxs animate-slideToLeft">
              <img src={Celular1} alt="MRV" className="max-w-stack-huge" />
              <img src={Celular2} alt="Brasil Prev" className="max-w-stack-huge" />
              <img src={Celular3} alt="IDB" className="max-w-stack-huge" />
              <img src={Celular4} alt="Comgas" className="max-w-stack-huge" />
            </div>
            <div className="inline-flex gap-inline-xxs pl-inline-xxs animate-slideToLeft">
              <img src={Celular1} alt="MRV" className="max-w-stack-huge" />
              <img src={Celular2} alt="Brasil Prev" className="max-w-stack-huge" />
              <img src={Celular3} alt="IDB" className="max-w-stack-huge" />
              <img src={Celular4} alt="Comgas" className="max-w-stack-huge" />
            </div>
          </div>
        </section>
        <footer className="pt-stack-sm pb-stack-xxl px-inline-xxs">
          <p className="text-xxs font-semibold leading-lg">Igma Delightful Digital Products Company.</p>
          <p className="pt-stack-nano text-xxs font-semibold leading-lg">© Copyright 2023</p>
        </footer>
      </main>
    </div>
  );
};

export default App;
