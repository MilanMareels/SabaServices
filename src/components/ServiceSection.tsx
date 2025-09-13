import { serviceItems } from "../data/serviceItems";
import EmSection from "./EmSection";

export default function ServiceSection() {
  return (
    <section className="flex justify-center items-center flex-col bg-gray-100 py-20" id="services">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-blue-900 mb-4">ONZE DIENSTEN</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">Gespecialiseerd in professionele horeca-oplossingen en elektrische installaties met militaire precisie en betrouwbaarheid.</p>
      </div>
      <section className="grid md:grid-cols-2 sm:grid-cols-2 xs:grid-cols-1 gap-10 p-10 m-auto">
        {serviceItems.map((i, index) => (
          <div className="bg-white rounded-lg shadow-lg overflow-hidden border-t-4 border-orange-500 max-w-[500px]">
            <div className="h-48 bg-blue-900 relative overflow-hidden">
              <img
                src="https://readdy.ai/api/search-image?query=professional%20electrical%20work%20tools%20and%20equipment%20electrical%20installation%20modern%20workshop%20setting%20clean%20industrial%20background%20professional%20lighting&width=400&height=300&seq=service002&orientation=landscape"
                alt="Elektrische Klussen"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-blue-900 bg-opacity-50 flex items-center justify-center">
                <i className="fas fa-bolt text-white text-4xl"></i>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">ELEKTRISCHE KLUSSEN</h3>
              <p className="text-gray-600 mb-4">Kleine en grote elektrische werkzaamheden uitgevoerd met militaire precisie. Van stopcontacten tot complete installaties.</p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Stopcontacten & schakelaars</li>
                <li>• Verlichting installatie</li>
                <li>• Meterkast werkzaamheden</li>
                <li>• Periodieke keuringen</li>
              </ul>
            </div>
          </div>
        ))}
      </section>
      <EmSection />
    </section>
  );
}
