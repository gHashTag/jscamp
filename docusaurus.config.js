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
  projectName: 'NeuroCoder',
  onBrokenLinks: 'ignore',
  themes: ['@docusaurus/theme-live-codeblock'],
  plugins: ['remark-snackplayer', 'docusaurus-plugin-google-adsense'],
  clientModules: [require.resolve('./snackPlayerInitializer.js')],
  scripts: [{ src: 'https://snack.expo.io/embed.js', defer: true }],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ru', 'zh', 'hi', 'ar', 'jp', 'es'],
    localeConfigs: {
      en: {
        label: 'English'
      },
      ru: {
        label: 'Русский'
      },
      zh: {
        label: '中文'
      },
      jp: {
        label: '日本語'
      },
      ar: {
        label: 'عربى'
      },
      jp: {
        label: '日本語'
      },
      es: {
        label: 'español'
      }
    }
  },
  themeConfig: {
    googleAdsense: {
      dataAdClient: 'ca-pub-5291507187121449'
    },
    algolia: {
      appId: 'ONIGVMP8QH',
      apiKey: '4b22eba94660cfe3f3e4083ad49b11b6',
      indexName: 'prod',
      contextualSearch: true
    },
    image: 'img/jscamp.jpg',
    metadata: [
      {
        name: 'description',
        content: 'NeuroCoder - программа обучения JavaScript в стеке React Native, TypeScript, AWS Amplify'
      },
      { property: 'og:title', content: 'NeuroCoder' },
      {
        property: 'og:description',
        content: 'NeuroCoder - программа обучения JavaScript в стеке React Native, TypeScript, AWS Amplify'
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
          to: 'docs/javascript01',
          activeBasePath: 'docs',
          label: 'Syllabus 📚',
          position: 'left'
        },
        {
          href: 'https://www.linkedin.com/in/neurocoder',
          label: 'Author 🧑🏻‍🎤',
          position: 'left'
        },
        {
          href: 'https://github.com/gHashTag',
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
              to: 'docs/reactnative00'
            },
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
              label: 'Telegram Channel 📬',
              href: 'https://t.me/neuro_coder_group'
            },
          ]
        },
        {
          title: 'Social ',
          items: [
            {
              label: 'Instagram',
              href: 'https://www.instagram.com/neuro_coder'
            },
            {
              label: 'TikTok',
              href: 'https://www.tiktok.com/@neuro_coder?_t=8pPhJEKMpTm&_r=1'
            },
            {
              label: 'YouTube',
              href: 'https://www.youtube.com/@neuro_coder_ai_bot'
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
              href: 'https://vk.com/neurocoder'
            },
            {
              label: 'Medium',
              href: 'https://medium.com/react-native-init'
            },
            {
              label: 'Twitch',
              href: 'https://www.twitch.tv/neuro_coder'
            },
            {
              label: 'Code Wars',
              href: 'https://www.codewars.com/r/e67HyQ'
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
      copyright: `Copyright © ${new Date().getFullYear()} NeuroCoder ⚛️ Built with Docusaurus`
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
        googleAnalytics: {
          trackingID: 'G-X2K0V4MDRW',
          anonymizeIP: true // Should IPs be anonymized?
        },
        gtag: {
          trackingID: 'GTM-M7F7469',
          // Optional fields.
          anonymizeIP: true // Should IPs be anonymized?
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css')
        },
        googleAnalytics: {
          trackingID: 'G-X2K0V4MDRW',
          anonymizeIP: true // Should IPs be anonymized?
        },
        gtag: {
          trackingID: 'GTM-M7F7469',
          // Optional fields.
          anonymizeIP: true // Should IPs be anonymized?
        },
      }
    ]
  ]
}
