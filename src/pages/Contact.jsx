import ContactHero from "../components/contact/ContactHero";
import DetailedContactInfo from "../components/contact/DetailedContactInfo";

const Contact = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* <ContactInfo /> */}
      <ContactHero/>
      <DetailedContactInfo/>
    </div>
  )
}

export default Contact;
