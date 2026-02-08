import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { TourLocation } from "@/data/locations";

interface LocationCardProps {
  location: TourLocation;
  index: number;
  onClick: (location: TourLocation) => void;
}

const LocationCard = ({ location, index, onClick }: LocationCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group cursor-pointer"
      onClick={() => onClick(location)}
    >
      <div className="relative overflow-hidden rounded-xl bg-card shadow-md card-hover">
        {/* Image */}
        <div className="relative h-56 overflow-hidden">
          <img
            src={location.image}
            alt={location.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
          <span className="absolute top-4 left-4 text-3xl">{location.icon}</span>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="font-heading text-xl font-bold text-card-foreground mb-2 group-hover:text-accent transition-colors">
            {location.name}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed mb-4">
            {location.shortDescription}
          </p>
          <div className="flex items-center gap-2 text-accent font-medium text-sm">
            <span>Explore</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default LocationCard;
