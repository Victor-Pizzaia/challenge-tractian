import { Header } from '../components/Header/Header'
import { NextHeader } from '../components/NextHeader/NextHeader'

export default function Home() {
  return (
    <>
      <NextHeader title={'Tractian Challenge'}/>
      <Header navItems={[{name: 'teste', href: '#'}, {name: 'teste2', href: '#'}, {name: 'teste3', href: '#'}]}/>
    </>
  )
}
