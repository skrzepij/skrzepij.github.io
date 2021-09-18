import React from 'react'

import MeImg from '../../images/me.png'

import { photo } from './photo.module.scss'

export const Photo = (): JSX.Element => {
  return (
    <figure className={photo}>
      <img src={MeImg} alt="zdjęcie profilowe" />
    </figure>
  )
}
