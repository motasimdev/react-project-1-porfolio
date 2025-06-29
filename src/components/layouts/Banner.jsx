import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import Heading from "../Heading";
import Button from "../Button";
import { MdMailOutline } from "react-icons/md";
import { MdOutlineFileDownload } from "react-icons/md";
import Image from "../Image";
import sakibAvatar from "../../assets/avatar.png"

const Banner = () => {
  return (
    <>
      <section className={"py-4 bg-banner"}>
        <Container>
          <Flex className={"justify-between"}>
            <div className="max-w-[480px]">
              <Heading text={"SAKIB AL HASAN"} as={"h4"} className={"text-base uppercasse text-primaryClr font-pop font-medium"}/>
              <Heading
                text={"Hello, my name’s Sakib. I’m MERN Stack Developer."}
                as={"h1"}
                className={"text-6xl text-[#333333] font-pop font-bold leading-[78px] py-9"}
              />
              <Flex>
                {/* ====================== */}
                <Button
                  className={
                    "py-3 px-6 text-white font-pop text-sm font-medium uppercase flex items-center gap-x-2 bg-primaryClr"
                  }
                  btnTxt={
                    <>
                      <MdMailOutline />
                      CONTACT ME
                    </>
                  }
                />
                {/* ======================== */}
                <Button
                  className={
                    "py-3 px-6 text-black font-pop text-sm font-medium uppercase flex items-center gap-x-2"
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
            <div className="">
              <Image className={"w-full"} imgSrc={sakibAvatar} imgAlt={sakibAvatar}/>
            </div>
          </Flex>
        </Container>
      </section>
    </>
  );
};

export default Banner;
