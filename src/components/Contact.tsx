import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, Send, Mail, Linkedin, Target } from "lucide-react";

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
      }
    } catch (error) {
      console.error("Error submitting form", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          {/* Left: Contact Info */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 text-accent text-xs font-bold uppercase tracking-[0.2em] mb-8"
            >
              <Sparkles className="w-4 h-4" />
              <span>Get in Touch</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-display font-black leading-tight mb-12 text-white"
            >
              Let's Build <br />
              <span className="text-accent">Something Epic</span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xl text-ink/60 mb-16 max-w-md leading-relaxed"
            >
              Ready to bring your game vision to life? I'm always open to new projects, collaborations, or just a friendly chat about game art.
            </motion.p>

            <div className="space-y-10">
              {[
                { icon: <Mail className="w-6 h-6" />, label: "EMAIL", value: "khudaivishal@gmail.com", href: "https://mail.google.com/mail/?view=cm&fs=1&to=khudaivishal@gmail.com" },
                { icon: <Linkedin className="w-6 h-6" />, label: "LINKEDIN", value: "vishal-khudai", href: "https://www.linkedin.com/in/vishal-khudai/" },
                { icon: <Send className="w-6 h-6" />, label: "PHONE", value: "+91 7874120249", href: "tel:+917874120249" },
                { icon: <Target className="w-6 h-6" />, label: "LOCATION", value: "Rajkot, Gujarat, India", href: "https://www.google.com/maps/search/?api=1&query=Rajkot,+Gujarat,+India" },
              ].map((item, i) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-6 group"
                >
                  <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-black transition-all shadow-lg">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-[10px] font-black uppercase tracking-[0.2em] text-accent mb-1">{item.label}</div>
                    <div className="text-xl font-display font-bold text-white group-hover:text-accent transition-colors">{item.value}</div>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-12 rounded-[2.5rem] bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl"
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
                  <div className="space-y-4">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-ink/70 ml-1">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="John Doe"
                      className="w-full bg-transparent border-b border-white/10 py-4 focus:border-accent focus:outline-none transition-all text-white placeholder:text-ink/10 text-lg"
                    />
                  </div>
                  <div className="space-y-4">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-ink/70 ml-1">Studio / Company</label>
                    <input
                      type="text"
                      name="studio"
                      value={formData.studio}
                      onChange={(e) => setFormData({ ...formData, studio: e.target.value })}
                      placeholder="Studio / Company"
                      className="w-full bg-transparent border-b border-white/10 py-4 focus:border-accent focus:outline-none transition-all text-white placeholder:text-ink/10 text-lg"
                    />
                  </div>
                  <div className="space-y-4">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-ink/70 ml-1">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="Email Address"
                      className="w-full bg-transparent border-b border-white/10 py-4 focus:border-accent focus:outline-none transition-all text-white placeholder:text-ink/10 text-lg"
                    />
                  </div>
                  <div className="space-y-4">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-ink/70 ml-1">Project Details</label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      value={formData.details}
                      onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                      placeholder="Project Details"
                      className="w-full bg-transparent border-b border-white/10 py-4 focus:border-accent focus:outline-none transition-all text-white placeholder:text-ink/10 text-lg resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-6 bg-accent hover:bg-white text-black rounded-2xl font-black text-sm uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed group shadow-2xl shadow-accent/20"
                  >
                    {isSubmitting ? (
                      <div className="w-6 h-6 border-2 border-black border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        SEND MESSAGE
                        <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </>
                    )}
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-20"
                >
                  <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-8">
                    <Send className="w-10 h-10 text-black" />
                  </div>
                  <h3 className="text-3xl font-display font-black text-white mb-4">MESSAGE SENT!</h3>
                  <p className="text-ink/60 mb-10">I'll get back to you as soon as possible.</p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-accent font-bold uppercase tracking-widest hover:text-white transition-colors"
                  >
                    Send another message
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
