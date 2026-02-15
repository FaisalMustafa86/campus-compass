import { motion } from "framer-motion";
import { Target, Eye, Award, Users, BookOpen, Globe } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import StatCard from "@/components/StatCard";
import heroImg from "@/assets/hero-campus.jpg";

const timeline = [
  { year: "1895", event: "University founded with 50 students and 5 faculty members" },
  { year: "1920", event: "First engineering and science departments established" },
  { year: "1955", event: "Campus expanded to 200 acres with modern facilities" },
  { year: "1985", event: "Achieved national recognition for research excellence" },
  { year: "2005", event: "Launched international exchange programs with 50+ universities" },
  { year: "2020", event: "Ranked among top 100 universities globally" },
];

const values = [
  { icon: Target, title: "Excellence", description: "We pursue the highest standards in education, research, and community service." },
  { icon: Eye, title: "Innovation", description: "We embrace new ideas and technologies to solve tomorrow's challenges today." },
  { icon: Users, title: "Inclusivity", description: "We celebrate diversity and create a welcoming environment for all learners." },
  { icon: BookOpen, title: "Knowledge", description: "We are committed to the pursuit and dissemination of knowledge across all disciplines." },
  { icon: Globe, title: "Global Impact", description: "We prepare students to make meaningful contributions on a global scale." },
  { icon: Award, title: "Integrity", description: "We uphold the highest ethical standards in everything we do." },
];

const stats = [
  { value: "125+", label: "Years of Excellence" },
  { value: "35,000+", label: "Students" },
  { value: "2,500+", label: "Faculty" },
  { value: "500+", label: "Research Papers/Year" },
  { value: "150+", label: "Programs Offered" },
  { value: "50+", label: "Global Partners" },
];

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="relative pt-20">
        <div className="h-64 md:h-80 relative overflow-hidden">
          <img
            src={heroImg}
            alt="Prestige University"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/70 to-primary/90" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center px-4">
              <SectionHeading
                title="About Prestige University"
                subtitle="A legacy of excellence, a future of innovation."
                light
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-background">
        <div className="container-wide mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
                Our Mission
              </h3>
              <div className="h-1 w-12 rounded-full bg-accent mb-6" />
              <p className="text-muted-foreground leading-relaxed mb-4">
                To advance knowledge and educate students in science, engineering, technologies and other areas of scholarship so as to grow knowledge economy and develop leaders, professionals and skilled workforce embodied with the spirit of discovery, innovation, entrepreneurship, social responsibilities and ethical practices to best serve the society and industry.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
                Our Vision
              </h3>
              <div className="h-1 w-12 rounded-full bg-accent mb-6" />
              <p className="text-muted-foreground leading-relaxed mb-4">
                To be a globally recognized institution that leads in education innovation, produces groundbreaking research, and graduates leaders who make a positive impact on society.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                By 2030, we aim to be ranked among the top 50 universities worldwide, with campuses on three continents and partnerships with over 200 institutions globally.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-gradient-navy py-16">
        <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {stats.map((stat, i) => (
              <StatCard key={stat.label} value={stat.value} label={stat.label} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-muted">
        <div className="container-wide mx-auto">
          <SectionHeading
            title="Our Core Values"
            subtitle="The principles that guide everything we do."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-card rounded-xl p-8 shadow-md card-hover"
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-accent" />
                </div>
                <h4 className="font-heading text-lg font-bold text-card-foreground mb-2">{item.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-background">
        <div className="container-wide mx-auto">
          <SectionHeading
            title="Our History"
            subtitle="Over a century of shaping minds and shaping the future."
          />
          <div className="max-w-3xl mx-auto relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-px" />
            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex items-start gap-6 mb-10 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="hidden md:block md:w-1/2" />
                <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-accent -translate-x-1/2 mt-2 z-10 ring-4 ring-background" />
                <div className="ml-10 md:ml-0 md:w-1/2 bg-card rounded-xl p-6 shadow-sm">
                  <span className="text-accent font-heading font-bold text-lg">{item.year}</span>
                  <p className="text-muted-foreground text-sm mt-1">{item.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
