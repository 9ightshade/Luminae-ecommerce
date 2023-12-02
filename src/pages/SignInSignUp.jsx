const Back = () => {
  return (
    <div className="arrow">
      <a href="">
        <img src="images/icon-left.png" alt="Image" />
        <p>Back to website</p>
      </a>
    </div>
  );
};

const SignIn = () => {
  return (
    <div style={{ width: "100% 1440px" }}>
      <div className="pl-20">
        <h3>Sign In</h3>
        <form action="">
          <label htmlFor="Email">
            Email <sup>*</sup>
          </label>{" "}
          <br />
          <input
            type="email"
            name="email"
            placeholder="email address"
            required
            className="border border-gray-300 p-2 rounded"
          />
          <br /> <br />
          <label htmlFor="Password">
            Password <sup>*</sup>
          </label>{" "}
          <br />
          <input
            type="password"
            name="password"
            placeholder="password"
            required
            className="border border-gray-300 p-2 rounded "
          />
          <br /> <br />
          <div className="flex text-sm pb-9 text-gray-600 font-lato font-normal">
            <input type="checkbox" name="" className="w-15" />
            <p>Remember for 30 days</p>
            <p>
              <a href="">Forgot password</a>
            </p>
          </div>
          <button
            type="submit"
            className="submitt"
            style={{ height: "45px", backgroundColor: "#C4C4C4" }}
          >
            SIGN IN
          </button>
          <div className="divider">
            <img src="/images/divider.png" alt="" />
          </div>
          <button
            type="submit"
            className="submitt"
            style={{ backgroundColor: "#434343", color: "white" }}
            id="btn"
          >
            {" "}
            <img src="/images/google-logo.png" alt="" id="imgs" />{" "}
            <p>Sign in by google</p>{" "}
          </button>
          <div className="warning">
            <img src="/public/images/warning.png" alt="" className="poly" />
            <h5>
              Sign up to save upto $9 for free shipping with Ausff company
              through austraillian territory
            </h5>
          </div>
        </form>
      </div>
    </div>
  );
};

const SignUp = () => {
  return (
    <div>
      <div className="box2">
        <h3>Sign Up</h3>

        <form action="">
          <label htmlFor="Name">
            Name <sup>*</sup>
          </label>{" "}
          <br />
          <input
            type="text"
            name="name"
            placeholder="Full name"
            required
            className="border border-gray-300 p-2 rounded w-87%"
          />
          <br /> <br />
          <label htmlFor="Email">
            Email <sup>*</sup>
          </label>{" "}
          <br />
          <input
            type="email"
            name="email"
            placeholder="email address"
            required
            className="border border-gray-300 p-2 rounded w-87%"
          />
          <br /> <br />
          <label htmlFor="Password">
            Password <sup>*</sup>
          </label>{" "}
          <br />
          <input
            type="password"
            name="password"
            placeholder="password"
            required
            className="border border-gray-300 p-2 rounded w-87%"
          />
          <br /> <br />
          <div className="text">
            <input type="checkbox" name="" className="w-15" />
            <p>
              Terms and conditions agreement should start with an introduction
              that lets users know theyre reading a terms <br /> and conditions
              agreement
            </p>
          </div>
          <button
            type="submit"
            className="submitt"
            style={{ backgroundColor: "#C4C4C4", height: "45px" }}
          >
            SIGN UP
          </button>
          <div className="divider">
            <img src="/images/divider.png" alt="" />
          </div>
          <button
            type="submit"
            className="submitt"
            style={{ backgroundColor: "#434343", color: "white" }}
            id="btn"
          >
            <img src="/images/google-logo.png" alt="" id="imgs" />
            <p>Sign in by google</p>
          </button>
        </form>
      </div>
    </div>
  );
};

export const Forms = () => {
  return (
    <div>
      <Back />
      <div style={{ display: "flex" }}>
        <SignIn />
        <div id="line">
          <img src="/public/images/line.png" alt="" />
        </div>
        <SignUp />
      </div>
    </div>
  );
};
