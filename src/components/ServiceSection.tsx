import { serviceItems } from "../data/serviceItems";
import EmSection from "./EmSection";

export default function ServiceSection() {
  return (
    <section className="flex justify-center items-center flex-col bg-gray-100 py-20" id="services">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-[#101860] mb-4 nulschock">ONZE DIENSTEN</h2>
        <p className="text-sm text-gray-600 max-w-3xl mx-auto nulschock p-4">
          Gespecialiseerd in professionele horeca-dampkappen, elektriciteitswerken en depannage met militaire precisie en betrouwbaarheid.
        </p>
      </div>
      <section className="grid md:grid-cols-3 sm:grid-cols-1 xs:grid-cols-1 gap-10 p-10 m-auto">
        {serviceItems.map((i, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden border-t-4 border-[#F37326] max-w-[500px]">
            {/*
              <div className="h-96 bg-[#101860] relative overflow-hidden">
              <img src={i.src} alt={i.title} className="w-full h-full object-cover object-top" loading="lazy" />
              <div className="absolute inset-0 bg-[#101860]bg-opacity-50 flex items-center justify-center"></div>
            </div>
            */}
            <div className="p-6">
              <h3 className="text-sm font-bold text-[#101860] mb-3 uppercase nulschock truncate">{i.title}</h3>
              <p className="text-gray-600 mb-4">{i.description}</p>
            </div>
          </div>
        ))}
      </section>
      <EmSection />
    </section>
  );
}
