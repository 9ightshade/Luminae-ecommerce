export const LuminaeEmailModal = () => {
    return (
        <div className="bg-teal-700 w-3/5 mx-auto rounded-md hidden md:block ">
            <p className="text-center">
                Luminae <span>Store</span>
            </p>
            <p className="text-center">
                Register your email not to miss the last minutes off + Free
                delivery
            </p>
            <div className="flex justify-center p-3  ">
                <input
                    type="email"
                    name=""
                    id="useremail"
                    placeholder="Enter your email"
                    className="rounded-md w-1/2 "
                />
            </div>
        </div>
    );
};
