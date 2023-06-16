import { NavLink, Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Container } from './Layout.styled';
import { Suspense } from 'react';

export const Layout = () => {
  return (
    <>
      <header>
        <Container>
          <nav>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/movies">Movies</NavLink>
              </li>
            </ul>
          </nav>
        </Container>
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
