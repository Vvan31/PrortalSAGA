import SingleBlog from "@/components/Blog/SingleBlog";
import blogData from "@/components/Blog/blogData";
import Breadcrumb from "@/components/Common/Breadcrumb";

const Procedure = () => {
  return (
    <>
{/*       <Breadcrumb
        pageName="Convenio de Donación del SAGA"
        description="Obtenga el trámite digitalizado punta a punta para la subscripción del convenio de la licencia del SAGA"
      /> */}

        <div className="hero min-h-screen bg-white">
            <div className="hero-content text-center">
                <div className="max-w-md md:mt-0 mt-11 md:max-w-none md:w-[750px] w-full">
                    <h1 className="text-6xl font-bold text-primary">Convenio de Donación de la licencia del SAGA</h1>
                    <p className="py-6 text-2xl">Realize el trámite digitalizado punta a punta para la subscripción del convenio de la licencia del SAGA</p>
                    <button className="btn btn-primary">Realizar trámite</button>
                </div>
            </div>
        </div>
    </>
  );
};

export default Procedure;
