import { ActiveLink } from '../ActiveLink'

import { NavBarContainer } from './styles'

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
    <div>Image</div>
    {menuItems.map(({ text, href }) => (
      <ActiveLink key={href} href={href} text={text} />
    ))}
    <button>Reach out!</button>
  </NavBarContainer>
)
