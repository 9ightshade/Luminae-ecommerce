import facebook from "../../assets/Icon/Facebook.png";
import Instagram from "../../assets/Icon/Instagram.png";
import Twitter from "../../assets/Icon/Twitter.png";


export const MediaLinks = () => {
  return (
    <div className=" bg-slate-200 flex justify-between gap-[11px] ">
      <img src={facebook} alt="" />
      <img src={Instagram} alt="" />
      <img src={Twitter} alt="" />
    </div>
  );
};
