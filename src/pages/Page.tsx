import { useCookies } from "react-cookie";
import ContactForm from "../components/ContactForm";
import CookieConsent from "../components/cookie/CookieConsent";
import Header from "../components/Header";
import ScrollToTopButton from "../components/ScrollToTopButton";
import ServiceSection from "../components/ServiceSection";
import SEO from "../components/SEO/SEO";

export default function Page() {
  const [cookies] = useCookies(["cookieContent"]);
  return (
    <main>
      <SEO />
      <Header />
      <ServiceSection />
      <ContactForm />
      <ScrollToTopButton />
      {!cookies.cookieContent && <CookieConsent />}
    </main>
  );
}
