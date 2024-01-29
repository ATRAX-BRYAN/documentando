// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Manual',
  tagline: 'Manuales de Instalacion',
  favicon: 'https://cdn-icons-png.flaticon.com/512/1/1492.png',

  // Set the production url of your site here
  url: 'https://ATRAX-BRYAN.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/documentando/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'ATRAX-BRYAN', // Usually your GitHub org/user name.
  projectName: 'documentando', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png',
      navbar: {
        title: 'My Site',
        logo: {
          alt: 'My Site',
          src: 'https://cdn-icons-png.flaticon.com/512/1/1492.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Manual',
          },
          //{to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/ATRAX-BRYAN',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            //title: 'Docs',
            //items: [
            //  {
            //    label: 'Tutorial',
            //    to: '/docs/intro',
            //  },
            //],
          },
          {
            //title: 'Community',
            //items: [
            //  {
            //    label: 'Stack Overflow',
            //    href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            //  },
            //  {
            //    label: 'Discord',
            //    href: 'https://discordapp.com/invite/docusaurus',
            //  },
            //  {
            //    label: 'Twitter',
            //    href: 'https://twitter.com/docusaurus',
            //  },
            //],
          },
          {
            //title: 'More',
            //items: [
            //  {
            //    label: 'Blog',
            //    to: '/blog',
            //  },
            //  {
            //    label: 'GitHub',
            //    href: 'https://github.com/facebook/docusaurus',
            //  },
            //],
          },
        ],
        copyright: `SENATI © ${new Date().getFullYear()} My Project, Student. Bryan Moreno Soto`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
