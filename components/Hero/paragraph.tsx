import Image from "next/image"
import SectionTitle from "../Common/SectionTitle"

const Paragraph = () => {
    return (
        <section id="about" className="pt-8 md:pt-8 lg:pt-8 bg-white">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-6  md:pb-5 lg:pb-3">
          <div className="-mx-4 flex flex-wrap items-center">

      {/*     <div className="w-full px-4 lg:w-1/3">
              <div
                className="wow fadeInUp relative mx-auto aspect-[25/24] max-w-[500px] lg:mr-0"
                data-wow-delay=".2s"
              >
                <Image
                  src="/images/hero/shape-02.svg"
                  alt="about-image"
                  fill
                  className="mx-auto max-w-full lg:mr-0"
                />
              </div>
            </div> */}
            <div className="w-full px-4 py-8 ">
              <SectionTitle
                title="¿Qué es SAGA?"
                paragraph="
                El sistema SAGA es ya un referente para el cumplimiento de la normativa
                en cuestión de administración de archivos de todos los sujetos 
                obligados a nivel nacional, y es de interés en el Archivo General de
                la Nación acercarles nuestra experiencia en este modelo para 
                brindarles a los Sujetos Obligados de la LGA, una alternativa 
                viable para migrar hacia la gestión automatizada de documentos 
                electrónicos y así dar cumplimento a las obligaciones establecidas 
                por el marco legal.
                "
                mb="44px"
                width="1000px"
                center
                bold="regular"
                color="black"
              />
           {/*    <div
                className="wow fadeInUp mb-12 max-w-[570px] lg:mb-0"
                data-wow-delay=".15s"
              >
                <div className="mx-[-12px] flex flex-wrap">
                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="Ley General de Archivos (DOF 15-06-2018)" />
                    <List text="Los estándares y buenas prácticas nacionales e internacionales en materia de
                        clasificación archivística y gestión documental." />
                    
                  </div>

                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text=" Lineamientos para la creación y uso de Sistemas Automatizados de Gestión y
                      Control de Documentos (DOF 03-07-2015)" />
                    <List text="Lineamientos para la Organización y Conservación de los Archivos
                      (CONAIP/SNT/ACUERDO/EXT13/04/201603)" />
                    
                  </div>
                </div>
              </div> */}
            </div>

          
          </div>
        </div>
      </div>
    </section>
    )
}

export default Paragraph