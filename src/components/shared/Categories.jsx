import { useState } from "react";
import x from "../../assets/frm/remove.svg";
import { Subcategories } from "./Categories/Sub-categories";
export const Categories = ({ mobileNavDisplay, setmobileNavDisplay }) => {
    const [categoryToogle, setcategoryToogle] = useState(false);

    return (
        <div>
            <div className="p-6 flex md:hidden">
                <img
                    src={x}
                    alt=""
                    onClick={() => {
                        setmobileNavDisplay(!mobileNavDisplay);
                    }}
                />
                <h3 className=" ml-28 font-bold text-lg md:hidden">Menu</h3>
            </div>

            <ul className="md:flex justify-around bg-slate-50 p-[10px] ">
                <li
                    onClick={() => {
                        setcategoryToogle(!categoryToogle);
                    }}
                    className="hover:text-yellow-600 font-semibold my-[12px] "
                >
                    Woman
                </li>
                {categoryToogle ? (<Subcategories/>
                ) : null}

                <li className="hover:text-yellow-600  font-semibold my-[12px] ">Male</li>
                <li className="hover:text-yellow-600  font-semibold my-[12px] ">
                    Mother-child
                </li>
                <li className="hover:text-yellow-600  font-semibold my-[12px]  ">
                    Home & Furniture
                </li>
                <li className="hover:text-yellow-600  font-semibold my-[12px] ">
                    Supermarket
                </li>
                <li className="hover:text-yellow-600  font-semibold my-[12px]  ">
                    Cosmetics
                </li>
                <li className="hover:text-yellow-600  font-semibold my-[12px] ">
                    Shoe & Bag
                </li>
                <li className="hover:text-yellow-600  font-semibold my-[12px] ">
                    Electronics
                </li>
                <li className="hover:text-yellow-600  font-semibold my-[12px] ">
                    Sports & Outdoor
                </li>
                <li className="hover:text-yellow-600  font-semibold my-[12px] ">
                    Best seller
                </li>
            </ul>

            <div className="md:hidden my-5 text-black font-bold ">
                <p>Login/Register</p>
                <p>Help & Support</p>
                <p>About Us</p>
                <p>Blog</p>
            </div>
        </div>
    );
};
