import { logoNoBG } from "../assets";

function LoginRegister({ leftColor, type }) {


    return (
        <div className="flex justify-center h-screen ">
            {/*Left: Image*/}
            <div className={`w-1/3 hidden md:block ${leftColor} text-center`}>

                <div className="cursor-pointer relative top-24 left-12 ">
                    <a href="/">
                        <img src={logoNoBG} alt="logo" className="w-3/4 md:w-4/6" />
                    </a>
                </div>
                <p className={`text-white text-xl relative font-semibold top-28 ${type == "login" ? "right-10":null}`}>{type == "register" ? "Unlimited Creativity, One Click Away" : "Discover, Download, Design"}</p>
            </div>

            <div className="w-2/3 flex flex-col items-center justify-center">
                <h1 className="text-4xl font-semibold mb-4">{type == "register" ? "Sign Up":"Sign In"}</h1>
                <form action="#" method="POST" className="md:w-2/4 w-11/12">
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-600 font-semibold"> E-mail </label>
                        <input type="email" id="email" name="email" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autoComplete="off" />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-600 font-semibold"> Password </label>
                        <input type="password" id="password" name="password" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autoComplete="off" />
                    </div>

                    {type == 'login' ? <div className="mb-4 flex items-center">
                        <input type="checkbox" id="remember" name="remember" className="text-blue-500" />
                        <label htmlFor="remember" className="text-gray-600 ml-2 font-semibold">Remember Me</label>
                    </div>: null}


                    <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full">
                        Create a Account
                    </button>
                </form>
                {type == "register" ?
                    <div className="mt-4 flex w-1/2 items-start">
                        <input type="checkbox" id="policy" name="policy" className="mt-2" />
                        <span className="text-wrap"> &nbsp; Creating an account means you’re agreed with our
                            <a href="" className="text-blue-500"> Terms of service,</a>
                            <a href="" className="text-blue-500"> Privacy Policy.</a>
                        </span>
                    </div> : null
                    
                }

                <div className="mt-6 text-blue-500 text-center">
                    <span className="text-gray-600"> Already a member? </span> &nbsp;
                    <a href={`${type == "register" ? "/account/login" : "/account/register"}`} className="hover:underline"> {type == "register" ? "Login" : "Sign Up Here"} </a>
                </div>
            </div>
        </div>
    )

}

export default LoginRegister;