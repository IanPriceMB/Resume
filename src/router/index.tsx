import React, { lazy } from 'react';
import {
  createBrowserRouter,
} from "react-router-dom";
import App from '../App';
import { PromptEngineering } from '../containers/PromptEngineering';
import Box from '@mui/material/Box';
import { GithubIconLink, LinkedInIconLink, XIconLink } from '../components/IconLink';
import { lazyImport } from '../utils/lazyImport';

const Page = lazy(() => import('../containers/Page'))
const ErrorPage = lazyImport('../containers/ErrorPage', 'ErrorPage')

export const router = createBrowserRouter([
  {
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "esports",
        element: <Page type='esports' />,
        loader: function loader() { return import('../data/esportsData').then(module => module.esportsData) },
        errorElement: <ErrorPage />,
      },
      {
        path: "project-management",
        element: <Page type='project-management' />,
        loader: function loader() { return import('../data/projectManagementData').then(module => module.projectManagementData) },
        errorElement: <ErrorPage />,
      },
      {
        path: "content-creation",
        element: <Page type='content-creation' mediaCardSizes={{ infoSize: 10, imageSize: 2 }} />,
        loader: function loader() { return import('../data/contentData').then(module => module.contentData) },
        errorElement: <ErrorPage />,
      },
      {
        path: "propmpt-engineering",
        element: <PromptEngineering />,
        loader: function loader() { return import('../data/promptData').then(module => module.promptData) },
        errorElement: <ErrorPage />,
      },
      {
        path: "software-engineering",
        element: <Page type='software-engineering' />,
        loader: function loader() { return import('../data/softwareData').then(module => module.softwareData) },
        errorElement: <ErrorPage />,
      },
      {
        path: "video-games",
        element: <Page type='video-games' />,
        loader: function loader() { return import('../data/videoGamesData').then(module => module.videoGamesData) },
        errorElement: <ErrorPage />,
      },
      {
        path: "writing",
        element: <Page type='writing' />,
        loader: function loader() { return import('../data/writingData').then(module => module.writingData) },
        errorElement: <ErrorPage />,
      },
      {
        path: '/',
        element: (
          <Page type='home'>
            <Box component='div' display='flex' justifyContent='flex-end'>
              <LinkedInIconLink />
              <GithubIconLink />
              <XIconLink />
            </Box>
          </Page>
        ),
        loader: function loader() { return import('../data/homeData').then(module => module.homeData) },
        errorElement: <ErrorPage />
      },
    ],
  },
]);