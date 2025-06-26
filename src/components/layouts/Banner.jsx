import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Heading from '../Heading'

const Banner = () => {
  return (
    <>
    <section>
        <Container>
            <Flex>
                <div className="">
                  <Heading text={"Hello hiii"} as={"h1"} className={"bg-amber-500"}/>
                </div>
            </Flex>
        </Container>
    </section>
    </> 
  )
}

export default Banner