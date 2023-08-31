"use client"
/* 
import { useCallback } from "react"; */
import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
export const dynamic = 'force-dynamic'
const Features = () => {

  const searchParams = useSearchParams()!
 /*  const createQueryString = useCallback(
    (name: string, value: number) => {
      const params = new URLSearchParams(searchParams)
      const id= value.toString();
      params.set(name, id)
 
      return params.toString()
    },
    [searchParams]
  ) */
  return (
    <>
      <section
        id="features"
        className="bg-white dark:bg-dark py-5 md:py-16 lg:py-20"
      >
        <div className="container">
          <SectionTitle
            title="Nuestros Servicios"
            paragraph=""
            center
            mb="50px"
          />

          <div className="grid grid-cols-1 gap-x-4 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((feature) => (
              <Link key={feature.id} href={`/services/${feature.id}`}>
                <SingleFeature feature={feature} />
            </Link>
            ))}

          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
