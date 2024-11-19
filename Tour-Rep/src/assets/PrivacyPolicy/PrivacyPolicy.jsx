import React from "react";
import styles from "./PrivacyPolicy.module.css";
import WhatsAppWidget from "../WhatsAppWidget/WhatsAppWidget.jsx"
import Header from '../OG-Header/Header2.jsx';
import Footer from '../Footer/Footer.jsx'

const PrivacyPolicy = () => {
  return (
    <>
    <Header/>
    <div className={styles.container4}>
      <h1 className={styles.title}>Privacy Policy</h1>
      <p className={styles.paragraph}>
        Welcome to TourwithChe! At TourwithChe, we value your trust and are committed to safeguarding your personal information. This Privacy Policy outlines how we collect, use, and protect the data you share with us as you embark on unforgettable journeys through Rwanda and Tanzania.
      </p>

      <h2 className={styles.sectionTitle}>1. Information We Collect</h2>
      <p className={styles.paragraph}>
        When you interact with TourwithChe, we may collect the following types of information:
      </p>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <strong>Personal Information:</strong> This includes your name, email address, phone number, and any other details you provide when booking a tour or subscribing to our updates.
        </li>
        <li className={styles.listItem}>
          <strong>Usage Data:</strong> Information about how you interact with our website, including your IP address, browser type, and pages visited, to enhance your user experience.
        </li>
      </ul>

      <h2 className={styles.sectionTitle}>2. How We Use Your Information</h2>
      <p className={styles.paragraph}>We use the information we collect to:</p>
      <ul className={styles.list}>
        <li className={styles.listItem}>Provide you with tailored travel experiences in Rwanda and Tanzania.</li>
        <li className={styles.listItem}>Process bookings, inquiries, and customer support requests.</li>
        <li className={styles.listItem}>
          Send you updates, promotional offers, and newsletters (you can opt-out anytime).
        </li>
        <li className={styles.listItem}>
          Analyze website performance to improve our services and user experience.
        </li>
      </ul>

      <h2 className={styles.sectionTitle}>3. Sharing Your Information</h2>
      <p className={styles.paragraph}>
        We respect your privacy and will never sell your personal information. However, we may share your information with trusted third parties, such as:
      </p>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          Tour operators and local guides to ensure seamless travel arrangements.
        </li>
        <li className={styles.listItem}>
          Service providers who help us manage our website and communications.
        </li>
        <li className={styles.listItem}>
          Authorities if required by law or to protect TourwithChe's legal rights.
        </li>
      </ul>

      <h2 className={styles.sectionTitle}>4. Protecting Your Information</h2>
      <p className={styles.paragraph}>
        We take your privacy seriously and implement robust security measures to protect your data. This includes encryption, secure servers, and regular system audits. While we strive to safeguard your information, no online platform can guarantee 100% security.
      </p>

      <h2 className={styles.sectionTitle}>5. Your Rights</h2>
      <p className={styles.paragraph}>
        You have the right to:
      </p>
      <ul className={styles.list}>
        <li className={styles.listItem}>Access, update, or delete your personal information.</li>
        <li className={styles.listItem}>
          Withdraw your consent to data processing at any time.
        </li>
        <li className={styles.listItem}>
          Request details about how your information is used.
        </li>
      </ul>
      <p className={styles.paragraph}>
        To exercise your rights, contact us at{" "}
        <a href="mailto:info@tourwithche.com" className={styles.link}>
          info@tourwithche.com
        </a>
        .
      </p>

      <h2 className={styles.sectionTitle}>6. Cookies</h2>
      <p className={styles.paragraph}>
        Our website uses cookies to enhance your browsing experience. Cookies are small data files stored on your device to remember your preferences and provide personalized content. You can manage cookie settings in your browser.
      </p>

      <h2 className={styles.sectionTitle}>7. Third-Party Links</h2>
      <p className={styles.paragraph}>
        Our website may contain links to third-party websites. Please note that we are not responsible for the privacy practices of these websites, and we encourage you to review their policies.
      </p>

      <h2 className={styles.sectionTitle}>8. Updates to This Privacy Policy</h2>
      <p className={styles.paragraph}>
        We may update this Privacy Policy to reflect changes in our practices or for legal reasons. Any updates will be posted on this page, and we encourage you to review it periodically.
      </p>

      <h2 className={styles.sectionTitle}>9. Contact Us</h2>
      <p className={styles.paragraph}>
        If you have any questions or concerns about this Privacy Policy or how we handle your data, please contact us:
      </p>
      <p className={styles.paragraph}>
        <strong>TourwithChe</strong>
        <br />
        Email:{" "}
        <a href="mailto:info@tourwithche.com" className={styles.link}>
          info@tourwithche.com
        </a>
        <br />
        Phone: +250 782 444 676
      </p>

      <h2 className={styles.sectionTitle}>10. Your Consent</h2>
      <p className={styles.paragraph}>
        By using TourwithChe's services, you consent to the terms outlined in this Privacy Policy.
      </p>

      <p className={styles.footer}>
        Thank you for choosing TourwithChe. Your journey begins here!
      </p>
    </div>
    <WhatsAppWidget/>
    <Footer/>
    </>
  );
};

export default PrivacyPolicy;
