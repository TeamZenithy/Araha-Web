import { useState } from 'react'
import Link from 'next/link'
import {
  Box,
  Flex,
  Text,
  Button,
  Stack,
  useColorModeValue
} from '@chakra-ui/react'
import { Logo } from '../ui/Logo'
import { primary } from 'utils/theme'

import NLink from 'next/link'

import { CloseIcon } from '@chakra-ui/icons'

const MenuIcon = () => (
  <svg
    width='24px'
    viewBox='0 0 20 20'
    xmlns='http://www.w3.org/2000/svg'
    fill='white'>
    <title>Menu</title>
    <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
  </svg>
)

const MenuItems = (props: any) => {
  const { children, isLast, to = '/', ...rest } = props
  return (
    <Text
      mb={{ base: isLast ? 0 : 8, sm: 0 }}
      mr={{ base: 0, sm: isLast ? 0 : 8 }}
      display='block'
      {...rest}>
      <Link href={to}>{children}</Link>
    </Text>
  )
}

export const Header = (props: any) => {
  const [show, setShow] = useState(false)
  const toggleMenu = () => setShow(!show)

  const color = useColorModeValue(`${primary}.700`, `${primary}.400`)

  const isAuth = false

  return (
    <Flex
      as='nav'
      align='center'
      justify='space-between'
      wrap='wrap'
      w='100%'
      mb={8}
      p={8}
      bg={[`${primary}.500`, `${primary}.500`, 'transparent', 'transparent']}
      color={['white', 'white', color, color]}
      {...props}>
      <Flex align='center'>
        <Logo />
      </Flex>

      <Box display={{ base: 'block', md: 'none' }} onClick={toggleMenu}>
        {show ? <CloseIcon /> : <MenuIcon />}
      </Box>

      <Box
        display={{ base: show ? 'block' : 'none', md: 'block' }}
        flexBasis={{ base: '100%', md: 'auto' }}>
        <Flex
          align={['center', 'center', 'center', 'center']}
          justify={['center', 'space-between', 'flex-end', 'flex-end']}
          direction={['column', 'row', 'row', 'row']}
          pt={[4, 4, 0, 0]}>
          <MenuItems>
            <NLink href='/features'>Features</NLink>
          </MenuItems>
          <MenuItems to='/'>
            <NLink href='/notice'>Notice</NLink>
          </MenuItems>
          <MenuItems>
            <NLink href='/supportserver'>Support Server</NLink>
          </MenuItems>

          <MenuItems isLast>
            <NLink href={isAuth ? '/dash' : '/auth/signin'}>
              <Button
                size='sm'
                rounded='md'
                color={[`${primary}.500`, `${primary}.500`, 'white', 'white']}
                bg={['white', 'white', `${primary}.500`, `${primary}.500`]}
                _hover={{
                  bg: [
                    `${primary}.100`,
                    `${primary}.100`,
                    `${primary}.600`,
                    `${primary}.600`
                  ]
                }}>
                {isAuth ? 'Dashboard' : 'Login'}
              </Button>
            </NLink>
          </MenuItems>
        </Flex>
      </Box>
    </Flex>
  )
}
