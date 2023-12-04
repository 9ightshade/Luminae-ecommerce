import stunningwomanimage from "../../assets/images/stunning-barefooted-woman-trendy-fur-coat.png";
import clock from "../../assets/frm/Clock.svg"
import comment from "../../assets/frm/Comment.svg";
import heart from "../../assets/frm/Heart.svg";
import arrowIcon from "../../assets/frm/arrowIcon.svg";

export const BlogHero = () => {
  return (
    <div
      style={{ backgroundImage: `url(${stunningwomanimage})` }}
      className=" h-[700] bg-no-repeat bg-cover text-white py-[20px] px-[15px]  "
    >
      <div className=" w-[256px] " >
        <h2 className=" text-[22px]  ">Stunning barefooted woman of 2023</h2>
        <p>
          In the heart of a chic urban studio, the atmosphere buzzed with
          excitement as a trendy fur coat took center stage during a vibrant
          photoshoot.
        </p>
        <div className="flex align-middle justify-between">
          <div className="flex align-middle">
            <img src={clock} alt="" className="mr-[8px]" />
            <p>20 July 2023</p>
          </div>
          <div className="flex align-middle">
            <img src={heart} alt="" className="mr-[8px]" />
            <p>830</p>
          </div>
          <div className="flex align-middle">
            <img src={comment} alt="" className="mr-[8px]" />
            <p>19</p>
          </div>
        </div>

        <button className="border-[1px] border-slate-200 rounded-[6px] p-[10px] ">
          <a href="#" className="flex align-middle">
            <p className="mr-[10px] ">Read more</p>{" "}
            <img src={arrowIcon} alt="" />
          </a>
        </button>
      </div>
    </div>
  );
};
