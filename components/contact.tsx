"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MapPin, Mail, Phone, Linkedin, Instagram, Twitter } from "lucide-react";
import { toast } from "react-hot-toast";
import SectionHeading from "./section-heading";

const slideInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const subjects = [
  "General Inquiry",
  "IT Procurement",
  "Supply Of Goods",
  "Project Management",
  "Other",
];

const socialLinks = [
  { icon: Twitter, href: "/#" },
  { icon: Linkedin, href: "https://www.linkedin.com/company/quantumints" },
  { icon: Instagram, href: "/#" },
];

const ContactSection = () => {
  const contactRef = useRef(null);
  const contactInView = useInView(contactRef, { once: true, amount: 0.2 });

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      if (result.success) {
        toast.success("Your message has been sent successfully!");
      } else {
        toast.error("Something went wrong. Please try again later.");
      }
    } catch (error) {
      console.error("Email send error:", error);
      toast.error("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="mt-24 bg-white" id="contact" ref={contactRef}>
      <SectionHeading
        title="Get in Touch"
        subtitle="Connect with Quantum for procurement inquiries, vendor collaboration, or tailored project support we are here to help."
      />


      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          <motion.div variants={slideInLeft} initial="hidden" animate={contactInView ? "visible" : "hidden"}>
            <h2 className="text-3xl font-bold tracking-tight mb-6">
              <motion.span
                className="text-amber-500 inline-block"
                animate={{ rotate: [0, 10, 0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 5 }}
              >
                💬
              </motion.span>{" "}
              Ready to Elevate?
            </h2>
            <p className="text-gray-700 mb-8">
              Thank you for your interest in Quantum International Services. Fill out the form below and we’ll respond promptly.
            </p>
            <div className="space-y-4">
              {[
                { icon: <MapPin className="h-5 w-5 mr-3 text-amber-500" />, text: "#302 - 10650 113 Street NW, Edmonton, AB, Canada T5H 3H" },
                { icon: <Mail className="h-5 w-5 mr-3 text-amber-500" />, text: "info@quantumints.com" },
                { icon: <Phone className="h-5 w-5 mr-3 text-amber-500" />, text: "+1 (825) 440-0075" },
              ].map((item, index) => (
                <motion.div key={index} className="flex items-center" initial={{ opacity: 0, x: -20 }} animate={contactInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 * index }}>
                  {item.icon}
                  <span className="text-gray-700">{item.text}</span>
                </motion.div>
              ))}
              <motion.div className="flex space-x-4 pt-4" initial={{ opacity: 0, y: 20 }} animate={contactInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.4 }}>
                {socialLinks.map((social, i) => {
                  const Icon = social.icon;
                  return (
                    <motion.a key={i} href={social.href} target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-amber-600" whileHover={{ scale: 1.2 }}>
                      <Icon className="w-5 h-5" />
                    </motion.a>
                  );
                })}
              </motion.div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div className="bg-white p-6 rounded-lg border border-[#00204E]/10 shadow-lg" variants={fadeInUp} initial="hidden" animate={contactInView ? "visible" : "hidden"}>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { id: "firstName", label: "First Name", type: "text", placeholder: "Your first name" },
                  { id: "lastName", label: "Last Name", type: "text", placeholder: "Your last name" },
                  { id: "email", label: "Email", type: "email", placeholder: "Your email" },
                  { id: "company", label: "Company", type: "text", placeholder: "Your company" },
                ].map((field) => (
                  <motion.div key={field.id} className="space-y-2" variants={fadeIn}>
                    <label htmlFor={field.id} className="text-sm font-medium text-gray-700">{field.label}</label>
                    <input
                      id={field.id}
                      type={field.type}
                      value={(formData as any)[field.id]}
                      onChange={handleChange}
                      placeholder={field.placeholder}
                      required
                      className="w-full px-3 py-2 bg-gray-100 border border-gray-200 rounded-md text-gray-800 focus:border-amber-600 focus:ring-amber-600 transition-colors"
                    />
                  </motion.div>
                ))}
              </div>

              {/* Subject Dropdown */}
              <motion.div className="space-y-2" variants={fadeIn}>
                <label htmlFor="subject" className="text-sm font-medium text-gray-700">Subject</label>
                <select
                  id="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 bg-gray-100 border border-gray-200 rounded-md text-gray-800 focus:border-amber-600 focus:ring-amber-600 transition-colors"
                >
                  <option value="" disabled>Select a subject</option>
                  {subjects.map((subject) => (
                    <option key={subject} value={subject}>{subject}</option>
                  ))}
                </select>
              </motion.div>

              {/* Message Field */}
              <motion.div className="space-y-2" variants={fadeIn}>
                <label htmlFor="message" className="text-sm font-medium text-gray-700">Message</label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 bg-gray-100 border border-gray-200 rounded-md text-gray-800 focus:border-amber-600 focus:ring-amber-600 min-h-[120px] transition-colors"
                  placeholder="Your message"
                ></textarea>
              </motion.div>

              {/* Submit Button */}
              <motion.div variants={fadeIn} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-amber-500 hover:bg-amber-600 text-black relative overflow-hidden group"
                >
                  <span className="relative z-10">
                    {isSubmitting ? "Submitting..." : "Let's Work Together"}
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-amber-600 to-amber-400 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110"></span>
                </Button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
