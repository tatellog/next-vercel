import colors from './theme/colors'

export const slides = [
  {
    id: 0,
    backgroundColor: colors.main.secondaryPink,
    color: colors.main.primaryPink,
    title: 'Hi! I\u2019m \nTania Tello',
    subtitle:
      'Always passionate about crafting experiences that are engaging,\n accessible, and user-centric.',
    smallSubtitle: 'Passionate about crafting engaging experiences.',
    images: {
      stars: '/images/svg/cross1.svg',
      primary: '/images/svg/react.svg',
      secondary: '/images/svg/py.svg',
    },
  },
  {
    id: 1,
    backgroundColor: colors.main.secondaryBlue,
    color: colors.main.primaryBlue,
    title: 'Sr. Front End \nEngineer',
    subtitle:
      '7+ years of experience, specializing in dynamic and user-friendly web applications,\n e-commerce platforms, and recently mobile apps using React-Native',
    smallSubtitle:
      'Huge experience in web app, spa, e-commerce, and React-Native mobile apps',
    images: {
      stars: '/images/svg/crossB.svg',
      primary: '/images/svg/react.svg',
    },
  },
  {
    id: 2,
    backgroundColor: colors.main.secondaryYellow,
    color: colors.main.primaryYellow,
    title: 'Technology \nMentor',
    subtitle:
      'One of my motivations for technology is to encourage and mentor women to learn about\n various technological disciplines, given the need for more women in the sector.',
    smallSubtitle:
      'Motivated to mentor and empower women in tech for gender diversity.',
    images: {
      stars: '/images/svg/crossY.svg',
      primary: '/images/svg/school.svg',
      secondary: '/images/svg/pointer.svg',
    },
  },
  {
    id: 3,
    backgroundColor: colors.main.secondaryOrange,
    color: colors.main.primaryOrange,
    title: 'Oh boy, \ncan I code',
    subtitle:
      'Expert in React.js. Highly skilled at JavaScript, and Redux. Also experienced \nin Next.js, React-Native, styled-components, Typescript GraphQL, and Flex-Box. Characterized by sticking\n to good practices with frameworks such as React-Testing Library, Jest and E2E testing with Cypress.',
    smallSubtitle: 'Skilled in React, JavaScript, Redux, Next.js, and more',
    images: {
      stars: '',
      secondary: '',
    },
  },
]

export const menuItems = [
  {
    text: '',
    href: '/',
  },
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
