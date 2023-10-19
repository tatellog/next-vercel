import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { MenuOptions, ReachOutButton, TopMenuContainer } from './styles'
import { TopMenuProps } from './types'

import { menuItems, slides } from '@/utils'

const TopMenu: React.FC<TopMenuProps> = ({ activeIndex }) => {
  const router = useRouter()
  const isAboutPage = router.asPath === '/about'
  let color = ''
  if (isAboutPage) {
    color = '#FFC4C8'
  } else if (router.asPath === '/experience') {
    color = '#6AC7E6'
  } else if (router.asPath === '/work') {
    color = '#AED4D5'
  }

  return (
    <TopMenuContainer id="top-menu">
      <Link href="/">
        <Image
          src="/images/svg/simpleLogo.svg"
          width={31}
          height={35}
          alt="tatello-brand"
        />
      </Link>
      <MenuOptions $color={color}>
        {menuItems.map(({ href, text }) => (
          <Link id={text.toLowerCase()} key={href} href={href}>
            {text}
          </Link>
        ))}
      </MenuOptions>
      <ReachOutButton $backgroundColor={slides[activeIndex]?.color || color}>
        Reach out!
      </ReachOutButton>
    </TopMenuContainer>
  )
}

export default TopMenu
