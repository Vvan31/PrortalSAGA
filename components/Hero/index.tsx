import Link from "next/link";
import Image from "next/image";
const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative bg-white z-10 overflow-hidden pt-[120px] pb-16 md:pt-[50px] md:pb-[20px] xl:pt-[30px] xl:pb-[60px] 2xl:pt-[90px] 2xl:pb-[10px]"
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div
                className="wow fadeInUp mx-auto max-w-[800px] text-center flex flex-col items-center justify-center direction-column"
                data-wow-delay=".2s"
              >
             {/*   
             <h1 className="mb-0 text-6xl font-bold leading-tight text-primary dark:text-white sm:text-6xl sm:leading-tight md:text-6xl md:leading-tight">
                SAGA
                </h1> 
                 <h1 className="mb-5 text-base font-bold leading-tight text-white dark:text-white sm:text-2xl sm:leading-tight md:text-3xl md:leading-tight">
                Sistema Automatizádo de Gestión y Archivo
                </h1>
          */}
                <Image
                src="/images/logoSAGA.PNG"
                alt="logo"
                width={280}
                height={250}
            /> 
               
                <p className="mb-12 font-extrabold  text-yellow  sm:text-lg md:text-xl">
                  Red articulada de procesos digitales basada en
                  Inteligencia Artificial que controla la gestión
                  documental y los archivos de las Dependencias.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-12 right-0 w-full h-[130px] z-[-1]  left-0">
            <Image
              src="/images/banner.png"
              alt="logo"
              width={1280}
              height={350}
              className="w-full h-[350px]"
            /> 
        </div>
     
      </section>
    </>
  );
};

export default Hero;
