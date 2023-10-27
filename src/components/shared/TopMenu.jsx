import menue from "../../assets/frm/Menue icon.svg";
import logo from "../../assets/frm/Logo.svg";
import { CartComponent } from "./Cart";





export const TopMenu = () => {
    return (
        <div class="flex justify-between p-5 ">
            <div class=" md:hidden">
                <img src={menue} alt="menu" />
            </div>
            <div class=" flex items-center ">
                <img class="mr-3" src={logo} alt="logo" />

                <p>Luminae</p>
            </div>
            <div class="md:hidden">
                <CartComponent />
            </div>
        </div>
    );
};
