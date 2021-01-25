import { MainLayout } from 'components/layouts/Main'
import { Hero } from 'components/sections/Hero'

const IndexPage = () => (
  <MainLayout>
    <Hero
      img='/static/logo.png'
      title='Araha Discord Bot'
      subtitle='This is subtitle!'
      btn1='Add To Discord'
      btn1Link='/'
      btn2='See Features'
      btn2Link='/features'
    />
  </MainLayout>
)

export default IndexPage
