import styles from './NavBar.module.css'
import { ActiveLink } from '../ActiveLink'
import { NavBarContainer } from './styles'

export const NavBar = () => {
  const menuItems = [
    {
      text: 'About',
      href: '/about',
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
  //TODO: auto save, eslint

  return (
    <NavBarContainer>
      <div>Some Image</div>
      {menuItems.map(({ text, href }) => (
        <ActiveLink key={href} href={href} text={text} />
      ))}
      <button>Reach out!</button>
    </NavBarContainer>
  )
}
