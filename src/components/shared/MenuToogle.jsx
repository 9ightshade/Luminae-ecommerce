
import menue from "../../assets/frm/Menue icon.svg";
export const MenuToogle = ({ mobileNavDisplay, setmobileNavDisplay }) => {
  return (
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
  );
};