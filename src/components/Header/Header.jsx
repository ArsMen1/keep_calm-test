import { Logo, Phone, LogoName } from "./SVG";

const Header = () => (
  <header>
    <div className="logo">
      <Logo />
      <LogoName />
    </div>
    <Phone />
  </header>
);

export default Header;
