import { FC } from 'react';
import React from 'react';

import { Routes, Route, Navigate } from 'react-router-dom';

import {  routeConfig } from 'routes/routes-config';

const WebRoutes: FC = () => {

  return (
    <Routes>
      {routeConfig.map(item => {
        const { title, path, element } = item;

        return <Route key={title} path={path} element={element} />;
      })}

      <Route path="/sign-in" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default WebRoutes;
