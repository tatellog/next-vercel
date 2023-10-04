import { ActiveLink } from '../ActiveLink'

import { Icon, NavBarContainer, NavBarItems, ReachOutButton } from './styles'

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

export const NavBar = () => (
  <NavBarContainer>
    <Icon>Image</Icon>
    <NavBarItems>
      {menuItems.map(({ text, href }) => (
        <ActiveLink key={href} href={href} text={text} />
      ))}
    </NavBarItems>
    <ReachOutButton>Reach out!</ReachOutButton>
  </NavBarContainer>
)
