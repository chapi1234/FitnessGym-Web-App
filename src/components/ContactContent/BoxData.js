import { FaMapLocationDot, FaPhoneVolume } from "react-icons/fa6";
import { LuMails } from "react-icons/lu";

const boxData = [
  {
    id: 1,
    link: "https://maps.app.goo.gl/jKPN2oKWiUrcJuuD9",
    icon: <FaMapLocationDot />,
    boxTitle: "Our Location",
    details: "Bole, Addis Ababa, Ethiopia",
    target: "_blank",
  },
  {
    id: 2,
    link: "tel:+251701002776",
    icon: <FaPhoneVolume />,
    boxTitle: "Contact Us",
    details: "+251 701 002 776",
  },
  {
    id: 3,
    link: "mailto:metasebiyawa@gmail.com",
    icon: <LuMails />,
    boxTitle: "Email Us",
    details: "metasebiyawa@gmail.com",
  },
];

export default boxData;
