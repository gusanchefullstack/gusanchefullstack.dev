import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";


export default function Home() {
  return (
    <div className="px-12">
      <Navbar/>
      <Hero/>
      <Footer/>
    </div>
  );
}
