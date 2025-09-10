// src/components/Contact.js
import React from "react";

function Contact() {
  return (
    <footer className="bg-blue-900 text-white p-6 text-center">
      <h2 className="text-lg font-semibold mb-2">Contact Us</h2>
      <p>📞 Phone: +91 98765 43210</p>
      <p>📧 Email: info@mysoftwarecompany.com</p>
      <p>
        🔗 LinkedIn:{" "}
        <a
          href="https://www.linkedin.com/company/mysoftwarecompany"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          linkedin.com/company/mysoftwarecompany
        </a>
      </p>
      <p className="text-sm mt-4">
        © {new Date().getFullYear()} My Software Company. All rights reserved.
      </p>
    </footer>
  );
}

export default Contact;
