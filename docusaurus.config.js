// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Apache ECharts APIs Guide',
  tagline: '深入理解 ECharts、ZRender',
  url: 'https://wang1212.github.io/',
  baseUrl: '/echarts-api-docs/',
  favicon: 'img/favicon.png',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'wang1212', // Usually your GitHub org/user name.
  projectName: 'echarts-api-docs', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    // defaultLocale: 'en',
    // locales: ['en'],
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  // https://docusaurus.io/docs/markdown-features/diagrams
  markdown: {
    format: 'detect',
    mermaid: true,
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
          editUrl: 'https://github.com/wang1212/echarts-api-docs/tree/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/wang1212/echarts-api-docs/tree/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themes: [
    [
      '@easyops-cn/docusaurus-search-local',
      {
        hashed: true,
        language: ['en', 'zh'],
      },
    ],
    ['@docusaurus/theme-live-codeblock', {}],
    ['@docusaurus/theme-mermaid', {}],
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
            label: '概述',
          },
          {
            type: 'doc',
            docId: 'guide/index',
            position: 'left',
            label: '学习',
          },
          {
            type: 'doc',
            docId: 'echarts-reference/overview',
            position: 'left',
            label: 'ECharts',
          },
          {
            type: 'doc',
            docId: 'zrender-reference/overview',
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
                to: '/docs/echarts-reference/overview',
              },
              {
                label: 'ZRender',
                to: '/docs/zrender-reference/overview',
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
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      mermaid: {
        theme: { light: 'default', dark: 'dark' },
      },
    }),
};

module.exports = config;
