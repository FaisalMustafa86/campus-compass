const BASE = "https://qasgdwxoetlbvuzttgma.supabase.co/storage/v1/object/public/uniimages";
const img = (name: string) => `${BASE}/${name}`;

export type GalleryGroupCategory = "all" | "campus" | "labs" | "facilities" | "videos" | "events";

export interface GalleryGroup {
  id: string;
  name: string;
  category: Exclude<GalleryGroupCategory, "all">;
  coverImage: string;
  images: { src: string; caption?: string }[];
  videoUrl?: string;
  icon: string;
}

export const galleryGroups: GalleryGroup[] = [
  // ── Campus ──────────────────────────────────────────────────────────────────
  {
    id: "main-campus",
    name: "Main Campus",
    category: "campus",
    icon: "🏛️",
    coverImage: img("main.JPG"),
    images: [
      { src: img("main.JPG"), caption: "Main Campus Entrance" },
      { src: img("newCampus2.JPG"), caption: "Campus Building" },
      { src: img("newCampus3.JPG"), caption: "Campus Grounds" },
      { src: img("newCampus4.JPG"), caption: "Campus View" },
      { src: img("02.JPG"), caption: "Campus Area" },
      { src: img("03.JPG"), caption: "Campus Exterior" },
    ],
  },

  // ── Labs ─────────────────────────────────────────────────────────────────────
  {
    id: "computer-labs",
    name: "Computer Labs",
    category: "labs",
    icon: "💻",
    coverImage: img("computerLab1.JPG"),
    images: [
      { src: img("computerLab1.JPG"), caption: "Computer Lab — Row 1" },
      { src: img("computerLab2.JPG"), caption: "Computer Lab — Row 2" },
      { src: img("compputerLab.JPG"), caption: "Computer Lab — Overview" },
    ],
  },
  {
    id: "biology-lab",
    name: "Biology Lab",
    category: "labs",
    icon: "🧬",
    coverImage: img("BiologyLab1.JPG"),
    images: [
      { src: img("BiologyLab1.JPG"), caption: "Biology Lab — Station 1" },
      { src: img("BiologyLab2.JPG"), caption: "Biology Lab — Station 2" },
      { src: img("BiologyLab3.JPG"), caption: "Biology Lab — Station 3" },
      { src: img("BiologyLab4.JPG"), caption: "Biology Lab — Overview" },
    ],
  },
  {
    id: "chemistry-lab",
    name: "Chemistry Lab",
    category: "labs",
    icon: "⚗️",
    coverImage: img("chemistryLab1.JPG"),
    images: [
      { src: img("chemistryLab1.JPG"), caption: "Chemistry Lab — Benches" },
      { src: img("chemistryLab2.JPG"), caption: "Chemistry Lab — Equipment" },
      { src: img("chemistryLab3.JPG"), caption: "Chemistry Lab — Overview" },
      { src: img("chemistryLab4.JPG"), caption: "Chemistry Lab — Detail" },
    ],
  },
  {
    id: "physics-lab",
    name: "Physics Lab",
    category: "labs",
    icon: "🔭",
    coverImage: img("physicsLab1.JPG"),
    images: [
      { src: img("physicsLab1.JPG"), caption: "Physics Lab — Apparatus" },
      { src: img("physicsLab2.JPG"), caption: "Physics Lab — Experiments" },
      { src: img("physicsLab3.JPG"), caption: "Physics Lab — Overview" },
    ],
  },
  {
    id: "civil-lab",
    name: "Civil Engineering Lab",
    category: "labs",
    icon: "🏗️",
    coverImage: img("civilLab1.JPG"),
    images: [
      { src: img("civilLab1.JPG"), caption: "Civil Lab — Equipment" },
      { src: img("civilLab2.JPG"), caption: "Civil Lab — Testing" },
      { src: img("civilLab3.JPG"), caption: "Civil Lab — Materials" },
      { src: img("civilLab4.JPG"), caption: "Civil Lab — Overview" },
    ],
  },
  {
    id: "electrical-lab",
    name: "Electrical Machines & Power Electronics Lab",
    category: "labs",
    icon: "⚡",
    coverImage: img("electricalMachineAndPowerElectronicsLab1.JPG"),
    images: [
      { src: img("electricalMachineAndPowerElectronicsLab1.JPG"), caption: "Electrical Lab — Machines" },
      { src: img("electricalMachineAndPowerElectronicsLab2.JPG"), caption: "Electrical Lab — Power Electronics" },
      { src: img("electricalMachineAndPowerElectronicsLab3.JPG"), caption: "Electrical Lab — Panels" },
      { src: img("electricalMachineAndPowerElectronicsLab4.JPG"), caption: "Electrical Lab — Workstations" },
      { src: img("electricalMachineAndPowerElectronicsLab5.JPG"), caption: "Electrical Lab — Overview" },
    ],
  },
  {
    id: "electro-comm-lab",
    name: "Electro Communications & Micro Lab",
    category: "labs",
    icon: "📡",
    coverImage: img("electroCommunicationsAndMicroLab1.JPG"),
    images: [
      { src: img("electroCommunicationsAndMicroLab1.JPG"), caption: "Electro Comm Lab — Setup" },
      { src: img("electroCommunicationsAndMicroLab2.JPG"), caption: "Electro Comm Lab — Instruments" },
      { src: img("electroCommunicationsAndMicroLab3.JPG"), caption: "Electro Comm Lab — Overview" },
    ],
  },
  {
    id: "fluid-mechanics-lab",
    name: "Fluid Mechanics Lab",
    category: "labs",
    icon: "🌊",
    coverImage: img("fluidMechanicsLab1.JPG"),
    images: [
      { src: img("fluidMechanicsLab1.JPG"), caption: "Fluid Mechanics — Apparatus" },
      { src: img("fluidMechanicsLab2.JPG"), caption: "Fluid Mechanics — Testing Rigs" },
      { src: img("fluidMechanicsLab3.JPG"), caption: "Fluid Mechanics — Overview" },
    ],
  },
  {
    id: "thermodynamics-lab",
    name: "Thermodynamics Lab",
    category: "labs",
    icon: "🌡️",
    coverImage: img("thermodynamicsLab1.JPG"),
    images: [
      { src: img("thermodynamicsLab1.JPG"), caption: "Thermodynamics — Equipment" },
      { src: img("thermodynamicsLab2.JPG"), caption: "Thermodynamics — Heat Exchangers" },
      { src: img("thermodynamicsLab3.JPG"), caption: "Thermodynamics — Overview" },
    ],
  },
  {
    id: "instrumentation-lab",
    name: "Instrumentation & Control Lab",
    category: "labs",
    icon: "🎛️",
    coverImage: img("instrumentationAndControlLab1.JPG"),
    images: [
      { src: img("instrumentationAndControlLab1.JPG"), caption: "Instrumentation Lab — Controllers" },
      { src: img("instrumentationAndControlLab2.JPG"), caption: "Instrumentation Lab — Overview" },
    ],
  },
  {
    id: "mechanics-lab",
    name: "Mechanics of Materials Lab",
    category: "labs",
    icon: "🔩",
    coverImage: img("mechanicsOfMaterialsLab1.JPG"),
    images: [
      { src: img("mechanicsOfMaterialsLab1.JPG"), caption: "Mechanics Lab — Testing" },
      { src: img("mechanicsOfMaterialsLab2.JPG"), caption: "Mechanics Lab — Equipment" },
      { src: img("mechanicsOfMaterialsLab3.JPG"), caption: "Mechanics Lab — Specimens" },
      { src: img("mechanicsOfMaterialsLab4.JPG"), caption: "Mechanics Lab — Overview" },
    ],
  },

  // ── Facilities ───────────────────────────────────────────────────────────────
  {
    id: "library",
    name: "Central Library",
    category: "facilities",
    icon: "📖",
    coverImage: img("library1.JPG"),
    images: [
      { src: img("library1.JPG"), caption: "Library — Main Hall" },
      { src: img("library2.JPG"), caption: "Library — Reading Area" },
      { src: img("library3.JPG"), caption: "Library — Shelves" },
      { src: img("library4.JPG"), caption: "Library — Study Zone" },
      { src: img("library5.JPG"), caption: "Library — Resources" },
      { src: img("library6.JPG"), caption: "Library — Overview" },
    ],
  },
  {
    id: "cafeteria",
    name: "University Cafeteria",
    category: "facilities",
    icon: "🍽️",
    coverImage: img("cafe1.JPG"),
    images: [
      { src: img("cafe1.JPG"), caption: "Cafeteria — Dining Area" },
      { src: img("cafe2.JPG"), caption: "Cafeteria — Food Stations" },
      { src: img("cafe3.JPG"), caption: "Cafeteria — Seating" },
      { src: img("cafe4.JPG"), caption: "Cafeteria — Counter" },
      { src: img("cafe5.JPG"), caption: "Cafeteria — Interior" },
      { src: img("cafe6.JPG"), caption: "Cafeteria — Overview" },
      { src: img("cafe7.JPG"), caption: "Cafeteria — Exterior" },
    ],
  },
  {
    id: "hostels",
    name: "Student Residences",
    category: "facilities",
    icon: "🏠",
    coverImage: img("hostel1.JPG"),
    images: [
      { src: img("hostel1.JPG"), caption: "Hostel — Building" },
      { src: img("hostel2.JPG"), caption: "Hostel — Exterior" },
      { src: img("hostelRoom.JPG"), caption: "Hostel — Standard Room" },
      { src: img("hostelRoom1.JPG"), caption: "Hostel — Room Interior" },
      { src: img("hostelRoom2.JPG"), caption: "Hostel — Room Detail" },
      { src: img("hostelMess.JPG"), caption: "Hostel — Mess Hall" },
    ],
  },
  {
    id: "gym",
    name: "Gymnasium",
    category: "facilities",
    icon: "🏋️",
    coverImage: img("gym1.JPG"),
    images: [
      { src: img("gym1.JPG"), caption: "Gym — Fitness Floor" },
      { src: img("gym2.JPG"), caption: "Gym — Equipment" },
      { src: img("gym3.JPG"), caption: "Gym — Weights Area" },
      { src: img("gym4.JPG"), caption: "Gym — Overview" },
    ],
  },
  {
    id: "tennis",
    name: "Tennis Courts",
    category: "facilities",
    icon: "🎾",
    coverImage: img("tennis1.JPG"),
    images: [
      { src: img("tennis1.JPG"), caption: "Tennis Court — View 1" },
      { src: img("tennis2.JPG"), caption: "Tennis Court — View 2" },
      { src: img("tennis3.JPG"), caption: "Tennis Court — Overview" },
    ],
  },
  {
    id: "auditorium",
    name: "Auditorium",
    category: "facilities",
    icon: "🎭",
    coverImage: img("auditorium1.JPG"),
    images: [
      { src: img("auditorium1.JPG"), caption: "Auditorium — Stage" },
      { src: img("auditorium2.JPG"), caption: "Auditorium — Seating" },
      { src: img("auditorium3.JPG"), caption: "Auditorium — Hall" },
      { src: img("auditorium4.JPG"), caption: "Auditorium — Overview" },
    ],
  },
  {
    id: "neic",
    name: "NEIC Innovation Center",
    category: "facilities",
    icon: "💡",
    coverImage: img("neicEnterance.JPG"),
    images: [
      { src: img("neicEnterance.JPG"), caption: "NEIC — Entrance" },
      { src: img("neicHallway.JPG"), caption: "NEIC — Hallway" },
      { src: img("neicHallway2.JPG"), caption: "NEIC — Corridor" },
      { src: img("neic1.JPG"), caption: "NEIC — Workspace 1" },
      { src: img("neic2.JPG"), caption: "NEIC — Workspace 2" },
      { src: img("neic3.JPG"), caption: "NEIC — Workspace 3" },
      { src: img("neic4.JPG"), caption: "NEIC — Workspace 4" },
      { src: img("neic5.JPG"), caption: "NEIC — Workspace 5" },
      { src: img("neic6.JPG"), caption: "NEIC — Area 6" },
      { src: img("neic7.JPG"), caption: "NEIC — Overview" },
    ],
  },
  {
    id: "media-studio",
    name: "Media Studio",
    category: "facilities",
    icon: "🎬",
    coverImage: img("mediaStudio1.JPG"),
    images: [
      { src: img("mediaStudio1.JPG"), caption: "Media Studio — Set" },
      { src: img("mediaStudio2.JPG"), caption: "Media Studio — Equipment" },
      { src: img("mediaStudio3.JPG"), caption: "Media Studio — Control Room" },
      { src: img("mediaStudio4.JPG"), caption: "Media Studio — Overview" },
    ],
  },
  {
    id: "seminar-hall",
    name: "Seminar Halls",
    category: "facilities",
    icon: "🎓",
    coverImage: img("seminarHall1.JPG"),
    images: [
      { src: img("seminarHall1.JPG"), caption: "Seminar Hall — Seating" },
      { src: img("seminarHall2.JPG"), caption: "Seminar Hall — Podium" },
    ],
  },
  {
    id: "medical",
    name: "Medical Center",
    category: "facilities",
    icon: "🏥",
    coverImage: img("ambulance1.JPG"),
    images: [
      { src: img("ambulance1.JPG"), caption: "Medical — Ambulance 1" },
      { src: img("ambulance2.JPG"), caption: "Medical — Ambulance 2" },
      { src: img("ambulance3.JPG"), caption: "Medical — Ambulance 3" },
      { src: img("ambulance4.JPG"), caption: "Medical — Ambulance 4" },
    ],
  },
  {
    id: "fire-safety",
    name: "Fire & Safety",
    category: "facilities",
    icon: "🚒",
    coverImage: img("fire1.JPG"),
    images: [
      { src: img("fire1.JPG"), caption: "Fire Safety — Unit 1" },
      { src: img("fire2.JPG"), caption: "Fire Safety — Unit 2" },
      { src: img("fire3.JPG"), caption: "Fire Safety — Unit 3" },
    ],
  },

  // ── Videos ───────────────────────────────────────────────────────────────────
  {
    id: "video-campus-tour",
    name: "Campus Tour",
    category: "videos",
    icon: "🎥",
    coverImage: img("main.JPG"),
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    images: [{ src: img("main.JPG") }],
  },
  {
    id: "video-lab-showcase",
    name: "Lab Showcase",
    category: "videos",
    icon: "🎥",
    coverImage: img("computerLab1.JPG"),
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    images: [{ src: img("computerLab1.JPG") }],
  },
  {
    id: "video-neic",
    name: "NEIC Innovation Center",
    category: "videos",
    icon: "🎥",
    coverImage: img("neicEnterance.JPG"),
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    images: [{ src: img("neicEnterance.JPG") }],
  },

  // ── Events ───────────────────────────────────────────────────────────────────
  {
    id: "event-convocation",
    name: "Annual Convocation",
    category: "events",
    icon: "🎓",
    coverImage: img("auditorium1.JPG"),
    images: [
      { src: img("auditorium1.JPG"), caption: "Convocation — Hall Setup" },
      { src: img("auditorium2.JPG"), caption: "Convocation — Ceremony" },
    ],
  },
  {
    id: "event-symposium",
    name: "Industrial Symposium 2026",
    category: "events",
    icon: "🏭",
    coverImage: img("seminarHall1.JPG"),
    images: [
      { src: img("seminarHall1.JPG"), caption: "Symposium — Session" },
      { src: img("seminarHall2.JPG"), caption: "Symposium — Speakers" },
    ],
  },
  {
    id: "event-pafiic",
    name: "PAFIIC Graduation",
    category: "events",
    icon: "🌍",
    coverImage: img("auditorium2.JPG"),
    images: [
      { src: img("auditorium2.JPG"), caption: "PAFIIC — Ceremony" },
      { src: img("auditorium3.JPG"), caption: "PAFIIC — Graduates" },
    ],
  },
];
