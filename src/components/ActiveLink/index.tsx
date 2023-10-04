import { FC } from 'react'
import Link from 'next/link'

import { LinkContainer } from './styles'

interface Props {
  text: string
  href: string
}

export const ActiveLink: FC<Props> = ({ text, href }) => (
  <LinkContainer>
    <Link href={href}>{text} </Link>
  </LinkContainer>
)
