import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/lab/__docusaurus/debug',
    component: ComponentCreator('/lab/__docusaurus/debug', '958'),
    exact: true
  },
  {
    path: '/lab/__docusaurus/debug/config',
    component: ComponentCreator('/lab/__docusaurus/debug/config', '573'),
    exact: true
  },
  {
    path: '/lab/__docusaurus/debug/content',
    component: ComponentCreator('/lab/__docusaurus/debug/content', '92f'),
    exact: true
  },
  {
    path: '/lab/__docusaurus/debug/globalData',
    component: ComponentCreator('/lab/__docusaurus/debug/globalData', '419'),
    exact: true
  },
  {
    path: '/lab/__docusaurus/debug/metadata',
    component: ComponentCreator('/lab/__docusaurus/debug/metadata', '3f3'),
    exact: true
  },
  {
    path: '/lab/__docusaurus/debug/registry',
    component: ComponentCreator('/lab/__docusaurus/debug/registry', '1a3'),
    exact: true
  },
  {
    path: '/lab/__docusaurus/debug/routes',
    component: ComponentCreator('/lab/__docusaurus/debug/routes', 'c31'),
    exact: true
  },
  {
    path: '/lab/blog',
    component: ComponentCreator('/lab/blog', '41d'),
    exact: true
  },
  {
    path: '/lab/blog/archive',
    component: ComponentCreator('/lab/blog/archive', '22c'),
    exact: true
  },
  {
    path: '/lab/blog/authors',
    component: ComponentCreator('/lab/blog/authors', 'ac6'),
    exact: true
  },
  {
    path: '/lab/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/lab/blog/authors/all-sebastien-lorber-articles', 'fe8'),
    exact: true
  },
  {
    path: '/lab/blog/authors/yangshun',
    component: ComponentCreator('/lab/blog/authors/yangshun', '5c6'),
    exact: true
  },
  {
    path: '/lab/blog/first-blog-post',
    component: ComponentCreator('/lab/blog/first-blog-post', '07b'),
    exact: true
  },
  {
    path: '/lab/blog/long-blog-post',
    component: ComponentCreator('/lab/blog/long-blog-post', 'e4a'),
    exact: true
  },
  {
    path: '/lab/blog/mdx-blog-post',
    component: ComponentCreator('/lab/blog/mdx-blog-post', '734'),
    exact: true
  },
  {
    path: '/lab/blog/tags',
    component: ComponentCreator('/lab/blog/tags', 'd17'),
    exact: true
  },
  {
    path: '/lab/blog/tags/docusaurus',
    component: ComponentCreator('/lab/blog/tags/docusaurus', 'ed8'),
    exact: true
  },
  {
    path: '/lab/blog/tags/facebook',
    component: ComponentCreator('/lab/blog/tags/facebook', '163'),
    exact: true
  },
  {
    path: '/lab/blog/tags/hello',
    component: ComponentCreator('/lab/blog/tags/hello', 'f1f'),
    exact: true
  },
  {
    path: '/lab/blog/tags/hola',
    component: ComponentCreator('/lab/blog/tags/hola', '12e'),
    exact: true
  },
  {
    path: '/lab/blog/welcome',
    component: ComponentCreator('/lab/blog/welcome', 'f64'),
    exact: true
  },
  {
    path: '/lab/markdown-page',
    component: ComponentCreator('/lab/markdown-page', '5da'),
    exact: true
  },
  {
    path: '/lab/docs',
    component: ComponentCreator('/lab/docs', '0c8'),
    routes: [
      {
        path: '/lab/docs',
        component: ComponentCreator('/lab/docs', 'c44'),
        routes: [
          {
            path: '/lab/docs',
            component: ComponentCreator('/lab/docs', '227'),
            routes: [
              {
                path: '/lab/docs/category/laboratoare',
                component: ComponentCreator('/lab/docs/category/laboratoare', '752'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/lab/docs/intro',
                component: ComponentCreator('/lab/docs/intro', '026'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/lab/docs/lab/0',
                component: ComponentCreator('/lab/docs/lab/0', 'df6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/lab/docs/lab/1',
                component: ComponentCreator('/lab/docs/lab/1', '20b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/lab/docs/lab/2',
                component: ComponentCreator('/lab/docs/lab/2', '1ce'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/lab/docs/lab/3',
                component: ComponentCreator('/lab/docs/lab/3', '4cf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/lab/docs/lab/4',
                component: ComponentCreator('/lab/docs/lab/4', 'd9f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/lab/docs/lab/5',
                component: ComponentCreator('/lab/docs/lab/5', '0bb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/lab/docs/lab/6',
                component: ComponentCreator('/lab/docs/lab/6', 'ad1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/lab/docs/status',
                component: ComponentCreator('/lab/docs/status', 'd72'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/lab/',
    component: ComponentCreator('/lab/', '91b'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
