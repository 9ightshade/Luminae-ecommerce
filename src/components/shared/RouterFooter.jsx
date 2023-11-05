import paypal from "../../assets/frm/Paypal.png";
import visa from "../../assets/frm/Visa.png";
import mastercard from "../../assets/frm/Mastercard.png";
import instagram from "../../assets/frm/instagram.svg";
import facebook from "../../assets/frm/FB.svg";
import telegram from "../../assets/frm/telegram.svg";
import { LanguageComponent } from "./LanguageComponent";

export const Footer = () => {
    return (
        <div class="bg-blue-300 ">
            <div class="lg:flex lg:items-center pb-5">
                <div class="flex justify-around px-8 font-medium md:w-1/2 mx-auto ">
                    <div class=" w-1/2  ">
                        <p class="font-bold">Company</p>
                        <ul>
                            <li>About Us</li>
                            <li>Our Store</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>

                    <div class=" w-1/2  ">
                        <p class="font-bold">
                            Career <br /> Opportunities
                        </p>
                        <ul>
                            <li>Selling Programs</li>
                            <li>Advertise</li>
                            <li>Cooperation</li>
                        </ul>
                    </div>
                </div>

                <div class="flex justify-around px-8 py-3 font-medium md:w-1/2 mx-auto ">
                    <div class=" w-1/2  ">
                        <p class="font-bold  ">How To Buy</p>
                        <ul>
                            <li>Making Payments</li>
                            <li>Delivery Optionas</li>
                            <li>Buyer Production</li>
                            <li>New User Guide</li>
                        </ul>
                    </div>

                    <div class=" w-1/2  ">
                        <p class="font-bold">Help</p>
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
            <div class="flex justify-around">
                <div class="flex  py-5">
                    <img src={visa} alt="visa" class="mx-3" />
                    <img src={mastercard} alt="mastercard" class="mx-3" />
                    <img src={paypal} alt="paypal" class="mx-3" />
                </div>

                <LanguageComponent
                    tailwindStyles={"bg-white hidden md:block "}
                />
            </div>

            <hr class="h-px w-4/5 mx-auto bg-black hidden md:block" />

            <div class=" justify-around hidden md:flex text-sm py-3  ">
                <p class="">
                    <strong>
                        165-179 forster Road City of Moriah, Melbourne,
                        Australia
                    </strong>
                </p>

                <p>&copy;2023 Copyright in reserved for Luminae shop</p>

                <div class="flex justify-around ">
                    <img src={instagram} class="mr-3" alt="instagram" />
                    <img src={facebook} alt="facebook" />
                    <img class="ml-3" src={telegram} alt="telegram" />
                </div>
            </div>
        </div>
    );
};
