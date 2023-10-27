import searchIcon from "../../assets/Icon/Search.svg";

export const Search = () => {
    return (
        <form class=" flex justify-center  mx-auto">
            <input
                type="text"
                class=" text-white p-2 "
                placeholder="Search"
            />
            <select
                name="all-categories"
                id="all-categories"
            
            >
                <option value="">All Categories</option>
                <option value="">Women</option>
                <option value="">Men</option>
                <option value="">Mother</option>
                <option value="">Child</option>
                <option value="">Home & Furniture</option>
                <option value="">Supermarket</option>
                <option value="">Cosmetics</option>
                <option value="">Shoe & Bag</option>
                <option value="">Electronics</option>
                <option value="">Sport & Outdoor</option>
                <option value="">Best Seller</option>
            </select>
            <button class="p-2 " >
                <img src={searchIcon} alt="search-icon" />
            
            </button>
        </form>
    );
};
