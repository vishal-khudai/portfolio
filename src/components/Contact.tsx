import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, Send, Phone, MapPin, CheckCircle, Mail, Linkedin } from "lucide-react";

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
    <section id="contact" className="py-24 px-6 bg-bg relative overflow-hidden">
      {/* Whimsical Background Elements */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent/10 via-transparent to-transparent" />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-1/4 -right-1/4 w-[800px] h-[800px] border border-accent/10 rounded-full"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Left: Contact Info */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 text-accent font-bold uppercase tracking-widest text-sm mb-4 font-mono"
            >
              <Sparkles className="w-4 h-4" />
              <span>The Conversion</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-8"
            >
              Let's Build Your <br />
              <span className="text-gradient">Next Masterpiece</span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-ink/70 text-lg mb-12 max-w-md"
            >
              Ready to elevate your game's visual identity? 
              Whether you're an indie studio or an established publisher, 
              I'm here to help bring your vision to life.
            </motion.p>

            <div className="space-y-8">
              {[
                { 
                  icon: <Mail className="w-6 h-6" />, 
                  label: "Email", 
                  value: "khudaivishal@gmail.com",
                  href: "https://mail.google.com/mail/?view=cm&fs=1&to=khudaivishal@gmail.com"
                },
                { 
                  icon: <Linkedin className="w-6 h-6" />, 
                  label: "LinkedIn", 
                  value: "vishal-khudai",
                  href: "https://www.linkedin.com/in/vishal-khudai/"
                },
                { 
                  icon: <Phone className="w-6 h-6" />, 
                  label: "Phone", 
                  value: "+91 7874120249",
                  href: "tel:+917874120249"
                },
                { 
                  icon: <MapPin className="w-6 h-6" />, 
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
                      <div className="w-12 h-12 rounded-2xl glass flex items-center justify-center text-accent group-hover:text-white group-hover:border-accent group-hover:shadow-[0_0_15px_rgba(250,204,21,0.2)] transition-all shrink-0 border-accent/30">
                        {item.icon}
                      </div>
                      <div>
                        <div className="text-xs text-accent-light uppercase tracking-widest font-mono mb-1">{item.label}</div>
                        <div className="text-lg font-bold text-white group-hover:text-accent transition-colors font-display tracking-wider">{item.value}</div>
                      </div>
                    </a>
                  ) : (
                    <>
                      <div className="w-12 h-12 rounded-2xl glass flex items-center justify-center text-accent group-hover:text-white group-hover:border-accent group-hover:shadow-[0_0_15px_rgba(250,204,21,0.2)] transition-all shrink-0 border-accent/30">
                        {item.icon}
                      </div>
                      <div>
                        <div className="text-xs text-accent-light uppercase tracking-widest font-mono mb-1">{item.label}</div>
                        <div className="text-lg font-bold text-white group-hover:text-accent transition-colors font-display tracking-wider">{item.value}</div>
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
            className="p-10 rounded-2xl glass border-accent/20 relative shadow-lg"
          >
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-8"
                >
                  <div className="relative group">
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-transparent border-b-2 border-white/10 py-3 text-white focus:outline-none focus:border-accent transition-colors peer"
                      placeholder=" "
                    />
                    <label
                      htmlFor="name"
                      className="absolute left-0 top-3 text-ink/40 transition-all pointer-events-none peer-focus:-top-4 peer-focus:text-xs peer-focus:text-accent peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs"
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
                      className="w-full bg-transparent border-b-2 border-white/10 py-3 text-white focus:outline-none focus:border-accent transition-colors peer"
                      placeholder=" "
                    />
                    <label
                      htmlFor="studio"
                      className="absolute left-0 top-3 text-ink/40 transition-all pointer-events-none peer-focus:-top-4 peer-focus:text-xs peer-focus:text-accent peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs"
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
                      className="w-full bg-transparent border-b-2 border-white/10 py-3 text-white focus:outline-none focus:border-accent transition-colors peer"
                      placeholder=" "
                    />
                    <label
                      htmlFor="email"
                      className="absolute left-0 top-3 text-ink/40 transition-all pointer-events-none peer-focus:-top-4 peer-focus:text-xs peer-focus:text-accent peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs"
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
                      className="w-full bg-transparent border-b-2 border-white/10 py-3 text-white focus:outline-none focus:border-accent transition-colors peer resize-none"
                      placeholder=" "
                    />
                    <label
                      htmlFor="details"
                      className="absolute left-0 top-3 text-ink/40 transition-all pointer-events-none peer-focus:-top-4 peer-focus:text-xs peer-focus:text-accent peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs"
                    >
                      Project Details
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-accent hover:bg-white text-black py-5 rounded-2xl font-bold text-lg transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100 uppercase tracking-widest font-mono"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                    {!isSubmitting && <Send className="w-5 h-5" />}
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center py-20"
                >
                  <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mb-6 shadow-lg shadow-accent/25">
                    <CheckCircle className="w-10 h-10 text-bg" />
                  </div>
                  <h3 className="text-3xl font-bold mb-4 text-white">Message Sent!</h3>
                  <p className="text-ink/70 text-lg">
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
