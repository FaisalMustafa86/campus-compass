import { useState } from "react";
import { motion } from "framer-motion";
import { Send, MapPin, Phone, Mail, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast({ title: "Please fill in all required fields.", variant: "destructive" });
      return;
    }

    setIsSubmitting(true);
    // Simulate submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);

    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. We'll get back to you within 24 hours.",
    });

    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const contactInfo = [
    { icon: MapPin, label: "Address", value: "123 University Avenue, Academic City, ST 12345" },
    { icon: Phone, label: "Phone", value: "+1 (555) 123-4567" },
    { icon: Mail, label: "Email", value: "admissions@prestige.edu" },
    { icon: Clock, label: "Office Hours", value: "Mon-Fri: 8AM-6PM, Sat: 9AM-4PM" },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="bg-gradient-navy pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Get in Touch"
            subtitle="Have questions about admissions, campus life, or anything else? We'd love to hear from you."
            light
          />
        </div>
      </section>

      {/* Form + Info */}
      <section className="section-padding bg-background">
        <div className="container-wide mx-auto">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              <div className="bg-card rounded-2xl shadow-lg p-8 md:p-10">
                <h3 className="font-heading text-2xl font-bold text-card-foreground mb-6">
                  Send Us a Message
                </h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        maxLength={100}
                        className="rounded-lg"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        maxLength={255}
                        className="rounded-lg"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Admission Inquiry"
                      maxLength={200}
                      className="rounded-lg"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us how we can help..."
                      rows={5}
                      maxLength={1000}
                      className="rounded-lg resize-none"
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-accent text-accent-foreground hover:bg-gold-dark font-semibold py-6 text-lg rounded-xl"
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 w-5 h-5" />
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="lg:col-span-2 space-y-6"
            >
              <div className="bg-gradient-navy rounded-2xl p-8 text-primary-foreground">
                <h3 className="font-heading text-xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-6">
                  {contactInfo.map((info) => (
                    <div key={info.label} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center shrink-0">
                        <info.icon className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-primary-foreground/70">{info.label}</p>
                        <p className="text-sm text-primary-foreground">{info.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Map */}
              <div className="rounded-2xl overflow-hidden shadow-lg h-64">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0968143452456!2d-122.08385!3d37.42199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fba02425dad8f%3A0x6c296c66619367e0!2sStanford%20University!5e0!3m2!1sen!2sus!4v1635000000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="Campus Location"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
