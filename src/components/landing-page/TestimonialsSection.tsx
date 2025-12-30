import { Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Divita Jain",
      role: "Student",
      avatar: "D",
      avatarBg: "bg-purple-500",
      rating: 5,
      text: "I used to panic before every math test. But Kyoorious told me exactly what I was missing as parent-level tests also were weak and how to fix it in just few minutes."
    },
    {
      name: "Anuja Mishra",
      role: "Parent",
      avatar: "A",
      avatarBg: "bg-red-500",
      rating: 5,
      text: "After struggling in math, with Kyoori she aces every organized approach tests we are now on track of improving results."
    },
    {
      name: "Naman Gupta",
      role: "Student",
      avatar: "N",
      avatarBg: "bg-yellow-500",
      rating: 5,
      text: "I never liked studying before because it was long and slugging, and the process was enjoyable. I try using Kyoori daily."
    }
  ];

  return (
    <section id="testimonials" className="py-20 px-6 bg-[var(--bg-primary)]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">
            Loved by Students & Parents
          </h2>
          <p className="text-[var(--text-secondary)]">
            Real results from students and parents
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-2xl p-6"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[var(--accent-color)] text-[var(--accent-color)]" />
                ))}
              </div>

              {/* Text */}
              <p className="text-[var(--text-secondary)] text-sm mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full ${testimonial.avatarBg} flex items-center justify-center text-white font-medium`}>
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="text-[var(--text-primary)] font-medium text-sm">{testimonial.name}</h4>
                  <p className="text-[var(--text-secondary)] text-xs">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
