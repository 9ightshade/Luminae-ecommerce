import instagram from "../../assets/frm/instagram.svg";
import facebook from "../../assets/frm/FB.svg";
import telegram from "../../assets/frm/telegram.svg";



export const Nav = () => {
    return (
        <div class="hidden md:flex   justify-between w-4/5 mx-auto  ">
            <div class="flex w-1/2 justify-between ">
                <a href="" class="">
                    About Us
                </a>
                <a href="">Blog</a>
                <a href="">Contact Us</a>
                <a href="">Help & Support</a>
            </div>
            <div class=" flex justify-end  w-1/2 ">
                <img src={instagram} class="mr-3" alt="facebook" />
                <img src={facebook} alt="instagram" class="mr-3" />
                <img src={telegram} alt="telegram" />
            </div>
        </div>
    );
};
