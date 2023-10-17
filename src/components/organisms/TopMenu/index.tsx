import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { MenuOptions, ReachOutButton, TopMenuContainer } from './styles'

import colors from '@/theme/colors'
import { menuItems } from '@/utils'

const TopMenu = () => (
  <TopMenuContainer id="top-menu">
    <Image
      src="/images/svg/simpleLogo.svg"
      width={31}
      height={35}
      alt="tatello-brand"
    />
    <MenuOptions>
      {menuItems.map(({ href, text }) => (
        <Link key={href} href={href}>
          {text}
        </Link>
      ))}
    </MenuOptions>
    <ReachOutButton>Reach out!</ReachOutButton>
  </TopMenuContainer>
)

export default TopMenu
