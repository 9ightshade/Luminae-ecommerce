import card from "../../assets/frm/Card.svg";
export const CartComponent = () => {
    return (
        <div className=" flex">
            <img src={card} alt="cart" />
            <p className="hidden  md:block mx-2 text-white ">Cart</p>
            <div className="bg-green-400 text-white rounded-full w-6 h-6 flex justify-center items-center ">
                <p>3</p>
            </div>
        </div>
    );
};
