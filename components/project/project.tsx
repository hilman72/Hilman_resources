import styles from "./project.module.scss";
import { useState } from "react";
import Modal from "react-modal";
import InModal from "../modal/modal";
import { Canvas, M8, Ob, About } from "../../data/data";

// const customStyles = {
//   content: {
//     top: "50%",
//     left: "50%",
//     right: "auto",
//     bottom: "auto",
//     marginRight: "-50%",
//     transform: "translate(-50%, -50%)",
//   },
// };

export default function Project(): JSX.Element {
  const [mouse1, setMouse1] = useState(false);
  const [mouse2, setMouse2] = useState(false);
  const [mouse3, setMouse3] = useState(false);
  const [mouse4, setMouse4] = useState(false);

  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="p-32 min-h-screen bg-gray-200">
      <div className="grid grid-rows-5 gap-10 ">
        <div className="row-span-1 flex flex-col justify-center items-center">
          <div className={` pb-6 lg:text-7xl ${styles.header}`}>Project</div>
          <hr
            className="bg-red-400"
            style={{
              height: "0.3rem",
              width: "8rem",
            }}
          />
        </div>

        <div className="mx-20 row-span-4 grid grid-cols-2 gap-4 flex items-center justify-items-center">
          <div
            className={`w-full ${styles.box2} bg-canvas bg-cover`}
            onMouseEnter={() => setMouse1(true)}
            onMouseLeave={() => setMouse1(false)}
          >
            {mouse1 ? (
              <div
                className={`font-mono flex flex-col justify-center items-center w-full h-full bg-black bg-opacity-70 ${
                  mouse1 ? `${styles.bgSlide}` : ""
                }`}
              >
                <div className="text-white lg:text-4xl p-2">
                  The Canvas Boys
                </div>
                <hr
                  className="bg-red-400 border-red-400"
                  style={{
                    height: "0.3rem",
                    width: "8rem",
                  }}
                />
                <br />
                <div className="">
                  <button
                    onClick={openModal}
                    className={`text-white px-2 py-1 rounded border-2 ${styles.hover}`}
                  >
                    Detail
                  </button>
                  <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    className={`${styles.modalStyle}`}
                    contentLabel="Modal"
                    overlayClassName={`${styles.modalOverlay}`}
                  >
                    <InModal close={closeModal} data={Canvas} />
                  </Modal>
                </div>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div
            className={`w-full ${styles.box2} bg-m8 bg-cover`}
            onMouseEnter={() => setMouse2(true)}
            onMouseLeave={() => setMouse2(false)}
          >
            {mouse2 ? (
              <div
                className={`text-white font-mono flex flex-col justify-center items-center w-full h-full bg-black bg-opacity-70 ${
                  mouse2 ? `${styles.bgSlide}` : ""
                }`}
              >
                <div className="text-white lg:text-4xl p-2">MunchM8</div>
                <hr
                  className="bg-red-400 border-red-400"
                  style={{
                    height: "0.3rem",
                    width: "8rem",
                  }}
                />
                <br />
                <div className="">
                  <button
                    onClick={openModal}
                    className={`text-white px-2 py-1 rounded border-2 ${styles.hover}`}
                  >
                    Detail
                  </button>
                  <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    className={`${styles.modalStyle}`}
                    contentLabel="Modal"
                    overlayClassName={`${styles.modalOverlay}`}
                  >
                    <InModal close={closeModal} data={M8} />
                  </Modal>
                </div>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div
            className={`w-full ${styles.box} bg-ob bg-cover`}
            onMouseEnter={() => setMouse3(true)}
            onMouseLeave={() => setMouse3(false)}
          >
            {mouse3 ? (
              <div
                className={`text-white font-mono flex flex-col justify-center items-center w-full h-full bg-black bg-opacity-70 ${
                  mouse3 ? `${styles.bgSlide}` : ""
                }`}
              >
                <div className="text-white lg:text-4xl p-2">Only Brands</div>
                <hr
                  className="bg-red-400 border-red-400"
                  style={{
                    height: "0.3rem",
                    width: "8rem",
                  }}
                />
                <br />
                <div className="">
                  <button
                    onClick={openModal}
                    className={`text-white px-2 py-1 rounded border-2 ${styles.hover}`}
                  >
                    Detail
                  </button>
                  <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    className={`${styles.modalStyle}`}
                    contentLabel="Modal"
                    overlayClassName={`${styles.modalOverlay}`}
                  >
                    <InModal close={closeModal} data={Ob} />
                  </Modal>
                </div>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div
            className={`w-full ${styles.box} bg-about bg-cover`}
            onMouseEnter={() => setMouse4(true)}
            onMouseLeave={() => setMouse4(false)}
          >
            {mouse4 ? (
              <div
                className={`text-white font-mono flex flex-col justify-center items-center w-full h-full bg-black bg-opacity-70 ${
                  mouse4 ? `${styles.bgSlide}` : ""
                }`}
              >
                <div className="text-white lg:text-4xl p-2">
                  Human-Resources
                </div>
                <hr
                  className="bg-red-400 border-red-400"
                  style={{
                    height: "0.3rem",
                    width: "8rem",
                  }}
                />
                <br />
                <div className="">
                  <button
                    onClick={openModal}
                    className={`text-white px-2 py-1 rounded border-2 ${styles.hover}`}
                  >
                    Detail
                  </button>
                  <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    className={`${styles.modalStyle}`}
                    contentLabel="Modal"
                    overlayClassName={`${styles.modalOverlay}`}
                  >
                    <InModal close={closeModal} data={About} />
                  </Modal>
                </div>
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
