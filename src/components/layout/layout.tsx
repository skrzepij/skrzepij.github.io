import React from 'react'

import { Photo } from '../photo/photo'
import { Footer } from '../footer/footer'

import * as styles from './layout.module.scss'

type Props = {
  readonly children: React.ReactNode
}

export const Layout = ({ children }: Props): JSX.Element => {
  return (
    <div className={styles.layout}>
      <div className={styles.layout__content}>
        <aside className={styles.layout__aside}>
          <Photo />
        </aside>
        <main className={styles.layout__main}>{children}</main>
      </div>
      <Footer />
    </div>
  )
}
