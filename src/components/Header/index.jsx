import { useState, useCallback } from "react";
import { constants } from "../../constants/constanst";
import { useThemeContext, themes } from "../../context/themeContext";
import { useToggle } from "../../hooks/useToggle";
import { CloseIcon, HamburguerIcon, MoonIcon, SunIcon } from "../../icons";
import { NavBar } from "../NavBar";
import * as Styled from "./Header.styled";

export function Header({ navItems }) {
  const { themeType, setThemeType } = useThemeContext();
  const [isShowingHamburguerMenu, toggleHamburguerMenu] = useToggle(
    false,
    true
  );

  const handleChangeTheme = useCallback(() => {
    const newTheme = themeType === themes.dark ? themes.light : themes.dark;
    setThemeType(newTheme);
  }, [themeType, setThemeType]);

  return (
    <Styled.Wrapper>
      <Styled.Logo>
        <Styled.Title href="#">{constants.name}</Styled.Title>
      </Styled.Logo>
      <Styled.Navigation>
        <NavBar
          navItems={navItems}
          menuHamburguerIsOpen={isShowingHamburguerMenu}
          toggleHamburguerMenu={toggleHamburguerMenu}
        />
        <Styled.ThemeButton onClick={handleChangeTheme}>
          {themeType === themes.light ? <MoonIcon /> : <SunIcon />}
        </Styled.ThemeButton>
        <Styled.HamburguerMenu onClick={toggleHamburguerMenu}>
          {!isShowingHamburguerMenu ? <HamburguerIcon /> : <CloseIcon />}
        </Styled.HamburguerMenu>
      </Styled.Navigation>
    </Styled.Wrapper>
  );
}
