import { motion } from "framer-motion";
import { ArrowRight, Play,Images } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import StatCard from "@/components/StatCard";
import LocationCard from "@/components/LocationCard";
import LocationDetail from "@/components/LocationDetail";
import { tourLocations, TourLocation } from "@/data/locations";
import { useState } from "react";



// Updated stats to reflect NUtech's profile
const stats = [
  { value: "2018", label: "Established" },
  { value: "Technology", label: "Focus Area" },
  { value: "Industry", label: "Partnerships" },
  { value: "100%", label: "Skills Driven" },
];

const Index = () => {
  const [selectedLocation, setSelectedLocation] = useState<TourLocation | null>(null);
  const featuredLocations = tourLocations.slice(0, 3);

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="hero4.png" // Replaced with the provided campus image
            alt="NUtech University Campus View"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/50 to-primary/80" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/20 text-accent text-sm font-medium mb-6 backdrop-blur-sm border border-accent/30">
              Est. 2018 · "University for Industry"
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight"
          >
            Welcome to{" "}
            <span className="text-gradient-gold">NUtech</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            National University of Technology — Pioneering engineering and technology education to create future leaders for the industrial sector.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link to="/tour">
              <Button
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-gold-dark font-semibold px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all"
              >
                Start Virtual Tour
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/about">
              <Button
                size="lg"
                className="group relative flex items-center rounded-full bg-white text-black transition-all duration-500 hover:bg-white/20 hover:text-white hover:backdrop-blur-md border-none pl-4 pr-4 hover:pr-8"
              >
                <Play className="w-5 h-5 fill-current" />
                <span className="max-w-0 overflow-hidden opacity-0 whitespace-nowrap transition-all duration-500 ease-in-out group-hover:max-w-[150px] group-hover:opacity-100 group-hover:ml-2">
                  Learn More
                </span>
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/40 flex items-start justify-center p-1">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-accent"
            />
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-navy">
        <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, i) => (
              <StatCard key={stat.label} value={stat.value} label={stat.label} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Locations */}
      <section className="section-padding bg-background">
        <div className="container-wide mx-auto">
          <SectionHeading
            title="Explore Our Campus"
            subtitle="Take a peek at our state-of-the-art labs, academic blocks, and student facilities."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredLocations.map((location, i) => (
              <LocationCard
                key={location.id}
                location={location}
                index={i}
                onClick={setSelectedLocation}
              />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link to="/tour">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-navy-light px-8 py-6 text-lg rounded-xl"
              >
                View All Locations
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-navy section-padding">
        <div className="container-wide mx-auto text-center">
          <SectionHeading
            title="Ready to Join NUtech?"
            subtitle="Take the first step toward a future in technology. Schedule a campus visit or apply online today."
            light
          />
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-gold-dark font-semibold px-8 py-6 text-lg rounded-xl"
              >
                Contact Us
              </Button>
            </Link>
            <Link to="/gallery">
              <Button
                size="lg"
                className="group relative flex items-center rounded-full bg-white text-black transition-all duration-500 hover:bg-white/20 hover:text-white hover:backdrop-blur-md border-none pl-4 pr-4 hover:pr-8"
              >
                {/* Icon is always visible */}
                <Images className="w-5 h-5 fill-current" />

                {/* Text is hidden by default and slides out on hover */}
                <span className="max-w-0 overflow-hidden opacity-0 whitespace-nowrap transition-all duration-500 ease-in-out group-hover:max-w-[150px] group-hover:opacity-100 group-hover:ml-2">
                  Browse Gallery
                </span>
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />

      <LocationDetail
        location={selectedLocation}
        onClose={() => setSelectedLocation(null)}
      />
    </div>
  );
};

export default Index;