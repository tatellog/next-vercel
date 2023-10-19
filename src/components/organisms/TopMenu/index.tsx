import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { MenuOptions, ReachOutButton, TopMenuContainer } from './styles'
import { TopMenuProps } from './types'

import { getColorForPath, menuItems, slides } from '@/utils'

const TopMenu: React.FC<TopMenuProps> = ({ activeIndex }) => {
  const router = useRouter()
  const currentPath = router.asPath
  const color = getColorForPath(currentPath)

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
          <Link
            id={href === '/' ? 'home' : text.toLowerCase()}
            key={href}
            href={href}
            style={{
              backgroundColor:
                currentPath === href ? getColorForPath(href) : 'transparent',
            }}
          >
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
