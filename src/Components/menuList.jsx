import {SlOptions} from "react-icons/sl";
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useEffect, useState } from 'react'

export default function MenuList() {
    const [isOpen, setIsOpen] = useState(false)

    const [width, setWidth] = useState(window.innerWidth);
    const breakpoint = 700;

    useEffect(() => {
        const handleResizeWindow = () => setWidth(window.innerWidth);
        // subscribe to window resize event "onComponentDidMount"
        window.addEventListener("resize", handleResizeWindow);
        return () => {
          // unsubscribe "onComponentDestroy"
          window.removeEventListener("resize", handleResizeWindow);
        };
    }, []);

      function closeModal() {
        setIsOpen(false)
      }
    
      function openModal() {
        setIsOpen(true)
      }

    return(
    <>
        <div className="">
            <button
            type="button"
            onClick={openModal}
            className=""
            >
                <SlOptions />
            </button>
        </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-20 " onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                {
                  width > breakpoint ?
                  <Dialog.Panel className="w-full h-[161px] max-w-[354px] text-[12px]  transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all">
                      <ul className="">
                          <li className="border-b-2 p-[16px]">
                              <p className="font-bold text-[12px]">
                                  Ganti latar belakang
                              </p>
                          </li>
                          <li className="border-b-2 p-[16px]">
                              <p className="font-bold text-[12px]">
                                  Ganti jenis huruf
                              </p>
                          </li>
                          <li className="border-b-2 p-[16px]">
                              <p className="font-bold text-[12px]">
                                  Hapus otomatis obrolan
                              </p>
                          </li>
                      </ul>
                  </Dialog.Panel>
                  :
                  <Dialog.Panel className="w-full h-[161px] max-w-screen text-[12px]  transform overflow-hidden rounded-t-2xl bg-white text-left align-middle shadow-xl transition-all fixed bottom-0">
                      <ul className="">
                          <li className="border-b-2 p-[16px]">
                              <p className="font-bold text-[16px]">
                                  Ganti latar belakang
                              </p>
                          </li>
                          <li className="border-b-2 p-[16px]">
                              <p className="font-bold text-[16px]">
                                  Ganti jenis huruf
                              </p>
                          </li>
                          <li className="border-b-2 p-[16px]">
                              <p className="font-bold text-[16px]">
                                  Hapus otomatis obrolan
                              </p>
                          </li>
                      </ul>
                  </Dialog.Panel>

                }
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
    )
};
