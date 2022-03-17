import * as Styled from './NavBar.styled';

export function NavBar({navItems, menuHamburguerIsOpen}) {
    return (
        <Styled.NavWrapper isShow={menuHamburguerIsOpen}>
            <Styled.NavList>
                {navItems.map((item, index) => (
                    <Styled.NavItem key={index}>
                        <Styled.NavAction
                            href={`#${item.href}`}
                        >
                            {item.name}
                        </Styled.NavAction>
                    </Styled.NavItem>
                ))}
            </Styled.NavList>
        </Styled.NavWrapper>
    )
}
