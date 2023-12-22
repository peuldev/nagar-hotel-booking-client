import { Link } from "react-router-dom";
import Instagram1 from "../../../assets/Instagram/Instagram-b1.jpg";
import Instagram2 from "../../../assets/Instagram/Instagram-b2.jpg";
import Instagram3 from "../../../assets/Instagram/Instagram-b3.jpg";
import Instagram4 from "../../../assets/Instagram/Instagram-b4.jpg";
import Instagram5 from "../../../assets/Instagram/Instagram-b5.jpg";
import Instagram6 from "../../../assets/Instagram/Instagram-b6.jpg";
import {
  FaTwitter,
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#343a40] text-[#dedede]">
      <footer className="footer py-10 md:py-10 lg:py-20 px-2 max-w-7xl mx-auto">
        <nav>
          <header
            className="text-2xl font-semibold
           text-white"
          >
            NAGAR
          </header>
          <p className="text-[#8588a2] text-base">
            Sequi dolores ratione eos eveniet <br /> provident soluta. Omnis
            nesciunt sit eos <br /> at, eius voluptatum rem corporis. <br />{" "}
            Doloremque labore assumenda <br /> explicabo velit illo, soluta,
            inventore hic.
          </p>
          <nav className="grid lg:grid-flow-col md:grid-flow-col grid-cols-2 gap-4 ">
            <a className="hover:text-warning" href="https://twitter.com">
              <FaTwitter />
            </a>
            <a className="hover:text-warning" href="https://www.facebook.com">
              <FaFacebookF />
            </a>
            <a className="hover:text-warning" href="https://www.youtube.com">
              <FaYoutube />
            </a>
            <a className="hover:text-warning" href="https://www.instagram.com">
              <FaInstagram />
            </a>
            <a className="hover:text-warning" href="https://www.linkedin.com">
              <FaLinkedinIn />
            </a>
          </nav>
        </nav>
        <nav>
          <header className="text-[#ecfafb] text-xl font-semibold pb-5">
            Menu
          </header>
          <p className="cursor-pointer hover:text-warning text-base">
            <Link to="/about">About us</Link>
          </p>
          <a className="cursor-pointer hover:text-warning text-base">
            <Link to="/contact">Contact</Link>
          </a>
          <a className="cursor-pointer hover:text-warning text-base">
            <Link to="/shop">Shop</Link>
          </a>
        </nav>
        <nav>
          <header className="text-[#ecfafb] text-xl font-semibold pb-5">
            Meet Kinsley
          </header>
          <a className="cursor-pointer hover:text-warning text-base">
            Privacy policy
          </a>
          <a className="cursor-pointer hover:text-warning text-base">
            Terms of use
          </a>
          <a className="cursor-pointer hover:text-warning text-base">
            Cookie policy
          </a>
        </nav>
        <nav>
          <header className="text-[#ecfafb] text-xl font-semibold mb-7">
            Instagram
          </header>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-2 gap-2">
            <div>
              <a href="https://www.instagram.com/p/CYAVMTDsb6x" target="_blank">
                <img className="w-20 rounded-lg" src={Instagram1} alt="" />
              </a>
            </div>
            <div>
              <a href="https://www.instagram.com/p/CYAVQXRsWxB" target="_blank">
                <img className="w-20 rounded-lg" src={Instagram2} alt="" />
              </a>
            </div>
            <div>
              {" "}
              <a href="https://www.instagram.com/p/CYAVSkwMjZM" target="_blank">
                <img className="w-20 rounded-lg" src={Instagram3} alt="" />
              </a>
            </div>
            <div>
              {" "}
              <a href="https://www.instagram.com/p/CYAVUG8s5ER" target="_blank">
                <img className="w-20 rounded-lg" src={Instagram4} alt="" />
              </a>
            </div>
            <div>
              {" "}
              <a
                href="https://www.instagram.com/russellberg19/p/CYAVVmVsN7b"
                target="_blank"
              >
                <img className="w-20 rounded-lg" src={Instagram5} alt="" />
              </a>
            </div>
            <div>
              {" "}
              <a href="https://www.instagram.com/p/CYAVXIIMZDl" target="_blank">
                <img className="w-20 rounded-lg" src={Instagram6} alt="" />
              </a>
            </div>
          </div>
        </nav>
      </footer>
      <footer className="footer footer-center bg-[#0026] text-custom_text border-t-2 p-4">
        <aside>
          <p> © Copy 2023. All Rights Reserved </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
