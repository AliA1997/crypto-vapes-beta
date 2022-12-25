import { useState } from 'react';
import Link from "next/link";

import { Container, Divider, Image } from "semantic-ui-react";

import { SpaceBetweenContainer } from "@components/containers/Containers";
import navigationBarLogo from "@assets/navigation-bar-logo.svg";
import styles from "./NavigationBar.module.scss";

import Logout from './Logout';
import Login from './Login';

const LogoBrand = (props) => (
  <Image
    src={navigationBarLogo.src}
    className={styles.navigationBarLogo}
    alt="Crypto Vapes Navigation Bar Logo"
  />
);

const NavItem = ({ text, href, active }) => {
  return (
    <Link href={href}>
      <a className={`nav__link`}>{text}</a>
    </Link>
  );
};

const MENU_LIST = [
  //   { text: "Home", href: "/" },
  { text: "Vapes", href: "/vapes" },
  { text: "Accessories", href: "/accessories" },
  { text: "Account", href: "/account" },
  { text: "Register", href: "/register" },
  { text: "Login", href: "/users/1" },
];
const NavigationBar = () => {
  const [navActive, setNavActive] = useState(null);
  const [activeIdx, setActiveIdx] = useState(-1);
  const router = useRouter();
  const user = useSelector(selectUser);

  const handleClick = () => {
    console.log("taking you to login");
    router.push("/login");
  };

  return (
    <header>
      <nav className={`nav`}>
        <Link href={"/"}>
          <div
            style={{
              position: "relative",
              height: 76,
              width: 432,
              left: 100,
              top: 13,
              fontFamily: "Nunito",
              fontStyle: 40,
              fontWeight: 900,
              fontSize: 40,
              lineHeight: 55,
              display: "flex",
            }}
          >
            <Image alt="Logo" src={Logo} />
            {/* <h1 className="logo">CryptoVapes</h1> */}
          </div>
        </Link>

        <div
          onClick={() => setNavActive(!navActive)}
          className={`nav__menu-bar`}
        >
          <div>{user ? <Logout /> : <Login />}</div>
          <div></div>
          <div></div>
        </div>
        <div className={`${navActive ? "active" : ""} nav__menu-list`}>
          {MENU_LIST.map((menu, idx) => (
            <div
              onClick={() => {
                setActiveIdx(idx);
                setNavActive(false);
              }}
              key={menu.text}
            >
              <NavItem active={activeIdx === idx} {...menu} />
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default NavigationBar;
