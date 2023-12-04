import logo from "../../assets/frm/Logo.svg";

export const Logo = ({ text }) => {
    console.log(text);
  return (
    <div className=" flex items-center ">
      <img className="mr-3" src={logo} alt="logo" />
          <p>{text}</p>
    </div>
  );
};
