import { Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Diksha Jain",
      role: "STUDENT",
      avatar: "D",
      avatarBg: "bg-red-400",
      rating: 5,
      text: "I used to panic before every math test. Kyoorious showed me exactly what I was missing. It wasn't that I was bad at math, just a few weak concepts."
    },
    {
      name: "Anuja Mishra",
      role: "PARENT",
      avatar: "A",
      avatarBg: "bg-blue-500",
      rating: 5,
      text: "Child prodigy is a myth. With Kyoorious, my son's scores improved significantly within two months of effective practice"
    },
    {
      name: "Naman Gupta",
      role: "STUDENT",
      avatar: "N",
      avatarBg: "bg-purple-400",
      rating: 5,
      text: "I never liked practicing before. Kyoorious made it clear and engaging, and now I practice daily using Learning Mode"
    }
  ];

  return (
    <section id="testimonials" className="relative py-24 px-6 bg-black overflow-hidden" style={{ fontFamily: 'Poppins, sans-serif' }}>
      {/* Grid Background */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(132, 204, 22, 0.15) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(132, 204, 22, 0.15) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          zIndex: 0
        }}
      />
      
      {/* Radial gradient overlay for fade effect */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, transparent 20%, rgba(0, 0, 0, 0.8) 70%, black 100%)',
          zIndex: 1
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Loved by Students & Parents
          </h2>
          <p className="text-gray-400 text-lg font-light">
            Real results from students and parents
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="border border-gray-800/50 rounded-2xl p-8 backdrop-blur-sm hover:border-gray-700/50 transition-all duration-300"
              style={{ background: 'radial-gradient(circle at center, transparent 20%, rgba(0, 0, 0, 0.8) 70%, black 100%)', zIndex: 1 }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-300 text-base mb-8 leading-relaxed italic font-light">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className={`w-12 h-12 rounded-full ${testimonial.avatarBg} flex items-center justify-center text-white font-semibold text-lg`}>
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="text-white font-medium text-base">{testimonial.name}</h4>
                  <p className="text-gray-500 text-xs font-light tracking-wide">{testimonial.role}</p>
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