import campusImg from "@/assets/tour-campus.jpg";
import classroomImg from "@/assets/tour-classroom.jpg";
import labImg from "@/assets/tour-lab.jpg";
import libraryImg from "@/assets/tour-library.jpg";
import cafeteriaImg from "@/assets/tour-cafeteria.jpg";
import hostelImg from "@/assets/tour-hostel.jpg";
import sportsImg from "@/assets/tour-sports.jpg";
import heroImg from "@/assets/hero-campus.jpg";

export type GalleryCategory = "all" | "photos" | "videos" | "events";

export interface GalleryItem {
  id: string;
  title: string;
  category: "photos" | "videos" | "events";
  image: string;
  videoUrl?: string;
  date?: string;
}

export const galleryItems: GalleryItem[] = [
  { id: "1", title: "Campus Aerial View", category: "photos", image: heroImg },
  { id: "2", title: "Main Courtyard", category: "photos", image: campusImg },
  { id: "3", title: "Lecture in Progress", category: "photos", image: classroomImg },
  { id: "4", title: "Research Lab Session", category: "photos", image: labImg },
  { id: "5", title: "Library Reading Hall", category: "photos", image: libraryImg },
  { id: "6", title: "Cafeteria Life", category: "photos", image: cafeteriaImg },
  { id: "7", title: "Student Housing", category: "photos", image: hostelImg },
  { id: "8", title: "Athletics Track", category: "photos", image: sportsImg },
  {
    id: "9",
    title: "Campus Tour Walkthrough",
    category: "videos",
    image: campusImg,
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: "10",
    title: "Lab Showcase Video",
    category: "videos",
    image: labImg,
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: "11",
    title: "Student Life Documentary",
    category: "videos",
    image: hostelImg,
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: "12",
    title: "Annual Convocation 2025",
    category: "events",
    image: classroomImg,
    date: "March 15, 2025",
  },
  {
    id: "13",
    title: "Tech Fest: InnoVerse",
    category: "events",
    image: labImg,
    date: "January 20, 2025",
  },
  {
    id: "14",
    title: "Sports Championship",
    category: "events",
    image: sportsImg,
    date: "February 8, 2025",
  },
  {
    id: "15",
    title: "Cultural Night Celebration",
    category: "events",
    image: cafeteriaImg,
    date: "December 12, 2024",
  },
];
