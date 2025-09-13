import { useState } from "react";
import Swal from "sweetalert2";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    naam: "",
    telefoon: "",
    email: "",
    bericht: "",
  });
  const [accept, setAccept] = useState(false);

  const subject = "New message from customer";
  const companyName = import.meta.env.VITE_COMPANY_NAME;
  const contactFormKey = import.meta.env.VITE_CONTACT_FORM_KEY;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    if (!accept) {
      Swal.fire({
        title: "Accepteer voorwaarden",
        text: "U moet akkoord gaan met de voorwaarden om het formulier te verzenden.",
        icon: "warning",
        confirmButtonColor: "black",
      });
      return;
    }

    const formDataToSend = new FormData();
    formDataToSend.append("access_key", contactFormKey);
    formDataToSend.append("subject", subject);
    formDataToSend.append("from_name", companyName);
    formDataToSend.append("naam", formData.naam);
    formDataToSend.append("telefoon", formData.telefoon);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("bericht", formData.bericht);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSend,
      });

      const data = await response.json();

      if (data.success) {
        Swal.fire({
          title: "Success!",
          text: "Bericht succesvol verzonden!",
          icon: "success",
          confirmButtonColor: "black",
        });
        // Reset form
        setFormData({
          naam: "",
          telefoon: "",
          email: "",
          bericht: "",
        });
        setAccept(false);
      } else {
        console.log("Error", data);
        Swal.fire({
          title: "Error!",
          text: "Er is iets misgegaan bij het verzenden. Probeer het later opnieuw.",
          icon: "error",
          confirmButtonColor: "black",
        });
      }
    } catch (error) {
      console.error("Error:", error);
      Swal.fire({
        title: "Error!",
        text: "Er is een netwerkfout opgetreden. Probeer het later opnieuw.",
        icon: "error",
        confirmButtonColor: "black",
      });
    }
  };

  return (
    <section className="py-20 bg-white" id="contact">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">CONTACT</h2>
          <p className="text-xl text-gray-600">Neem contact op voor een vrijblijvende offerte of bij noodgevallen</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-blue-900 mb-6">STUUR EEN BERICHT</h3>
            <form className="space-y-6" onSubmit={onSubmit}>
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
                  placeholder="04 12 34 56 78"
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
                  placeholder="uw.email@voorbeeld..be"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">BERICHT</label>
                <textarea
                  name="bericht"
                  rows={5}
                  value={formData.bericht}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded rounded-button focus:outline-none focus:border-orange-500 text-sm resize-none"
                  placeholder="Beschrijf uw vraag of het probleem..."
                ></textarea>
              </div>

              <div className="flex items-center mt-4">
                <input type="checkbox" id="acceptTerms" name="acceptTerms" checked={accept} onChange={() => setAccept(!accept)} className="mr-2" />
                <label htmlFor="acceptTerms" className="text-sm text-gray-700">
                  Ik ga akkoord met de{" "}
                  <a href="/privacy" className="text-blue-500 hover:underline">
                    voorwaarden
                  </a>{" "}
                  en begrijp dat ik het bericht niet kan verzenden zonder mijn toestemming.
                </label>
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
                <div className="flex items-center mb-3 gap-2">
                  <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" viewBox="0 0 24 24">
                    <path
                      fill-rule="evenodd"
                      d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v5a1 1 0 1 0 2 0V8Zm-1 7a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H12Z"
                      clip-rule="evenodd"
                    />
                  </svg>

                  <h4 className="text-xl font-bold">NOODGEVALLEN</h4>
                </div>
                <p className="text-lg font-bold">
                  <a href="tel:+32 476 62 31 12">+32 476 62 31 12</a>
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="bg-blue-900 text-white w-12 h-12 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" viewBox="0 0 24 24">
                      <path d="M7.978 4a2.553 2.553 0 0 0-1.926.877C4.233 6.7 3.699 8.751 4.153 10.814c.44 1.995 1.778 3.893 3.456 5.572 1.68 1.679 3.577 3.018 5.57 3.459 2.062.456 4.115-.073 5.94-1.885a2.556 2.556 0 0 0 .001-3.861l-1.21-1.21a2.689 2.689 0 0 0-3.802 0l-.617.618a.806.806 0 0 1-1.14 0l-1.854-1.855a.807.807 0 0 1 0-1.14l.618-.62a2.692 2.692 0 0 0 0-3.803l-1.21-1.211A2.555 2.555 0 0 0 7.978 4Z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-blue-900">Telefoon</p>
                    <a href="tel:+32 476 62 31 12" className="text-gray-600">
                      +32 476 62 31 12
                    </a>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="bg-blue-900 text-white w-12 h-12 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" viewBox="0 0 24 24">
                      <path d="M2.038 5.61A2.01 2.01 0 0 0 2 6v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6c0-.12-.01-.238-.03-.352l-.866.65-7.89 6.032a2 2 0 0 1-2.429 0L2.884 6.288l-.846-.677Z" />
                      <path d="M20.677 4.117A1.996 1.996 0 0 0 20 4H4c-.225 0-.44.037-.642.105l.758.607L12 10.742 19.9 4.7l.777-.583Z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-blue-900">Email</p>
                    <a href="mailto:services.saba@gmail.com" className="text-gray-600">
                      services.saba@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
