const SectionTitle = ({
  title,
  paragraph = "",
  width = "570px",
  center,
  mb = "100px",
}: {
  title: string;
  paragraph: string;
  width?: string;
  center?: boolean;
  mb?: string;
}) => {
  return (
    <>
      <div
        className={`wow fadeInUp w-full ${center ? "mx-auto text-center" : ""}`}
        data-wow-delay=".1s"
        style={{ maxWidth: width, marginBottom: mb }}
      >
        <h2 className="mb-4 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-4xl w-full">
          {title}
        </h2>
        <h4 className="mb-4 text-xl font-bold !leading-tight text-black dark:text-white sm:text-xl md:text-xl">
          {paragraph}
        </h4>
      </div>
    </>
  );
};

export default SectionTitle;
