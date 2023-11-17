import { LanguageComponent } from "./LanguageComponent";
import signIn from "../../assets/frm/Sign in.svg";
import favourites from "../../assets/frm/Favorides.svg";
import categories from "../../assets/frm/categories.svg";
import mencosmetic from "../../assets/frm/Men-cosmetic.png";
import { CartComponent } from "./Cart";

export const Header = () => {
    return (
        <div className="bg-black hidden md:block text-sm ">
            <div className="flex items-center justify-between w-4/5 text-white mx-auto">
                <div className="flex items-center ">
                    <img src={categories} alt="categories" />
                    <p>Categories</p>
                </div>

                <select name="currency" id="currency" className="bg-black ">
                    <option value="">USD</option>
                    <option value="">EURO</option>
                    <option value="">Crypto</option>
                </select>

                <div>
                    <LanguageComponent tailwindStyles={"bg-black"} />
                </div>

                <div className="hidden lg:flex items-center py-3 ">
                    <img src={mencosmetic} alt="men-cosmetics" />
                    <div>
                        <p>Weekly Men's Toiletries Coupons.</p>
                        <p className="text-gray-400">
                            We extended exclusive discounts to our male Cliente
                        </p>
                    </div>
                </div>

                <button className="flex">
                    <img src={signIn} alt="sign-in" />
                    Sign in
                </button>

                <button className="flex  ">
                    <img
                        src={favourites}
                        alt="favourites"
                        className="mr-2"
                    />
                    Favourites
                </button>

                <div className="mx-2">
                    <CartComponent />
                </div>
            </div>
        </div>
    );
};
