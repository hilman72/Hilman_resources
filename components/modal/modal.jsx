import { useState } from "react";
import styles from "./modal.module.scss";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";

SwiperCore.use([Navigation]);

const InModal = (props) => {
  let photo = props.data.photo;
  let git = props.data.git;
  return (
    <div className="w-full h-full font-mono bg-gray-800 rounded-xl">
      <div className="bg-red-400 rounded-t text-white lg:text-2xl flex justify-center p-1">
        <div>{props.data.name}</div>
      </div>
      <div>
        {" "}
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          navigation
          onSlideChange={() => {}}
          onSwiper={(swiper) => {}}
        >
          {photo.map((data, i) => {
            return (
              <SwiperSlide>
                <img key={i} src={data} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      <div className="bg-gray-800 rounded-b-xl text-white p-4 flex flex-col">
        <div className="lg:text-xl">{props.data.detail}</div>
        <br />
        <div className="text-gray-400 lg:text-md">
          Skills Used: {props.data.skill}
        </div>
        <div className="flex self-end mt-5">
          {git.map((data, i) => {
            return (
              <button
                key={i}
                className={`text-white px-2 py-1 rounded border-2 ml-2 ${styles.hover}`}
              >
                <Link href={data}>To Git</Link>
              </button>
            );
          })}
          {props.data.button == "disabled" ? (
            <div></div>
          ) : (
            <button
              className={`text-red-400 bg-white border-red-400 px-2 py-1 rounded border-2 ml-2 ${styles.hover2}`}
            >
              <Link href={props.data.web}>To Web</Link>
            </button>
          )}
          <button
            className={`text-white px-2 py-1 rounded border-2 ml-2 ${styles.hover}`}
            onClick={props.close}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default InModal;
