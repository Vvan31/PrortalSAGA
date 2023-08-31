import SingleBlog from "@/components/Blog/SingleBlog";
import blogData from "@/components/Blog/blogData";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Image from "next/image";
const Procedure = () => {
  return (
    <>
{/*       <Breadcrumb
        pageName="Convenio de Donación del SAGA"
        description="Obtenga el trámite digitalizado punta a punta para la subscripción del convenio de la licencia del SAGA"
      /> */}

        <div className="hero min-h-screen bg-white" >
            <div className="hero-content text-center z-10">
                <div className="max-w-md md:mt-0 mt-11 md:max-w-none md:w-[750px] w-full">
                    <h1 className="md:text-5xl text-3xl font-bold text-primary">Convenio de Donación de la licencia del SAGA</h1>
                    <p className="py-6 text-2xl">Realize el trámite digitalizado punta a punta para la subscripción del convenio de la licencia del SAGA</p>
                    <button className="btn btn-primary">Realizar trámite</button>
                </div>
            </div>
            <div className="absolute top-0 left-0 right-0 z-1 hidden md:block">
              <Image
                      src="/images/banner.png"
                      alt="logo"
                      width={1280}
                      height={1350}
                      className="w-full h-screen"
                    /> 
              </div>
        </div>

       
    </>
  );
};

export default Procedure;
