import Hero from "./sections/Hero";
import CallToAction from "./sections/CallToAction";
import Projects from "./sections/Projects";

export default function page() {

  return (
    <div className="min-h-screen">
        <Hero />
        <Projects />
        <CallToAction />
    </div>
  )
}
