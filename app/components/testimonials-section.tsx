import { Card } from "@/components/ui/card";
import Image from "next/image";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO at TechCorp",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=96&h=96",
    content: "Implementing this solution transformed our business operations. The results exceeded our expectations."
  },
  {
    name: "Michael Chen",
    role: "Founder at InnovateLab",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=96&h=96",
    content: "The platform's reliability and performance have been crucial to our company's recent growth and success."
  },
  {
    name: "Emily Rodriguez",
    role: "CTO at NextGen",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=96&h=96",
    content: "Outstanding support team and robust features. It's exactly what we needed to scale our operations."
  }
];

export function TestimonialsSection() {
  return (
    <section className="py-24">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl font-bold text-center mb-16">What Our Clients Say</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6">
              <div className="flex items-center mb-4">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  width={48}
                  height={48}
                  className="rounded-full"
                />
                <div className="ml-4">
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-muted-foreground">{testimonial.content}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}