const { default: styled } = require("styled-components");
const { Container } = require("styles/globalStyles");

export const Nav = styled.div`
  background: #ffffff;
  box-shadow: 0px 5px 26px -12px rgba(2, 24, 110, 0.15);

  @media (max-width: 500px) {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
    background-color: white;
  }
`;

export const NavLogo = styled.div``;

export const NavMobile = styled.div`
  height: 65px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  display: none;

  @media (max-width: 500px) {
    display: flex;
  }

  & > div {
    display: flex;
    flex-direction: column;
    gap: 3px;
    align-items: center;
    font-size: 14px;

    svg {
      font-size: 22px;
    }
  }

  & > p {
    font-weight: bold;
    font-size: 16px;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: #263238;
  }
`;

export const NavMobileMenu = styled.div`
  position: fixed;
  bottom: ${(props) => (props.open === "true" ? "0" : "-100vh")};
  left: 0;
  background: white;
  z-index: 100000;
  width: 100%;
  transition: ${(props) =>
    props.open === "true" ? "all 0.2s ease" : "all .7s ease"};
  box-shadow: 0px -12px 32px -5px rgba(2, 24, 110, 0.1);

  display: flex;
  flex-direction: column;

  & > div:not(:last-child) {
    border-bottom: 1px solid gray;
  }
`;

export const MenueItem = styled.div`
  font-size: 16px;

  font-weight: 500;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: end;
  letter-spacing: 0.06em;
  color: #263238;
  width: 100%;
  gap: 10px;
  height: 66px;
  cursor: pointer;
  padding: 0 2rem;
`;

export const MenueLogo = styled.div`
  padding: 0 2rem;
  height: 68px;
  background: #f1eef0;
  width: 100%;
  display: flex;
  align-items: center;

  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: #263238;
`;

export const NavContainer = styled(Container)`
  height: 65px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;

  @media (max-width: 500px) {
    display: none;
  }
`;

export const NavbarBtns = styled.div`
  display: flex;
  align-items: center;
  gap: 58px;
`;
export const NavLink = styled.a`
  color: ${({ wrap }) => (wrap ? "white" : "#763d8e")};
  font-size: 14px;
  font-weight: 700;

  background: ${({ wrap }) => (wrap ? "#763d8e" : "transparent")};
  padding: ${({ wrap }) => (wrap ? ".8rem 2rem" : "0")};
  border-radius: ${({ wrap }) => (wrap ? "4px" : "0")};
  box-shadow: ${({ wrap }) =>
    wrap ? "0px 4px 24px -10px rgba(2, 24, 110, 0.2)" : ""};
`;
