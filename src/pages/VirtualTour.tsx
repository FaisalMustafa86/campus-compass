import { useState } from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import LocationCard from "@/components/LocationCard";
import LocationDetail from "@/components/LocationDetail";
import { tourLocations, TourLocation } from "@/data/locations";

const VirtualTour = () => {
  const [selectedLocation, setSelectedLocation] = useState<TourLocation | null>(null);

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Banner */}
      <section className="bg-gradient-navy pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Virtual Campus Tour"
            subtitle="Explore every corner of our campus from the comfort of your home. Click on any location to dive deeper with images, videos, and detailed descriptions."
            light
          />
        </div>
      </section>

      {/* Tour Grid */}
      <section className="section-padding bg-background -mt-8">
        <div className="container-wide mx-auto">
          {/* Location Navigation Pills */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-wrap gap-2 mb-10 justify-center"
          >
            {tourLocations.map((loc) => (
              <button
                key={loc.id}
                onClick={() => {
                  const el = document.getElementById(loc.id);
                  el?.scrollIntoView({ behavior: "smooth", block: "center" });
                }}
                className="px-4 py-2 rounded-full text-sm font-medium bg-secondary text-secondary-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                {loc.icon} {loc.name}
              </button>
            ))}
          </motion.div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {tourLocations.map((location, i) => (
              <div key={location.id} id={location.id}>
                <LocationCard
                  location={location}
                  index={i}
                  onClick={setSelectedLocation}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Google Maps Embed */}
      <section className="section-padding bg-muted">
        <div className="container-wide mx-auto">
          <SectionHeading
            title="Find Us on the Map"
            subtitle="Our campus is conveniently located in the heart of the city with easy access to public transportation."
          />
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0968143452456!2d-122.08385!3d37.42199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fba02425dad8f%3A0x6c296c66619367e0!2sStanford%20University!5e0!3m2!1sen!2sus!4v1635000000000!5m2!1sen!2sus"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Campus Location"
            />
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

export default VirtualTour;
