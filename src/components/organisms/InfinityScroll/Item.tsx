import React from 'react'

import colors from '@/theme/colors'

const Item = ({ index }: { index: number }) => (
  <div
    style={{
      background: colors.main.secondaryPink,
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: '2rem',
    }}
  >
    Item {index}
  </div>
)

export default Item
