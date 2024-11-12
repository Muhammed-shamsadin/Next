'use client';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button, Checkbox, CheckboxGroup } from "@nextui-org/react";
import Image from "next/image";

const SignUp = () => {
  return (
    <div className="min-h-[1117px] flex flex-col items-center justify-between"> 
      {/* Include Header */}
      <Header />

      <hr className="w-full border-t-1 border-[rgb(207,212,218)]  py-5 "/>

      {/* Form Container */}
      <div className="flex flex-col items-center justify-start w-[428px] h-[293px] gap-[40px] mt-10 mb-10 flex-1">
        <h2 className="w-[428px] h-[34px] text-center text-[24px] font-semibold text-black">회원가입</h2>

        {/* Checkbox Group and Button Container */}
        <div className="flex flex-col items-center w-full gap-[32px]">
          {/* Checkbox Group */}
          <div className="flex flex-col items-start w-[428px] gap-[10px] flex-grow">
            <CheckboxGroup>
              <div className="flex items-center justify-between w-full">
                <Checkbox  className="py-[12px] text-[22px]" value="terms">
                    전체 동의
                </Checkbox>
              </div>
              <hr className="w-full border-t-1 border-[rgb(207,212,218)]" />

              <div className="flex items-center justify-between w-[428px]">
                <Checkbox color="default" className="py-[12px] text-[22px]" value="privacy">
                    (필수) 개인정보처리방침
                </Checkbox>
                <Image
                  src="/assets/Icons/rightarrow.svg"
                  alt="Right Arrow Image"
                  width={12}
                  height={12}
                  className="ml-auto"
                />
              </div>
              <div className="flex items-center justify-between w-full">
                <Checkbox color="default" className="py-[12px] text-[22px]" value="newsletter">
                    (필수) 서비스이용약관
                </Checkbox>
                <Image
                  src="/assets/Icons/rightarrow.svg"
                  alt="Right Arrow Image"
                  width={12}
                  height={12}
                />
              </div>
              <div className="flex items-center justify-between w-full">
                <Checkbox color="default" className="py-[12px] text-[22px]" value="updates">
                    (선택) 마케팅 수신 동의
                </Checkbox>
                <Image
                  src="/assets/Icons/rightarrow.svg"
                  alt="Right Arrow Image"
                  width={12}
                  height={12}
                />
              </div>
            </CheckboxGroup>
          </div>

          {/* Button remains at the bottom */}
          <Button className="w-[428px] h-[42px] px-[20px] py-[10px] bg-[#42A8FD] hover:bg-[#489de2] font-semibold text-white rounded-md">
              본인 확인 후 가입하기
          </Button>
        </div>
      </div>

      {/* Footer remains at the bottom of the page */}
      <Footer />
    </div>
  );
};

export default SignUp;
