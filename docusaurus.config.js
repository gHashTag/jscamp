/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

module.exports = {
  title: 'JavaScript Camp',
  tagline: 'программа обучения JavaScript',
  url: 'https://jscamp.app',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'gHashTag',
  projectName: 'jscamp',
  onBrokenLinks: 'ignore',
  themes: ['@docusaurus/theme-live-codeblock'],
  plugins: ['remark-snackplayer', 'docusaurus-plugin-google-adsense'],
  clientModules: [require.resolve('./snackPlayerInitializer.js')],
  scripts: [{ src: 'https://snack.expo.io/embed.js', defer: true }],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ru', 'zh'],
    localeConfigs: {
      en: {
        label: 'English'
      },
      ru: {
        label: 'Русский'
      },
      zh: {
        label: '中文'
      }
    }
  },
  themeConfig: {
    googleAdsense: {
      dataAdClient: 'ca-pub-5291507187121449'
    },
    hideableSidebar: true,
    algolia: {
      appId: 'ONIGVMP8QH',
      apiKey: '4b22eba94660cfe3f3e4083ad49b11b6',
      indexName: 'prod',
      contextualSearch: true
    },
    image: 'img/jscamp.jpg',
    metadatas: [
      {
        name: 'description',
        content: 'JavaScript Camp - программа обучения JavaScript в стеке React Native, Type Script, AWS Amplify'
      },
      { property: 'og:title', content: 'JavaScript Camp' },
      {
        property: 'og:description',
        content: 'JavaScript Camp - программа обучения JavaScript в стеке React Native, Type Script, AWS Amplify'
      },
      { property: 'og:url', content: 'https://jscamp.app/' },
      {
        property: 'og:image',
        content: 'https://jscamp.app/img/jscamp.jpg'
      },
      { name: 'twitter:card', content: 'summary' },
      {
        name: 'twitter:image',
        content: 'https://jscamp.app/img/jscamp.jpg'
      }
    ],
    googleAnalytics: {
      trackingID: 'G-X2K0V4MDRW',
      anonymizeIP: true // Should IPs be anonymized?
    },
    gtag: {
      trackingID: 'GTM-M7F7469',
      // Optional fields.
      anonymizeIP: true // Should IPs be anonymized?
    },
    prism: {
      id: 1,
      // eslint-disable-next-line global-require
      theme: require('prism-react-renderer/themes/dracula')
    },
    navbar: {
      title: '',
      logo: {
        alt: 'JavaScript Camp',
        src: 'img/logo.png',
        srcDark: 'img/logo_dark.png'
      },
      items: [
        {
          to: 'docs/javascript00',
          activeBasePath: 'docs',
          label: 'Syllabus 📚',
          position: 'left'
        },
        {
          href: 'https://www.patreon.com/javascriptcamp',
          label: 'Patreon 🤑',
          position: 'left'
        },
        {
          href: 'https://www.linkedin.com/in/raoffonom/',
          label: 'Author 🧑🏻‍🎤',
          position: 'left'
        },
        {
          href: 'https://github.com/react-native-village/react-native-village.github.io',
          label: 'GitHub 🛰',
          position: 'left'
        },
        {
          to: 'blog',
          activeBasePath: 'docs',
          label: 'Vacancies 🗄',
          position: 'left'
        },
        {
          type: 'localeDropdown',
          position: 'right'
        }
      ]
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Syllabus 📚',
          items: [
            {
              label: 'JavaScript',
              to: 'docs/javascript00'
            },
            {
              label: 'React Native',
              to: 'docs/start00'
            },
            {
              label: 'React Navigation 2',
              to: 'docs/reactNavigtion2.00'
            },
            {
              label: 'Redux',
              to: 'docs/redux00'
            }
          ]
        },
        {
          title: 'Community 💛',
          items: [
            {
              label: 'Discord 💭',
              href: 'https://discord.gg/6GDAfXn'
            },
            {
              label: 'AWS Amplify Ru 💭',
              href: 'https://teleg.run/awsamplify'
            }
          ]
        },
        {
          title: 'Social 🌎',
          items: [
            {
              label: 'Telegram Channel 📬',
              href: 'https://t.me/javascriptcamping'
            },
            {
              label: 'TikTok',
              href: 'https://vm.tiktok.com/ZSJ1dxkFu/'
            },
            {
              label: 'Instagram',
              href: 'https://www.instagram.com/javascriptcamp/'
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/serverlesskiy'
            },
            {
              label: 'YouTube En',
              href: 'https://www.youtube.com/channel/UCR8tIQm7pu8MlPewAlUnzQw'
            },
            {
              label: 'YouTube Ru',
              href: 'https://www.youtube.com/channel/UCOxewePwIQATdHTD3yZ2UZw'
            },
            {
              label: 'GitHub',
              href: 'https://github.com/react-native-village'
            },
            {
              label: 'Hashnode',
              href: 'https://jscamp.hashnode.dev'
            },
            {
              label: 'Dev.to',
              href: 'https://dev.to/playra'
            },
            {
              label: 'Facebook',
              href: 'https://www.facebook.com/javascriptcamp'
            },
            {
              label: 'Vk',
              href: 'https://vk.com/reactnativeinit'
            },
            {
              label: 'Medium',
              href: 'https://medium.com/react-native-init'
            },
            {
              label: 'Twitch',
              href: 'https://www.twitch.tv/javascriptcamp'
            },
            {
              label: 'CodeWars',
              href: 'www.codewars.com/r/e67HyQ'
            }
          ]
        }
      ],
      logo: {
        alt: 'Facebook Open Source Logo',
        src: 'img/oss_logo.png',
        href: 'https://opensource.facebook.com/'
      },
      // Please do not remove the credits, help to publicize Docusaurus :)
      copyright: `Copyright © ${new Date().getFullYear()} Server Serverlesskiy 🎰 Built with Docusaurus`
    }
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // eslint-disable-next-line global-require
          remarkPlugins: [require('./plugins/remark-snackplayer'), require('@docusaurus/remark-plugin-npm2yarn')],
          editUrl: 'https://github.com/gHashTag/jscamp/tree/gh-pages'
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css')
        }
      }
    ]
  ]
}
