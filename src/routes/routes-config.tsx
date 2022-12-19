import React, { ReactElement } from 'react';

import { Navigate, RouteObject } from 'react-router-dom';

import ForgotPassword from 'ui/forgot-password/forgot-password';
import Home from 'ui/home/home';
import NotFound from 'ui/not-found/not-found';
import SignIn from 'ui/sign-in/sign-in';

export type CustomRouteConfig = RouteObject & {
  isMenuItem: boolean;
  title: string;
  icon?: ReactElement;
};

export const routeConfig: CustomRouteConfig[] = [
  {
    path: '/',
    title: 'home',
    element: <Home />,
    isMenuItem: true,
  },
  {
    path: '*',
    title: 'notFound',
    element: <NotFound />,
    isMenuItem: false,
  },
];

export const signInRouteConfig: Omit<CustomRouteConfig, 'isMenuItem'>[] = [
  {
    path: 'sign-in',
    title: 'Sign-In',
    element: <SignIn />,
  },
  {
    path: 'forgot-password',
    title: 'Forgot Password',
    element: <ForgotPassword />,
  },
  {
    path: '*',
    title: 'Redirect',
    element: <Navigate to="/sign-in" replace />,
  },
];
