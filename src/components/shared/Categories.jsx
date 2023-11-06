import { useState } from "react";
import x from "../../assets/frm/remove.svg";
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

            <ul className="md:flex justify-around ">
                <li
                    onClick={() => {
                        setcategoryToogle(!categoryToogle);
                    }}
                    className="hover:text-yellow-600 font-semibold "
                >
                    Woman
                </li>
                {categoryToogle ? (
                    <div>
                        <div className="flex justify-around">
                            <div>
                                <ul className="my-4">
                                    <h3>SHOE & BAG</h3>
                                    <li>Casual Shoes</li>
                                    <li>Boots</li>
                                    <li>Sandals</li>
                                    <li>Slippers</li>
                                </ul>

                                <ul>
                                    <h3>
                                        LUXURY
                                        <br /> & DESIGNER
                                    </h3>

                                    <li>Towels</li>
                                    <li>Bathroom Scales</li>
                                    <li>Bathroom Mats</li>
                                    <li>Shower Caps</li>
                                </ul>
                            </div>

                            <div>
                                <ul className="my-4">
                                    <h3>HOME TEXTILE</h3>
                                    <li>Bedding</li>
                                    <li>Pillows</li>
                                    <li>Handkerchief Towels</li>
                                    <li>Curtain</li>
                                </ul>

                                <ul>
                                    <h3>COSMETICS</h3>
                                    <li>Shampoo and Conditioner</li>
                                    <li>Styling Products</li>
                                    <li>Hair Accesories</li>
                                    <li>Men's Grooming</li>
                                </ul>
                            </div>
                        </div>

                        <div className="flex justify-around">
                            <div>
                                <ul className="my-4">
                                    <h3>PARTY SUPPLIES</h3>
                                    <li>Event & Party</li>
                                    <li>Christmas</li>
                                    <li>Artificial Decorations</li>
                                    <li>Wedding</li>
                                </ul>

                                <ul>
                                    <h3>
                                        SPORT
                                        <br /> & OUTDOORS
                                    </h3>
                                    <li>Team Sports</li>
                                    <li>Water Sports</li>
                                    <li>Outdoor Recreation </li>
                                    <li>Fitness Equipment</li>
                                </ul>
                            </div>

                            <div>
                                <ul className="my-4">
                                    <h3>CLOTHES</h3>
                                    <li>Bottoms</li>
                                    <li>Women's Clothing</li>
                                    <li>T-shirts & Tops</li>
                                    <li>Dresses</li>
                                    <li>Outer Wear</li>
                                    <li>Formal Wear</li>
                                    <li>Casual Wear</li>
                                    <li>Seasonal Collection</li>
                                    <li>Sport Bra</li>
                                    <li>Workout Tops</li>
                                    <li>Fall Wardrobe</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                ) : null}

                <li className="hover:text-yellow-600  font-semibold ">Male</li>
                <li className="hover:text-yellow-600  font-semibold ">
                    Mother-child
                </li>
                <li className="hover:text-yellow-600  font-semibold  ">
                    Home & Furniture
                </li>
                <li className="hover:text-yellow-600  font-semibold ">
                    Supermarket
                </li>
                <li className="hover:text-yellow-600  font-semibold  ">
                    Cosmetics
                </li>
                <li className="hover:text-yellow-600  font-semibold ">
                    Shoe & Bag
                </li>
                <li className="hover:text-yellow-600  font-semibold ">
                    Electronics
                </li>
                <li className="hover:text-yellow-600  font-semibold ">
                    Sports & Outdoor
                </li>
                <li className="hover:text-yellow-600  font-semibold ">
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
