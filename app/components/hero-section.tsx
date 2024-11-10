import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { ModeToggle } from "./ModeToggle";

export function HeroSection() {
  return (
    <section className="relative h-[90vh] flex items-center justify-center bg-gradient-to-b from-primary/5 to-background">
      <div className="container px-4 mx-auto text-center">
          <h1 className="my-56 text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
          Transform Your Digital Presence
        </h1> 
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
          Elevate your business with cutting-edge web solutions that drive growth and engagement. Built for the modern web.
        </p> 
        <div className="flex gap-4 justify-center">

      

          <Button size="lg" className="gap-2">
            Get Started <ArrowRight className="w-4 h-4" />
          </Button>
          <Button size="lg" variant="outline">
            Learn More
          </Button>
          <ModeToggle />
        </div>
        <div className="mt-16">
          <Image
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&h=600"
            alt="Dashboard Preview"
            width={1200}
            height={440}
            className="rounded-lg shadow-2xl border my-16"
            priority
          />
        </div>
      </div>
    </section>
  );
}