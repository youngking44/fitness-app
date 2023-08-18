import Container from "@/components/container/Container";
import {
  BiLogoFacebook,
  BiLogoTwitter,
  BiLogoInstagramAlt,
  BiLogoLinkedin,
} from "react-icons/bi";
import { FaLocationArrow } from "react-icons/fa";
import { BsTelephoneFill } from "react-icons/bs";
import { AiFillMail } from "react-icons/ai";
import Icon from "@/components/icon/Icon";

const Footer = () => {
  return (
    <footer className="py-10 bg-primary-100">
      <Container>
        <div className="flex flex-col md:flex-row gap-5 md:gap-10">
          <div className="flex-1 gap-5">
            <h3 className="mb-3 text-xl font-bold uppercase text-primary-500">
              About Mike Fitness Gym
            </h3>
            <p>
              Mikegym is a gym founded on the pursuit of self-improvement. Our
              gym is architecturally designed to give you the best atmosphere
              for a satisfactory workout and a beautiful view of the city of
              Ibadan.
            </p>
            <p>
              We make fitness fun, effective and simple. Our coaches lead the
              fitness industry when it comes to helping people get into the best
              shape of their lives and reaching their fitness goals safely.
            </p>
            <div className="hidden md:flex items-center gap-5 my-5">
              <Icon>
                <a href="https://web.facebook.com">
                  <BiLogoFacebook />
                </a>
              </Icon>
              <Icon>
                <a href="https://www.twitter.com">
                  <BiLogoTwitter />
                </a>
              </Icon>
              <Icon>
                <a href="https://www.instagram.com">
                  <BiLogoInstagramAlt />
                </a>
              </Icon>
              <Icon>
                <a href="https://www.linkedin.com">
                  <BiLogoLinkedin />
                </a>
              </Icon>
            </div>
          </div>
          <div className="flex-1">
            <h3 className="mb-3 text-xl font-bold uppercase text-primary-500">
              Contact us
            </h3>
            <ul>
              <li className="flex items-center gap-3 mb-4">
                <FaLocationArrow />
                <span>139, Mokola, Ibadan, Oyo state, Nigeria.</span>
              </li>
              <li className="flex items-center gap-3 mb-4">
                <BsTelephoneFill />
                <span>+2348166551122</span>
              </li>
              <li className="flex items-center gap-3 mb-4">
                <AiFillMail />
                <span>mike@gmail.com</span>
              </li>
            </ul>
            <div className="flex items-center gap-5 my-5 md:hidden">
              <Icon>
                <a href="https://web.facebook.com">
                  <BiLogoFacebook />
                </a>
              </Icon>
              <Icon>
                <a href="https://www.twitter.com">
                  <BiLogoTwitter />
                </a>
              </Icon>
              <Icon>
                <a href="https://www.instagram.com">
                  <BiLogoInstagramAlt />
                </a>
              </Icon>
              <Icon>
                <a href="https://www.linkedin.com">
                  <BiLogoLinkedin />
                </a>
              </Icon>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
