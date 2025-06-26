import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Heading from '../Heading'
import Button from '../Button'

const Banner = () => {
  return (
    <>
    <section className={"py-4 bg-banner"}>
        <Container>
            <Flex className={"justify-between"}>
                <div className="">
                  <Heading text={"SAKIB AL HASAN"} as={"h4"}/>
                  <Heading text={"Hello, my name’s Sakib. I’m MERN Stack Developer."} as={"h1"}/>
                  <Button  btnTxt={<>
                    CONTACT ME
                    
                    </>}/>
                </div>
            </Flex>
        </Container>
    </section>
    </> 
  )
}

export default Banner