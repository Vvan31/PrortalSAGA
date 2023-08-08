import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";
import aboutData from "./aboutData";
import SingleAbout from "../Features/singleAbout";
const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="wow fadeInUp max-w-[1500px]" data-wow-delay=".2s">
            <SectionTitle
                title="Funcionalidades del SAGA"
                paragraph=""
                mb="20px"
              />
              <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-1 lg:grid-cols-2">
                {aboutData.map((about) => (
                  <SingleAbout key={about.id} about={about} />
                ))}
              </div>
            </div>
  
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
