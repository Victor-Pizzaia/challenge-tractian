import * as Styled from "./NavBar.styled";
import { useMediaQuery } from "react-responsive";
import { mediaQuerys } from "../../rules/queryRules";

export function NavBar({
  navItems,
  menuHamburguerIsOpen,
  toggleHamburguerMenu,
}) {
  const sizeController = useMediaQuery({ query: mediaQuerys.tablets });
  function handleClickLink() {
    if (menuHamburguerIsOpen && !sizeController) {
      toggleHamburguerMenu();
    }
  }
  return (
    <Styled.NavWrapper isShow={menuHamburguerIsOpen && !sizeController}>
      <Styled.NavList>
        {navItems.map((item, index) => (
          <Styled.NavItem key={index}>
            <Styled.NavAction href={`#${item.href}`} onClick={handleClickLink}>
              {item.name}
            </Styled.NavAction>
          </Styled.NavItem>
        ))}
      </Styled.NavList>
    </Styled.NavWrapper>
  );
}
