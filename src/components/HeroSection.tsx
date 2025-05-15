
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-white">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight mb-6 animate-fade-in">
              Unlock Your Potential With Our Expert-Led Courses
            </h1>
            <p className="text-lg text-gray-600 mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Learn from industry experts and gain practical skills that will help you excel in today's competitive market. Join thousands of successful graduates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <Button
                size="lg"
                className="bg-black text-white hover:bg-gray-800 px-8 py-6"
                asChild
              >
                <Link to="/courses">Explore Courses</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-black text-black hover:bg-gray-100 px-8 py-6"
                asChild
              >
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <div className="relative">
              <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-gray-200 to-gray-400 opacity-30 blur-xl"></div>
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
                alt="Students learning"
                className="rounded-xl shadow-lg relative w-full hover-scale"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
