"use client"
import Link from "next/link"
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import { motion } from "motion/react";

function UpcomingWebinars() {

  const featuredWebinars = [
    {
      title: "Understanding Music Theory",
      description: "Dive deep into the fundamentals of music theory and enhance your musical skills.",
      date: "12 Dec 2025",
      time: "7:00 PM IST",
      speaker: "Alex Johnson",
      image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=800&q=80",
      slug: "/"
    },
    {
      title: "The Art of Songwriting",
      description: "Learn from experienced musicians and build storytelling through music.",
      date: "15 Dec 2025",
      time: "6:30 PM IST",
      speaker: "Emily Carter",
      image: "https://images.unsplash.com/photo-1485579149621-3123dd979885?auto=format&fit=crop&w=800&q=80",
      slug: "/"
    },
    {
      title: "Mastering Your Instrument",
      description: "Advanced techniques to master your musical instrument of choice.",
      date: "18 Dec 2025",
      time: "8:00 PM IST",
      speaker: "John Miller",
      image: "https://images.pexels.com/photos/210764/pexels-photo-210764.jpeg",
      slug: "/"
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 via-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        <div className="text-center">
          <h2 className="text-teal-400 font-bold tracking-widest uppercase text-sm sm:text-base">Featured Webinars</h2>
          <p className="mt-4 text-3xl md:text-5xl font-extrabold text-white leading-tight">
            Enhance Your <span className="text-teal-400">Musical Skills</span>
          </p>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Join expert-led music sessions to elevate your performance, creativity, and understanding of sound.
          </p>
        </div>

        {/* Webinar Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredWebinars.map((webinar, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-lg hover:shadow-teal-500/20"
            >
              <div className="relative">
                <img src={webinar.image} alt={webinar.title} className="w-full h-48 object-cover" />
                <span className="absolute top-3 right-3 bg-teal-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                  {webinar.date} • {webinar.time}
                </span>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white">{webinar.title}</h3>
                <p className="mt-2 text-gray-300 text-sm">{webinar.description}</p>

                <p className="mt-4 text-teal-400 font-medium text-sm">Speaker: {webinar.speaker}</p>

                <Link href={webinar.slug}>
                  <button className="mt-6 w-full bg-teal-500 hover:bg-teal-600 transition text-white py-2 rounded-xl font-semibold">
                    Register Now
                  </button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-16 flex justify-center">
          <HoverBorderGradient
            containerClassName="rounded-full w-full sm:w-auto mx-auto"
            as="button"
            className="w-full sm:w-auto dark:bg-black bg-white text-black dark:text-white px-8 py-4 font-semibold text-lg tracking-wide flex items-center justify-center space-x-2"
          >
            <Link href="/">
              <span>View All Webinars</span>
            </Link>
          </HoverBorderGradient>
        </div>

      </div>
    </section>
  );
}

export default UpcomingWebinars;
