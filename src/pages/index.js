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
    <Layout
      title={`${siteConfig.title}`}
      description="Unicorn App - это мобильное приложение маркет-плейс задач и вакансий для react-native разработчиков в мобильном приложении."
    >
      <div className={videoContainer}>
        <YouTube videoId="TZmN05l0x7M" opts={opts} className={player} />
      </div>
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
    </Layout>
  )
}

export default Home
