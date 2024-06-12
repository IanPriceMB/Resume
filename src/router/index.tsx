import React from 'react';
import {
  createBrowserRouter,
} from "react-router-dom";
import App from '../App';
import { ErrorPage } from '../containers/ErrorPage';
import { PromptEngineering } from '../containers/PromptEngineering';
import { Page } from '../containers/Page';
import { writingData } from '../data/writingData';
import { videoGamesData } from '../data/videoGamesData';
import { softwareData } from '../data/softwareData';
import { contentData } from '../data/contentData';
import { projectManagementData } from '../data/projectManagementData';
import { homeData } from '../data/homeData';
import { esportsData } from '../data/esportsData';
import { Box, ButtonGroup } from '@mui/material';
import { GithubIconLink, LinkedInIconLink, XIconLink } from '../components/IconLink';

export const router = createBrowserRouter([
  {
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "esports",
        element: <Page data={esportsData} type='esports' />,
        errorElement: <ErrorPage />,
      },
      {
        path: "project-management",
        element: <Page data={projectManagementData} type='project-management' />,
        errorElement: <ErrorPage />,
      },
      {
        path: "content-creation",
        element: <Page data={contentData} type='content-creation' mediaCardSizes={{ infoSize: 10, imageSize: 2 }} />,
        errorElement: <ErrorPage />,
      },
      {
        path: "propmpt-engineering",
        element: <PromptEngineering />,
        errorElement: <ErrorPage />,
      },
      {
        path: "software-engineering",
        element: <Page data={softwareData} type='software-engineering' />,
        errorElement: <ErrorPage />,
      },
      {
        path: "video-games",
        element: <Page data={videoGamesData} type='video-games' />,
        errorElement: <ErrorPage />,
      },
      {
        path: "writing",
        element: <Page data={writingData} type='writing' />,
        errorElement: <ErrorPage />,
      },
      {
        path: '/',
        element: <Page data={homeData} type='home'>
          <Box component='div' display='flex' justifyContent='flex-end'>
            <LinkedInIconLink />
            <GithubIconLink />
            <XIconLink />
          </Box>
        </Page>,
        errorElement: <ErrorPage />
      },
    ],
  },
]);