import { Dialog, Transition } from "@headlessui/react";
import { useState, Fragment, useRef } from "react";
import QuotationForm from "@/components/GeneralQuotationForm";

export default function QuotationDivider() {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <div className="relative h-64 md:h-52 ">
      {/* Background Image */}
      <div
        className="absolute inset-0 h-full w-full bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://t3.ftcdn.net/jpg/02/18/65/58/360_F_218655870_yaQvQxD9n4mFIUFIx082pmhP4PqC4Elt.jpg')",
        }}
      >
        {/* Black Shade Overlay */}
        <div className="absolute inset-0 h-full w-full bg-[#24aae1]/80"></div>
      </div>
      <div className="absolute h-full w-full container mx-auto px-5 py-4 md:px-20 text-white ">
        <div className="h-full w-full  flex flex-col md:flex-row justify-between items-baseline md:items-center ">
          <div className="w-full md:w-3/5">
            <h2 className="text-end md:text-start text-2xl md:text-3xl font-bold capitalize">
              Achieve Your Fitness Goals with Expert Guidance
            </h2>
            <p>
              Unlock Your Full Potential with Tailored Fitness Solutions - Take
              the Next Step and Start Your Journey to a Healthier You Today by
              requesting a quote.
            </p>
          </div>

          <div className="pt-5 w-full md:w-auto">
            <button
              onClick={openModal}
              className="w-full bg-white md:bg-transparent text-[#FDB715] md:border md:border-white text-md md:text-white hover:text-black hover:border-white hover:bg-[rgb(0,162,255)] py-4 px-8"
            >
              Request a quote
            </button>
          </div>
        </div>
      </div>{" "}
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={closeModal}>
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
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <div className="flex justify-end">
                    <button
                      type="button"
                      onClick={closeModal}
                      className="text-gray-600 hover:text-gray-900 focus:outline-none"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>

                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Enter your details and we&apos;ll reach back
                  </Dialog.Title>
                  <QuotationForm />
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}
