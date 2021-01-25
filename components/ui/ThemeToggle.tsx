import { Flex, useColorMode, Button } from '@chakra-ui/react'
import { primary } from 'utils/theme'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'

export const FloatingThemeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Button
      pos='fixed'
      right='40px'
      bottom='40px'
      boxShadow='xl'
      rounded='full'
      w='60px'
      h='60px'
      _hover={{ bg: `${primary}.400` }}
      onClick={toggleColorMode}
      backgroundColor={`${primary}.300`}>
      {colorMode === 'light' ? (
        <MoonIcon w={6} h={6} color='#ffffff' />
      ) : (
        <SunIcon w={6} h={6} color='#ffffff' />
      )}
    </Button>
  )
}
