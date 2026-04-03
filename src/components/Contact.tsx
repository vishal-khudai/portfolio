import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, Send, Phone, MapPin, CheckCircle, Mail, Linkedin } from "lucide-react";
import { cn } from "../lib/utils";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    studio: "",
    email: "",
    details: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "YOUR_ACCESS_KEY_HERE",
          name: formData.name,
          email: formData.email,
          studio: formData.studio,
          message: formData.details,
          subject: `New Portfolio Contact from ${formData.name}`,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setIsSubmitted(true);
        setFormData({ name: "", studio: "", email: "", details: "" });
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        console.error("Form submission failed", result);
        alert("Something went wrong. Please try again later.");
      }
    } catch (error) {
      console.error("Error submitting form", error);
      alert("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-32 px-6 relative overflow-hidden transition-colors duration-500 bg-bg">
      {/* Whimsical Background Elements */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent/10 via-transparent to-transparent" />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-1/4 -right-1/4 w-[1000px] h-[1000px] border rounded-full border-accent/10"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32">
          {/* Left: Contact Info */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 font-black uppercase tracking-widest text-base mb-6 text-accent"
            >
              <Sparkles className="w-6 h-6" />
              <span>The Conversion</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-6xl md:text-8xl lg:text-9xl font-display font-black leading-tight mb-10 italic text-white"
            >
              Let's Build Your <br />
              <span className="text-gradient">Next Masterpiece</span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl mb-16 max-w-lg leading-relaxed text-ink/70"
            >
              Ready to elevate your game's visual identity? 
              Whether you're an indie studio or an established publisher, 
              I'm here to help bring your vision to life.
            </motion.p>

            <div className="space-y-8">
              {[
                { 
                  icon: <Mail className="w-8 h-8" />, 
                  label: "Email", 
                  value: "khudaivishal@gmail.com",
                  href: "https://mail.google.com/mail/?view=cm&fs=1&to=khudaivishal@gmail.com"
                },
                { 
                  icon: <Linkedin className="w-8 h-8" />, 
                  label: "LinkedIn", 
                  value: "vishal-khudai",
                  href: "https://www.linkedin.com/in/vishal-khudai/"
                },
                { 
                  icon: <Phone className="w-8 h-8" />, 
                  label: "Phone", 
                  value: "+91 7874120249",
                  href: "tel:+917874120249"
                },
                { 
                  icon: <MapPin className="w-8 h-8" />, 
                  label: "Location", 
                  value: "Rajkot, Gujarat, India",
                  href: "https://www.google.com/maps/search/?api=1&query=Rajkot,+Gujarat,+India"
                },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-6 group"
                >
                  {item.href ? (
                    <a 
                      href={item.href} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center gap-6 w-full"
                    >
                      <div className="w-16 h-16 flex items-center justify-center transition-all shrink-0 rounded-2xl glass text-accent group-hover:text-white group-hover:border-accent group-hover:shadow-[0_0_15px_rgba(250,204,21,0.2)] border-accent/30">
                        {item.icon}
                      </div>
                      <div>
                        <div className="text-xs uppercase tracking-widest font-black mb-1 text-accent-light">{item.label}</div>
                        <div className="text-xl font-black transition-colors font-display tracking-wider italic text-white group-hover:text-accent">{item.value}</div>
                      </div>
                    </a>
                  ) : (
                    <>
                      <div className="w-16 h-16 flex items-center justify-center transition-all shrink-0 rounded-2xl glass text-accent group-hover:text-white group-hover:border-accent group-hover:shadow-[0_0_15px_rgba(250,204,21,0.2)] border-accent/30">
                        {item.icon}
                      </div>
                      <div>
                        <div className="text-xs uppercase tracking-widest font-black mb-1 text-accent-light">{item.label}</div>
                        <div className="text-xl font-black transition-colors font-display tracking-wider italic text-white group-hover:text-accent">{item.value}</div>
                      </div>
                    </>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-12 relative shadow-[0_20px_40px_rgba(0,0,0,0.2)] transition-all overflow-hidden rounded-2xl glass border-accent/20"
          >
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-10"
                >
                  <div className="relative group">
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-transparent border-b-[5px] py-5 focus:outline-none transition-colors peer text-2xl font-black border-white/10 text-white focus:border-accent"
                      placeholder=" "
                    />
                    <label
                      htmlFor="name"
                      className="absolute left-0 top-5 transition-all pointer-events-none peer-focus:-top-6 peer-focus:text-sm peer-[:not(:placeholder-shown)]:-top-6 peer-[:not(:placeholder-shown)]:text-sm text-ink/40 peer-focus:text-accent"
                    >
                      Your Name
                    </label>
                  </div>

                  <div className="relative group">
                    <input
                      type="text"
                      id="studio"
                      value={formData.studio}
                      onChange={(e) => setFormData({ ...formData, studio: e.target.value })}
                      className="w-full bg-transparent border-b-[5px] py-5 focus:outline-none transition-colors peer text-2xl font-black border-white/10 text-white focus:border-accent"
                      placeholder=" "
                    />
                    <label
                      htmlFor="studio"
                      className="absolute left-0 top-5 transition-all pointer-events-none peer-focus:-top-6 peer-focus:text-sm peer-[:not(:placeholder-shown)]:-top-6 peer-[:not(:placeholder-shown)]:text-sm text-ink/40 peer-focus:text-accent"
                    >
                      Studio / Company
                    </label>
                  </div>

                  <div className="relative group">
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-transparent border-b-[5px] py-5 focus:outline-none transition-colors peer text-2xl font-black border-white/10 text-white focus:border-accent"
                      placeholder=" "
                    />
                    <label
                      htmlFor="email"
                      className="absolute left-0 top-5 transition-all pointer-events-none peer-focus:-top-6 peer-focus:text-sm peer-[:not(:placeholder-shown)]:-top-6 peer-[:not(:placeholder-shown)]:text-sm text-ink/40 peer-focus:text-accent"
                    >
                      Email Address
                    </label>
                  </div>

                  <div className="relative group">
                    <textarea
                      id="details"
                      required
                      rows={4}
                      value={formData.details}
                      onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                      className="w-full bg-transparent border-b-[5px] py-5 focus:outline-none transition-colors peer resize-none text-2xl font-black border-white/10 text-white focus:border-accent"
                      placeholder=" "
                    />
                    <label
                      htmlFor="details"
                      className="absolute left-0 top-5 transition-all pointer-events-none peer-focus:-top-6 peer-focus:text-sm peer-[:not(:placeholder-shown)]:-top-6 peer-[:not(:placeholder-shown)]:text-sm text-ink/40 peer-focus:text-accent"
                    >
                      Project Details
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-8 rounded-[2rem] font-black text-3xl transition-all shadow-[0_15px_30px_rgba(0,0,0,0.3)] flex items-center justify-center gap-4 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100 uppercase tracking-widest relative overflow-hidden bg-accent hover:bg-white text-black hover:scale-[1.02] active:scale-[0.98]"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                    {!isSubmitting && <Send className="w-10 h-10" />}
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center py-20"
                >
                  <div className="w-24 h-24 rounded-full flex items-center justify-center mb-8 shadow-lg bg-accent shadow-accent/25">
                    <CheckCircle className="w-12 h-12 text-bg" />
                  </div>
                  <h3 className="text-4xl font-black mb-4 italic text-white">Message Sent!</h3>
                  <p className="text-xl text-ink/70">
                    Thank you for reaching out. <br />
                    I'll get back to you within 24 hours.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
