import Hero from "./sections/Hero";
import CallToAction from "./components/CallToAction/CallToAction";


export default function page() {
  return (
    <div className="min-h-screen">
        <Hero />
        <CallToAction />
    </div>
  )
}
