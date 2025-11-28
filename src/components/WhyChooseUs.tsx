"use client";
import React from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";

const musicSchoolContent = [
  {
    title: "Personalized Music Training",
    description:
    
    "Every student learns differently, and we honor that. Our customized lessons adapt to your unique pace and style—empowering you to grow confidently and creatively Learn with instant guidance from experienced mentors, just like real-time collaboration. Improve faster with active feedback and practice-based support",
  },
  {
    title: "Live Feedback & Mentorship",
    description:
      "Learn with instant guidance from experienced mentors, just like real-time collaboration. Improve faster with active feedback and practice-based support,Every student learns differently, and we honor that. Our customized lessons adapt to your unique pace and style—empowering you to grow confidently and creatively",
  },
  {
    title: "Cutting-Edge & Modern Curriculum",
    description:
      "We evolve with the music industry. Learn modern techniques, industry tools, and updated methods to stay ahead in your musical journey, Every student learns differently, and we honor that. Our customized lessons adapt to your unique pace and style—empowering you to grow confidently and creatively",
  },
  {
    title: "Unlimited Learning Resources",
    description:
      "Never run out of content. Explore extensive materials, exercises, and recordings designed to boost your skill development continuously , Every student learns differently, and we honor that. Our customized lessons adapt to your unique pace and style—empowering you to grow confidently and creatively",
  },
];

function WhyChooseUs() {
  return (
    <div className="w-full mb-20 pt-10 bg-gray-900">
  <h2 className="text-center text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 drop-shadow-xl tracking-tight mb-14">
    Why Choose Our Music Academy?
  </h2>

  <div className="rounded-xl overflow-hidden bg-transparent">
    <StickyScroll content={musicSchoolContent} />
  </div>
</div>
  );
}

export default WhyChooseUs;
