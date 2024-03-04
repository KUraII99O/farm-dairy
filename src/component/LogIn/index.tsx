import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MoooImage from "../../assets/images/Mooo.png";

const LogIn = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPopUp, setShowPopUp] = useState(false); // State to control the pop-up visibility
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate if username and password are not empty
    const isValid = username.trim() && password.trim();

    if (isValid) {
      // Show the pop-up
      setShowPopUp(true);
      // Simulate login process by calling onLogin function after 3 seconds
      setTimeout(() => {
        onLogin();
        // Redirect user to dashboard after login
        navigate("/dashboard");
      }, 1000);
    }
  };

  return (
    <>
      {showPopUp && (
        <div className="fixed bottom-10 left-0 right-0 flex justify-center">
          <div className="bg-green-500 text-white py-2 px-4 rounded-lg">
            Welcome Back! You have successfully logged in.
          </div>
        </div>
      )}
      <section className={`h-full bg-neutral-200 dark:bg-neutral-700 `}>
        {/* Render the login form */}
        <div className="container h-full p-10">
          <div className="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
            <div className="w-full">
              <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
                <div className="g-0 lg:flex lg:flex-wrap">
                  <div className="px-4 md:px-0 lg:w-6/12">
                    <div className="md:mx-6 md:p-12">
                      <div className="text-center">
                        <img
                          className="mx-auto w-48"
                          src={MoooImage}
                          alt="Mooo Image"
                        />
                        <h4 className="mb-12 mt-4 pb-1 text-xl font-semibold">
                          We are GesCow
                        </h4>
                      </div>

                      <form onSubmit={handleSubmit}>
                        <p className="mb-4">Please login to your account</p>
                        <input
                          type="text"
                          className="w-full border border-gray-300 rounded px-3 py-2 mb-4"
                          placeholder="Username"
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                        />
                        <input
                          type="password"
                          className="w-full border border-gray-300 rounded px-3 py-2 mb-4"
                          placeholder="Password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                        <div className="mb-12 pb-1 pt-1 text-center">
                          <button
                            className="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white bg-secondary hover:bg-primary"
                            type="submit"
                          >
                            Log in
                          </button>
                          <a href="/Rest-Password">Forgot password?</a>
                        </div>
                        <div className="flex items-center justify-between pb-6">
                          <p className="mb-0 mr-2">
                            Don't have an account?
                          </p>
                          <button
                            type="button"
                            className="inline-block rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg- hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                            onClick={() => {
                              window.location.href = "/Signup";
                            }}
                          >
                            Register
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div
                    className="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none"
                    style={{
                      background:
                        "linear-gradient(to bottom right, #309975, #58b368)",
                    }}
                  >
                    <div className="px-4 py-6 text-white md:mx-6 md:p-12">
                      <h4 className="mb-6 text-xl font-semibold">
                        We are more than just a company
                      </h4>
                      <p className="text-sm">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LogIn;