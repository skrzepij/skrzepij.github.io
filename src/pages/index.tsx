import React from 'react'
import { graphql } from 'gatsby'

import { Layout } from '../components/layout/layout'
import { GatsbyDataInterface } from '../api/gatsbyData'
import { SEO } from '../components/seo/seo'

import * as styles from './index.module.scss'

type Props = {
  readonly data: GatsbyDataInterface
}

export const Index = ({ data }: Props): JSX.Element => {
  const { title, description } = data.site.siteMetadata
  return (
    <Layout>
      <SEO title="Strona główna" />
      <article className={styles.index}>
        <hgroup className={styles.index__header}>
          <h2 className={styles.index__title}>Cześć! Jestem Radek</h2>
          <h3 className={styles.index__subtitle}>Frontend / Web Developer</h3>
        </hgroup>

        <section className={styles.index__content}>
          <p>
            Zawodowo związany z branżą IT od <strong>ponad 9 lat</strong>. Stawiam na prostotę i wydajność tworzonych
            aplikacji.
          </p>
          <p>
            Pracowałem nad złożonymi aplikacjami branży <strong>FinTech</strong>, <strong>eCommerce</strong>, a także
            stronami produktowymi znanych, międzynarodowych marek.
          </p>
          <p>
            Aktualnie - jestem liderem zespołu Frontend nowego startupu, zajmuję się mentoringiem, wspieram organizacje
            non-profit oraz tworzę własne produkty.
          </p>
          <p>
            Swój rozwój kieruję w <strong>UX</strong> oraz Backend, z wykorzystaniem frameworków
            <strong> Node.js</strong>.
          </p>
          <p>
            Jestem otwarty na nowe wyzwania więc jeżeli szukasz kogoś, kto dostarczy Ci <strong>profesjonalnych</strong>{' '}
            rozwiązań to dobrze trafiłeś!
          </p>
        </section>
      </article>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`

export default Index
