import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    naam: "",
    telefoon: "",
    email: "",
    bericht: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Hier zou je formulierverwerking toevoegen
    console.log("Formulier verzonden:", formData);
    alert("Bedankt voor uw bericht! We nemen zo spoedig mogelijk contact met u op.");
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-blue-900 text-white py-4 px-6 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <i className="fas fa-bolt text-orange-500 text-2xl"></i>
            <h1 className="text-xl font-bold tracking-wider">ELEKTRO SERVICES</h1>
          </div>
          <div className="flex items-center space-x-6">
            <span className="text-sm font-medium">24/7 DEPANNAGE</span>
            <div className="bg-orange-500 px-4 py-2 rounded rounded-button">
              <i className="fas fa-phone mr-2"></i>
              <span className="font-bold">0800 123 456</span>
            </div>
          </div>
        </div>
      </header>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">CONTACT</h2>
            <p className="text-xl text-gray-600">Neem contact op voor een vrijblijvende offerte of bij noodgevallen</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-blue-900 mb-6">STUUR EEN BERICHT</h3>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">NAAM *</label>
                  <input
                    type="text"
                    name="naam"
                    value={formData.naam}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded rounded-button focus:outline-none focus:border-orange-500 text-sm"
                    placeholder="Uw volledige naam"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">TELEFOON *</label>
                  <input
                    type="tel"
                    name="telefoon"
                    value={formData.telefoon}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded rounded-button focus:outline-none focus:border-orange-500 text-sm"
                    placeholder="06 12 34 56 78"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">EMAIL *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded rounded-button focus:outline-none focus:border-orange-500 text-sm"
                    placeholder="uw.email@voorbeeld.nl"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">BERICHT</label>
                  <textarea
                    name="bericht"
                    rows="5"
                    value={formData.bericht}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded rounded-button focus:outline-none focus:border-orange-500 text-sm resize-none"
                    placeholder="Beschrijf uw vraag of het probleem..."
                  ></textarea>
                </div>
                <button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 rounded rounded-button font-bold text-lg transition-colors cursor-pointer whitespace-nowrap">
                  VERSTUUR BERICHT
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-blue-900 mb-6">CONTACTGEGEVENS</h3>

                <div className="bg-orange-500 text-white p-6 rounded-lg mb-6">
                  <div className="flex items-center mb-3">
                    <i className="fas fa-exclamation-circle text-2xl mr-3"></i>
                    <h4 className="text-xl font-bold">NOODGEVALLEN</h4>
                  </div>
                  <p className="text-lg font-bold">0800 123 456</p>
                  <p className="text-sm opacity-90">24 uur per dag, 7 dagen per week</p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="bg-blue-900 text-white w-12 h-12 rounded-full flex items-center justify-center mr-4">
                      <i className="fas fa-phone"></i>
                    </div>
                    <div>
                      <p className="font-bold text-blue-900">Telefoon</p>
                      <p className="text-gray-600">010 123 4567</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="bg-blue-900 text-white w-12 h-12 rounded-full flex items-center justify-center mr-4">
                      <i className="fas fa-envelope"></i>
                    </div>
                    <div>
                      <p className="font-bold text-blue-900">Email</p>
                      <p className="text-gray-600">info@elektroservices.nl</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="bg-blue-900 text-white w-12 h-12 rounded-full flex items-center justify-center mr-4">
                      <i className="fas fa-map-marker-alt"></i>
                    </div>
                    <div>
                      <p className="font-bold text-blue-900">Werkgebied</p>
                      <p className="text-gray-600">Rotterdam en omgeving</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="bg-blue-900 text-white w-12 h-12 rounded-full flex items-center justify-center mr-4">
                      <i className="fas fa-clock"></i>
                    </div>
                    <div>
                      <p className="font-bold text-blue-900">Openingstijden</p>
                      <p className="text-gray-600">Ma-Vr: 08:00 - 18:00</p>
                      <p className="text-gray-600">Za: 09:00 - 17:00</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-lg font-bold text-blue-900 mb-4">CERTIFICERINGEN</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <i className="fas fa-certificate text-orange-500 text-2xl mb-2"></i>
                    <p className="text-sm font-medium">NEN 3140</p>
                  </div>
                  <div className="text-center">
                    <i className="fas fa-shield-alt text-orange-500 text-2xl mb-2"></i>
                    <p className="text-sm font-medium">VCA Gecertificeerd</p>
                  </div>
                  <div className="text-center">
                    <i className="fas fa-tools text-orange-500 text-2xl mb-2"></i>
                    <p className="text-sm font-medium">NVKL Erkend</p>
                  </div>
                  <div className="text-center">
                    <i className="fas fa-award text-orange-500 text-2xl mb-2"></i>
                    <p className="text-sm font-medium">ISO 9001</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
