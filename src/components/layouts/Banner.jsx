import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import Heading from "../Heading";
import Button from "../Button";
import { MdMailOutline } from "react-icons/md";
import { MdOutlineFileDownload } from "react-icons/md";

const Banner = () => {
  return (
    <>
      <section className={"py-4 bg-banner"}>
        <Container>
          <Flex className={"justify-between"}>
            <div className="">
              <Heading text={"SAKIB AL HASAN"} as={"h4"} className={"text-base uppercasse text-primaryClr font-pop font-medium"}/>
              <Heading
                text={"Hello, my name’s Sakib. I’m MERN Stack Developer."}
                as={"h1"}
              />
              <Flex>
                {/* ====================== */}
                <Button
                  className={
                    "py-3 px-6 text-white font-pop text-sm font-medium uppercase flex items-center gap-x-2"
                  }
                  btnTxt={
                    <>
                      CONTACT ME
                      <MdMailOutline />
                    </>
                  }
                />
                {/* ======================== */}
                <Button
                  className={
                    "py-3 px-6 text-white font-pop text-sm font-medium uppercase flex items-center gap-x-2"
                  }
                  btnTxt={
                    <>
                      <MdOutlineFileDownload />
                      DOWNLOAD CV
                    </>
                  }
                />
                {/* ================ */}
              </Flex>
            </div>
          </Flex>
        </Container>
      </section>
    </>
  );
};

export default Banner;
