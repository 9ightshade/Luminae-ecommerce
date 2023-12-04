import logo from "../../assets/frm/Logo.svg";
import { CartComponent } from "./Cart";
import { MenuToogle } from "./menuToogle";

export const TopMenu = ({ mobileNavDisplay, setmobileNavDisplay }) => {
  return (
    <div className="flex justify-between p-5 ">
      <MenuToogle
        mobileNavDisplay={mobileNavDisplay}
        setmobileNavDisplay={setmobileNavDisplay}
      />

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
