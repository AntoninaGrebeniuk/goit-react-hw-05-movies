import { Link, Outlet } from 'react-router-dom';
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
import { Loader } from 'components/Loader/Loader';
import { Logo } from 'components/Logo/Logo';

export const Layout = () => {
  return (
    <>
      <header>
        <HeaderWrap>
          <Link to="/">
            <Logo />
          </Link>

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
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </Container>
      </main>
      <ToastContainer />
    </>
  );
};

export default Layout;
