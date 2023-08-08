import { About } from "@/types/feature";

const SingleAbout = ({ about }: { about: About }) => {
  const { icon, id, title, paragraph } = about;
  return (
    <div className="w-full">
      <div className="wow fadeInUp  flex  items-center justify-center" data-wow-delay=".15s">
        <div className="mb-10 mr-10 flex h-[150px] w-[150px] items-center justify-center rounded-md  bg-opacity-10 text-primary">
          {icon}
        </div>
        <div>
        <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-xl lg:text-xl xl:text-xl">
          {title} 
        </h3>
        <p className="pr-[10px] text-base font-medium text-yellow  dark:text-white  leading-relaxed text-body-color">
          {paragraph}
        </p>
        </div>
        
      </div>
    </div>
  );
};

export default SingleAbout;
