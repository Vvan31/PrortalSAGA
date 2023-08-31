import SingleBlog from "@/components/Blog/SingleBlog";
import blogData from "@/components/Blog/blogData";
import Breadcrumb from "@/components/Common/Breadcrumb";
import SectionTitle from "@/components/Common/SectionTitle";
import Image from "next/image";
const Procedure = () => {
  return (
    <>
{/*       <Breadcrumb
        pageName="Convenio de Donación del SAGA"
        description="Obtenga el trámite digitalizado punta a punta para la subscripción del convenio de la licencia del SAGA"
      /> */}

        <div className="hero min-h-screen pt-16 lg:pt-0 bg-white wow fadeInUp "  data-wow-delay="1s" >
            <div className="hero-content text-left z-10">
                <div className="max-w-md md:mt-0 mt-0 md:max-w-none w-full">
                    <h1 className="md:text-5xl text-3xl font-bold text-primary">Convenio de Donación de la licencia del SAGA</h1>
                    <p className="py-6 md:text-2xl text-lg font-bold">Realice el trámite digitalizado punta a punta para la subscripción del convenio de donación de la licencia del SAGA</p>
                    <div className="flex w-full flex-col items-center">
                        <p className="py-6 md:text-xl text-lg text-justify mb-9">En apoyo a todos los sujetos obligados por la LGA y en cumplimiento de lo definido por la Ley Federal de Austeridad Republicana, 
                        el Archivo General de la Nación ha considerado compartir de forma gratuita el licenciamiento perpetuo e ilimitado del sistema SAGA 
                        incluyendo su código fuente con lo que se garantizará la independencia tecnológica y autonomía de su institución tal y como se establece en el 
                        decreto de la Estrategia Digital Nacional vigente.
                        </p>
                        <button className="btn btn-primary md:w-1/3 w-1/2">
                          <a 
                            href="https://www.hotwaresc.com/task/project/DespliegueSAGA/public/fd222a73-4e03-4f0d-ab90-040549ade13e"
                            rel="noopener noreferrer" 
                            target="_blank"
                            >
                            Realizar trámite
                          </a>
                        </button>
                    
                    </div>

                 {/*  <button className="btn btn-primary">
                    <a 
                      href="https://www.hotwaresc.com/task/project/DespliegueSAGA/public/fd222a73-4e03-4f0d-ab90-040549ade13e"
                      rel="noopener noreferrer" 
                      target="_blank"
                      >
                      Realizar trámite
                    </a>
                  </button> */}
                </div>
            </div>

            <div className="absolute top-0 left-0 right-0 z-1 ">
              <Image
                      src="/images/banner.png"
                      alt="logo"
                      width={1280}
                      height={1350}
                      style={{objectFit:"cover", objectPosition:"75%"}}
                      className="w-full h-screen"
                    /> 
            </div>
        </div>

    {/*     <section id="aboutSAGA" className="pt-16 md:pt-30 lg:pt-48 bg-white md:pt-30 lg:pt-48  md:pb-6 lg:pb-28x flex flex-col justify-center items-center w-full">
   
            <div className="bg-red w-full mr-0">
              <div className=" flex flex-wrap p-5 w-full">
                <div className="w-full px-4 py-8 w-full">
                  <div
                    className={`wow fadeInUp w-full mx-auto ` }
                    data-wow-delay=".1s"
                    style={{ maxWidth: "1250px", marginBottom: "5px" }} 
                  >
                    <h4 className="mb-4 text-lg text-base/7 font-regular !leading-tight text-white dark:text-white sm:text-xl md:text-xl text-justify">
                    El sistema SAGA es ya un referente para el cumplimiento de la normativa en cuestión de administración de archivos de todos los sujetos obligados a nivel nacional, y es de interés en el Archivo General de la Nación acercarles nuestra experiencia en este modelo para brindarles a los Sujetos Obligados de la LGA, una alternativa viable para migrar hacia la gestión automatizada de documentos electrónicos y así dar cumplimento a las obligaciones establecidas por el marco legal.
                    </h4>
                    <h4 className="text-lg text-base/7 font-regular !leading-tight text-white dark:text-white sm:text-xl md:text-xl text-justify">
                    En apoyo a todos los sujetos obligados por la LGA y en cumplimiento de lo definido por la Ley Federal de Austeridad Republicana, el Archivo General de la Nación ha considerado compartir de forma gratuita el licenciamiento perpetuo e ilimitado del sistema SAGA incluyendo su código fuente con lo que se garantizará la independencia tecnológica y autonomía de su institución tal y como se establece en el decreto de la Estrategia Digital Nacional vigente.
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          
        </section> */}
       
    </>
  );
};

export default Procedure;
