import { Helmet } from "react-helmet";
import { JsonLd } from "react-schemaorg";
import { ContactPoint, LocalBusiness, Service } from "schema-dts";

const SEO = () => {
  return (
    <>
      {/* SEO - Meta Tags */}
      <Helmet>
        <meta name="description" content="SABA Services — Gespecialiseerd in depannage (spoed), kleine elektriciteitswerken en installatie van Horica dampkappen. Snelle, betrouwbare service." />
        <meta name="keywords" content="elektricien Antwerpen, depannage Antwerpen, spoed elektricien, kleine elektriciteitswerken, stroomonderbreking" />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="X-Robots-Tag" content="index, follow, max-image-preview:large" />
        <link rel="canonical" href="https://www.sabaservices.be" />

        {/* Open Graph (Facebook, WhatsApp, LinkedIn) */}
        <meta property="og:title" content="SABA Services - Elektricien Antwerpen" />
        <meta property="og:description" content="SabaServices — Snelle depannage en kleine elektriciteitswerken in Antwerpen. Bel voor spoedreparaties en kleine installaties." />
        <meta property="og:image" content="/Logo.JPG" />
        <meta property="og:url" content="https://www.sabaservices.be" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="nl_BE" />
        <meta property="og:site_name" content="SABA Services" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="/Logo.JPG" />
        <meta name="twitter:title" content="SABA Services - Antwerpen" />
        <meta name="twitter:description" content="Snelle depannage en kleine elektriciteitswerken in Antwerpen. Bel ons voor spoedinterventies!" />
        <meta name="twitter:image" content="/Logo.JPG" />
        <meta name="twitter:site" content="SABA Services" />
      </Helmet>

      {/* Structured Data - Bedrijfsinformatie */}
      <JsonLd<LocalBusiness>
        item={{
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "SABA Services",
          description: "Elektricien in Antwerpen, gespecialiseerd in depannage (spoed) en kleine elektriciteitswerken.",
          telephone: "+32 476 62 31 12",
          email: "services.saba@gmail.com",
          url: "https://www.sabaservices.be",
          areaServed: {
            "@type": "Place",
            name: "Antwerpen",
          },
          address: {
            "@type": "PostalAddress",
            addressLocality: "Antwerpen",
            addressRegion: "Antwerpen",
            addressCountry: "BE",
          },
        }}
      />

      {/* Structured Data - Diensten */}
      <JsonLd<Service>
        item={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Kleine Elektriciteitswerken & Depanage",
          description: "Snelle depannage (spoedreparaties) en kleine elektriciteitswerken: kortsluitingen en kleine herstellingen.",
          provider: {
            "@type": "LocalBusiness",
            name: "SABA Services",
          },
          serviceType: "Depannage; Kleine elektriciteitswerken; Spoedservice; Reparaties",
          areaServed: "Antwerpen",
        }}
      />

      {/* Structured Data - Contactgegevens */}
      <JsonLd<ContactPoint>
        item={{
          "@context": "https://schema.org",
          "@type": "ContactPoint",
          name: "SABA Services - Klantenservice",
          contactType: "customer service",
          description: "Contacteer ons voor depannage, spoedinterventies en kleine elektriciteitswerken in Antwerpen.",
          telephone: "+32 476 62 31 12",
          email: "services.saba@gmail.com",
          areaServed: "Antwerpen",
          availableLanguage: ["Dutch", "English"],
        }}
      />
    </>
  );
};

export default SEO;
