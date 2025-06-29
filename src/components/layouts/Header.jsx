import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import Image from "../Image";
import logo from "../../assets/logo.png";
import Menu from "../Menu";
import Button from "../Button";
import { MdMailOutline } from "react-icons/md";

const Header = () => {
  return (
    <>
      <section className={"py-2"}>
        <Container>
          <Flex className={`justify-between`}>
            <div className="">
              <Image imgSrc={logo} />
            </div>
            <div className="">
              <Menu
                className={`flex gap-5 font-pop uppercase text-sm tracking-widest tracking-widest`}
              >
                <li>Home</li>
                <li>About</li>
                <li>Service</li>
                <li>Contact</li>
              </Menu>
            </div>
            <div className="">

                {/* =========================== */}
              <Button
                className={
                  "py-3 px-6 text-white font-pop text-sm font-medium uppercase flex items-center gap-x-2 bg-primaryClr"
                }
                btnTxt={
                  <>
                    hire me
                    <MdMailOutline />
                  </>
                }
              />
              {/* =========================== */}
            </div>
          </Flex>
        </Container>
      </section>
    </>
  );
};

export default Header;
