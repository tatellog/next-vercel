import Image from 'next/image'

import { ActiveLink } from '../ActiveLink'

import { ContactButton, MenuOptions, TopMenuContainer } from './styles'

import { slides } from '@/utils'

const menuItems = [
  {
    text: 'About',
    href: '/',
  },
  {
    text: 'Experience',
    href: '/experience',
  },
  {
    text: 'Work',
    href: '/work',
  },
]
interface NavBarProps {
  backgroundIndex?: number
}

// eslint-disable-next-line react/prop-types
export const NavBar: React.FC<NavBarProps> = ({ backgroundIndex }) => {
  const existIndex =
    backgroundIndex === 4
      ? slides[0].backgroundColor
      : slides[backgroundIndex]?.backgroundColor
  return (
    <TopMenuContainer $backgroundColor={existIndex}>
      <Image
        src="/images/svg/simpleLogo.svg"
        width={30}
        height={33}
        alt="Tatello Logo"
      />
      <MenuOptions>
        {menuItems.map(({ text, href }) => (
          <ActiveLink key={href} href={href} text={text} />
        ))}
      </MenuOptions>
      <ContactButton>Reach out!</ContactButton>
    </TopMenuContainer>
  )
}
