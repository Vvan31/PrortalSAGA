import Link from "next/link";
import Image from "next/image";
import SAGAlogo from "../../public/images/logoSAGA.png";
const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative bg-white z-10 overflow-hidden pt-[120px] pb-0 md:pt-[50px] md:pb-[20px] xl:pt-[30px] xl:pb-[60px] 2xl:pt-[90px] 2xl:pb-[10px]"
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
                src={SAGAlogo}
                alt="logo"
                width={380}
                height={350}
            /> 
               
                <p className="mb-12 font-bold  text-black md:text-yellow  sm:text-lg md:text-lg">
                  Red articulada de procesos digitales basada en
                  Inteligencia Artificial que controla la gestión
                  documental y los archivos de las Dependencias.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-12 right-0 w-full h-[130px] z-[-1] left-0">
            <Image
              src="/images/banner.png"
              alt="logo"
              width={1280}
              height={350}
              style={{objectFit:"cover", objectPosition:"75%"}}
              className="w-full md:h-[350px] h-[450px]"
            /> 
        </div>
     
      </section>
    </>
  );
};

export default Hero;
