import { Helmet } from "react-helmet-async";
import { clinicInfo } from "../../data";

const SEO = ({
  title,
  description,
  keywords,
  image = "/images/dental-logo.png",
  url,
  type = "website",
  pageType = "general",
}) => {
  // Default values based on clinic info
  const defaultTitle = `${title || "Dr. Manasi's Manifest Dental Studio"} - ${
    clinicInfo.tagline
  }`;
  const defaultDescription =
    description ||
    `Expert dental care by ${clinicInfo.doctor.name} in Kharghar, Navi Mumbai. Specializing in cosmetic dentistry, root canal treatment, and dental implants. Book your appointment today.`;
  const defaultKeywords =
    keywords ||
    `dental clinic, cosmetic dentist, root canal specialist, dental implants, teeth whitening, Kharghar, Navi Mumbai, Dr. Manasi Surwade, Manifest Dental Studio, dental care, oral health, smile design, preventive dentistry`;

  // Structured data for local business
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: clinicInfo.name,
    description: clinicInfo.about.description,
    url: clinicInfo.website,
    telephone: clinicInfo.phone,
    email: clinicInfo.email,
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "Shop No 5, Shree Raj Ratnadeep, Neelkanth Sweets Road, near LIC Office, Sector 20",
      addressLocality: "Kharghar",
      addressRegion: "Navi Mumbai",
      addressCountry: "IN",
      postalCode: "410210",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: clinicInfo.map.coordinates.lat,
      longitude: clinicInfo.map.coordinates.lng,
    },
    openingHours: clinicInfo.hours.map((hour) => `${hour.days} ${hour.hours}`),
    priceRange: "$$",
    currenciesAccepted: "INR",
    paymentAccepted: "Cash, Credit Card, Debit Card, Insurance",
    medicalSpecialty: clinicInfo.services,
    availableService: clinicInfo.services.map((service) => ({
      "@type": "MedicalProcedure",
      name: service,
    })),
    founder: {
      "@type": "Person",
      name: clinicInfo.doctor.name,
      jobTitle: clinicInfo.doctor.specialization,
      qualifications: clinicInfo.doctor.qualifications,
      medicalSpecialty: clinicInfo.doctor.specialization,
    },
    image: [clinicInfo.about.image, "/images/dental-logo.png"],
    sameAs: clinicInfo.socialMedia.map((social) => social.url),
    areaServed: [
      {
        "@type": "City",
        name: "Kharghar",
      },
      {
        "@type": "City",
        name: "Navi Mumbai",
      },
      {
        "@type": "City",
        name: "Mumbai",
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Dental Services",
      itemListElement: clinicInfo.services.map((service, index) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "MedicalProcedure",
          name: service,
        },
      })),
    },
  };

  // Additional structured data for doctor
  const doctorStructuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: clinicInfo.doctor.name,
    jobTitle: clinicInfo.doctor.specialization,
    worksFor: {
      "@type": "MedicalBusiness",
      name: clinicInfo.name,
    },
    qualifications: clinicInfo.doctor.qualifications,
    medicalSpecialty: clinicInfo.doctor.specialization,
    image: clinicInfo.about.image,
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "Shop No 5, Shree Raj Ratnadeep, Neelkanth Sweets Road, near LIC Office, Sector 20",
      addressLocality: "Kharghar",
      addressRegion: "Navi Mumbai",
      addressCountry: "IN",
      postalCode: "410210",
    },
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{defaultTitle}</title>
      <meta name="description" content={defaultDescription} />
      <meta name="keywords" content={defaultKeywords} />
      <meta name="author" content={clinicInfo.doctor.name} />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="en" />
      <meta name="revisit-after" content="7 days" />

      {/* Canonical URL */}
      {url && <link rel="canonical" href={url} />}

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={defaultTitle} />
      <meta property="og:description" content={defaultDescription} />
      <meta property="og:type" content={type} />
      <meta
        property="og:url"
        content={url || `https://${clinicInfo.website}`}
      />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content={clinicInfo.name} />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={defaultTitle} />
      <meta name="twitter:description" content={defaultDescription} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:site" content="@manifestdental" />

      {/* Additional Meta Tags for Dental Clinic */}
      <meta name="geo.region" content="IN-MH" />
      <meta name="geo.placename" content="Kharghar, Navi Mumbai, Maharashtra" />
      <meta
        name="geo.position"
        content={`${clinicInfo.map.coordinates.lat};${clinicInfo.map.coordinates.lng}`}
      />
      <meta
        name="ICBM"
        content={`${clinicInfo.map.coordinates.lat}, ${clinicInfo.map.coordinates.lng}`}
      />

      {/* Business Hours */}
      <meta
        name="business:hours"
        content={clinicInfo.hours
          .map((hour) => `${hour.days} ${hour.hours}`)
          .join(", ")}
      />

      {/* Contact Information */}
      <meta name="contact:phone" content={clinicInfo.phone} />
      <meta name="contact:email" content={clinicInfo.email} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(doctorStructuredData)}
      </script>

      {/* Additional Meta for Dental Services */}
      <meta name="dental:services" content={clinicInfo.services.join(", ")} />
      <meta name="dental:specialist" content={clinicInfo.doctor.name} />
      <meta
        name="dental:location"
        content="Kharghar, Navi Mumbai, Maharashtra"
      />
      <meta name="dental:established" content={clinicInfo.established} />

      {/* Mobile and Performance Meta */}
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=5.0"
      />
      <meta name="format-detection" content="telephone=no" />

      {/* Preconnect for Performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <link rel="preconnect" href="https://maps.google.com" />

      {/* Favicon and App Icons */}
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/images/dental-logo.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/images/dental-logo.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/images/dental-logo.png"
      />

      {/* Theme Color */}
      <meta name="theme-color" content="#1e40af" />
      <meta name="msapplication-TileColor" content="#1e40af" />
    </Helmet>
  );
};

export default SEO;
