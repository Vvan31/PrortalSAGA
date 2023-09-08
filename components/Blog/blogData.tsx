import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "¿Qué es SAGA?",
    paragraph:
      "Red articulada de procesos digitales basada en Inteligencia Artificial que controla la gestión documental y los archivos de las Dependencias.",
    image: "/images/blog/blog1.jpg",
    author: {
      name: "Samuyl Joshi",
      image: "/images/blog/author-01.png",
      designation: "Archivo General de la Nación",
    },
    tags: ["Blog"],
    publishDate: "04 de agosto de 2023",
  },
  {
    id: 2,
    title: "Corrido de la muerte de Pancho villa, ca. 1924",
    paragraph:
      "Los corridos revolucionarios sirvieron para inmortalizar la vida y las hazañas de los personajes más importantes de la revolución. En el caso de este corrido dedicado a Francisco Villa se menciona su destreza en la guerra y su lealtad a Francisco I. Madero, también se destacan algunas batallas importantes, como la toma de Zacatecas y la invasión a Columbus, y el fracaso de la expedición punitiva encabezada por John J. Pershing para capturar a Villa.",
    image: "/images/blog/blog2.jpg",
    tags: ["Evento"],
    publishDate: "23 de abril de 2017 - 23:00 hrs.",
  },
  {
    id: 3,
    title: "Primer número de Regeneración, 7 de agosto de 1900",
    paragraph:
      "El periódico Regeneración nació de la mano de los hermanos Jesús y Ricardo Flores Magón con la finalidad de denunciar toda negligencia o abuso de poder de los funcionarios a cargo de la impartición de justicia del régimen porfirista. No obstante, el periódico poco a poco fue denunciando los abusos de otros personajes protegidos del régimen. Esto ocasionó que Jesús y Ricardo fueran amenazados de muerte y encarcelados en la prisión de Belén.",
    image: "/images/blog/blog3.jpg",
    author: {
      name: "Lethium Deo",
      image: "/images/blog/author-03.png",
      designation: "Archivo General de la Nación",
    },
    tags: ["Blog"],
    publishDate: " 01 de junio de 2023",
  },
];
export default blogData;
