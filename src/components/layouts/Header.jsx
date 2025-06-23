import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Image from '../Image'
import logo from '../../assets/logo.png'
import Menu from '../Menu'
import Button from '../Button'

const Header = () => {
  return (
    <>
    <section className={'py-2'}>
       <Container>
            <Flex className={`justify-between`}>
                <div className="">
                    <Image imgSrc={logo}/>
                </div>
                <div className="">
                    <Menu className={`flex gap-5`}>
                        <li>Home</li>
                        <li>About</li>
                        <li>Service</li>
                        <li>Contact</li>
                    </Menu>
                </div>
                <div className="">
                    <Button className={"py-4 px-6 text-white"} btnTxt={"Contact"}/>
                </div>
            </Flex>
       </Container>
    </section>
    </>
  )
}

export default Header