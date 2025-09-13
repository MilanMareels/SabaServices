import { serviceItems } from "../data/serviceItems";
import EmSection from "./EmSection";

export default function ServiceSection() {
  return (
    <section className="flex justify-center items-center flex-col bg-gray-100 py-20" id="services">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-blue-900 mb-4">ONZE DIENSTEN</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">Gespecialiseerd in professionele horeca-dampkappen, elektriciteitswerken en depannage met militaire precisie en betrouwbaarheid.</p>
      </div>
      <section className="grid md:grid-cols-3 sm:grid-cols-1 xs:grid-cols-1 gap-10 p-10 m-auto">
        {serviceItems.map((i, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden border-t-4 border-orange-500 max-w-[500px]">
            <div className="h-96 bg-blue-900 relative overflow-hidden">
              <img src={i.src} alt={i.title} className="w-full h-full object-cover object-top" loading="lazy" />
              <div className="absolute inset-0 bg-blue-900 bg-opacity-50 flex items-center justify-center"></div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3 uppercase">{i.title}</h3>
              <p className="text-gray-600 mb-4">{i.description}</p>
            </div>
          </div>
        ))}
      </section>
      <EmSection />
    </section>
  );
}
