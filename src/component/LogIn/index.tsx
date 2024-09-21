import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import MoooImage from "../../assets/images/Mooo.png";
import { useTranslation } from "../Translator/Provider";

// Define the types for the props
interface LogInProps {
  onLogin: () => void;
}

const LogIn: React.FC<LogInProps> = ({ onLogin }) => {
  const { translate, setLanguage, language } = useTranslation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false); // State for password visibility
  const navigate = useNavigate();

  const handleChangeLanguage = (newLanguage: string) => {
    setLanguage(newLanguage);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("https://https://auth-api-woad.vercel.app/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || "Login failed");
      }

      const responseBody = await response.json();
      localStorage.setItem("loggedInUser", JSON.stringify(responseBody.user));
      onLogin();
      setErrorMessage("");
      setTimeout(() => {
        navigate("/dashboard");
      }, 1000);
    } catch (error) {
      setErrorMessage(translate("login_error"));
    }
  };

  const isArabic = language === "ar";
  const formClass = isArabic ? "rtl" : "ltr";

  return (
    <section className="h-full bg-neutral-200 dark:bg-neutral-700">
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
                    <div className="flex items-center">
                      <select
                        value={language}
                        onChange={(e) => handleChangeLanguage(e.target.value)}
                        className="mr-2"
                      >
                        <option value="en">🇺🇸</option>
                        <option value="fr">🇫🇷</option>
                        <option value="ar">🇹🇳</option>
                      </select>
                    </div>
                    <form onSubmit={handleSubmit} className={`flex flex-col ${formClass}`}>
                      <style>{`
                        .rtl {
                          direction: rtl;
                        }
                      `}</style>
                      <p className="mb-4 font-bold">{translate("login_title")}</p>
                      <input
                        type="text"
                        className="w-full border border-gray-300 rounded px-3 py-2 mb-4"
                        placeholder={translate("Username")}
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                      />
                      <input
                        type="email"
                        className="w-full border border-gray-300 rounded px-3 py-2 mb-4"
                        placeholder={translate("email")}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <div className="relative mb-4">
                        <input
                          type={isPasswordVisible ? "text" : "password"}
                          className="w-full border border-gray-300 rounded px-3 py-2"
                          placeholder={translate("password")}
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                        <button
                          type="button"
                          onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                          className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-600"
                        >
                          {isPasswordVisible ? (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={2}
                              stroke="currentColor"
                              className="w-5 h-5"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" d="M3 12c0 3.866 4.478 9 9 9s9-5.134 9-9-4.478-9-9-9-9 5.134-9 9z" />
                              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12c0-1.104-.896-2-2-2s-2 .896-2 2 .896 2 2 2 2-.896 2-2z" />
                            </svg>
                          ) : (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={2}
                              stroke="currentColor"
                              className="w-5 h-5"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" d="M3 12c0 3.866 4.478 9 9 9s9-5.134 9-9-4.478-9-9-9-9 5.134-9 9z" />
                              <path strokeLinecap="round" strokeLinejoin="round" d="M12 12c-1.104 0-2-.896-2-2s.896-2 2-2 2 .896 2 2-.896 2-2 2z" />
                              <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.021 9.021 0 01-7.5-4 9.021 9.021 0 017.5-4 9.021 9.021 0 017.5 4A9.021 9.021 0 0112 21z" />
                            </svg>
                          )}
                        </button>
                      </div>
                      {errorMessage && (
                        <p className="text-red-500 mb-4">{errorMessage}</p>
                      )}
                      <div className="mb-12 pb-1 pt-1 text-center">
                        <button
                          className="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white bg-secondary hover:bg-primary"
                          type="submit"
                        >
                          {translate("login")}
                        </button>
                        <a href="/Rest-Password">{translate("forgot_password")}</a>
                      </div>
                      <div className="flex items-center justify-between pb-6">
                        <p className="mb-0 mr-2"></p>
                        <Link
                          to="/app/signup"
                          className="inline-block rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg- hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                        >
                          {translate("register_account")}
                        </Link>
                      </div>
                    </form>
                  </div>
                </div>
                <div
                  className="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none"
                  style={{
                    background: "linear-gradient(to bottom right, #309975, #58b368)",
                  }}
                >
                  <div className="px-4 py-6 text-white md:mx-6 md:p-12">
                    <h4 className="mb-6 text-xl font-semibold">
                      {translate("company_description")}
                    </h4>
                    <p className="text-sm">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogIn;
