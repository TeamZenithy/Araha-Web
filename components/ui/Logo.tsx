import { Flex, Text, Image, useColorModeValue } from '@chakra-ui/react'
import { primary } from 'utils/theme'

export const Logo = (props: any) => {
  const color = useColorModeValue(`${primary}.500`, `${primary}.300`)
  return (
    <Flex {...props} alignItems={'center'}>
      <Text
        fontSize='lg'
        color={['white', 'white', color, color]}
        fontWeight='bold'
        ml={2}>
        Araha
      </Text>
    </Flex>
  )
}
