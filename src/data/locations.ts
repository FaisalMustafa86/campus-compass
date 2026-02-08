import campusImg from "@/assets/tour-campus.jpg";
import classroomImg from "@/assets/tour-classroom.jpg";
import labImg from "@/assets/tour-lab.jpg";
import libraryImg from "@/assets/tour-library.jpg";
import cafeteriaImg from "@/assets/tour-cafeteria.jpg";
import hostelImg from "@/assets/tour-hostel.jpg";
import sportsImg from "@/assets/tour-sports.jpg";

export interface TourLocation {
  id: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  videoUrl?: string;
  highlights: string[];
  icon: string;
}

export const tourLocations: TourLocation[] = [
  {
    id: "campus",
    name: "Main Campus",
    shortDescription: "The heart of our university with stunning architecture and green spaces.",
    fullDescription: "Our main campus spans over 200 acres of beautifully landscaped grounds, blending classical architecture with modern facilities. The central quad features a historic fountain surrounded by century-old oak trees, creating a serene atmosphere for study and reflection. Walking paths connect all major buildings, and the campus is home to numerous sculptures and art installations.",
    image: campusImg,
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    highlights: ["200+ acres of campus", "Historic fountain & quad", "Award-winning architecture", "Sustainable green spaces"],
    icon: "🏛️",
  },
  {
    id: "classrooms",
    name: "Smart Classrooms",
    shortDescription: "State-of-the-art lecture halls equipped with the latest technology.",
    fullDescription: "Our smart classrooms feature tiered amphitheater-style seating with individual power outlets and USB ports at every desk. Each room is equipped with 4K projectors, surround sound systems, and interactive whiteboard technology. The rooms support hybrid learning with multiple cameras and high-quality microphones for remote students.",
    image: classroomImg,
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    highlights: ["4K projection systems", "Hybrid learning support", "200+ seat capacity", "Individual power outlets"],
    icon: "📚",
  },
  {
    id: "labs",
    name: "Research Labs",
    shortDescription: "Cutting-edge research facilities for innovation and discovery.",
    fullDescription: "Our research laboratories are at the forefront of scientific discovery. From advanced computing clusters to biomedical research suites, our labs provide students and faculty with the tools they need to push the boundaries of knowledge. The facility includes dedicated spaces for AI research, robotics, material science, and environmental studies.",
    image: labImg,
    highlights: ["AI & Robotics Lab", "Biomedical Research Suite", "High-performance computing", "$50M in research equipment"],
    icon: "🔬",
  },
  {
    id: "library",
    name: "Central Library",
    shortDescription: "A grand repository of knowledge with millions of volumes and digital resources.",
    fullDescription: "The Central Library is the intellectual heart of our university. With over 2 million physical volumes and access to 500+ digital databases, it provides unparalleled research resources. The building features a stunning reading hall with soaring ceilings, private study pods, collaborative workspaces, and a rare books collection dating back to the 15th century.",
    image: libraryImg,
    highlights: ["2M+ books & journals", "500+ digital databases", "24/7 study spaces", "Rare books collection"],
    icon: "📖",
  },
  {
    id: "cafeteria",
    name: "University Cafeteria",
    shortDescription: "A vibrant dining space offering diverse cuisines from around the world.",
    fullDescription: "Our modern cafeteria serves as both a dining destination and social hub. With multiple food stations offering international cuisine, vegetarian and vegan options, and a specialty coffee bar, there's something for everyone. The space features an open-air terrace with campus views, indoor garden elements, and comfortable lounge seating for casual meetings.",
    image: cafeteriaImg,
    highlights: ["International cuisine", "Vegan & allergy-friendly", "Open-air terrace", "Specialty coffee bar"],
    icon: "🍽️",
  },
  {
    id: "hostels",
    name: "Student Residences",
    shortDescription: "Comfortable and modern living spaces designed for student life.",
    fullDescription: "Our student residences offer a home away from home with modern amenities and a vibrant community atmosphere. Options range from single rooms to shared suites, each with high-speed internet, climate control, and access to communal kitchens, study rooms, and recreation areas. The residences are designed to foster community while respecting privacy.",
    image: hostelImg,
    highlights: ["Single & shared options", "High-speed WiFi", "Community lounges", "24/7 security"],
    icon: "🏠",
  },
  {
    id: "sports",
    name: "Sports Complex",
    shortDescription: "World-class athletic facilities for fitness and competitive sports.",
    fullDescription: "The Sports Complex is a premier athletic facility featuring an Olympic-sized swimming pool, indoor courts for basketball, volleyball, and badminton, a fully equipped gymnasium, and outdoor fields for football, cricket, and athletics. The complex also includes a sports medicine center and hosts inter-university championships throughout the year.",
    image: sportsImg,
    highlights: ["Olympic swimming pool", "Indoor sports courts", "Athletics track", "Fitness center"],
    icon: "⚽",
  },
];
