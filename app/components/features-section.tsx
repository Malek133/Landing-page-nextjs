import { Card } from "@/components/ui/card";
import { Globe2, Shield, Zap } from "lucide-react";

const features = [
  {
    icon: <Globe2 className="w-8 h-8" />,
    title: "Global Reach",
    description: "Connect with customers worldwide through our optimized platform built for international scale."
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Lightning Fast",
    description: "Experience blazing-fast performance with our next-generation infrastructure and optimization."
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Enterprise Security",
    description: "Rest easy knowing your data is protected by industry-leading security measures and protocols."
  }
];

export function FeaturesSection() {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl font-bold text-center mb-16">Why Choose Us</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <div className="mb-4 text-primary">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}