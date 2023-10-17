const SectionTitle = ({
  title,
  paragraph = "",
  width = "570px",
  center,
  mb = "100px",
  color='black',
  bold = "bold"
}: {
  title: string;
  paragraph: string;
  width?: string;
  center?: boolean;
  mb?: string;
  color?:string
  bold?:string
}) => {
  return (
    <>
      <div
        className={`wow fadeInUp w-full ${center ? "mx-auto text-center" : ""}`}
        data-wow-delay=".1s"
        style={{ maxWidth: width, marginBottom: mb }}
      >
        <h2 className={`md:mb-4 mb-0 text-3xl font-bold !leading-tight text-${color} sm:text-4xl md:text-4xl w-full`}>
          {title}
        </h2>
        <h4 className={`mb-4 text-xl font-${bold} !leading-tight text-black dark:text-black sm:text-xl md:text-xl text-justify`}>
          {paragraph}
        </h4>
      </div>
    </>
  );
};

export default SectionTitle;
