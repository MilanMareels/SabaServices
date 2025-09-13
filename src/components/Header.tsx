import { Carousel } from "flowbite-react";
import { headerImages } from "../data/headerImages";

export default function Header() {
  return (
    <header>
      <section
        className="relative h-screen bg-cover bg-center bg-no-repeat flex items-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 51, 102, 0.7), rgba(0, 51, 102, 0.7)), url(https://readdy.ai/api/search-image?query=professional%20kitchen%20exhaust%20hood%20installation%20in%20commercial%20restaurant%20setting%20with%20modern%20stainless%20steel%20equipment%20clean%20industrial%20background%20professional%20lighting&width=1440&height=1024&seq=hero001&orientation=landscape)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 text-white">
          <div className="max-w-2xl">
            <div className="bg-orange-500 inline-block px-4 py-2 rounded rounded-button mb-6">
              <span className="font-bold text-sm tracking-wider">24/7 DEPANNAGE SERVICE</span>
            </div>
            <h1 className="text-5xl font-bold mb-6 tracking-tight">
              PROFESSIONELE HORECA
              <br />
              <span className="text-orange-500">DAMPKAPPEN & ELEKTRO</span>
            </h1>
            <p className="text-xl mb-8 opacity-90 leading-relaxed">Specialist in horeca dampkappen, elektrische installaties en 24/7 depannage service. Militaire precisie, betrouwbare kwaliteit.</p>
            <div className="flex space-x-4">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded rounded-button font-bold text-lg transition-colors cursor-pointer whitespace-nowrap">
                DIRECT CONTACT
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded rounded-button font-bold text-lg transition-colors cursor-pointer whitespace-nowrap">
                NOODGEVAL
              </button>
            </div>
          </div>
        </div>
      </section>
    </header>
  );
}
