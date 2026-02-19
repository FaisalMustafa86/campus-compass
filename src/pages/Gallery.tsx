import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X, ChevronLeft, ChevronRight, Images } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import { galleryGroups, GalleryGroup, GalleryGroupCategory } from "@/data/gallery";

const filters: { label: string; value: GalleryGroupCategory }[] = [
  { label: "All", value: "all" },
  { label: "🏛️ Campus", value: "campus" },
  { label: "🔬 Labs", value: "labs" },
  { label: "🏢 Facilities", value: "facilities" },
  { label: "🎬 Videos", value: "videos" },
  { label: "🎉 Events", value: "events" },
];

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState<GalleryGroupCategory>("all");
  const [activeGroup, setActiveGroup] = useState<GalleryGroup | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredGroups =
    activeFilter === "all"
      ? galleryGroups
      : galleryGroups.filter((g) => g.category === activeFilter);

  const openGroup = (group: GalleryGroup) => {
    if (group.videoUrl) {
      setActiveGroup(group);
      setLightboxIndex(null);
    } else {
      setActiveGroup(group);
      setLightboxIndex(null);
    }
  };

  const openLightbox = (group: GalleryGroup, idx: number) => {
    setActiveGroup(group);
    setLightboxIndex(idx);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const closeGroup = () => {
    setActiveGroup(null);
    setLightboxIndex(null);
  };

  const prevImage = () => {
    if (activeGroup && lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + activeGroup.images.length) % activeGroup.images.length);
    }
  };

  const nextImage = () => {
    if (activeGroup && lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % activeGroup.images.length);
    }
  };

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="bg-gradient-navy pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Campus Gallery"
            subtitle="Explore NUtech's facilities, labs, and campus life — organized by location and facility."
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
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === filter.value
                    ? "bg-primary text-primary-foreground shadow-lg scale-105"
                    : "bg-secondary text-secondary-foreground hover:bg-muted"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* Group Cards Grid */}
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredGroups.map((group, i) => (
                <motion.div
                  key={group.id}
                  layout
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.92 }}
                  transition={{ duration: 0.3, delay: i * 0.04 }}
                  className="group cursor-pointer"
                  onClick={() => openGroup(group)}
                >
                  <div className="relative overflow-hidden rounded-2xl shadow-md card-hover aspect-[4/3]">
                    <img
                      src={group.coverImage}
                      alt={group.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent" />

                    {/* Video play button */}
                    {group.category === "videos" && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-14 h-14 rounded-full bg-accent/90 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                          <Play className="w-6 h-6 text-accent-foreground ml-0.5" />
                        </div>
                      </div>
                    )}

                    {/* Bottom info */}
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-lg">{group.icon}</p>
                          <h3 className="text-primary-foreground font-heading font-semibold text-sm leading-tight mt-0.5">
                            {group.name}
                          </h3>
                        </div>
                        {group.category !== "videos" && (
                          <div className="flex items-center gap-1 bg-primary-foreground/20 backdrop-blur-sm rounded-full px-2.5 py-1">
                            <Images className="w-3 h-3 text-primary-foreground" />
                            <span className="text-primary-foreground text-xs font-medium">
                              {group.images.length}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* ── Group Modal (image grid) ─────────────────────────────────────────── */}
      <AnimatePresence>
        {activeGroup && lightboxIndex === null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-start justify-center bg-foreground/80 backdrop-blur-md overflow-y-auto py-8 px-4"
            onClick={closeGroup}
          >
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.96 }}
              transition={{ duration: 0.3 }}
              className="bg-card rounded-2xl shadow-2xl w-full max-w-5xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-border">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{activeGroup.icon}</span>
                  <div>
                    <h2 className="font-heading font-bold text-xl text-card-foreground">
                      {activeGroup.name}
                    </h2>
                    {activeGroup.category !== "videos" && (
                      <p className="text-muted-foreground text-sm">
                        {activeGroup.images.length} photo{activeGroup.images.length !== 1 ? "s" : ""}
                      </p>
                    )}
                  </div>
                </div>
                <button
                  onClick={closeGroup}
                  className="w-9 h-9 rounded-full bg-muted flex items-center justify-center hover:bg-secondary transition-colors"
                >
                  <X className="w-4 h-4 text-muted-foreground" />
                </button>
              </div>

              {/* Video embed */}
              {activeGroup.videoUrl ? (
                <div className="aspect-video">
                  <iframe
                    src={activeGroup.videoUrl}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title={activeGroup.name}
                  />
                </div>
              ) : (
                /* Image grid */
                <div className="p-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                  {activeGroup.images.map((img, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: idx * 0.04 }}
                      className="group/img relative aspect-square cursor-pointer overflow-hidden rounded-xl"
                      onClick={() => openLightbox(activeGroup, idx)}
                    >
                      <img
                        src={img.src}
                        alt={img.caption ?? activeGroup.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-110"
                      />
                      <div className="absolute inset-0 bg-primary/0 group-hover/img:bg-primary/40 transition-colors duration-300 flex items-end">
                        {img.caption && (
                          <p className="text-primary-foreground text-xs p-2 opacity-0 group-hover/img:opacity-100 transition-opacity">
                            {img.caption}
                          </p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Full-screen Lightbox ─────────────────────────────────────────────── */}
      <AnimatePresence>
        {activeGroup && lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/95"
            onClick={closeLightbox}
          >
            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="relative max-w-5xl w-full px-4"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close */}
              <button
                onClick={closeLightbox}
                className="absolute -top-12 right-4 w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <X className="w-5 h-5 text-white" />
              </button>

              {/* Image */}
              <img
                src={activeGroup.images[lightboxIndex].src}
                alt={activeGroup.images[lightboxIndex].caption ?? activeGroup.name}
                className="w-full h-auto max-h-[80vh] object-contain rounded-xl"
              />

              {/* Caption */}
              {activeGroup.images[lightboxIndex].caption && (
                <p className="text-white/60 text-sm text-center mt-3">
                  {activeGroup.images[lightboxIndex].caption}
                </p>
              )}

              {/* Counter */}
              <p className="text-white/40 text-xs text-center mt-1">
                {lightboxIndex + 1} / {activeGroup.images.length}
              </p>

              {/* Prev / Next */}
              {activeGroup.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5 text-white" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center transition-colors"
                  >
                    <ChevronRight className="w-5 h-5 text-white" />
                  </button>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default Gallery;
