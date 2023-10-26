import menue from "../../../public/frm/Menue icon.svg";
import card from "../../../public/frm/Card.svg";
import logo from "../../../public/frm/Logo.svg";

export const TopMenuMobile = () => {
    return (
        <div class="flex justify-between p-5 ">
            <div class=" md:hidden">
                <img src={menue} alt="menu" />
            </div>
            <div class=" flex items-center ">
                <img class="mr-3" src={logo} alt="logo" />

                <p>Luminae</p>
            </div>
            <div class=" flex md:hidden">
                <img src={card} alt="cart" />

                <div class="bg-green-400 text-white rounded-full w-6 h-6 flex justify-center items-center  ">
                    <p>3</p>
                </div>
            </div>
        </div>
    );
};
