
import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { ArrowLeft, ArrowRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Emma Johnson",
    role: "Web Developer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    text: "The Web Development Bootcamp completely transformed my career. Within a month of completing the course, I landed my dream job at a tech startup. The instructors were incredibly knowledgeable and supportive."
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Graphic Designer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    text: "I've taken many design courses, but EduHub's Graphic Design Masterclass truly stands out. The hands-on projects helped me build an impressive portfolio that's been instrumental in attracting high-quality clients."
  },
  {
    id: 3,
    name: "Sarah Williams",
    role: "Marketing Manager",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    text: "The Digital Marketing Strategy course provided practical insights that I implemented immediately. Our company saw a 40% increase in online conversions within just two months of applying the strategies I learned."
  },
  {
    id: 4,
    name: "James Rodriguez",
    role: "Small Business Owner",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    text: "As a small business owner, I needed to learn digital marketing quickly. EduHub's course was perfect—comprehensive yet accessible. The support from instructors even after course completion has been invaluable."
  }
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="section bg-primary/10">
      <div className="container max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our Students Say
          </h2>
          <p className="text-foreground/80 max-w-2xl mx-auto">
            Hear from our students who have transformed their careers with our courses.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <Card className="border border-primary/20 px-6 py-8 md:px-12 md:py-10 animate-fade-in">
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full overflow-hidden mb-6 border-2 border-primary">
                <img
                  src={testimonials[activeIndex].image}
                  alt={testimonials[activeIndex].name}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-lg md:text-xl text-foreground/80 mb-6 italic">
                "{testimonials[activeIndex].text}"
              </p>
              <div>
                <h4 className="font-bold text-foreground">{testimonials[activeIndex].name}</h4>
                <p className="text-foreground/70">{testimonials[activeIndex].role}</p>
              </div>
            </div>
          </Card>
          
          <div className="absolute left-0 right-0 top-1/2 transform -translate-y-1/2 flex justify-between">
            <button 
              onClick={prevTestimonial} 
              className="bg-primary text-foreground p-2 rounded-full shadow-md hover:bg-accent focus:outline-none"
              aria-label="Previous testimonial"
            >
              <ArrowLeft size={20} />
            </button>
            <button 
              onClick={nextTestimonial} 
              className="bg-primary text-foreground p-2 rounded-full shadow-md hover:bg-accent focus:outline-none"
              aria-label="Next testimonial"
            >
              <ArrowRight size={20} />
            </button>
          </div>
          
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full ${
                  index === activeIndex ? "bg-primary" : "bg-primary/30"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
