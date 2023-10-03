import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC } from 'react'
import { LinkContainer } from './styles'

interface Props {
  text: string
  href: string
}

export const ActiveLink: FC<Props> = ({ text, href }) => {
  const { asPath } = useRouter()
  return (
    <LinkContainer>
      <Link href={href}>{text} </Link>
    </LinkContainer>
  )
}
