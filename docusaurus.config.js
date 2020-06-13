/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

module.exports = {
  title: 'Уроки React Native',
  tagline:
    'Маркет-плейс задач и вакансий для React Native и AWS Amplify разработчиков в мобильном приложении.',
  url: 'https://react-native-village.github.io',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'react-native-village',
  projectName: 'react-native-village.github.io',
  themeConfig: {
    navbar: {
      title: '#димкаРеактнативный',
      logo: {
        alt: 'React Native Village Logo',
        src: 'img/logo.png',
      },
      links: [
        {
          to: 'docs/startup00',
          activeBasePath: 'docs',
          label: 'Уроки',
          position: 'left',
        },
        {
          href: 'https://www.patreon.com/reactnative',
          label: 'Patreon',
          position: 'left',
        },
        {
          href:
            'https://hh.ru/resume/9bbcea07ff0460389d0039ed1f775a4d445337?source=post_page-----e563aebfae71----------------------',
          label: 'Об авторе',
          position: 'left',
        },
        {
          href: 'https://github.com/react-native-village',
          label: 'GitHub',
          position: 'right',
        },
        {
          to: 'blog',
          activeBasePath: 'docs',
          label: 'Вакансии',
          position: 'left',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Уроки',
          items: [
            {
              label: 'Startup',
              to: 'docs/startup00',
            },
            {
              label: 'React Native',
              to: 'docs/start00',
            },
            {
              label: 'React Navigation 2',
              to: 'docs/reactNavigtion2.00',
            },
            {
              label: 'Redux',
              to: 'docs/redux00',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Telegram',
              href: 'https://teleg.run/awsamplify',
            },
            {
              label: 'Discord',
              href: 'https://discord.gg/6GDAfXn',
            },
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'Telegram Channel',
              href: 'https://teleg.run/reactnativeinit',
            },
            {
              label: 'Patreon',
              href: 'https://www.patreon.com/reactnative',
            },
            {
              label: 'Instagram',
              href: 'https://www.instagram.com/hackathonunicorn/',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/react-native-village',
            },
            {
              label: 'Dev.to',
              href: 'https://dev.to/playra',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/koshasuperstar',
            },
            {
              label: 'Twitch',
              href: 'https://www.twitch.tv/koshasuperstar',
            },
            {
              label: 'Facebook',
              href: 'https://www.facebook.com/reactnativeinitru',
            },
            {
              label: 'Vk',
              href: 'https://vk.com/reactnativeinit',
            },
            {
              label: 'Medium',
              href: 'https://medium.com/react-native-init',
            },
          ],
        },
      ],
      logo: {
        alt: 'Facebook Open Source Logo',
        src: 'img/oss_logo.png',
        href: 'https://opensource.facebook.com/',
      },
      // Please do not remove the credits, help to publicize Docusaurus :)
      copyright: `Copyright © ${new Date().getFullYear()} #димкаРеактнативный. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
