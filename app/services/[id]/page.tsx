
import featuresData from '@/components/Features/featuresData';
import SharePost from "@/components/Blog/SharePost";
import TagButton from "@/components/Blog/TagButton";
import Image from "next/image";

const ServicePage = ( {params} : { params: {id: number}} ) => {
  const id = params.id;
  console.log(typeof(id))
  const featureId = Number(id)
  // Find the service based on the selectedServiceId
  const service = featuresData.find((service) => service.id === featureId);

  if (!service) {
    return (
      <div className=" h-50">
        <p>Service not found {id}</p>
      </div>
    );
  }

  return (
    <>
      <section className="pt-[150px] pb-[120px] bg-white dark:bg-white">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4 lg:w-8/12">
              <div>
                <h2 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-black sm:text-4xl sm:leading-tight">
                  {service.title}
                </h2>
                <div>
                  <p className="mb-10 text-base font-xl leading-relaxed text-black dark:text-primary sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    {service.paragraph}
                  </p>
                  <div className="mb-10 w-full overflow-hidden rounded">
                    <div className=" w-90 sm:aspect-[97/44] text-yellow">
                      {service.icon}
                    </div>
                  </div>
                  <p className="mb-8 text-base font-xl leading-relaxed text-black dark:text-primary sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                   {service.paragraph}
                    <strong className="text-primary dark:text-black">
                    {service.title}

                    </strong>
                    proin libero nunc consequat interdum varius. Quam
                    pellentesque nec nam aliquam sem et tortor consequat.
                    Pellentesque adipiscing commodo elit at imperdiet.
                  </p>
                  <p className="mb-10 text-base font-xl leading-relaxed text-black dark:text-primary sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    Semper auctor neque vitae tempus quam pellentesque nec.
                    <span className="text-primary underline dark:text-black">
                      Amet dictum sit amet justo
                    </span>
                    donec enim diam. Varius sit amet mattis vulputate enim nulla
                    aliquet porttitor. Odio pellentesque diam volutpat commodo
                    sed.
                  </p>
                  <h3 className="font-xl mb-10 font-bold leading-tight text-black dark:text-black sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                    Digital marketplace for Ui/Ux designers.
                  </h3>
                  <p className="mb-10 text-base font-xl leading-relaxed text-black dark:text-primary sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    consectetur adipiscing elit in voluptate velit esse cillum
                    dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    mattis vulputate cupidatat.
                  </p>
                  <ul className="mb-10 list-inside list-disc text-black dark:text-primary">
                    <li className="mb-2 text-base font-large text-black dark:text-primary sm:text-lg lg:text-base xl:text-lg">
                      Consectetur adipiscing elit in voluptate velit.
                    </li>
                    <li className="mb-2 text-base font-2xl text-black dark:text-primary sm:text-lg lg:text-base xl:text-lg">
                      Mattis vulputate cupidatat.
                    </li>
                    <li className="mb-2 text-base font-2xl text-black dark:text-primary sm:text-lg lg:text-base xl:text-lg">
                      Vulputate enim nulla aliquet porttitor odio pellentesque
                    </li>
                    <li className="mb-2 text-base font-2xl text-black dark:text-primary sm:text-lg lg:text-base xl:text-lg">
                      Ligula ullamcorper malesuada proin
                    </li>
                  </ul>
                  <div className="relative z-10 mb-10 overflow-hidden rounded-md bg-primary bg-opacity-10 p-8 md:p-9 lg:p-8 xl:p-9">
                    <p className="text-center text-base font-xl italic text-black dark:text-primary">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod incididunt utionals labore et dolore magna
                      aliqua. Quis lobortis scelerisque fermentum, The Neque ut
                      etiam sit amet.
                    </p>
                  </div>
                  <p className="mb-10 text-base font-xl leading-relaxed text-black dark:text-primary sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    consectetur adipiscing elit in voluptate velit esse cillum
                    dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    mattis vulputate cupidatat.
                  </p>
              
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicePage;