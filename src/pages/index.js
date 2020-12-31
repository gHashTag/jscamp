/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

import React from 'react'
import classnames from 'classnames'
import Layout from '@theme/Layout'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import useBaseUrl from '@docusaurus/useBaseUrl'
import YouTube from 'react-youtube'
import Head from '@docusaurus/Head'
import styles from './styles.module.css'

const features = [
  {
    title: <>Мы решаем проблемы разработчиков</>,
    imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        Разработчики могут описать свои проблемы, с которыми они сталкиваются в процессе разработки мобильных приложений
        на react-native и получить на них квалифицированную помощь от менторов.
      </>
    )
  },
  {
    title: <>Мотивируем разработчиков решать проблемы</>,
    imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: (
      <>
        За успешно оказанную техническую поддержку, разработчику выдается единорог, из количества которых формируется
        рейтинг программистов, что в свою очередь увеличивает их шанс получить более привлекательное предложение от
        работодателей, а также платим за каждую решенную задачу.
      </>
    )
  },
  {
    title: <>Даем практику и трудоустраиваем лучших</>,
    imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
        В приложении можно создать резюме, откликнуться на вакансию и получить предложение от работодателя, а также
        принять участие в создании мобильного приложения.
      </>
    )
  }
]

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl)
  return (
    <div className={classnames('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}

function Program() {
  // const imgUrl = useBaseUrl(imageUrl)
  return (
    <>
      <div className={classnames('image-container')}>
        <img src={useBaseUrl('img/jscamp/1.3.jpg')} alt="" />
        <img src={useBaseUrl('img/jscamp/1.2.jpg')} alt="" />
        <img src={useBaseUrl('img/jscamp/1.1.jpg')} alt="" />
        <img src={useBaseUrl('img/jscamp/33.1.jpg')} alt="" className="image-mobile" />
        <img src={useBaseUrl('img/jscamp/33.2.jpg')} alt="" />
        <img src={useBaseUrl('img/jscamp/33.3.jpg')} alt="" className="image-mobile" />
        <img src={useBaseUrl('img/jscamp/3.3.jpg')} alt="" className="image-mobile" />
        <img src={useBaseUrl('img/jscamp/3.2.jpg')} alt="" />
        <img src={useBaseUrl('img/jscamp/3.1.jpg')} alt="" className="image-mobile" />
        <img src={useBaseUrl('img/jscamp/4.3.jpg')} alt="" className="image-mobile" />
        <img src={useBaseUrl('img/jscamp/4.2.jpg')} alt="" />
        <img src={useBaseUrl('img/jscamp/4.1.jpg')} alt="" className="image-mobile" />
        <img src={useBaseUrl('img/jscamp/5.3.jpg')} alt="" className="image-mobile" />
        <img src={useBaseUrl('img/jscamp/5.2.jpg')} alt="" />
        <img src={useBaseUrl('img/jscamp/5.1.jpg')} alt="" className="image-mobile" />
        <img src={useBaseUrl('img/jscamp/6.3.jpg')} alt="" className="image-mobile" />
        <img src={useBaseUrl('img/jscamp/6.2.jpg')} alt="" />
        <img src={useBaseUrl('img/jscamp/6.1.jpg')} alt="" className="image-mobile" />
        <img src={useBaseUrl('img/jscamp/7.3.jpg')} alt="" className="image-mobile" />
        <img src={useBaseUrl('img/jscamp/7.2.jpg')} alt="" />
        <img src={useBaseUrl('img/jscamp/7.1.jpg')} alt="" className="image-mobile" />
        <img src={useBaseUrl('img/jscamp/8.3.jpg')} alt="" className="image-mobile" />
        <img src={useBaseUrl('img/jscamp/8.2.jpg')} alt="" />
        <img src={useBaseUrl('img/jscamp/8.1.jpg')} alt="" className="image-mobile" />
        <img src={useBaseUrl('img/jscamp/9.3.jpg')} alt="" className="image-mobile" />
        <img src={useBaseUrl('img/jscamp/9.2.jpg')} alt="" />
        <img src={useBaseUrl('img/jscamp/9.1.jpg')} alt="" className="image-mobile" />
        <img src={useBaseUrl('img/jscamp/10.3.jpg')} alt="" className="image-mobile" />
        <img src={useBaseUrl('img/jscamp/10.2.jpg')} alt="" />
        <img src={useBaseUrl('img/jscamp/10.1.jpg')} alt="" className="image-mobile" />
        <img src={useBaseUrl('img/jscamp/11.3.jpg')} alt="" className="image-mobile" />
        <img src={useBaseUrl('img/jscamp/11.2.jpg')} alt="" />
        <img src={useBaseUrl('img/jscamp/11.1.jpg')} alt="" className="image-mobile" />
        <img src={useBaseUrl('img/jscamp/12.3.jpg')} alt="" className="image-mobile" />
        <img src={useBaseUrl('img/jscamp/12.2.jpg')} alt="" />
        <img src={useBaseUrl('img/jscamp/12.1.jpg')} alt="" className="image-mobile" />
        <img src={useBaseUrl('img/jscamp/13.3.jpg')} alt="" className="image-mobile" />
        <img src={useBaseUrl('img/jscamp/13.2.jpg')} alt="" />
        <img src={useBaseUrl('img/jscamp/13.1.jpg')} alt="" className="image-mobile" />
        <img src={useBaseUrl('img/jscamp/14.3.jpg')} alt="" className="image-mobile" />
        <img src={useBaseUrl('img/jscamp/14.2.jpg')} alt="" />
        <img src={useBaseUrl('img/jscamp/14.1.jpg')} alt="" className="image-mobile" />
        <img src={useBaseUrl('img/jscamp/15.3.jpg')} alt="" className="image-mobile" />
        <img src={useBaseUrl('img/jscamp/15.2.jpg')} alt="" />
        <img src={useBaseUrl('img/jscamp/15.1.jpg')} alt="" className="image-mobile" />
        <img src={useBaseUrl('img/jscamp/16.3.jpg')} alt="" className="image-mobile" />
        <img src={useBaseUrl('img/jscamp/16.2.jpg')} alt="" />
        <img src={useBaseUrl('img/jscamp/16.1.jpg')} alt="" className="image-mobile" />
        <img src={useBaseUrl('img/jscamp/17.3.jpg')} alt="" className="image-mobile" />
        <img src={useBaseUrl('img/jscamp/17.2.jpg')} alt="" />
        <img src={useBaseUrl('img/jscamp/17.1.jpg')} alt="" className="image-mobile" />
        <img src={useBaseUrl('img/jscamp/18.3.jpg')} alt="" className="image-mobile" />
        <img src={useBaseUrl('img/jscamp/18.2.jpg')} alt="" />
        <img src={useBaseUrl('img/jscamp/18.1.jpg')} alt="" className="image-mobile" />
        <img src={useBaseUrl('img/jscamp/19.3.jpg')} alt="" className="image-mobile" />
        <img src={useBaseUrl('img/jscamp/19.2.jpg')} alt="" />
        <img src={useBaseUrl('img/jscamp/19.1.jpg')} alt="" className="image-mobile" />
        <img src={useBaseUrl('img/jscamp/20.3.jpg')} alt="" className="image-mobile" />
        <img src={useBaseUrl('img/jscamp/20.2.jpg')} alt="" />
        <img src={useBaseUrl('img/jscamp/20.1.jpg')} alt="" className="image-mobile" />
        <img src={useBaseUrl('img/jscamp/21.3.jpg')} alt="" className="image-mobile" />
        <img src={useBaseUrl('img/jscamp/21.2.jpg')} alt="" />
        <img src={useBaseUrl('img/jscamp/21.1.jpg')} alt="" className="image-mobile" />
        <img src={useBaseUrl('img/jscamp/22.3.jpg')} alt="" className="image-mobile" />
        <img src={useBaseUrl('img/jscamp/22.2.jpg')} alt="" />
        <img src={useBaseUrl('img/jscamp/22.1.jpg')} alt="" className="image-mobile" />
        <img src={useBaseUrl('img/jscamp/23.3.jpg')} alt="" className="image-mobile" />
        <img src={useBaseUrl('img/jscamp/23.2.jpg')} alt="" />
        <img src={useBaseUrl('img/jscamp/23.1.jpg')} alt="" className="image-mobile" />
        <img src={useBaseUrl('img/jscamp/24.3.jpg')} alt="" className="image-mobile" />
        <img src={useBaseUrl('img/jscamp/24.2.jpg')} alt="" />
        <img src={useBaseUrl('img/jscamp/24.1.jpg')} alt="" className="image-mobile" />
        <img src={useBaseUrl('img/jscamp/25.3.jpg')} alt="" className="image-mobile" />
        <img src={useBaseUrl('img/jscamp/25.2.jpg')} alt="" />
        <img src={useBaseUrl('img/jscamp/25.1.jpg')} alt="" className="image-mobile" />
        <img src={useBaseUrl('img/jscamp/26.3.jpg')} alt="" className="image-mobile" />
        <img src={useBaseUrl('img/jscamp/26.2.jpg')} alt="" />
        <img src={useBaseUrl('img/jscamp/26.1.jpg')} alt="" className="image-mobile" />
        <img src={useBaseUrl('img/jscamp/27.3.jpg')} alt="" className="image-mobile" />
        <img src={useBaseUrl('img/jscamp/27.2.jpg')} alt="" />
        <img src={useBaseUrl('img/jscamp/27.1.jpg')} alt="" className="image-mobile" />
        <img src={useBaseUrl('img/jscamp/28.3.jpg')} alt="" className="image-mobile" />
        <img src={useBaseUrl('img/jscamp/28.2.jpg')} alt="" />
        <img src={useBaseUrl('img/jscamp/28.1.jpg')} alt="" className="image-mobile" />
        <img src={useBaseUrl('img/jscamp/29.3.jpg')} alt="" className="image-mobile" />
        <img src={useBaseUrl('img/jscamp/29.2.jpg')} alt="" />
        <img src={useBaseUrl('img/jscamp/29.1.jpg')} alt="" className="image-mobile" />
        <img src={useBaseUrl('img/jscamp/30.3.jpg')} alt="" className="image-mobile" />
        <img src={useBaseUrl('img/jscamp/30.2.jpg')} alt="" />
        <img src={useBaseUrl('img/jscamp/30.1.jpg')} alt="" className="image-mobile" />
        <img src={useBaseUrl('img/jscamp/31.3.jpg')} alt="" className="image-mobile" />
        <img src={useBaseUrl('img/jscamp/31.2.jpg')} alt="" />
        <img src={useBaseUrl('img/jscamp/31.1.jpg')} alt="" className="image-mobile" />
        <img src={useBaseUrl('img/jscamp/32.3.jpg')} alt="" className="image-mobile" />
        <img src={useBaseUrl('img/jscamp/32.2.jpg')} alt="" />
        <img src={useBaseUrl('img/jscamp/32.1.jpg')} alt="" className="image-mobile" />
        <img src={useBaseUrl('img/jscamp/2.3.jpg')} alt="" className="image-mobile" />
        <img src={useBaseUrl('img/jscamp/2.2.jpg')} alt="" />
        <img src={useBaseUrl('img/jscamp/2.1.jpg')} alt="" className="image-mobile" />
      </div>
    </>
  )
}

function Home() {
  const context = useDocusaurusContext()
  const { siteConfig = {} } = context
  const opts = {
    height: '100%',
    width: '100%',
    playerVars: {
      autoplay: 1,
      controls: 0,
      cc_load_policy: 0,
      fs: 0,
      iv_load_policy: 3,
      modestbranding: 1,
      rel: 0,
      showinfo: 0
    }
  }

  const { videoContainer, player, heroBanner, buttons, getStarted } = styles
  return (
    <>
      <Layout title={`${siteConfig.title}`} description="Sumerian App - это школа программирования">
        <Head>
          <meta property="og:image" content="https://react-native-village.github.io/img/app.png" />
        </Head>

        {/* <div className={videoContainer}>
          <YouTube videoId="A_i5-4FuuKw" opts={opts} className={player} />
        </div> */}

        <main>
          {features && features.length && (
            <section className={styles.features}>
              <div className="container">
                <div className="row">
                  {features.map(({ title, imageUrl, description }) => (
                    <Feature key={title} title={title} imageUrl={imageUrl} description={description} />
                  ))}
                </div>
              </div>
            </section>
          )}
        </main>
        <header className={classnames('hero hero--primary', heroBanner)}>
          <div className="container">
            <h1 className="hero__title">Unicorn app</h1>
            <p className="hero__subtitle">{siteConfig.tagline}</p>
            <div className={buttons}>
              <Link
                className={classnames('button button--outline button--secondary button--lg', getStarted)}
                to={useBaseUrl('docs/startup00')}
              >
                Начать
              </Link>
            </div>
          </div>
        </header>
        <Program />
      </Layout>
    </>
  )
}

export default Home
