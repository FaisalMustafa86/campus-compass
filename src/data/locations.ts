const BASE = "https://qasgdwxoetlbvuzttgma.supabase.co/storage/v1/object/public/uniimages";
const img = (name: string) => `${BASE}/${name}`;

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
    shortDescription: "Situated in Sector I-12, Islamabad — a modern, purpose-built campus for technology-driven learning.",
    fullDescription: "NUtech's main campus is located in Sector I-12, Islamabad, spanning a modern purpose-built facility designed to inspire innovation and collaboration. The campus features state-of-the-art academic blocks, green spaces, and dedicated zones for learning, research, and recreation. As the 'University for Industry', the campus environment reflects NUtech's commitment to bridging academia and the industrial world.",
    image: img("main.JPG"),
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    highlights: ["Sector I-12, Islamabad", "Purpose-built technology campus", "Academia-industry environment", "Modern academic infrastructure"],
    icon: "🏛️",
  },
  {
    id: "classrooms",
    name: "Smart Classrooms",
    shortDescription: "Technology-enabled classrooms designed for interactive and hybrid learning experiences.",
    fullDescription: "NUtech's smart classrooms are equipped with the latest audiovisual and digital technologies to support both in-person and hybrid learning. Each classroom features high-definition projection systems, interactive boards, and ergonomic seating arrangements. The rooms are designed to facilitate collaborative learning aligned with NUtech's industry-focused curriculum.",
    image: img("class1.JPG"),
    highlights: ["HD projection systems", "Interactive whiteboards", "Hybrid learning support", "Industry-aligned curriculum delivery"],
    icon: "📚",
  },
  {
    id: "labs",
    name: "Research & Teaching Labs",
    shortDescription: "Cutting-edge labs across engineering, technology, and applied sciences for hands-on learning.",
    fullDescription: "NUtech houses an extensive range of specialized laboratories including Computer Labs, Biology, Chemistry, Physics, Civil Engineering, Electrical Machines & Power Electronics, Fluid Mechanics, Thermodynamics, Instrumentation & Control, and Mechanics of Materials Labs. These facilities provide students with real-world research and practical exposure aligned with industry requirements.",
    image: img("computerLab1.JPG"),
    highlights: ["Computer & IT Labs", "Electrical & Electronics Labs", "Civil & Mechanical Engineering Labs", "Biology, Chemistry & Physics Labs"],
    icon: "🔬",
  },
  {
    id: "library",
    name: "Central Library",
    shortDescription: "A well-resourced library offering thousands of volumes, digital databases, and quiet study spaces.",
    fullDescription: "The NUtech Central Library serves as the intellectual backbone of the university, providing students and faculty with access to a comprehensive collection of books, journals, and digital resources. With comfortable reading areas, private study carrels, and digital access terminals, the library supports both independent research and group study.",
    image: img("library1.JPG"),
    highlights: ["Extensive book & journal collection", "Digital resource databases", "24/7 study spaces", "Research support services"],
    icon: "📖",
  },
  {
    id: "cafeteria",
    name: "University Cafeteria",
    shortDescription: "A welcoming dining hub offering a variety of fresh meals and beverages for students and staff.",
    fullDescription: "The NUtech cafeteria provides a vibrant dining environment where students and staff can enjoy a variety of freshly prepared meals throughout the day. With multiple food stations, hygienic preparation standards, and comfortable seating, the cafeteria doubles as a social hub for the university community. It supports students' well-being by ensuring access to nutritious and affordable food options.",
    image: img("cafe1.JPG"),
    highlights: ["Diverse menu options", "Affordable meals", "Hygienic standards", "Social dining environment"],
    icon: "🍽️",
  },
  {
    id: "hostels",
    name: "Student Residences",
    shortDescription: "On-campus hostel facilities offering a safe, comfortable, and community-oriented living experience.",
    fullDescription: "NUtech's student residences provide a home away from home with well-furnished rooms, a communal mess hall, and a secure environment. The hostels are designed to support student life with comfortable accommodations, study-friendly spaces, and easy campus access. The mess facility provides nutritious meals to resident students throughout the week.",
    image: img("hostel1.JPG"),
    highlights: ["Well-furnished rooms", "On-campus mess facility", "Secure & monitored environment", "Easy campus access"],
    icon: "🏠",
  },
  {
    id: "sports",
    name: "Sports & Fitness",
    shortDescription: "Modern gym and sports courts to keep students active and promote a healthy lifestyle.",
    fullDescription: "NUtech is committed to holistic student development through its sports and fitness facilities. The campus features a fully equipped gymnasium for strength training and cardio workouts, along with tennis courts for recreational and competitive play. These facilities encourage students to maintain an active lifestyle alongside their academic pursuits.",
    image: img("gym1.JPG"),
    highlights: ["Fully equipped gymnasium", "Tennis courts", "Fitness training programs", "Student sports events"],
    icon: "⚽",
  },
  {
    id: "auditorium",
    name: "Auditorium",
    shortDescription: "A grand multi-purpose auditorium for convocations, seminars, and cultural events.",
    fullDescription: "The NUtech Auditorium is a state-of-the-art facility designed to host large-scale events including convocations, national conferences, cultural programs, and industrial seminars. With tiered seating, professional audio-visual systems, and a grand stage, the auditorium provides an inspiring setting for both academic and extra-curricular milestones.",
    image: img("auditorium1.JPG"),
    highlights: ["Large seating capacity", "Professional AV systems", "Grand stage & lighting", "Multi-purpose event hall"],
    icon: "🎭",
  },
  {
    id: "neic",
    name: "NEIC Innovation Center",
    shortDescription: "NUtech's entrepreneurship and innovation hub fostering startups and tech ventures.",
    fullDescription: "The NUtech Entrepreneurship and Innovation Center (NEIC) is dedicated to nurturing the entrepreneurial spirit among students and faculty. It provides dedicated workspaces, mentorship programs, access to resources, and networking opportunities with industry leaders. NEIC bridges the gap between academic ideas and real-world business ventures, supporting NUtech's vision of being the 'University for Industry'.",
    image: img("neicEnterance.JPG"),
    highlights: ["Startup incubation support", "Industry mentorship", "Dedicated co-working spaces", "Innovation-focused programs"],
    icon: "💡",
  },
  {
    id: "mediacenter",
    name: "Media Studio",
    shortDescription: "A professional media studio for content creation, broadcasting, and digital media education.",
    fullDescription: "The NUtech Media Studio is a professional-grade facility equipped for video production, broadcasting, podcasting, and digital content creation. It supports both academic programs in media technology and university communications, providing students with hands-on experience using industry-standard equipment in a real production environment.",
    image: img("mediaStudio1.JPG"),
    highlights: ["Professional broadcast equipment", "Video & audio production", "Digital content creation", "Industry-standard studio setup"],
    icon: "🎬",
  },
  {
    id: "seminar",
    name: "Seminar Halls",
    shortDescription: "Dedicated seminar halls for workshops, guest lectures, and academic discussions.",
    fullDescription: "NUtech's seminar halls are versatile spaces designed for hosting workshops, guest lectures, departmental seminars, and academic presentations. Equipped with modern presentation tools and comfortable seating, these halls facilitate knowledge exchange between students, faculty, and industry professionals.",
    image: img("seminarHall1.JPG"),
    highlights: ["Modern presentation equipment", "Flexible seating arrangements", "Industry guest lecture venue", "Departmental seminar space"],
    icon: "🎓",
  },
  {
    id: "medical",
    name: "Medical Center",
    shortDescription: "On-campus medical facility and ambulance service ensuring student health and safety.",
    fullDescription: "NUtech's on-campus medical center provides first-aid services, health consultations, and emergency care to ensure the well-being of the student and staff community. The university maintains a dedicated ambulance service for emergency response, reflecting its commitment to a safe and healthy campus environment.",
    image: img("ambulance1.JPG"),
    highlights: ["On-campus medical staff", "Emergency ambulance service", "First-aid & health consultations", "24/7 emergency response"],
    icon: "🏥",
  },
];
