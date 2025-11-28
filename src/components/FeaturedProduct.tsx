'use client'
import Link from "next/link"
import courseData from "@/data/music_courses.json"
import { BackgroundGradient } from "@/components/ui/background-gradient"
import { HoverBorderGradient } from "./ui/hover-border-gradient"

interface Course {
  id: number,
  title: string,
  slug: string,
  description: string,
  price: number,
  instructor: string,
  isFeatured: boolean,
}

function FeaturedCourses() {
  const featuredCourses = courseData.courses.filter((course: Course) => course.isFeatured)

  return (
    <div className="py-20 bg-[radial-gradient(circle_at_center,_#0a0f1f_0%,_#000_100%)]">
      {/* New heading */}
      <div className="text-center">
        <h2 className="text-5xl font-bold text-white tracking-tight">
          Our Top Courses
        </h2>
        <p className="mt-6 text-lg text-neutral-300">
          Grow your skills with expert mentorship
        </p>
      </div>

      {/* Cards Section */}
      <div className="mt-14 mx-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {featuredCourses.map((course: Course) => (
            <div key={course.id} className="flex justify-center group">
              <BackgroundGradient
                className="flex flex-col rounded-[22px] bg-white/5 dark:bg-zinc-900/40 
                overflow-hidden h-full max-w-sm backdrop-blur-lg border border-white/20
                shadow-xl transition-all duration-300 group-hover:scale-105"
              >
                <div className="p-6 flex flex-col items-center text-center flex-grow">
                  <h3 className="text-2xl font-semibold text-white mb-3">
                    {course.title}
                  </h3>

                  <p className="text-neutral-300 flex-grow mb-6">
                    {course.description}
                  </p>

                  <Link
                    href={`/courses/${course.slug}`}
                    className="flex items-center justify-center gap-2 text-teal-400 hover:text-teal-300 font-medium"
                  >
                    Learn More
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
                </div>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>

      {/* Explore Courses Button */}
      <div className="mt-20 flex justify-center">
        <Link href="/courses">
          <HoverBorderGradient
            containerClassName="rounded-full"
            as="button"
            className="dark:bg-black bg-white text-black dark:text-white px-6 py-3 font-medium inline-flex items-center space-x-2"
          >
            <span>Explore Courses</span>
          </HoverBorderGradient>
        </Link>
      </div>
    </div>
  )
}

export default FeaturedCourses
