// components/Item.tsx
import React from 'react'

const Item = ({ index }: { index: number }) => (
  <div
    style={{
      background: 'gold',
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
