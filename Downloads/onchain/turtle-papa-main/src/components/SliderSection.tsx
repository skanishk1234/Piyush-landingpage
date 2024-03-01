"use client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "../app/globals.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";
import { CardContainer, CardBody, CardItem } from "./3d-card";

export default function SliderSection() {
  return (
    <>
      <div className="bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-[#171717] to-[#1E1E1E]">
        <div className="max-w-screen-2xl relative mx-auto py-20 md:pt-40 px-4 w-full text-center left-0 top-0">
          <h1 className="text-2xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-tr from-green-500 via-green-600 to-green-800">
            Explore NFT memes Marketplace
          </h1>
          <p className="max-w-2xl text-base mx-auto md:text-xl mt-8 text-neutral-200">
            Blockchain technology ensures the immutability of ownership records.
            Once a meme is tokenized as an NFT, its ownership history is
            securely stored on the blockchain.
          </p>
        </div>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          centeredSlidesBounds={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 20,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper pb-20"
        >
          <SwiperSlide>
            <CardContainer>
              <CardBody className="relative group/card flex items-center flex-col hover:shadow-2xl hover:shadow-emerald-500/[0.1] bg-[#1E1E1E] border-white/[0.2]  w-auto h-auto rounded-xl p-6 border">
                <CardItem translateZ="100" className="w-full">
                  <img
                    src="/images/slide-1.png"
                    height="1000"
                    width="1000"
                    className="h-80 w-full object-contain rounded-xl group-hover/card:shadow-xl"
                    alt="thumbnail"
                  />
                </CardItem>
                <CardItem
                  translateZ="50"
                  className="text-xl mt-4 font-bold text-white"
                >
                  Dayco serpentine Meme
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-sm max-w-sm mt-2 text-neutral-300"
                >
                  <div className="flex space-x-2 items-center">
                    <svg
                      width="15"
                      height="14"
                      viewBox="0 0 15 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_145_6075)">
                        <path
                          d="M3.20117 7.13095L7.49904 0L11.7954 7.13095L7.49927 9.67017L3.20117 7.13095Z"
                          fill="white"
                        />
                        <path
                          d="M3.20117 7.94531L7.49904 10.4844L11.7988 7.94531L7.49927 14.0001L3.20117 7.94531Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_145_6075">
                          <rect
                            width="14"
                            height="14"
                            fill="white"
                            transform="translate(0.5)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                    <span>0.34</span>
                  </div>
                </CardItem>
                <CardItem
                  translateZ={20}
                  as="button"
                  className="mt-4 text-sm font-medium leading-6 px-6 py-3 rounded-full bg-gradient-to-tr from-green-500 via-green-600 to-green-800 hover:from-green-900 hover:via-green-600 hover:to-green-900 text-white"
                >
                  Place bid
                </CardItem>
              </CardBody>
            </CardContainer>
          </SwiperSlide>
          <SwiperSlide>
            <CardContainer>
              <CardBody className="relative group/card flex items-center flex-col hover:shadow-2xl hover:shadow-emerald-500/[0.1] bg-[#1E1E1E] border-white/[0.2]  w-auto h-auto rounded-xl p-6 border">
                <CardItem translateZ="100" className="w-full">
                  <img
                    src="/images/slide-1.png"
                    height="1000"
                    width="1000"
                    className="h-80 w-full object-contain rounded-xl group-hover/card:shadow-xl"
                    alt="thumbnail"
                  />
                </CardItem>
                <CardItem
                  translateZ="50"
                  className="text-xl mt-4 font-bold text-white"
                >
                  Dayco serpentine Meme
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-sm max-w-sm mt-2 text-neutral-300"
                >
                  <div className="flex space-x-2 items-center">
                    <svg
                      width="15"
                      height="14"
                      viewBox="0 0 15 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_145_6075)">
                        <path
                          d="M3.20117 7.13095L7.49904 0L11.7954 7.13095L7.49927 9.67017L3.20117 7.13095Z"
                          fill="white"
                        />
                        <path
                          d="M3.20117 7.94531L7.49904 10.4844L11.7988 7.94531L7.49927 14.0001L3.20117 7.94531Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_145_6075">
                          <rect
                            width="14"
                            height="14"
                            fill="white"
                            transform="translate(0.5)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                    <span>0.34</span>
                  </div>
                </CardItem>
                <CardItem
                  translateZ={20}
                  as="button"
                  className="mt-4 text-sm font-medium leading-6 px-6 py-3 rounded-full bg-gradient-to-tr from-green-500 via-green-600 to-green-800 hover:from-green-900 hover:via-green-600 hover:to-green-900 text-white"
                >
                  Place bid
                </CardItem>
              </CardBody>
            </CardContainer>
          </SwiperSlide>
          <SwiperSlide>
            <CardContainer>
              <CardBody className="relative group/card flex items-center flex-col hover:shadow-2xl hover:shadow-emerald-500/[0.1] bg-[#1E1E1E] border-white/[0.2]  w-auto h-auto rounded-xl p-6 border">
                <CardItem translateZ="100" className="w-full">
                  <img
                    src="/images/slide-1.png"
                    height="1000"
                    width="1000"
                    className="h-80 w-full object-contain rounded-xl group-hover/card:shadow-xl"
                    alt="thumbnail"
                  />
                </CardItem>
                <CardItem
                  translateZ="50"
                  className="text-xl mt-4 font-bold text-white"
                >
                  Dayco serpentine Meme
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-sm max-w-sm mt-2 text-neutral-300"
                >
                  <div className="flex space-x-2 items-center">
                    <svg
                      width="15"
                      height="14"
                      viewBox="0 0 15 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_145_6075)">
                        <path
                          d="M3.20117 7.13095L7.49904 0L11.7954 7.13095L7.49927 9.67017L3.20117 7.13095Z"
                          fill="white"
                        />
                        <path
                          d="M3.20117 7.94531L7.49904 10.4844L11.7988 7.94531L7.49927 14.0001L3.20117 7.94531Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_145_6075">
                          <rect
                            width="14"
                            height="14"
                            fill="white"
                            transform="translate(0.5)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                    <span>0.34</span>
                  </div>
                </CardItem>
                <CardItem
                  translateZ={20}
                  as="button"
                  className="mt-4 text-sm font-medium leading-6 px-6 py-3 rounded-full bg-gradient-to-tr from-green-500 via-green-600 to-green-800 hover:from-green-900 hover:via-green-600 hover:to-green-900 text-white"
                >
                  Place bid
                </CardItem>
              </CardBody>
            </CardContainer>
          </SwiperSlide>
          <SwiperSlide>
            <CardContainer>
              <CardBody className="relative group/card flex items-center flex-col hover:shadow-2xl hover:shadow-emerald-500/[0.1] bg-[#1E1E1E] border-white/[0.2]  w-auto h-auto rounded-xl p-6 border">
                <CardItem translateZ="100" className="w-full">
                  <img
                    src="/images/slide-1.png"
                    height="1000"
                    width="1000"
                    className="h-80 w-full object-contain rounded-xl group-hover/card:shadow-xl"
                    alt="thumbnail"
                  />
                </CardItem>
                <CardItem
                  translateZ="50"
                  className="text-xl mt-4 font-bold text-white"
                >
                  Dayco serpentine Meme
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-sm max-w-sm mt-2 text-neutral-300"
                >
                  <div className="flex space-x-2 items-center">
                    <svg
                      width="15"
                      height="14"
                      viewBox="0 0 15 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_145_6075)">
                        <path
                          d="M3.20117 7.13095L7.49904 0L11.7954 7.13095L7.49927 9.67017L3.20117 7.13095Z"
                          fill="white"
                        />
                        <path
                          d="M3.20117 7.94531L7.49904 10.4844L11.7988 7.94531L7.49927 14.0001L3.20117 7.94531Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_145_6075">
                          <rect
                            width="14"
                            height="14"
                            fill="white"
                            transform="translate(0.5)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                    <span>0.34</span>
                  </div>
                </CardItem>
                <CardItem
                  translateZ={20}
                  as="button"
                  className="mt-4 text-sm font-medium leading-6 px-6 py-3 rounded-full bg-gradient-to-tr from-green-500 via-green-600 to-green-800 hover:from-green-900 hover:via-green-600 hover:to-green-900 text-white"
                >
                  Place bid
                </CardItem>
              </CardBody>
            </CardContainer>
          </SwiperSlide>
          <SwiperSlide>
            <CardContainer>
              <CardBody className="relative group/card flex items-center flex-col hover:shadow-2xl hover:shadow-emerald-500/[0.1] bg-[#1E1E1E] border-white/[0.2]  w-auto h-auto rounded-xl p-6 border">
                <CardItem translateZ="100" className="w-full">
                  <img
                    src="/images/slide-1.png"
                    height="1000"
                    width="1000"
                    className="h-80 w-full object-contain rounded-xl group-hover/card:shadow-xl"
                    alt="thumbnail"
                  />
                </CardItem>
                <CardItem
                  translateZ="50"
                  className="text-xl mt-4 font-bold text-white"
                >
                  Dayco serpentine Meme
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-sm max-w-sm mt-2 text-neutral-300"
                >
                  <div className="flex space-x-2 items-center">
                    <svg
                      width="15"
                      height="14"
                      viewBox="0 0 15 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_145_6075)">
                        <path
                          d="M3.20117 7.13095L7.49904 0L11.7954 7.13095L7.49927 9.67017L3.20117 7.13095Z"
                          fill="white"
                        />
                        <path
                          d="M3.20117 7.94531L7.49904 10.4844L11.7988 7.94531L7.49927 14.0001L3.20117 7.94531Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_145_6075">
                          <rect
                            width="14"
                            height="14"
                            fill="white"
                            transform="translate(0.5)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                    <span>0.34</span>
                  </div>
                </CardItem>
                <CardItem
                  translateZ={20}
                  as="button"
                  className="mt-4 text-sm font-medium leading-6 px-6 py-3 rounded-full bg-gradient-to-tr from-green-500 via-green-600 to-green-800 hover:from-green-900 hover:via-green-600 hover:to-green-900 text-white"
                >
                  Place bid
                </CardItem>
              </CardBody>
            </CardContainer>
          </SwiperSlide>
          <SwiperSlide>
            <CardContainer>
              <CardBody className="relative group/card flex items-center flex-col hover:shadow-2xl hover:shadow-emerald-500/[0.1] bg-[#1E1E1E] border-white/[0.2]  w-auto h-auto rounded-xl p-6 border">
                <CardItem translateZ="100" className="w-full">
                  <img
                    src="/images/slide-1.png"
                    height="1000"
                    width="1000"
                    className="h-80 w-full object-contain rounded-xl group-hover/card:shadow-xl"
                    alt="thumbnail"
                  />
                </CardItem>
                <CardItem
                  translateZ="50"
                  className="text-xl mt-4 font-bold text-white"
                >
                  Dayco serpentine Meme
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-sm max-w-sm mt-2 text-neutral-300"
                >
                  <div className="flex space-x-2 items-center">
                    <svg
                      width="15"
                      height="14"
                      viewBox="0 0 15 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_145_6075)">
                        <path
                          d="M3.20117 7.13095L7.49904 0L11.7954 7.13095L7.49927 9.67017L3.20117 7.13095Z"
                          fill="white"
                        />
                        <path
                          d="M3.20117 7.94531L7.49904 10.4844L11.7988 7.94531L7.49927 14.0001L3.20117 7.94531Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_145_6075">
                          <rect
                            width="14"
                            height="14"
                            fill="white"
                            transform="translate(0.5)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                    <span>0.34</span>
                  </div>
                </CardItem>
                <CardItem
                  translateZ={20}
                  as="button"
                  className="mt-4 text-sm font-medium leading-6 px-6 py-3 rounded-full bg-gradient-to-tr from-green-500 via-green-600 to-green-800 hover:from-green-900 hover:via-green-600 hover:to-green-900 text-white"
                >
                  Place bid
                </CardItem>
              </CardBody>
            </CardContainer>
          </SwiperSlide>
          <SwiperSlide>
            <CardContainer>
              <CardBody className="relative group/card flex items-center flex-col hover:shadow-2xl hover:shadow-emerald-500/[0.1] bg-[#1E1E1E] border-white/[0.2]  w-auto h-auto rounded-xl p-6 border">
                <CardItem translateZ="100" className="w-full">
                  <img
                    src="/images/slide-1.png"
                    height="1000"
                    width="1000"
                    className="h-80 w-full object-contain rounded-xl group-hover/card:shadow-xl"
                    alt="thumbnail"
                  />
                </CardItem>
                <CardItem
                  translateZ="50"
                  className="text-xl mt-4 font-bold text-white"
                >
                  Dayco serpentine Meme
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-sm max-w-sm mt-2 text-neutral-300"
                >
                  <div className="flex space-x-2 items-center">
                    <svg
                      width="15"
                      height="14"
                      viewBox="0 0 15 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_145_6075)">
                        <path
                          d="M3.20117 7.13095L7.49904 0L11.7954 7.13095L7.49927 9.67017L3.20117 7.13095Z"
                          fill="white"
                        />
                        <path
                          d="M3.20117 7.94531L7.49904 10.4844L11.7988 7.94531L7.49927 14.0001L3.20117 7.94531Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_145_6075">
                          <rect
                            width="14"
                            height="14"
                            fill="white"
                            transform="translate(0.5)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                    <span>0.34</span>
                  </div>
                </CardItem>
                <CardItem
                  translateZ={20}
                  as="button"
                  className="mt-4 text-sm font-medium leading-6 px-6 py-3 rounded-full bg-gradient-to-tr from-green-500 via-green-600 to-green-800 hover:from-green-900 hover:via-green-600 hover:to-green-900 text-white"
                >
                  Place bid
                </CardItem>
              </CardBody>
            </CardContainer>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
