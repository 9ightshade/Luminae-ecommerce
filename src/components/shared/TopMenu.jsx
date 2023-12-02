import menue from "../../assets/frm/Menue icon.svg";
import logo from "../../assets/frm/Logo.svg";
import { CartComponent } from "./Cart";




export const TopMenu = ({ mobileNavDisplay, setmobileNavDisplay }) => {
    return (
        <div className="flex justify-between p-5 ">
            <div className=" md:hidden">
                <img
                    src={menue}
                    alt="menu"
                    onClick={() => {
                        console.log(mobileNavDisplay);
                        setmobileNavDisplay(!mobileNavDisplay);
                        console.log(mobileNavDisplay);
                    }}
                />
            </div>

            <div className=" flex items-center ">
                <img className="mr-3" src={logo} alt="logo" />
                <p>Luminae</p>
            </div>

            <div className="md:hidden">
                <CartComponent />
            </div>
        </div>
    );
};
