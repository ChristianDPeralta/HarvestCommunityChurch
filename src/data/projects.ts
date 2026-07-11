export interface Project {
  id: number;
  title: string;
  description: string;
  summary: string;
  image: string;
  gallery: string[];
  category: string;
  date: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Educational Scholarship Program",
    category: "Education",
    summary: "Providing scholarships to 50+ Aeta students for quality education and future opportunities.",
    description: "Through our Educational Scholarship Program, we have empowered over 50 Aeta students with access to quality education. These scholarships cover tuition, materials, and support services that enable young minds to pursue their dreams and become leaders in their communities.",
    image: "/photo-collage.png",
    gallery: ["/photo-collage.png", "/1.jpg", "/photo-collage.png"],
    date: "2024-01-15"
  },
  {
    id: 2,
    title: "Vocational Skills Training",
    category: "Skills Training",
    summary: "Teaching practical trades and entrepreneurship to create sustainable income for families.",
    description: "Our Vocational Skills Training program equips individuals with practical knowledge in various trades including carpentry, agriculture, and small business management. Participants graduate with not just skills, but confidence and the tools to build sustainable livelihoods.",
    image: "/1.jpg",
    gallery: ["/1.jpg", "/photo-collage.png", "/1.jpg"],
    date: "2024-02-20"
  },
  {
    id: 3,
    title: "Community Cooperative Initiative",
    category: "Community Development",
    summary: "Building cooperative enterprises that generate income while strengthening community bonds.",
    description: "We have established community cooperatives that allow families to pool resources, share knowledge, and access markets together. These initiatives have doubled household incomes and created a strong support network within the Aeta communities.",
    image: "/photo-collage.png",
    gallery: ["/photo-collage.png", "/1.jpg", "/photo-collage.png", "/1.jpg"],
    date: "2024-03-10"
  },
  {
    id: 4,
    title: "Healthcare & Nutrition Support",
    category: "Social Support",
    summary: "Providing medical services and nutrition programs to ensure community wellbeing.",
    description: "Health and nutrition are fundamental to breaking the cycle of poverty. Our program provides regular medical checkups, nutrition counseling, and emergency healthcare support to ensure every member of the community can live a healthy, productive life.",
    image: "/1.jpg",
    gallery: ["/1.jpg", "/photo-collage.png"],
    date: "2024-04-05"
  }
];
