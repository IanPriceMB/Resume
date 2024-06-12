import React from 'react';
import {
  createBrowserRouter,
} from "react-router-dom";
import App from '../App';
import { ErrorPage } from '../containers/ErrorPage';
import { Home } from '../containers/Home';
import { Esports } from '../containers/Esports';
import { PromptEngineering } from '../containers/PromptEngineering';
import { Page } from '../containers/Page';
import { writingData } from '../data/writingData';
import { videoGamesData } from '../data/videoGamesData';
import { softwareData } from '../data/softwareData';
import { contentData } from '../data/contentData';
import { projectManagementData } from '../data/projectManagementData';
import { homeData } from '../data/homeData';
import { esportsData } from '../data/esportsData';

export const router = createBrowserRouter([
  {
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "esports",
        element: <Page data={esportsData} type='esports' />,
      },
      {
        path: "project-management",
        element: <Page data={projectManagementData} type='project-management' />,
      },
      {
        path: "content-creation",
        element: <Page data={contentData} type='content-creation' mediaCardSizes={{ infoSize: 10, imageSize: 2 }} />
      },
      {
        path: "propmpt-engineering",
        element: <PromptEngineering />,
      },
      {
        path: "software-engineering",
        element: <Page data={softwareData} type='software-engineering' />,
      },
      {
        path: "video-games",
        element: <Page data={videoGamesData} type='video-games' />,
      },
      {
        path: "writing",
        element: <Page data={writingData} type='writing' />,
      },
      {
        path: '/',
        element: <Page data={homeData} type='home' />,
        errorElement: <ErrorPage />
      },
    ],
  },
]);