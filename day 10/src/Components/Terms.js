import React from 'react';
import './Terms.css'; // Import your CSS file if you have one
import { Link } from "react-router-dom";
function Terms() {
  return (
    <div className='my-terms-container'>
    <div className="termsAndConditions fadeIn">
      <h1 className="termsAndConditionsHeading">Terms and Conditions</h1>
      <h4 className="spangleWelcome">Welcome to Unplugged Events</h4>
      <p className="termsParagraphIntro">
        Add some terms here, for example "
        These Terms govern your use of unplugged and the unplugged applications,
        services that we offer
        except where we expressly state that separate Terms (and not these) apply." <br /><br />
        Would appreciate you visiting unplugged.com to click around for further more informations.
        )
      </p>
      <div className="serviceLeadingSection">
        {/* Service Section 1 */}
        <h4><span className="sn blue">1.</span><span className="st blue">1. Acceptance of Terms</span></h4>
        <p className="spl">By using this website (hereafter referred to as "the Site"), you agree to comply with and be bound by these Terms and Conditions. If you do not agree with any part of these terms, please do not use the Site.</p>
        {/* Add more service sections as needed */}
      </div>
      <div className="serviceLeadingSection">
        {/* Service Section 2 */}
        <h4><span className="sn orange">2.</span><span className="st orange">2. User Responsibilities</span></h4>
        <p className="spl">The context of terms and conditions, refer to the actions and behaviors expected from individuals using a website, service, or platform. These responsibilities typically include providing accurate information, complying with applicable laws and regulations, maintaining account security, engaging in respectful behavior, and adhering to the platform's rules and guidelines. User responsibilities help create a safe and fair environment for all users and are outlined to ensure compliance with terms and conditions.</p>
        {/* Add more service sections as needed */}
      </div>
      <div className="serviceLeadingSection">
        {/* Service Section 3 */}
        <h4><span className="sn lightGreen">3.</span><span className="st lightGreen">3. Privacy Policy</span></h4>
        <p className="spl">"Our app is committed to safeguarding your privacy. We collect minimal personal and device information to provide our services and improve your experience. Your data is not shared with third parties except for essential purposes, such as analytics or to fulfill legal requirements. We take security seriously, employing encryption and secure practices to protect your information. You have the right to access, correct, or delete your data, and we'll keep you informed of any policy changes. If you have questions or concerns, please contact us."</p>
        {/* Add more service sections as needed */}
      </div>
      <div className="serviceLeadingSection">
        {/* Service Section 4 */}
        <h4><span className="sn purple">4.</span><span className="st purple">4. Prohibited Activities</span></h4>
        <p className="spl">"Prohibited activities on our app include any form of harassment, hate speech, illegal content sharing, fraudulent behavior, spamming, unauthorized access attempts, or violations of intellectual property rights. Users are expected to adhere to our community guidelines, respect others, and use the app for its intended purpose. Engaging in any of these prohibited activities may result in account suspension or termination."</p>
        {/* Add more service sections as needed */}
      </div>
      <Link to="/">
      <h4 className="closeTerms">CLOSE TERMS AND CONDITIONS</h4></Link>
    </div>
    </div>
  );
}

export default Terms;