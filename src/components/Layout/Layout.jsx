import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import {
  Container,
  HeaderWrap,
  NavItem,
  NavList,
  NavPage,
  Span,
} from './Layout.styled';
import { Suspense } from 'react';

export const Layout = () => {
  return (
    <>
      <header>
        <HeaderWrap>
          <nav>
            <NavList>
              <NavItem>
                <NavPage to="/">
                  <Span>Home</Span>
                </NavPage>
              </NavItem>
              <NavItem>
                <NavPage to="/movies">
                  <Span>Movies</Span>
                </NavPage>
              </NavItem>
            </NavList>
          </nav>
        </HeaderWrap>
      </header>
      <main>
        <Container>
          <Suspense fallback={<h1>Loading...</h1>}>
            <Outlet />
          </Suspense>
        </Container>
      </main>
      <ToastContainer />
    </>
  );
};

export default Layout;
