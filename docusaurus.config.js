// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Apache ECharts APIs 文档',
  tagline: '深入使用与理解 ECharts、ZRender',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'wang1212', // Usually your GitHub org/user name.
  projectName: 'echarts-api-docs', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    // defaultLocale: 'en',
    // locales: ['en'],
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
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
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'ECharts APIs',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.png',
          width: 64,
        },
        items: [
          {
            type: 'doc',
            docId: 'overview',
            position: 'left',
            label: '项目概述',
          },
          {
            type: 'doc',
            docId: 'echarts/overview',
            position: 'left',
            label: 'ECharts',
          },
          {
            type: 'doc',
            docId: 'zrender/overview',
            position: 'left',
            label: 'ZRender',
          },
          { to: '/blog', label: '博客', position: 'left' },
          {
            href: 'https://github.com/wang1212/echarts-api-docs',
            label: 'GitHub',
            position: 'right',
          },
        ],
        hideOnScroll: true,
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '文档',
            items: [
              {
                label: '项目概述',
                to: '/docs/overview',
              },
              {
                label: 'ECharts',
                to: '/docs/echarts/overview',
              },
              {
                label: 'ZRender',
                to: '/docs/zrender/overview',
              },
            ],
          },
          {
            title: '相关链接',
            items: [
              {
                label: 'ECharts 官方文档',
                href: 'https://echarts.apache.org/',
              },
              {
                label: 'ZRender 官方文档',
                href: 'https://ecomfe.github.io/zrender-doc/public/',
              },
            ],
          },
          {
            title: '更多',
            items: [
              {
                label: '博客',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/wang1212/echarts-api-docs',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
