import logo from "public/images/logo.png";
import Image from "next/image";
import Link from "next/link";
import { Container } from "styles/globalStyles";
import {
  MenueItem,
  MenueLogo,
  Nav,
  NavbarBtns,
  NavContainer,
  NavLink,
  NavLogo,
  NavMobile,
  NavMobileMenu,
} from "./Navbar.styles";
import { FiHome } from "react-icons/fi";
import { FaBars } from "react-icons/fa";
import { ImSwitch, ImCross } from "react-icons/im";
import { IoCloseSharp } from "react-icons/io5";
import { useState } from "react";

function Navbar() {
  const [open, setopen] = useState(false);
  return (
    <Nav>
      <Container>
        {/* MOBILE VERSION */}
        <NavMobile>
          <Link href="/" passHref>
            <div className="pointer">
              <FiHome />
              <p>Homepage</p>
            </div>
          </Link>

          <p>Ganbatte</p>

          <div className="pointer" onClick={() => setopen(!open)}>
            <FaBars />
            <p>Menu</p>
          </div>

          <NavMobileMenu open={open ? "true" : "false"}>
            <MenueLogo>Ganbatte</MenueLogo>
            <MenueItem>
              Sign In <ImSwitch />
            </MenueItem>
            <MenueItem onClick={() => setopen(false)}>
              Close menu <IoCloseSharp />
            </MenueItem>
          </NavMobileMenu>
        </NavMobile>
        <NavContainer>
          {/* LEFT */}
          <NavLogo>
            <Link href="/" passHref>
              <Image src={logo} alt="Logo" />
            </Link>
          </NavLogo>
          {/* LEFT ENDS */}

          {/* RIGHT STARTS */}
          <NavbarBtns>
            <NavLink href="/">Learn</NavLink>
            <NavLink wrap="true" href="/">
              Sign in/sign up
            </NavLink>
          </NavbarBtns>
          {/* RIGHT ENDS */}
        </NavContainer>
      </Container>
    </Nav>
  );
}

export default Navbar;
