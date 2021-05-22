import React from 'react'

import { useSiteMetaData } from '../../hooks/useSiteMetaData'

import { footer } from './footer.module.scss'

export const Footer = (): JSX.Element => {
  const { author, authorUrl } = useSiteMetaData()

  return (
    <footer className={footer}>
      <p>
        Created by{' '}
        <a href={authorUrl} target="_blank" rel="noopener noreferrer">
          {author}
        </a>
      </p>
    </footer>
  )
}
