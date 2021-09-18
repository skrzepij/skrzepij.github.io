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
            Interesuje się technologiami webowymi. Głównie skupiam się na wydajnym <strong>CSS</strong>,{' '}
            <strong>JavaScript</strong> i semantycznym <strong>HTML</strong>.
          </p>
          <p>
            Niedawno zacząłem się rozwijać w <strong>UX</strong> oraz backendzie, z wykorzystaniem{' '}
            <strong>Node.js</strong>. Pracuję również z <strong>WordPress</strong> CMS.
          </p>
          <p>
            Entuzjasta <strong>JamStack</strong>, <strong>Serverless</strong>, <strong>GraphQL</strong> i{' '}
            <strong>Open Source</strong>.
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
