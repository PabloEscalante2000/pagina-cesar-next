export const dynamic = "force-static";

import Footer from "@/components/Footer"
import Landing from "@/components/Landing"


export default function Home() {
  return (
    <div className="overflow-x-hidden">
        <Landing/>
        <Footer/>
    </div>
  );
}
