import { ActiveLink } from '../ActiveLink'

import { NavBarContainer } from './styles'

import { menuItems } from '@/pages/utils'

export const NavBar = () => (
  <NavBarContainer>
    <div>Image</div>
    {menuItems.map(({ text, href }) => (
      <ActiveLink key={href} href={href} text={text} />
    ))}
    <button>Reach out!</button>
  </NavBarContainer>
)
