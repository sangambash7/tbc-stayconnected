"use client";

import { useState } from "react";
import Authenticate from "../components/login/authenticate";
import Registration from "../components/login/registration";

function Login() {
  const [signUp, setSignUp] = useState(false);

  return (
    <div className="authentication bg-white grid md:grid-cols-5 h-screen">
      <div className="hidden md:block col-span-2 bg-purple-500 text-white px-4 content-center">
        <div className="flex flex-col text-center gap-7">
          <div className="text-[2rem]">Welcome Back!</div>
          <div className="">
            To keep connected with us please login with your personal info
          </div>
          <div
            onClick={() => setSignUp(!signUp)}
            className="border rounded-3xl self-center py-2 px-14 cursor-pointer"
          >
            <button>{!signUp ? "SIGN UP" : "LOG IN"}</button>
          </div>
        </div>
      </div>
      <div className="col-span-3 content-center ">
        <div className="flex flex-col text-center w-1/2 mx-auto gap-8">
          {!signUp ? <Authenticate /> : <Registration />}
        </div>
      </div>
    </div>
  );
}

export default Login;
