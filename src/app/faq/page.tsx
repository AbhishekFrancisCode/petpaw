export default function Faq() {
  return (
    <div className="lg:container lg:mx-auto lg:py-16 md:py-12 md:px-6 py-12 px-4">
      <h1 className="text-center dark:text-black lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800 font-semibold">
        FAQ's
      </h1>

      <div className="lg:w-8/12 w-full mx-auto">
        <hr className="w-full lg:mt-10 md:mt-12 md:mb-8 my-8" />

        <div className="w-full md:px-6">
          <div id="mainHeading" className="flex justify-between items-center w-full">
            <div className="">
              <p className="flex justify-center items-center dark:text-white font-medium text-base leading-6 md:leading-4 text-gray-800">
                <span className="lg:mr-6 mr-4 dark:tzext-white lg:text-2xl md:text-xl text-lg leading-6 md:leading-5 lg:leading-4 font-semibold text-gray-800">
                  Q1.
                </span>{" "}
                How do i know if a product is available in boutiques?
              </p>
            </div>
            <button
              aria-label="toggler"
              className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
              data-menu
            >
              <img
                className="transform dark:hidden "
                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/faq-8-svg2.svg"
                alt="toggler"
              />
              <img
                className="transform dark:block hidden "
                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/faq-8-svg2dark.svg"
                alt="toggler"
              />
            </button>
          </div>
          <div id="menu" className="hidden mt-6 w-full">
            <p className="text-base leading-6 text-gray-600 dark:text-gray-300 font-normal">
              Remember you can query the status of your orders any time in My orders in the My
              account section. if you are not resigered at Mango.com, you can access dierectly in
              the Orders section. In this cause, you will have enter your e-mail address and order
              number.
            </p>
          </div>
        </div>

        <hr className="w-full lg:mt-10 my-8" />

        <div className="w-full md:px-6">
          <div id="mainHeading" className="flex justify-between items-center w-full">
            <div className="">
              <p className="flex justify-center items-center dark:text-white font-medium text-base leading-6 lg:leading-4 text-gray-800">
                <span className="lg:mr-6 dark:text-white mr-4 lg:text-2xl md:text-xl text-lg leading-6 md:leading-5 lg:leading-4 font-semibold text-gray-800">
                  Q2.
                </span>{" "}
                How can i find the prices or get other information about chanel products?
              </p>
            </div>
            <button
              aria-label="toggler"
              className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
              data-menu
            >
              <img
                className="transform dark:hidden "
                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/faq-8-svg2.svg"
                alt="toggler"
              />
              <img
                className="transform dark:block hidden "
                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/faq-8-svg2dark.svg"
                alt="toggler"
              />
            </button>
          </div>
          <div id="menu" className="hidden mt-6 w-full">
            <p className="text-base leading-6 text-gray-600 dark:text-gray-300 font-normal">
              Remember you can query the status of your orders any time in My orders in the My
              account section. if you are not resigered at Mango.com, you can access dierectly in
              the Orders section. In this cause, you will have enter your e-mail address and order
              number.
            </p>
          </div>
        </div>

        <hr className="w-full lg:mt-10 my-8" />
      </div>
    </div>
  );
}
