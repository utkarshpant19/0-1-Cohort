import { Link } from "react-router-dom";
import { LabelledInput } from "./LabelledInput";
import { useState } from "react";
import { SignupSchema } from "@utkarsh_pant/medium-common";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { toast } from "react-toastify";
import { Loader } from "./Loader";

export const Auth = ({ type }: { type: "signup" | "signin" }) => {
  const [postInputs, setPostInputs] = useState<SignupSchema>({
    username: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  async function sendRequest() {
    console.log("Post inputs ", postInputs);
    setLoading(true);
    try {
      const response = await axios.post(
        `${BACKEND_URL}/api/v1/user/${type == "signup" ? "signup" : "signin"}`,
        postInputs
      );
      setLoading(false);
      console.log("Response ", response);
    } catch (err: any) {
      setLoading(false);

      console.log("Error message ", err.response.data.message);

      console.log(err);
      toast(err.response.data.message, {
        type: "error",
      });
    }
  }

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="w-full h-full flex justify-center items-center flex-col">
          <header className="w-full text-center items-center">
            <h1 className="font-bold text-3xl py-2">
              {type === "signup" ? "Create a new account" : "Log In"}
            </h1>
            <span className="text-slate-500 font-medium mt-4">
              {type == "signin"
                ? "Don't have an account ? "
                : "Already have an account ? "}
              <Link
                to={type == "signup" ? "/signin" : "/signup"}
                className="underline text-slate-500"
              >
                {type == "signin" ? "Sign Up" : "Sign In"}
              </Link>
            </span>
          </header>

          <section className="mt-3 w-1/2 flex gap-4 flex-col">
            {type === "signup" ? (
              <LabelledInput
                label="Username"
                placeholder="Enter your username"
                onChange={(e) => {
                  setPostInputs((c) => ({
                    ...c,
                    username: e.target.value,
                  }));
                }}
              />
            ) : null}
            <LabelledInput
              label="Email"
              placeholder="utkarsh@gmail.com"
              onChange={(e) => {
                setPostInputs((c) => ({
                  ...c,
                  email: e.target.value,
                }));
              }}
            />
            <LabelledInput
              label="Password"
              type="password"
              onChange={(e) => {
                setPostInputs((c) => ({
                  ...c,
                  password: e.target.value,
                }));
              }}
            />
            <button
              onClick={sendRequest}
              className="text-white py-2 bg-black rounded-md mt-4 w-full cursor-pointer"
              type="submit"
            >
              {type === "signup" ? "Sign Up" : "Sign In"}
            </button>
          </section>
        </div>
      )}
    </>
  );
};
