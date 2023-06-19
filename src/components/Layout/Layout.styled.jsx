import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  width: 1400px;
  margin: 0 auto;
  padding: 0px 20px 30px;
  color: ${p => p.theme.colors.white};
`;

export const HeaderWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 0 auto 30px;
  padding: 0 30px;
  width: 1400px;
  height: 100px;

  background: ${p => p.theme.gradient.headerBgGradient};
`;

export const NavList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  gap: 60px;
`;

export const NavItem = styled.li`
  /* height: 100%; */
  /* padding: 20px 5px; */
  /* border-radius: 60px; */
`;

export const NavPage = styled(NavLink)`
  position: relative;
  display: block;
  padding: 10px 20px;

  font-size: 18px;
  line-height: 1.16;
  color: ${p => p.theme.colors.white};
  background: ${p => p.theme.gradient.bgLinGradientRevers};
  border-radius: 10px;

  &::before {
    content: '';
    position: absolute;
    inset: 1px;

    background: ${p => p.theme.colors.primaryColor};
    border-radius: 9px;
    transition: 0.5s;
  }

  &:hover::before {
    opacity: 0.7;
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0px;
    background: ${p => p.theme.gradient.bgLinGradientRevers};
    border-radius: 9px;
    transition: 0.5s;
    opacity: 0;
    filter: blur(20px);
  }

  &:hover::after {
    opacity: 1;
  }

  &.active::after {
    opacity: 1;
  }
  &.active::before {
    opacity: 0.7;
  }
`;

export const Span = styled.span`
  position: relative;
  z-index: 1;
`;
