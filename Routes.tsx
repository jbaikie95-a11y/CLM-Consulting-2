import { RouteObject } from "react-router";
import { lazy } from 'react';
import HomePage from './pages/index';
import ProdNotFoundPage from './pages/_404';
const NotFoundPage = import.meta.env.DEV ? lazy(() => import('../dev-tools/src/PageNotFound')) : ProdNotFoundPage;
const ServicesPage = lazy(() => import('./pages/services'));
const AboutPage = lazy(() => import('./pages/about'));
const ContactPage = lazy(() => import('./pages/contact'));
export const routes: RouteObject[] = [{
  path: '/',
  element: <HomePage />
}, {
  path: '/services',
  element: <ServicesPage />
}, {
  path: '/about',
  element: <AboutPage />
}, {
  path: '/contact',
  element: <ContactPage />
}, {
  path: '*',
  element: <NotFoundPage />
}];
export type Path = '/' | '/services' | '/about' | '/contact';
export type Params = Record<string, string | undefined>;
