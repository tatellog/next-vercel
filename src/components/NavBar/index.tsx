import { ActiveLink } from '../ActiveLink'

import { Icon, NavBarContainer, NavBarItems, ReachOutButton } from './styles'

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
    <NavBarContainer $backgroundColor={existIndex}>
      <Icon>Image</Icon>
      <NavBarItems>
        {menuItems.map(({ text, href }) => (
          <ActiveLink key={href} href={href} text={text} />
        ))}
      </NavBarItems>
      <ReachOutButton>Reach out!</ReachOutButton>
    </NavBarContainer>
  )
}
