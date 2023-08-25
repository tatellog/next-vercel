import Link from 'next/link'
import styles from './NavBar.module.css'
import { ActiveLink } from './ActiveLink'

export const NavBar = () => {
  const menuItems = [
    {
      text: 'Home',
      href: '/',
    },
    {
      text: 'About',
      href: '/about',
    },
    {
      text: 'Contact',
      href: '/contact',
    },
  ]

  return (
    <nav className={styles.menuContainer}>
      {menuItems.map(({ text, href }) => (
        <ActiveLink key={href} href={href} text={text} />
      ))}
    </nav>
  )
}
