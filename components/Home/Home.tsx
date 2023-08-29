import Link from 'next/link'
import React from 'react'
import * as S from './Home.styles'

export const Home = () => {
  return (
    <S.HomeContainer>
      <S.SubHeader>
        <S.Title>Hi, My name is Tania Tello.</S.Title>
        <S.SubTitle>
          Passionated <S.LinkedWord>Software Engineer</S.LinkedWord> foucused on{' '}
          <S.LinkedWord>Front End. </S.LinkedWord> {''}
        </S.SubTitle>

        <S.AboutContainer href="/about">
          <S.AboutText>Explore inside </S.AboutText>
        </S.AboutContainer>
      </S.SubHeader>
    </S.HomeContainer>
  )
}
