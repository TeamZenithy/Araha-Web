import Link from 'next/link'
import {
  Box,
  Button,
  Flex,
  Image,
  Heading,
  useColorModeValue,
  Stack,
  Text
} from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons'
import { primary } from 'utils/theme'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiscord } from '@fortawesome/free-brands-svg-icons'

type props = {
  title: string
  subtitle: string
  btn1: string
  btn1Link: string
  btn2: string
  btn2Link: string
  img: string
}

export const Hero = ({ title, subtitle, btn1, btn2, img, ...rest }: props) => {
  const colorTitle = useColorModeValue(`${primary}.800`, `${primary}.300`)
  return (
    <Flex
      alignItems={'center'}
      align='center'
      minH='60vh'
      px={8}
      mb={16}
      {...rest}>
      <Stack spacing={3} align={'center'}>
        <Image src={img} boxSize={'70px'} />
        <Heading
          as='h1'
          size='xl'
          fontWeight='bold'
          color={colorTitle}
          textAlign={'center'}>
          {title}
        </Heading>
        <Heading
          as='h2'
          size='md'
          color={colorTitle}
          opacity='0.8'
          fontWeight='normal'
          lineHeight={1.5}
          textAlign={['center', 'center', 'left', 'left']}>
          {subtitle}
        </Heading>
        <Box>
          <Stack mt={6} spacing={4} direction={{ base: 'column', md: 'row' }}>
            <Button
              colorScheme={primary}
              size={'lg'}
              w='240px'
              h='55px'
              leftIcon={<FontAwesomeIcon icon={faDiscord} />}>
              {btn1}
            </Button>
            <Button
              backgroundColor={'gray.400'}
              color={'white'}
              size={'lg'}
              w='240px'
              h='55px'>
              {btn2}
            </Button>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  )
}
