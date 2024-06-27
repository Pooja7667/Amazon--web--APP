// src/components/Footer.js
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h2 className="font-bold mb-4">Get to Know Us</h2>
          <ul>
            <li>
              <Link to="/about-us" className="hover:underline">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/careers" className="hover:underline">
                Careers
              </Link>
            </li>
            <li>
              <Link to="/press-releases" className="hover:underline">
                Press Releases
              </Link>
            </li>
            <li>
              <Link to="/amazon-science" className="hover:underline">
                Amazon Science
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="font-bold mb-4">Connect with Us</h2>
          <ul>
            <li>
              <a href="https://facebook.com" className="hover:underline">
                Facebook
              </a>
            </li>
            <li>
              <a href="https://twitter.com" className="hover:underline">
                Twitter
              </a>
            </li>
            <li>
              <a href="https://instagram.com" className="hover:underline">
                Instagram
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="font-bold mb-4">Make Money with Us</h2>
          <ul>
            <li>
              <Link to="/sell-on-amazon" className="hover:underline">
                Sell on Amazon
              </Link>
            </li>
            <li>
              <Link to="/sell-under-accelerator" className="hover:underline">
                Sell under Amazon Accelerator
              </Link>
            </li>
            <li>
              <Link
                to="/protect-and-build-your-brand"
                className="hover:underline"
              >
                Protect and Build Your Brand
              </Link>
            </li>
            <li>
              <Link to="/global-selling" className="hover:underline">
                Amazon Global Selling
              </Link>
            </li>
            <li>
              <Link to="/affiliate" className="hover:underline">
                Become an Affiliate
              </Link>
            </li>
            <li>
              <Link to="/fulfilment" className="hover:underline">
                Fulfilment by Amazon
              </Link>
            </li>
            <li>
              <Link to="/advertise-your-products" className="hover:underline">
                Advertise Your Products
              </Link>
            </li>
            <li>
              <Link to="/amazon-pay" className="hover:underline">
                Amazon Pay on Merchants
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="font-bold mb-4">Let Us Help You</h2>
          <ul>
            <li>
              <Link to="/covid19" className="hover:underline">
                COVID-19 and Amazon
              </Link>
            </li>
            <li>
              <Link to="/account" className="hover:underline">
                Your Account
              </Link>
            </li>
            <li>
              <Link to="/returns-centre" className="hover:underline">
                Returns Centre
              </Link>
            </li>
            <li>
              <Link to="/recalls" className="hover:underline">
                Recalls and Product Safety Alerts
              </Link>
            </li>
            <li>
              <Link to="/purchase-protection" className="hover:underline">
                100% Purchase Protection
              </Link>
            </li>
            <li>
              <Link to="/app-download" className="hover:underline">
                Amazon App Download
              </Link>
            </li>
            <li>
              <Link to="/help" className="hover:underline">
                Help
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-8 text-center">
        <Link to="/" className="text-gray-400 hover:underline">
          Back to top
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
