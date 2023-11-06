import instagram from "../../assets/frm/instagram.svg";
import facebook from "../../assets/frm/FB.svg";
import telegram from "../../assets/frm/telegram.svg";

export const Nav = () => {
    return (
        <div className="hidden md:flex p-[20]  justify-between w-4/5 mx-auto  ">
            <div className="flex w-1/2 justify-between ">
                <a href="" className="">
                    About Us
                </a>
                <a href="">Blog</a>
                <a href="">Contact Us</a>
                <a href="">Help & Support</a>
            </div>
            <div className=" flex justify-end  w-1/2 ">
                <img src={instagram} className="mr-3" alt="facebook" />
                <img src={facebook} alt="instagram" className="mr-3" />
                <img src={telegram} alt="telegram" />
            </div>
        </div>
    );
};
