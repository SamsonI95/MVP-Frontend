//App
import React, { useState } from "react";
import axios from "axios";

//Component(s)
import LandingCardComp from "../Card Component/LandingCardComp";
import LandingCardComp2 from "../Card Component/LandingCardComp2";
import { ScaleLoader } from "react-spinners"; // loading animantion component used for buttons

//Data(s)
import landingCardCompData from "../../Data/landingCardCompData.json";
import landingCardCompData2 from "../../Data/landingCardCompData2.json";

// Footer
import Footer from "../Page Components/Footer";

//Image(s)
import LandingImageOneM from "../../../public/CardComponentImages/LandingImageOneM.png";
import LandingImageTwoM from "../../../public/CardComponentImages/LandingImageTwoM.png";
import LandingImageOneL from "../../../public/CardComponentImages/LandingImageOneL.png";
import LandingImageTwoL from "../../../public/CardComponentImages/LandingImageTwoL.png";
import checkCircle from "../../../public/svg/checkCircle.svg";
import exclamation from "../../../public/svg/exclamation.svg";
import exclamationCircle from "../../../public/svg/exclamationCircle.svg";
import BitcoinStartup from "../../../public/svg/BitcoinStartup.svg";

const Landing = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const [popupType, setPopupType] = useState("");

  // Email validation function
  const isValidEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  // waitlist submission code
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isValidEmail(email)) {
      setPopupMessage("Invalid email address");
      setPopupType("error");
      setShowPopup(true);
      return;
    }

    setIsLoading(true);

    const data = {
      email: email,
    };

    const config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://mvp-backend-bzvi.onrender.com/v1/api/waitlist",
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify(data),
    };

    try {
      const response = await axios(config);
      if (response.data.success) {
        setPopupMessage("Thanks for joining! You’re now on our waitlist.");
        setPopupType("success");
      } else {
        setPopupMessage(response.data.message);
        setPopupType("error");
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setPopupMessage("It looks like you’re already joined our waitlist.");
        setPopupType("info");
      } else if (error.response && error.response.status === 500) {
        setPopupMessage(error.response.data.message);
        setPopupType("error");
      } else {
        setPopupMessage("An error occurred. Please try again.");
        setPopupType("error");
      }
    } finally {
      setIsLoading(false);
      setShowPopup(true);
    }
  };

  const closePopup = () => {
    setShowPopup(false);
    setEmail(""); // Clear the email input
  };

  //Pop-up Icon
  const getPopupIcon = () => {
    switch (popupType) {
      case "success":
        return <img src={checkCircle} alt="Success Icon" />;
      case "error":
        return <img src={exclamationCircle} alt="Error Icon" />;
      case "info":
        return <img src={exclamation} alt="Info Icon" />;
      default:
        return null;
    }
  };

  //Changing background color of pop-up message
  const getPopupBackgroundColor = () => {
    switch (popupType) {
      case "success":
        return "bg-[#23AE5E]";
      case "error":
        return "bg-[#ED2F2F]";
      case "info":
        return "bg-[#EDB82F]";
      default:
        return "bg-white";
    }
  };

  return (
    <>
      <div>
        <section>
          <h3 className="font-bold sm:text-[36px] md:text-[60px] lg:text-[60px] sm:w-[355px] md:w-[722px] sm:mt-[99px] md:mt-[81px] lg:mt-[80px] mx-auto text-center">
            Simplifying Payroll for Crypto Projects
          </h3>
          <h4 className="sm:text-[16px] md:text-[18px] sm:w-[355px] md:w-[555px] text-textSecondary text-center mx-auto mt-[24px]">
            Effortlessly manage payroll with seamless crypto payments and easy
            fiat conversions.
          </h4>
          <div className="mt-[40px] flex sm:flex-col md:flex-row items-center justify-center md:space-y-0 ">
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address"
              className="border border-transparent text-landingInputText bg-landingInput focus:outline-none rounded-xl sm:w-[355px] md:w-[350px] h-[56px] px-[16px]"
            />
            <button
              className="text-white bg-buttonPrimary rounded-[8px] sm:mt-[12px] sm:w-[355px] md:w-[148px] md:ml-[12px] lg:ml-[12px] h-[56px] shadow-customInset hover:bg-buttonPrimaryHover"
              type="submit"
              onClick={handleSubmit}
            >
              {isLoading ? (
                <ScaleLoader
                  color="#fff"
                  height={15}
                  className="translate-y-[3px]"
                />
              ) : (
                "Get Early Access"
              )}
            </button>

            {showPopup && (
              <div className="fixed inset-0 bg-black bg-opacity-50 z-10 flex items-center justify-center">
                <div
                  className={`flex items-center justify-between lg:space-x-2 p-6 lg:py-[16px] lg:px-[20px] rounded-lg shadow-lg relative text-white ${getPopupBackgroundColor()}`}
                >
                  <span>{getPopupIcon()}</span>
                  <p>{popupMessage}</p>
                  <button
                    className="font-semibold text-lg"
                    onClick={closePopup}
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="close-fill">
                        <path
                          id="Vector"
                          d="M11.6471 10.9401L12.0007 11.2936L12.3543 10.94L16.9504 6.34383L17.6575 7.05093L13.0613 11.6471L12.7078 12.0007L13.0613 12.3543L17.6575 16.9504L16.9504 17.6575L12.3543 13.0613L12.0007 12.7078L11.6471 13.0613L7.05093 17.6575L6.34383 16.9504L10.94 12.3543L11.2936 12.0007L10.9401 11.6471L6.34383 7.05093L7.05093 6.34383L11.6471 10.9401Z"
                          fill="#FDFDFE"
                          stroke="#FDFDFE"
                        />
                      </g>
                    </svg>
                  </button>
                </div>
              </div>
            )}
          </div>
          <div className="flex items-center justify-center md:space-x-6 lg:space-x-8 md:mt-[64px] lg:mt-[80px]">
            <img
              src={LandingImageOneM}
              alt="LandingImageOne"
              className="sm:hidden md:block lg:hidden"
            />
            <img
              src={LandingImageTwoM}
              alt="LandingImageTwo"
              className="sm:hidden md:block lg:hidden"
            />
            <img
              src={LandingImageOneL}
              alt="LandingImageOne"
              className="sm:hidden md:hidden lg:block"
            />
            <img
              src={LandingImageTwoL}
              alt="LandingImageTwo"
              className="sm:hidden md:hidden lg:block"
            />
          </div>
        </section>
        <section className="flex items-center justify-center space-x-4 sm:mt-[79.38px] md:mt-[64px] lg:mt-[72px]">
          <span className="text-lg font-semibold">Backed by</span>
          <img src={BitcoinStartup} alt="bitcoin startup" />
        </section>
        <section className="flex flex-col items-center justify-center sm:mt-[123px] md:my-[64px] lg:my-[80px]">
          <h3 className="font-bold sm:text-[36px] md:text-[52px] sm:w-[335px] md:w-[613px] text-center">
            Unlock the Future of Payroll
          </h3>
          <p className="text-textSecondary text-lg text-center sm:w-[335px] md:w-[708px]">
            Coinomad streamlines payroll management for crypto projects,
            offering seamless payments, effortless fiat conversions, and a
            user-friendly platform designed to benefit founders, hiring
            managers, employees, and freelancers
          </p>
        </section>
        <section className="flex flex-col items-center justify-center">
          {landingCardCompData.map((data, index) => (
            <LandingCardComp
              key={index}
              image1={data.image1}
              image2={data.image2}
              image3={data.image3}
              title={data.title}
              use={data.use}
              description={data.description}
              list={data.list}
              reverse={index % 2 !== 0}
              index={index}
            />
          ))}
        </section>
        <section className="container sm:py-[40px] md:py-[64px] lg:py-[80px]">
          <h3 className="sm:text-[44px] md:text-[52px] sm:pb-[40px] md:pb-[64px] lg:pb-[80px] font-bold text-center">
            Features
          </h3>
          <div className="sm:flex sm:flex-col md:flex md:flex-col sm:items-center md:items-center">
            <div className="sm:hidden md:hidden lg:flex flex-col">
              <div className="flex items-center justify-center space-x-[32px] mb-[32px]">
                <section className="border border-transparent bg-[#F7F7F7] p-[40px] w-[495px] rounded-2xl">
                  <img src="/svg/Frame 27.svg" alt="icon" />
                  <h2 className="lg:text-xl lg:w-fit font-bold mt-[16px] mb-[11px]">
                    Fiat Conversion
                  </h2>
                  <p className="lg:text-lg lg:w-fit text-textSecondary">
                    Easily convert crypto payments to fiat (NGN, USD, EUR, etc.)
                    using the platform's transparent rates and low fees.
                  </p>
                </section>
                <section className="border border-transparent bg-[#F7F7F7] p-[40px] w-[630px] rounded-2xl">
                  <img src="/svg/Frame 27.svg" alt="icon" />
                  <h2 className="lg:text-xl lg:w-fit font-bold mt-[16px] mb-[11px]">
                    Seamless Crypto Payments
                  </h2>
                  <p className="lg:text-lg lg:w-fit text-textSecondary">
                    Manage payroll using stablecoins and cryptocurrencies for
                    employees and freelancers with timely compensation,
                    scheduling, and automation
                  </p>
                </section>
              </div>
              <div className="flex items-center justify-center space-x-[32px]">
                <section className="border border-transparent bg-[#F7F7F7] p-[40px] w-[630px] rounded-2xl">
                  <img src="/svg/Frame 28.svg" alt="icon" />
                  <h2 className="lg:text-xl lg:w-fit font-bold mt-[16px] mb-[8px]">
                    User-Friendly Dashboard
                  </h2>
                  <p className="lg:text-lg lg:w-fit text-textSecondary">
                    An intuitive interface for employers and employees that
                    allows for real-time payment and conversion tracking, as
                    well as detailed reports and analytics.
                  </p>
                </section>
                <section className="border border-transparent bg-[#F7F7F7] p-[40px] w-[495px] rounded-2xl">
                  <img src="/svg/Frame 29.svg" alt="icon" />
                  <h2 className="lg:text-xl lg:w-fit font-bold mt-[16px] mb-[8px]">
                    Global reach
                  </h2>
                  <p className="lg:text-lg lg:w-fit text-textSecondary">
                    Support for various cryptocurrencies and fiat currencies.
                    Eliminating cross-border payment complexities
                  </p>
                </section>
              </div>
            </div>
            {landingCardCompData2.map((data, index) => (
              <LandingCardComp2
                key={index}
                icon={data.icon}
                title={data.title}
                content={data.content}
                width={data.width}
                index={index}
              />
            ))}
          </div>
        </section>
        <section className="flex flex-col items-center justify-center sm:py-[40px] md:py-[64px] lg:py-[80px]">
          <h3 className="sm:text-[32px] md:text-[60px] font-bold sm:w-[333px] md:w-[722px] text-center">
            Ready to Simplify Your Crypto Payroll
          </h3>
          <p className="mt-[24px] mb-[40px] sm:text-[16px] md:text-[18px] text-textSecondary sm:w-[333px] md:w-[555px] text-center">
            Join our waitlist today and be the first to experience hassle-free
            crypto payroll management with Coinomad.
          </p>
          <div className="mt-[40px] flex sm:flex-col md:flex-row items-center justify-center sm:space-y-3 md:space-y-0 md:space-x-3">
            <input
              type="email"
              name="email"
              id="email1"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address"
              className="border border-transparent text-landingInputText bg-landingInput focus:outline-none rounded-xl sm:w-[355px] md:w-[350px] h-[56px] px-[16px]"
            />
            <button
              className="text-white bg-buttonPrimary rounded-[8px] sm:w-[355px] md:w-[173px] h-[56px] shadow-customInset hover:bg-buttonPrimaryHover"
              type="submit"
              onClick={handleSubmit}
            >
              {isLoading ? (
                <ScaleLoader
                  color="#fff"
                  height={15}
                  className="translate-y-[3px]"
                />
              ) : (
                "Get Early Access"
              )}
            </button>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default Landing;
