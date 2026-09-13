import { useState } from "react";
import { Mail, Phone, MapPin, Github, Send, CheckCircle2, MessageSquare } from "lucide-react";

export const ContactSection = () => {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // 'idle' | 'sending' | 'sent'

  const handleChange = (e) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    // Simulate sending with realistic feedback
    setTimeout(() => {
      setStatus("sent");
      // Optional mailto trigger as fallback
      const subject = encodeURIComponent(`Portfolio Inquiry from ${formState.name}`);
      const body = encodeURIComponent(`Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`);
      window.location.href = `mailto:kar893216@gmail.com?subject=${subject}&body=${body}`;
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center font-mono text-xs uppercase tracking-widest text-violet-700 dark:text-violet-400 font-bold mb-2">
          // 04. COLLABORATION &amp; INQUIRIES
        </div>
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-3 text-center text-foreground">
          Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600 dark:from-violet-400 dark:to-indigo-400">Touch</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto text-sm sm:text-base font-normal leading-relaxed">
          Have an AI/ML research initiative, high-throughput web project, or engineering role in mind? Let's build together.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Left Column: Direct Contact Details */}
          <div className="space-y-6">
            <div className="bg-card/70 backdrop-blur-sm p-6 rounded-2xl border border-border space-y-6">
              <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                <MessageSquare className="h-5 w-5 text-primary" /> Direct Channels
              </h3>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/10 text-primary shrink-0">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-foreground">Email</h4>
                  <a
                    href="mailto:kar893216@gmail.com"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors break-all"
                  >
                    kar893216@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/10 text-primary shrink-0">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-foreground">Phone</h4>
                  <a
                    href="tel:+919635242578"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    +91-9635242578
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/10 text-primary shrink-0">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-foreground">Location</h4>
                  <p className="text-sm text-muted-foreground">Kolkata, West Bengal, India</p>
                </div>
              </div>
            </div>

            {/* Social profiles */}
            <div className="bg-card/70 backdrop-blur-sm p-6 rounded-2xl border border-border">
              <h4 className="text-sm font-semibold text-foreground mb-4">Connect Online</h4>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://github.com/Sowmajit-Kar"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-secondary/80 hover:bg-primary/10 hover:text-primary border border-border transition-all text-xs font-medium"
                >
                  <Github size={16} />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://portfolio-web-six-murex.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-secondary/80 hover:bg-primary/10 hover:text-primary border border-border transition-all text-xs font-medium"
                >
                  <span>🌐 Live Portfolio</span>
                </a>
                <a
                  href="mailto:kar893216@gmail.com"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-secondary/80 hover:bg-primary/10 hover:text-primary border border-border transition-all text-xs font-medium"
                >
                  <Mail size={16} />
                  <span>Send Mail</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="bg-card/90 backdrop-blur-md p-8 rounded-2xl shadow-sm border border-border">
            <h3 className="text-2xl font-bold mb-2 text-foreground">Send a Message</h3>
            <p className="text-xs sm:text-sm text-muted-foreground mb-6">
              Drop a note and I will respond to you promptly.
            </p>

            {status === "sent" ? (
              <div className="py-8 text-center space-y-4">
                <div className="inline-flex p-3 rounded-full bg-emerald-500/10 text-emerald-500">
                  <CheckCircle2 size={40} />
                </div>
                <h4 className="text-xl font-bold text-foreground">Message Dispatched!</h4>
                <p className="text-sm text-muted-foreground max-w-sm mx-auto">
                  Thank you for reaching out, {formState.name || "there"}. Your email client should open with your prepared message.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setFormState({ name: "", email: "", message: "" });
                    setStatus("idle");
                  }}
                  className="mt-4 px-5 py-2 text-xs font-semibold rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors cursor-pointer"
                >
                  Send Another Note
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold text-foreground mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-xl border border-input bg-background/80 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                    placeholder="e.g. Alex Morgan"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-foreground mb-1.5">
                    Your Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-xl border border-input bg-background/80 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                    placeholder="alex@example.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-foreground mb-1.5">
                    Your Message / Project Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formState.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-xl border border-input bg-background/80 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
                    placeholder="Tell me about your AI/ML or web project..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="cosmic-button w-full mt-4"
                >
                  {status === "sending" ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send size={16} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};