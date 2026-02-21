import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    quote: "Himanshu's CI/CD implementation reduced our deployment time by 80%. His attention to detail and understanding of DevOps best practices is exceptional.",
    author: "Tech Lead",
    company: "Do Incredible Pvt. Ltd.",
    avatar: "TL",
  },
  {
    quote: "The Kubernetes setup he built for us handles traffic spikes seamlessly. Professional, reliable, and always delivers on time.",
    author: "Project Manager",
    company: "Startup Client",
    avatar: "PM",
  },
  {
    quote: "Excellent DevOps engineer with strong infrastructure automation skills. His containerized deployments are clean, well-documented, and production-ready.",
    author: "Senior Engineer",
    company: "Freelance Project",
    avatar: "SE",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container-wide relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 border border-primary/20">
            <Star className="w-4 h-4" />
            Testimonials
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            What People <span className="gradient-text">Say</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Feedback from colleagues and clients I've worked with.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="relative h-full p-8 rounded-2xl bg-card/60 backdrop-blur-xl border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1">
                {/* Quote icon */}
                <div className="absolute -top-4 left-8">
                  <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                    <Quote className="w-5 h-5 text-primary-foreground" />
                  </div>
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-6 pt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-muted-foreground mb-8 leading-relaxed text-sm italic">
                  "{testimonial.quote}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 mt-auto">
                  <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm border border-primary/20">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground text-sm">{testimonial.author}</div>
                    <div className="text-xs text-muted-foreground">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
