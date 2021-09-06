const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'Pikcha Frontend Engineering',
  tagline: 'Cheatsheets & Best Practices',
  url: 'https://jkhaui.github.io',
  baseUrl: '/pikcha-frontend-engineering-docs/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'jkhaui',
  projectName: 'pikcha-frontend-engineering-docs',
  trailingSlash: false,

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://gitlab.com/pikcha/pikcha-web-app/-/tree/develop-ghost/PikchaWebApp/ClientApp/packages/docs/src/',
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
      colorMode: {
        defaultMode: 'dark',
      },
      navbar: {
        title: 'Pikcha Docs',
        logo: {
          alt: 'Pikcha mono logo',
          srcDark: 'img/logo-mono-inv.png',
          src: 'img/logo-black.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Frontend Guide',
          },
          {
            href: 'https://pikcha.com',
            position: 'right',
            label: 'Visit Pikcha',
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
});
