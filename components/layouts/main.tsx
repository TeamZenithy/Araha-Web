import { ReactNode } from 'react'
import { Flex } from '@chakra-ui/react'
import Head from 'next/head'

type Props = {
  children?: ReactNode
  title?: string
}

export const MainLayout = ({ children, title = 'Home' }: Props) => (
  <div>
    <Head>
      <title>Araha - {title}</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>
    <Flex direction='column' align='center' maxW={{ xl: '1200px' }} m='0 auto'>
      {children}
    </Flex>
  </div>
)
