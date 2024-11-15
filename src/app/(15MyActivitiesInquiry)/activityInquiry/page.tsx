'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button, Card, CardBody } from '@nextui-org/react';    
import Image from 'next/image'; 
import { useState, useMemo } from "react";
import { ActivityInquiryTable } from "@/assets/actiivityInquiryT1";
import {
    Table,
    TableHeader,
    TableColumn,
    TableBody,
    TableRow,
    TableCell,
    Pagination,
  } from "@nextui-org/react";

const ActivityInquiry = () => {
        // Pagination Logic
        const [page, setPage] = useState(1); 

        const rowsPerPage = 15

        const pages = Math.ceil(ActivityInquiryTable.length / rowsPerPage);

        const [currentData, setCurrentData] = useState<any>();

        const items = useMemo(() => {
            const start = (page - 1) * rowsPerPage;
            const end = start + rowsPerPage;

            setCurrentData(ActivityInquiryTable.slice(start, end));
            return ActivityInquiryTable.slice(start, end);
        }, [page, rowsPerPage]);
  return (
    <div className="min-h-[1117px] flex flex-col items-center justify-between"> 
      {/* Include Header */}
      <Header />

      <hr className="w-full border-t-1 border-[rgb(207,212,218)]  py-2"/>

      {/* Form Container */}
      <div className="flex flex-col items-center justify-start w-[428px] h-[293px] gap-[10px] mt-10 mb-96 flex-1">
            <h2 className="w-[428px] h-[34px] text-center text-[24px] font-semibold text-black">마이페이지</h2>

            {/* ----- ---- --- TOP  --- ----- ------*/}
            <div className='flex flex-cols items-center justify-center w-[1728px] h-[108px]'>
                <div className="w-full flex justify-center border-b border-[rgb(207,212,218)]">
                    {/* Inner content container */}
                    <div className="flex flex-row items-center justify-between gap-[60px]">
                        <div className="text-[#868F9A]  pb-3 font-bold">내 정보 관리</div>
                        <div className="text-[#868F9A] pb-3 font-bold">이용권 및 결제 내역</div>
                        <div className="text-[#868F9A] pb-3 font-bold">다운로드 내역</div>
                        <div className=" border-b-4 border-[#42A8FD] text-[#42A8FD] pb-3 font-bold">나의 활동</div> 
                    </div>
                </div>
                
            </div>

        

            {/* ----- ---- --- BOTTOM  --- ----- ------*/}
            <div className='flex flex-col items-center justify-center w-[1080px] h-[817px] gap-[24px]'>

                <div className="flex flex-row items-center justify-center w-[796px] h-[40px] gap-[12px]">
                    <div className=' border font-bold border-[#868F9A]  text-[#868F9A] px-[12px] py-[10px] text-[14px] rounded-full'>나의 게시글</div>
                    <div className=' border ont-bold border-[#42A8FD] bg-blue-100 font-bold text-[#42A8FD]  px-[12px] py-[10px] text-[14px] rounded-full'>1:1 문의</div>
                </div>

                <div className='flex flex-col w-[1080px] h-[695px] gap-[5px]'>
                    <div className='w-[1080px] h-[42px] flex flex-row items-center justify-between'>
                        <h2 className='text-[20px] font-bold'>문의 내역</h2>
                        <Button className='w-[76px] h-[42px] py-[8px] px-[14px] bg-[#E0F1FF] text-[#42A8FD]'>
                            문의하기
                        </Button>
                    </div>
                    <article className="m-0">
                        <Table
                            aria-label="Data Table"
                            shadow="none"
                            classNames={{
                                th: [
                                "relative px-[40px] w-[1080px] h-[41px] py-[12px] font-bold text-[14px] bg-[#F3F4F6] text-[#868F9A] h-[44px] text-center",
                                "after:content-[''] after:absolute after:right-0 after:top-2 after:bottom-2 after:w-[1px] after:bg-gray-300",
                                ],
                                td: ["px-6 text-[14px] text-center font-normal text-base text-[#363941]"],
                            }}
                            bottomContent={
                                <div className="flex w-full justify-center mt-8">
                                <Pagination
                                    isCompact
                                    showControls
                                    showShadow
                                    color="primary"
                                    page={page}
                                    total={pages}
                                    onChange={(page) => setPage(page)}
                                />
                                </div>
                            }
                        >
                            <TableHeader>
                                <TableColumn>제목</TableColumn>
                                <TableColumn>작성일</TableColumn>
                                <TableColumn>상태</TableColumn>
                            </TableHeader>
                            <TableBody>
                                {items.map((row, index) => (
                                    <TableRow key={row.id} className="border-b-1">
                                        <TableCell>{index === 0 ? '추가 결제는 없나요?' : row.title}</TableCell>
                                        <TableCell>
                                            <span className="text-[#868F9A]">
                                            {index === 0 ? '2024.11.05' : row.creationDate}
                                            </span>
                                        </TableCell>
                                        <TableCell>
                                            <span className={index === 0 ? 'text-black font-medium' : 'text-[#8D64F8]'}>
                                            {index === 0 ? '대기중' : row.situation}
                                            </span>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>


                            </Table>
                    </article>
                    
                </div>
            </div>


        
       </div>

      {/* Footer remains at the bottom of the page */}
      <Footer />
    </div>
  )
}

export default ActivityInquiry;

