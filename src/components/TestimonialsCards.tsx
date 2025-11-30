import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const musicSchoolTestimonials = [
  {
    quote:
      "Joining the music school transformed my understanding of music and helped me to truly discover my own sound. The instructors are world-class!",
    name: "Alex Johnson",
    title: "Guitar Student",
  },
  {
    quote:
      "The community and support at this school are unmatched. I've grown not just as a pianist, but also as a performer, thanks to their comprehensive approach.",
    name: "Samantha Lee",
    title: "Piano Student",
  },
  {
    quote:
      "This school offered me the tools and confidence to take my singing to the next level. I'm endlessly grateful for the personalized coaching.",
    name: "Michael Chen",
    title: "Vocal Student",
  },
  {
    quote:
      "As a violinist, finding the right mentor can be challenging, but this school matched me with a teacher who truly understands my goals and challenges.",
    name: "Emily Taylor",
    title: "Violin Student",
  },
  {
    quote:
      "The production courses here opened my eyes to the intricacies of music production. Highly recommend for any aspiring producers!",
    name: "Chris Morales",
    title: "Music Production Student",
  },
];

export default function MusicSchoolTestimonials() {
  return (
    <section className="relative w-full py-20 dark:bg-gray-950 dark:bg-grid-white/10 bg-white overflow-hidden flex flex-col items-center justify-center">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-gray-950/80 via-transparent to-gray-950/80" />
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-10 z-10 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600">
        Hear our Harmony: Voices of Success
      </h2>

      <div className="w-full max-w-6xl px-4 sm:px-6 lg:px-8 h-[28rem] flex items-center justify-center z-10">
        <InfiniteMovingCards items={musicSchoolTestimonials} direction="right" speed="normal" />
      </div>
    </section>
  );
}
