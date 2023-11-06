import paypal from "../../assets/frm/Paypal.png";
import visa from "../../assets/frm/Visa.png";
import mastercard from "../../assets/frm/Mastercard.png";
import instagram from "../../assets/frm/instagram.svg";
import facebook from "../../assets/frm/FB.svg";
import telegram from "../../assets/frm/telegram.svg";
import { LanguageComponent } from "./LanguageComponent";

export const Footer = () => {
    return (
        <div className="bg-blue-300 ">
            <div className="lg:flex lg:items-center pb-5">
                <div className="flex justify-around px-8 font-medium md:w-1/2 mx-auto ">
                    <div className=" w-1/2  ">
                        <p className="font-bold">Company</p>
                        <ul>
                            <li>About Us</li>
                            <li>Our Store</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>

                    <div className=" w-1/2  ">
                        <p className="font-bold">
                            Career <br /> Opportunities
                        </p>
                        <ul>
                            <li>Selling Programs</li>
                            <li>Advertise</li>
                            <li>Cooperation</li>
                        </ul>
                    </div>
                </div>

                <div className="flex justify-around px-8 py-3 font-medium md:w-1/2 mx-auto ">
                    <div className=" w-1/2  ">
                        <p className="font-bold  ">How To Buy</p>
                        <ul>
                            <li>Making Payments</li>
                            <li>Delivery Optionas</li>
                            <li>Buyer Production</li>
                            <li>New User Guide</li>
                        </ul>
                    </div>

                    <div className=" w-1/2  ">
                        <p className="font-bold">Help</p>
                        <ul>
                            <li>Contact Us</li>
                            <li>FAQ</li>
                            <li>Privacy Policy</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const PaymentLink = () => {
    return (
        <div>
            <div className="flex justify-around">
                <div className="flex  py-5">
                    <img src={visa} alt="visa" className="mx-3" />
                    <img src={mastercard} alt="mastercard" className="mx-3" />
                    <img src={paypal} alt="paypal" className="mx-3" />
                </div>

                <LanguageComponent
                    tailwindStyles={"bg-white hidden md:block "}
                />
            </div>

            <hr className="h-px w-4/5 mx-auto bg-black hidden md:block" />

            <div className=" justify-around hidden md:flex text-sm py-3  ">
                <p className="">
                    <strong>
                        165-179 forster Road City of Moriah, Melbourne,
                        Australia
                    </strong>
                </p>

                <p>&copy;2023 Copyright in reserved for Luminae shop</p>

                <div className="flex justify-around ">
                    <img src={instagram} className="mr-3" alt="instagram" />
                    <img src={facebook} alt="facebook" />
                    <img className="ml-3" src={telegram} alt="telegram" />
                </div>
            </div>
        </div>
    );
};
