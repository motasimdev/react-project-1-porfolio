import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import Heading from "../Heading";

const Counter = () => {
  return (
    <>
      <section className={"py-[90px]"}>
        <Container>
          <Flex className={"justify-between"}>
            <div className="">
              <h3 className={"font-pop font-semibold text-5xl text-black"}>100+</h3>
              <Heading className={"font-pop font-medium text-base text-[#121212] uppercase"} text={"Projects"} as={"p"} />
            </div>
            <div className="">
              <h3 className={"font-pop font-semibold text-5xl text-black"}>20</h3>
              <Heading className={"font-pop font-medium text-base text-[#121212] uppercase"} text={"WINNING AWARD"} as={"p"} />
            </div>
            <div className="">
              <h3 className={"font-pop font-semibold text-5xl text-black"}>70+</h3>
              <Heading className={"font-pop font-medium text-base text-[#121212] uppercase"} text={"HAPPY CLIENTS"} as={"p"} />
            </div>
            <div className="">
              <h3 className={"font-pop font-semibold text-5xl text-black"}>10</h3>
              <Heading className={"font-pop font-medium text-base text-[#121212] uppercase"} text={"YEAR EXPERIENCE"} as={"p"} />
            </div>
          
          </Flex>
        </Container>
      </section>
    </>
  );
};

export default Counter;
