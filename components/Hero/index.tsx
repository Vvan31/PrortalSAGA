import Link from "next/link";
import Image from "next/image";
const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden pt-[120px] pb-16 md:pt-[150px] md:pb-[120px] xl:pt-[180px] xl:pb-[160px] 2xl:pt-[210px] 2xl:pb-[200px]"
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div
                className="wow fadeInUp mx-auto max-w-[800px] text-center flex flex-col items-center justify-center direction-column"
                data-wow-delay=".2s"
              >
              {/*   <Image
                src="/images/logo/saga.png"
                alt="logo"
                width={180}
                height={130}
                className="w-80"
              />  */}
               <h1 className="mb-0 text-5xl font-bold leading-tight text-primary dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                SAGA
                </h1>
                <h1 className="mb-5 text-base font-bold leading-tight text-white dark:text-white sm:text-2xl sm:leading-tight md:text-3xl md:leading-tight">
                Sistema Automatizádo de Gestión y Archivo
                </h1>
          
                <p className="mb-12 text-base font-semibold !leading-relaxed text-body-color dark:text-white dark:opacity-90 sm:text-xl md:text-2xl">
                  Red articulada de procesos digitales basada en
                  Inteligencia Artificial que controla la gestión
                  documental y los archivos de las Dependencias.
                </p>
               {/*  <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <Link
                    href="https://nextjstemplates.com/templates/startup"
                    className="rounded-md bg-primary py-4 px-8 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
                  >
                    Download Now
                  </Link>
                  <Link
                    href="https://github.com/NextJSTemplates/startup-nextjs"
                    className="rounded-md bg-black/20 py-4 px-8 text-base font-semibold text-black duration-300 ease-in-out hover:bg-black/30 dark:bg-white/20 dark:text-white dark:hover:bg-white/30"
                  >
                    Star on GitHub
                  </Link>
                </div> */}
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-full z-[-1]  left-0 backdrop-brightness-50 bg-black ">
       {/*  <div className="absolute top-0 right-0 w-full z-[-1]  left-0 bg-gradient-to-b from-black to-grey-900 "> */}
            <Image
              src="/images/hero/edificio.jpeg"
              alt="logo"
              width={1280}
              height={330}
              className="w-full opacity-60"
            /> 
          </div>
     
      </section>
    </>
  );
};

export default Hero;
