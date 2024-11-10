import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-24 bg-primary text-primary-foreground">
      <div className="container px-4 mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
        <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
          Join thousands of satisfied customers who have transformed their digital presence with our solutions.
        </p>
        <Button size="lg" variant="secondary" className="gap-2">
          Start Your Journey <ArrowRight className="w-4 h-4" />
        </Button>

        
      </div>
      
    </section>
  );
}