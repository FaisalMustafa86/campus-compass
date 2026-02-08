import { motion, AnimatePresence } from "framer-motion";
import { X, Check, Play } from "lucide-react";
import { useState } from "react";
import type { TourLocation } from "@/data/locations";
import { Button } from "@/components/ui/button";

interface LocationDetailProps {
  location: TourLocation | null;
  onClose: () => void;
}

const LocationDetail = ({ location, onClose }: LocationDetailProps) => {
  const [showVideo, setShowVideo] = useState(false);

  if (!location) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/60 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ duration: 0.3 }}
          className="bg-card rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Image / Video */}
          <div className="relative h-64 md:h-80 overflow-hidden rounded-t-2xl">
            {showVideo && location.videoUrl ? (
              <iframe
                src={location.videoUrl}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={location.name}
              />
            ) : (
              <>
                <img
                  src={location.image}
                  alt={location.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                {location.videoUrl && (
                  <button
                    onClick={() => setShowVideo(true)}
                    className="absolute inset-0 flex items-center justify-center group"
                  >
                    <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Play className="w-7 h-7 text-accent-foreground ml-1" />
                    </div>
                  </button>
                )}
              </>
            )}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-card/90 backdrop-blur-sm flex items-center justify-center hover:bg-card transition-colors shadow-md"
            >
              <X className="w-5 h-5 text-card-foreground" />
            </button>
          </div>

          {/* Content */}
          <div className="p-6 md:p-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">{location.icon}</span>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-card-foreground">
                {location.name}
              </h2>
            </div>

            <p className="text-muted-foreground leading-relaxed mb-6">
              {location.fullDescription}
            </p>

            {/* Highlights */}
            <div className="space-y-3">
              <h4 className="font-heading font-semibold text-lg text-card-foreground">Highlights</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {location.highlights.map((highlight, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-accent shrink-0" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {showVideo && (
              <Button
                onClick={() => setShowVideo(false)}
                variant="outline"
                className="mt-6"
              >
                Back to Image
              </Button>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default LocationDetail;
