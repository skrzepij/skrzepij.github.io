import React from 'react'

import { useSiteMetaData } from '../../hooks/useSiteMetaData'

import { footer } from './footer.module.scss'

export const Footer = (): JSX.Element => {
  const { author, authorUrl } = useSiteMetaData()

  return (
    <footer className={footer}>
      <p>Created with 💛 and 🪄✨</p>
      <p>
        © 2023{' '}
        <a href={authorUrl} target="_blank" rel="noopener noreferrer">
          <strong>{author}</strong>
        </a>{' '}
        Radomir Skrzepij
      </p>
    </footer>
  )
}
