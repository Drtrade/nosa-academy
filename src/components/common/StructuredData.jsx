import { Helmet } from 'react-helmet-async';

const StructuredData = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "SportsActivityLocation",
    "name": "Nosa Igiebor Sports Academy",
    "description": "Elite football training academy in Nigeria",
    "url": "https://www.nosaigieborsports.com",
    "logo": "https://www.nosaigieborsports.com/logo.png",
    "image": "https://www.nosaigieborsports.com/images/academy.jpg",
    "founder": {
      "@type": "Person",
      "name": "Nosa Igiebor",
      "jobTitle": "Founder & President",
      "sameAs": [
        "http://instagram.com/nosaigiebor1",
        "https://twitter.com/nosaigiebor",
        "http://facebook.com/nosaigiebormon",
        "http://www.youtube.com/@nosaigieborMON"
      ]
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Stella Maris School, Plot 76 Cadastral Zone C10",
      "addressLocality": "Abuja",
      "addressRegion": "FCT",
      "addressCountry": "NG"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+234-933-099-934",
      "contactType": "Customer Service",
      "email": "contact@nosaigieborsports.com"
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
    </Helmet>
  );
};

export default StructuredData;