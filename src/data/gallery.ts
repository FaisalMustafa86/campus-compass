const BASE = "https://qasgdwxoetlbvuzttgma.supabase.co/storage/v1/object/public/uniimages";
const img = (name: string) => `${BASE}/${name}`;

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
  // Photos
  { id: "1", title: "Main Campus Entrance", category: "photos", image: img("main.JPG") },
  { id: "2", title: "New Campus Building", category: "photos", image: img("newCampus2.JPG") },
  { id: "3", title: "Campus Grounds", category: "photos", image: img("newCampus3.JPG") },
  { id: "4", title: "Smart Classroom", category: "photos", image: img("class1.JPG") },
  { id: "5", title: "Computer Lab", category: "photos", image: img("computerLab1.JPG") },
  { id: "6", title: "Central Library", category: "photos", image: img("library1.JPG") },
  { id: "7", title: "Library Reading Area", category: "photos", image: img("library2.JPG") },
  { id: "8", title: "University Cafeteria", category: "photos", image: img("cafe1.JPG") },
  { id: "9", title: "Student Hostel", category: "photos", image: img("hostel1.JPG") },
  { id: "10", title: "Hostel Rooms", category: "photos", image: img("hostelRoom.JPG") },
  { id: "11", title: "Gymnasium", category: "photos", image: img("gym1.JPG") },
  { id: "12", title: "Tennis Courts", category: "photos", image: img("tennis1.JPG") },
  { id: "13", title: "Auditorium", category: "photos", image: img("auditorium1.JPG") },
  { id: "14", title: "Auditorium Hall", category: "photos", image: img("auditorium2.JPG") },
  { id: "15", title: "NEIC Innovation Center", category: "photos", image: img("neicEnterance.JPG") },
  { id: "16", title: "NEIC Workspace", category: "photos", image: img("neic1.JPG") },
  { id: "17", title: "Media Studio", category: "photos", image: img("mediaStudio1.JPG") },
  { id: "18", title: "Seminar Hall", category: "photos", image: img("seminarHall1.JPG") },
  { id: "19", title: "Biology Lab", category: "photos", image: img("BiologyLab1.JPG") },
  { id: "20", title: "Chemistry Lab", category: "photos", image: img("chemistryLab1.JPG") },
  { id: "21", title: "Physics Lab", category: "photos", image: img("physicsLab1.JPG") },
  { id: "22", title: "Civil Engineering Lab", category: "photos", image: img("civilLab1.JPG") },
  { id: "23", title: "Electrical Lab", category: "photos", image: img("electricalMachineAndPowerElectronicsLab1.JPG") },
  { id: "24", title: "Medical & Ambulance Service", category: "photos", image: img("ambulance1.JPG") },

  // Videos
  {
    id: "v1",
    title: "Campus Tour Walkthrough",
    category: "videos",
    image: img("main.JPG"),
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: "v2",
    title: "Lab Showcase",
    category: "videos",
    image: img("computerLab1.JPG"),
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: "v3",
    title: "NEIC Innovation Center",
    category: "videos",
    image: img("neicEnterance.JPG"),
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },

  // Events
  {
    id: "e1",
    title: "Annual Convocation",
    category: "events",
    image: img("auditorium1.JPG"),
    date: "March 2025",
  },
  {
    id: "e2",
    title: "Industrial Symposium 2026",
    category: "events",
    image: img("seminarHall1.JPG"),
    date: "February 12, 2026",
  },
  {
    id: "e3",
    title: "PAFIIC Graduation Ceremony",
    category: "events",
    image: img("auditorium2.JPG"),
    date: "February 13, 2026",
  },
  {
    id: "e4",
    title: "Sports Championship",
    category: "events",
    image: img("tennis1.JPG"),
    date: "January 2025",
  },
];
