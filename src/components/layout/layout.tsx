import React from 'react'

import { Footer } from '../footer/footer'

import styles from './layout.module.scss'

type Props = {
  readonly children: React.ReactNode
}

export const Layout = ({ children }: Props): JSX.Element => {
  return (
    <div className={styles.layout}>
      <main>{children}</main>
      <Footer />
    </div>
  )
}
