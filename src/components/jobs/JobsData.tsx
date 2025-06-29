import { Blog } from "@/types/blog";
import { Job } from "@/types/job";

const jobsdata: Job[] = [
  {
    id: 1,
    title: "Тооцооны нягтлан бодогч",
    paragraph:
      "Санхүүгийн анхан шатны баримт бүртгэх, Орлого зарлагын бүртгэл хийх, Ажлын байрны тодорхойлолтод заагдсан бусад ажил үүрэг",
    image: "/images/job/Accountant-Hero-1.jpg",
    author: {
      name: "Samuyl Joshi",
      image: "/images/blog/author-01.png",
      designation: "Graphic Designer",
    },
    tags: ["Accountant"],
    publishDate: "2025",
  },
  {
    id: 2,
    title: "9 simple ways to improve your design skills",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.",
    image: "/images/blog/blog-02.jpg",
    author: {
      name: "Musharof Chy",
      image: "/images/blog/author-02.png",
      designation: "Content Writer",
    },
    tags: ["computer"],
    publishDate: "2025",
  },
  {
    id: 3,
    title: "Tips to quickly improve your coding speed.",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.",
    image: "/images/blog/blog-03.jpg",
    author: {
      name: "Lethium Deo",
      image: "/images/blog/author-03.png",
      designation: "Graphic Designer",
    },
    tags: ["design"],
    publishDate: "2025",
  },
];
export default jobsdata;
