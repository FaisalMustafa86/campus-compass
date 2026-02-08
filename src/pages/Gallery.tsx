import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import { galleryItems, GalleryCategory } from "@/data/gallery";

const filters: { label: string; value: GalleryCategory }[] = [
  { label: "All", value: "all" },
  { label: "📷 Photos", value: "photos" },
  { label: "🎬 Videos", value: "videos" },
  { label: "🎉 Events", value: "events" },
];

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState<GalleryCategory>("all");
  const [lightboxItem, setLightboxItem] = useState<(typeof galleryItems)[0] | null>(null);

  const filteredItems = activeFilter === "all"
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeFilter);

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="bg-gradient-navy pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Campus Gallery"
            subtitle="Browse through photos, videos, and highlights from events that define the vibrant life at Prestige University."
            light
          />
        </div>
      </section>

      {/* Gallery */}
      <section className="section-padding bg-background">
        <div className="container-wide mx-auto">
          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            {filters.map((filter) => (
              <button
                key={filter.value}
                onClick={() => setActiveFilter(filter.value)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === filter.value
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "bg-secondary text-secondary-foreground hover:bg-muted"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item, i) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="group cursor-pointer"
                  onClick={() => setLightboxItem(item)}
                >
                  <div className="relative overflow-hidden rounded-xl shadow-md card-hover aspect-[4/3]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {item.category === "videos" && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-12 h-12 rounded-full bg-accent/90 flex items-center justify-center shadow-lg">
                          <Play className="w-5 h-5 text-accent-foreground ml-0.5" />
                        </div>
                      </div>
                    )}

                    <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-primary-foreground font-semibold text-sm">{item.title}</h3>
                      {item.date && (
                        <p className="text-primary-foreground/70 text-xs mt-1">{item.date}</p>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/80 backdrop-blur-md"
            onClick={() => setLightboxItem(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setLightboxItem(null)}
                className="absolute -top-12 right-0 w-10 h-10 rounded-full bg-card flex items-center justify-center hover:bg-muted transition-colors shadow-md"
              >
                <X className="w-5 h-5 text-card-foreground" />
              </button>

              {lightboxItem.videoUrl ? (
                <div className="rounded-2xl overflow-hidden aspect-video">
                  <iframe
                    src={lightboxItem.videoUrl}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title={lightboxItem.title}
                  />
                </div>
              ) : (
                <div className="rounded-2xl overflow-hidden">
                  <img
                    src={lightboxItem.image}
                    alt={lightboxItem.title}
                    className="w-full h-auto max-h-[80vh] object-contain bg-card"
                  />
                </div>
              )}

              <div className="mt-4 text-center">
                <h3 className="text-primary-foreground font-heading text-xl font-semibold">
                  {lightboxItem.title}
                </h3>
                {lightboxItem.date && (
                  <p className="text-primary-foreground/60 text-sm mt-1">{lightboxItem.date}</p>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default Gallery;
