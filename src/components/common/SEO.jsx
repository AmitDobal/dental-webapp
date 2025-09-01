import { useEffect } from "react";
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

  useEffect(() => {
    // Update document title
    document.title = defaultTitle;

    // Create or update meta tags
    const updateMetaTag = (name, content, property = false) => {
      let meta = document.querySelector(
        property ? `meta[property="${name}"]` : `meta[name="${name}"]`
      );

      if (!meta) {
        meta = document.createElement("meta");
        if (property) {
          meta.setAttribute("property", name);
        } else {
          meta.setAttribute("name", name);
        }
        document.head.appendChild(meta);
      }

      meta.setAttribute("content", content);
    };

    // Basic Meta Tags
    updateMetaTag("description", defaultDescription);
    updateMetaTag("keywords", defaultKeywords);
    updateMetaTag("author", clinicInfo.doctor.name);
    updateMetaTag("robots", "index, follow");
    updateMetaTag("language", "en");
    updateMetaTag("revisit-after", "7 days");

    // Canonical URL
    if (url) {
      let canonical = document.querySelector('link[rel="canonical"]');
      if (!canonical) {
        canonical = document.createElement("link");
        canonical.setAttribute("rel", "canonical");
        document.head.appendChild(canonical);
      }
      canonical.setAttribute("href", url);
    }

    // Open Graph Meta Tags
    updateMetaTag("og:title", defaultTitle, true);
    updateMetaTag("og:description", defaultDescription, true);
    updateMetaTag("og:type", type, true);
    updateMetaTag("og:url", url || `https://${clinicInfo.website}`, true);
    updateMetaTag("og:image", image, true);
    updateMetaTag("og:image:width", "1200", true);
    updateMetaTag("og:image:height", "630", true);
    updateMetaTag("og:site_name", clinicInfo.name, true);
    updateMetaTag("og:locale", "en_US", true);

    // Twitter Card Meta Tags
    updateMetaTag("twitter:card", "summary_large_image");
    updateMetaTag("twitter:title", defaultTitle);
    updateMetaTag("twitter:description", defaultDescription);
    updateMetaTag("twitter:image", image);
    updateMetaTag("twitter:site", "@manifestdental");

    // Additional Meta Tags for Dental Clinic
    updateMetaTag("geo.region", "IN-MH");
    updateMetaTag("geo.placename", "Kharghar, Navi Mumbai, Maharashtra");
    updateMetaTag(
      "geo.position",
      `${clinicInfo.map.coordinates.lat};${clinicInfo.map.coordinates.lng}`
    );
    updateMetaTag(
      "ICBM",
      `${clinicInfo.map.coordinates.lat}, ${clinicInfo.map.coordinates.lng}`
    );

    // Business Hours
    updateMetaTag(
      "business:hours",
      clinicInfo.hours.map((hour) => `${hour.days} ${hour.hours}`).join(", ")
    );

    // Contact Information
    updateMetaTag("contact:phone", clinicInfo.phone);
    updateMetaTag("contact:email", clinicInfo.email);

    // Additional Meta for Dental Services
    updateMetaTag("dental:services", clinicInfo.services.join(", "));
    updateMetaTag("dental:specialist", clinicInfo.doctor.name);
    updateMetaTag("dental:location", "Kharghar, Navi Mumbai, Maharashtra");
    updateMetaTag("dental:established", clinicInfo.established);

    // Add structured data
    const addStructuredData = () => {
      // Remove existing structured data
      const existingScripts = document.querySelectorAll(
        'script[type="application/ld+json"]'
      );
      existingScripts.forEach((script) => script.remove());

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
        openingHours: clinicInfo.hours.map(
          (hour) => `${hour.days} ${hour.hours}`
        ),
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

      // Add structured data scripts
      const addScript = (data) => {
        const script = document.createElement("script");
        script.type = "application/ld+json";
        script.textContent = JSON.stringify(data);
        document.head.appendChild(script);
      };

      addScript(structuredData);
      addScript(doctorStructuredData);
    };

    addStructuredData();

    // Cleanup function
    return () => {
      // Reset title to default
      document.title =
        "Dr. Manasi's Manifest Dental Studio - Cosmetic Dentist & Root Canal Specialist";
    };
  }, [title, description, keywords, image, url, type, pageType]);

  // This component doesn't render anything visible
  return null;
};

export default SEO;
