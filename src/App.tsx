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
import Celular5 from "@/assets/celular5.png"
import Celular6 from "@/assets/celular6.png"
import Celular7 from "@/assets/celular7.png"
import Celular8 from "@/assets/celular8.png"
import Celular9 from "@/assets/celular9.png"
import Celular10 from "@/assets/celular10.png"
import Celular11 from "@/assets/celular11.png"
import Celular12 from "@/assets/celular12.png"


const App = () => {
  return (
    <div>
      <header className="fixed top-0 w-full h-stack-xxl pr-inline-xxs flex items-center justify-between bg-background-01 z-10
                          lg:pr-inline-lg xl:pr-inline-xl 2xl:pr-36">
        <img src={Logo} alt="logotipo" className="w-inline-xl xl:w-stack-xxxl" />
        <button className="w-inline-sm h-stack-sm bg-primary-main rounded-circle flex justify-center items-center xl:w-inline-md xl:h-stack-md">
          <img src={User} alt="user button" />
        </button>
      </header>
      <main className="mt-stack-xxl flex flex-col gap-stack-xxl pt-stack-xxs pb-stack-xxl
                        lg:pt-stack-xxl
                        xl:pt-stack-xxxl xl:gap-24
                        2xl:pb-stack-xxxl">
        {/* Introduction */}
        <section className="flex flex-col items-center gap-stack-xxl
                            lg:h-[504px] lg:px-stack-xxxl lg:flex-row-reverse lg:items-start lg:justify-center
                            xl:h-[680px] xl:gap-stack-xxxl xl:px-40
                            2xl:h-[780px] 2xl:gap-40 2xl:px-72
                            ">
          <div className="px-inline-xxs flex-1 lg:px-0">
            <header className="flex gap-inline-nano items-center xl:gap-inline-xxxs">
              <p className="text-xxs leading-sm font-medium xl:text-xs 2xl:text-md">Prazer, somos</p> <img src={IgmaLogo} alt="Igma - Delightful digital products." />
            </header>
            <p className="pt-stack-xl text-lg font-semibold leading-sm text-base-dark-highlight xl:text-xl 2xl:text-xxl">Acreditamos em um mundo onde experiências incríveis são essenciais.</p>
            <p className="pt-stack-xs text-xs font-semibold leading-lg xl:text-md 2xl:text-lg">Unimos design e tecnologia para resolver problemas complexos de empresas. Criamos produtos digitais que revolucionam o relacionamento entre empresas e consumidores.</p>
          </div>
          <div className="relative pl-inline-xxs lg:pl-0 lg:self-stretch">
            <img src={BlockImage} alt="Decorative block" className="absolute top-1/2 -translate-y-1/2 -translate-x-inline-xxxs" />
            <img src={Vulcan} alt="Vulcanic eruption like Igma feelings." className="h-[560px] lg:h-full lg:w-[304px] xl:w-auto" />
          </div>
        </section>

        {/* Companies */}
        <section className="w-full flex flex-col items-center gap-stack-sm px-inline-xxs
                            lg:px-inline-sm lg:flex-row lg:items-center lg:justify-center lg:gap-24
                            xl:px-inline-xl
                            2xl:px-36 2xl:h-[800px]
                            ">
          <p className="text-xs font-semibold leading-lg lg:w-5/12 xl:text-md 2xl:text-lg">Expressamos mais de 20 anos de experiência criando plataformas digitais para as maiores empresas do Brasil, impactando milhões de pessoas.</p>
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:gap-x-14">
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

        {/* Newsletter */}
        <section className="w-full flex flex-col gap-stack-xxl
                            lg:flex-row lg:items-center lg:justify-between lg:gap-[100px] lg:px-inline-sm lg:h-[680px]
                            xl:h-[800px] xl:px-inline-xl
                            2xl:px-36  2xl:h-[800px]">
          <form onSubmit={(e) => e.preventDefault()} className="px-inline-xxs lg:px-0 lg:w-3/4">
            <p className="text-xxs font-medium leading-sm xl:text-xs 2xl:text-md">Assine nossa newsletter</p>
            <p className="pt-stack-md text-xs font-semibold leading-lg xl:text-md 2xl:text-lg">Desenvolva-se conosco com conteúdos sobre  Tecnologia e Design a cada 15 dias.</p>
            <input className="mt-stack-md h-stack-lg w-full outline-none border-b-thin border-b-base-dark-main font-semibold text-base-dark-main placeholder:text-base-dark-main" placeholder="Nome"></input>
            <input className="mt-stack-xxs h-stack-lg w-full outline-none border-b-thin border-b-base-dark-main font-semibold text-base-dark-main placeholder:text-base-dark-main" placeholder="Email"></input>
            <button className="mt-stack-lg px-inline-xxxs py-3 bg-base-dark-main text-base-light-contrast font-semibold">Assinar Newsletter</button>
          </form>


          {/* Mobile carousel */}
          <div className="overflow-hidden whitespace-nowrap lg:hidden">
            <div className="inline-flex animate-slideToLeft">
              <div className="inline-flex gap-inline-xxs pl-inline-xxs">
                <img src={Celular1} alt="" className="max-w-stack-huge" />
                <img src={Celular2} alt="" className="max-w-stack-huge" />
                <img src={Celular3} alt="" className="max-w-stack-huge" />
              </div>
              <div className="inline-flex gap-inline-xxs pl-inline-xxs">
                <img src={Celular4} alt="" className="max-w-stack-huge" />
                <img src={Celular5} alt="" className="max-w-stack-huge" />
                <img src={Celular6} alt="" className="max-w-stack-huge" />
              </div>
              <div className="inline-flex gap-inline-xxs pl-inline-xxs">
                <img src={Celular7} alt="" className="max-w-stack-huge" />
                <img src={Celular8} alt="" className="max-w-stack-huge" />
                <img src={Celular9} alt="" className="max-w-stack-huge" />
              </div>
              <div className="inline-flex gap-inline-xxs pl-inline-xxs">
                <img src={Celular10} alt="" className="max-w-stack-huge" />
                <img src={Celular11} alt="" className="max-w-stack-huge" />
                <img src={Celular12} alt="" className="max-w-stack-huge" />
              </div>
            </div>
            <div className="inline-flex animate-slideToLeft">
              <div className="inline-flex gap-inline-xxs pl-inline-xxs">
                <img src={Celular1} alt="" className="max-w-stack-huge" />
                <img src={Celular2} alt="" className="max-w-stack-huge" />
                <img src={Celular3} alt="" className="max-w-stack-huge" />
              </div>
              <div className="inline-flex gap-inline-xxs pl-inline-xxs">
                <img src={Celular4} alt="" className="max-w-stack-huge" />
                <img src={Celular5} alt="" className="max-w-stack-huge" />
                <img src={Celular6} alt="" className="max-w-stack-huge" />
              </div>
              <div className="inline-flex gap-inline-xxs pl-inline-xxs">
                <img src={Celular7} alt="" className="max-w-stack-huge" />
                <img src={Celular8} alt="" className="max-w-stack-huge" />
                <img src={Celular9} alt="" className="max-w-stack-huge" />
              </div>
              <div className="inline-flex gap-inline-xxs pl-inline-xxs">
                <img src={Celular10} alt="" className="max-w-stack-huge" />
                <img src={Celular11} alt="" className="max-w-stack-huge" />
                <img src={Celular12} alt="" className="max-w-stack-huge" />
              </div>
            </div>
          </div>

          {/* Tablet & Desktop carousel */}
          <div className="hidden self-start lg:flex lg:h-full gap-inline-xxs px-inline-xxxs lg:overflow-y-hidden">
            <div className="flex flex-col gap-inline-xxs">
              <div className="flex flex-col gap-inline-xxs animate-[25s_initialToBottom_infinite_linear]">
                <img src={Celular1} alt="" className="w-full" />
                <img src={Celular2} alt="" className="w-full" />
                <img src={Celular3} alt="" className="w-full" />
              </div>
              <div className="flex flex-col gap-inline-xxs animate-[25s_initialToBottom_infinite_linear]">
                <img src={Celular1} alt="" className="w-full" />
                <img src={Celular2} alt="" className="w-full" />
                <img src={Celular3} alt="" className="w-full" />
              </div>
            </div>
            <div className="flex flex-col gap-inline-xxs">
              <div className="flex flex-col gap-inline-xxs animate-[15s_middleToBottom_infinite_linear]">
                <img src={Celular4} alt="" className="w-full" />
                <img src={Celular5} alt="" className="w-full" />
                <img src={Celular6} alt="" className="w-full" />
              </div>
              <div className="flex flex-col gap-inline-xxs animate-[15s_middleToBottom_infinite_linear]">
                <img src={Celular4} alt="" className="w-full" />
                <img src={Celular5} alt="" className="w-full" />
                <img src={Celular6} alt="" className="w-full" />
              </div>
            </div>
            <div className="flex flex-col gap-inline-xxs">
              <div className="flex flex-col gap-inline-xxs animate-[25s_initialToBottom_infinite_linear]">
                <img src={Celular7} alt="" className="w-full" />
                <img src={Celular8} alt="" className="w-full" />
                <img src={Celular9} alt="" className="w-full" />
              </div>
              <div className="flex flex-col gap-inline-xxs animate-[25s_initialToBottom_infinite_linear]">
                <img src={Celular7} alt="" className="w-full" />
                <img src={Celular8} alt="" className="w-full" />
                <img src={Celular9} alt="" className="w-full" />
              </div>
            </div>
            <div className="flex flex-col gap-inline-xxs">
              <div className="flex flex-col gap-inline-xxs animate-[15s_middleToBottom_infinite_linear]">
                <img src={Celular10} alt="" className="w-full" />
                <img src={Celular11} alt="" className="w-full" />
                <img src={Celular12} alt="" className="w-full" />
              </div>
              <div className="flex flex-col gap-inline-xxs animate-[15s_middleToBottom_infinite_linear]">
                <img src={Celular10} alt="" className="w-full" />
                <img src={Celular11} alt="" className="w-full" />
                <img src={Celular12} alt="" className="w-full" />
              </div>
            </div>
          </div>
        </section>

      </main>
        {/* Footer */}
        <footer className="pb-stack-xxl px-inline-xxs lg:px-inline-sm xl:px-inline-xl 2xl:px-36">
          <div className="flex flex-col gap-stack-nano border-t-hairline border-base-dark-highlight pt-stack-sm lg:flex-row lg:justify-between lg:items-center">
            <p className="text-xxs font-semibold leading-lg xl:text-xs">Igma Delightful Digital Products Company.</p>
            <p className="text-xxs font-semibold leading-lg xl:text-xs">© Copyright 2023</p>
          </div>
        </footer>
    </div>
  );
};

export default App;
