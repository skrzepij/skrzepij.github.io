import React from 'react'

import { Footer } from '../footer/footer'

import { layout } from './layout.module.scss'

type Props = {
  readonly children: React.ReactNode
}

export const Layout = ({ children }: Props): JSX.Element => {
  return (
    <div className={layout}>
      <main>{children}</main>
      <Footer />
    </div>
  )
}
