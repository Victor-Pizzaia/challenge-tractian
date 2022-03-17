import { useState, useCallback } from 'react';
import { constants } from "../../constants/constanst";
import { useThemeContext, themes } from "../../context/themeContext";
import { useToggle } from '../../hooks/useToggle';
import { MoonIcon, SunIcon } from "../../icons";
import { NavBar } from '../NavBar/NavBar';
import * as Styled from './Header.styled';

export function Header({ navItems }) {
    const { themeType, setThemeType } = useThemeContext();
    const [isShowingHamburguerMenu, toggleHamburguerMenu] = useToggle(false, true);

    const handleChangeTheme = useCallback(() => {
        const newTheme = themeType === themes.dark ? themes.light : themes.dark;
        setThemeType(newTheme);
    }, [themeType, setThemeType]);

    return (
        <Styled.Wrapper>
            <Styled.Logo>
                <Styled.Title>
                    {constants.name}
                </Styled.Title>
            </Styled.Logo>
            <Styled.Navigation>
                <NavBar
                    navItems={navItems}
                    menuHamburguerIsOpen={isShowingHamburguerMenu}
                />
                <Styled.ThemeButton
                    onClick={handleChangeTheme}
                >
                    {themeType === themes.light ? <MoonIcon /> : <SunIcon />}
                </Styled.ThemeButton>
            </Styled.Navigation>
        </Styled.Wrapper>
    )
}
