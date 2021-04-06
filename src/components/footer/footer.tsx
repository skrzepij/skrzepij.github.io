import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import styles from './footer.module.scss'

export const Footer = (): JSX.Element => {
  const data = useStaticQuery(graphql`
    query FooterQuery {
      site {
        siteMetadata {
          author
          authorUrl
        }
      }
    }
  `)
  const { author, authorUrl } = data.site.siteMetadata

  return (
    <footer className={`${styles.footer}`}>
      <p>
        Created by{' '}
        <a href={authorUrl} target="_blank" rel="noopener noreferrer">
          {author}
        </a>
      </p>
    </footer>
  )
}
