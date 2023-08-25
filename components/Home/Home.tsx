import Link from 'next/link'
import React from 'react'
import * as S from './Home.styles'

export const Home = () => {
  return (
    <S.HomeContainer>
      <S.SubHeader>
        <S.Title>Hi, My name is Tania Tello.</S.Title>
        <S.SubTitle>
          <S.LinkedWord>Passionated </S.LinkedWord>Software Engineer foucused on{' '}
          <S.LinkedWord>Front End. </S.LinkedWord> {''}
        </S.SubTitle>
      </S.SubHeader>
    </S.HomeContainer>
  )
}
