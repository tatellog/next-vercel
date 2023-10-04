import React from 'react'
import Link from 'next/link'

import { LinkContainer } from './styles'
interface Props {
  text: string
  href: string
}

export const ActiveLink: React.FC<Props> = ({ text, href }) => (
  <LinkContainer>
    <Link href={href}>{text} </Link>
  </LinkContainer>
)
