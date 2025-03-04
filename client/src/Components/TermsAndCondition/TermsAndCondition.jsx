import React from "react";
import { Container, Card } from "react-bootstrap";
import "./TermsAndCondition.css";

const TermsAndConditions = () => {
  return (
    <div className="terms-container">
      <Container>
        <Card
          className="terms-card"
          style={{ backgroundColor: "#444", color: "#fff" }}
        >
          <Card.Body>
            <h2 className="terms-title" style={{ color: "#007bff" }}>
              Terms and Conditions
            </h2>
            <p className="terms-intro">
              Welcome to Ace Crafts! Before making a purchase or using our
              services, please carefully review the following terms and
              conditions. By accessing our website, products, or services, you
              agree to abide by these terms. If you do not agree with any part
              of these terms, please refrain from using our website or
              purchasing our products.
            </p>
            <ol className="terms-list">
              <li>
                <strong>Ownership and Rights:</strong> The modpacks, maps, models, textures, and mods available on this website are inspired by various creators, including Athos, Problems, Cadres, and more. While we take inspiration from these creators, all content is developed in collaboration with skilled developers and belongs to Ace Crafts. We hold full rights to distribute and sell these modpacks. Redistribution of any purchased content is strictly prohibited.
                <br />
                <br />
                Content creators and YouTubers who purchase our modpacks are permitted to feature them in their videos. However, sharing or distributing the modpacks without explicit permission is not allowed.
              </li>
              <li>
                <strong>Developer Compensation:</strong> Ace Crafts ensures that developers receive fair compensation for each sale of their content. By purchasing our products, users acknowledge and support the developers who contribute to creating these high-quality modpacks.
              </li>
              <li>
                <strong>Video Recording and Redistribution:</strong> You are permitted to record and showcase our modpacks on platforms like YouTube. However, unauthorized redistribution of any part of our modpacks, models, textures, or other content is strictly prohibited. Ace Crafts reserves the right to take legal action against any unauthorized distribution, including issuing copyright strikes.
              </li>
              <li>
                <strong>Additional Fees:</strong> All products sold on our website are subject to an additional 8% fee to cover PayPal charges and operational costs required to maintain the website and develop new content.
              </li>
              <li>
                <strong>Refunds and Replacements:</strong> Refunds or replacements will only be provided under the following conditions:
                <ul>
                  <li>The product is not functioning as described.</li>
                  <li>The product does not match the description provided.</li>
                  <li>The product is not delivered.</li>
                  <li>The product has major technical issues or bugs.</li>
                  <li>Any other valid reason deemed appropriate by Ace Crafts.</li>
                </ul>
              </li>
              <li>
                <strong>Privacy Policy:</strong> We respect your privacy and do not share personal information, including email addresses and IP addresses, with third parties.
              </li>
              <li>
                <strong>Fair Treatment of Content Creators:</strong> Ace Crafts does not prioritize any specific YouTuber or content creator over others. All customers are treated equally, and we encourage fair competition and creativity in content creation.
              </li>
              <li>
                <strong>Agreement to Terms:</strong> By purchasing from our website, you agree to these terms and conditions. If you do not accept these terms, you are free to refrain from using our services.
              </li>
              <li>
                <strong>Prohibited Activities:</strong> Any misuse of our services, including but not limited to fraudulent activities, hacking, or unauthorized use, is strictly prohibited and may result in legal action.
              </li>
              <li>
                <strong>Changes to Terms and Conditions:</strong> Ace Crafts reserves the right to update or modify these terms at any time without prior notice. It is the user’s responsibility to check for updates periodically. Continued use of our services after any modifications constitutes acceptance of the updated terms.
              </li>
              <li>
                <strong>Dispute Resolution:</strong> If a dispute arises between Ace Crafts and a user, we encourage open communication to resolve the issue. Users can contact us via email or chat to discuss concerns. If Ace Crafts is found to be at fault, we will issue a refund or replacement as appropriate.
              </li>
              <li>
                <strong>Contact Us:</strong> For any inquiries, assistance, or business-related matters, please contact us at:
                <ul>
                  <li> 📧 contact@teamacecrafts.com</li>
                </ul>
              </li>
            </ol>

            <p className="terms-thankyou">
              Thank you for Ace Crafts!
            </p>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default TermsAndConditions;
