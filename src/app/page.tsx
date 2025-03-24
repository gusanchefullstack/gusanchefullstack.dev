import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Separator } from "@/components/ui/separator";


export default function Home() {
  return (
    <div className="px-12">
      <Navbar/>
      <Hero/>
      <Separator/>
      <Footer/>
    </div>
  );
}
