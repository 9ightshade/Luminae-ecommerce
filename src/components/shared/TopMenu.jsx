import { CartComponent } from "./Cart";
import { Logo } from "./logo";
import { MenuToogle } from "./menuToogle";

export const TopMenu = ({ mobileNavDisplay, setmobileNavDisplay }) => {
  return (
    <div className="flex justify-between p-5 ">
      <MenuToogle
        mobileNavDisplay={mobileNavDisplay}
        setmobileNavDisplay={setmobileNavDisplay}
      />

    <Logo text={"Luminae"} />

      <div className="md:hidden">
        <CartComponent />
      </div>
    </div>
  );
};
