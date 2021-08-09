import React from 'react'

import MeImg from '../../images/me.png'

import { photo } from './photo.module.scss'

export const Photo = (): JSX.Element => {
  return (
    <div className={photo}>
      <img src={MeImg} alt="zdjęcie profilowe" />
    </div>
  )
}
