const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Cal.com Documentation',
  tagline: 'Dinosaurs are cool',
  url: 'https://docs.cal.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'calendso', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.
  themeConfig: {
    navbar: {
      logo: {
        alt: 'Cal.com Logo',
        src: 'img/logo.svg',
        srcDark: 'img/logo-white.svg'
      },
      items: [
        {
          type: 'doc',
          docId: 'self-hosting/installation',
          position: 'left',
          label: 'Product Docs',
        },
        {href: 'https://developer.cal.com', label: 'Developer', position: 'left'},
        {href: 'https://design.cal.com', label: 'Design', position: 'left'},
        {
          href: 'https://github.com/calendso/calendso',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'Cal.com',
          items: [
            {
              label: 'Website',
              href: 'https://cal.com',
            },
            {
              label: 'Slack',
              href: 'https://cal.com/slack',
            },
            {
              label: 'Careers',
              href: 'https://cal.com/jobs',
            },
          ],
        },
        {
          title: 'Repositories',
          items: [
            {
              label: 'Cal.com',
              href: 'https://github.com/calendso/calendso',
            },
            {
              label: 'Documentation',
              href: 'https://github.com/calendso/docs',
            },
            {
              label: 'Docker',
              href: 'https://github.com/calendso/docker',
            },
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'Twitter',
              href: 'https://twitter.com/calendso',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/calendso/calendso',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Cal.com, Inc.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/calendso/docs/edit/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/calendso/docs/edit/main/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
