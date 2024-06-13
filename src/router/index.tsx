import React, { lazy } from 'react';
import { createBrowserRouter } from "react-router-dom";
const ProfileIconLinkMenu = lazy(() => import('../components/ProfileIconLinkMenu'))
const App = lazy(() => import('../App'))
const Page = lazy(() => import('../containers/Page'))
const PromptEngineering = lazy(() => import('../containers/PromptEngineering'))
const ErrorPage = lazy(() => import('../containers/ErrorPage'))

export const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "esports",
        element: <Page />,
        loader: function loader() { return import('../data/esports').then(module => module.default) },
      },
      // {
      //   path: "project-management",
      //   element: <Page />,
      //   loader: function loader() { return import('../data/projectManagement').then(module => module.default) },
      // },
      {
        path: "content-creation",
        element: <Page mediaCardSizes={{ infoSize: 10, imageSize: 2 }} />,
        loader: function loader() { return import('../data/contentCreation').then(module => module.default) },
      },
      {
        path: "prompt-engineering",
        element: <PromptEngineering />,
        loader: function loader() { return import('../data/promptEngineering').then(module => module.default) },
      },
      {
        path: "software-engineering",
        element: <Page />,
        loader: function loader() { return import('../data/softwareEngineering').then(module => module.default) },
      },
      {
        path: "video-games",
        element: <Page />,
        loader: function loader() { return import('../data/videoGames').then(module => module.default) },
      },
      {
        path: "writing",
        element: <Page />,
        loader: function loader() { return import('../data/writing').then(module => module.default) },
      },
      {
        path: '/',
        element: (
          <Page >
            <ProfileIconLinkMenu />
          </Page>
        ),
        loader: function loader() { return import('../data/home').then(module => module.default) },
      },
    ],
  },
  {
    path: '/',
    errorElement: <ErrorPage />,
  }
]);