import { useState } from "react";
import { Gpu } from "lucide-react";
import { Link } from "react-router";

import useSignUp from "../hooks/useSignUp";

const SignUpPage = () => {
  const [signupData, setSignupData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const { isPending, error, signupMutation } = useSignUp();

  const handleSignup = (e) => {
    e.preventDefault();
    signupMutation(signupData);
  };

  return (
    <div
      className="h-screen flex items-center justify-center p-4 sm:p-6 md:p-8 bg-base-100"
    >
      <div className="flex flex-col lg:flex-row w-full max-w-5xl mx-auto bg-base-200 rounded-2xl shadow-xl overflow-hidden">
        {/* SIGNUP FORM – LEFT SIDE */}
        <div className="w-full lg:w-1/2 p-4 sm:p-8 flex flex-col justify-center">
          {/* LOGO */}
          <div className="mb-6 flex items-center justify-start gap-2">
            <Gpu className="size-9 text-primary" />
            <span className="text-3xl font-bold font-mono bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary tracking-wider">
              Lexlink
            </span>
          </div>

          {/* ERROR MESSAGE IF ANY */}
          {error && (
            <div className="alert alert-error mb-4">
              <span>{error.response.data.message}</span>
            </div>
          )}

          {/* Intro */}
          <div className="space-y-4 mb-6">
            <h2 className="text-xl font-semibold">Create an Account</h2>
            <p className="text-sm opacity-70 leading-relaxed">
              Connect globally, speak confidently. Start your Lexlink journey today!
            </p>
          </div>

          {/* FORM */}
          <form onSubmit={handleSignup} className="space-y-4">
            {/* Full Name */}
            <div className="space-y-1">
              <label className="label">
                <span className="label-text">Full Name</span>
              </label>
              <input
                type="text"
                placeholder="Ash Hemth"
                className="input input-bordered w-full"
                value={signupData.fullName}
                onChange={(e) =>
                  setSignupData({ ...signupData, fullName: e.target.value })
                }
                required
              />
            </div>

            {/* Email */}
            <div className="space-y-1">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="ashhemth@example.com"
                className="input input-bordered w-full"
                value={signupData.email}
                onChange={(e) =>
                  setSignupData({ ...signupData, email: e.target.value })
                }
                required
              />
            </div>

            {/* Password */}
            <div className="space-y-1">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="********"
                className="input input-bordered w-full"
                value={signupData.password}
                onChange={(e) =>
                  setSignupData({ ...signupData, password: e.target.value })
                }
                required
              />
              <p className="text-xs opacity-70 mt-1">
                Password must be at least 6 characters
              </p>
            </div>

            {/* Terms */}
            <div className="form-control">
              <label className="label cursor-pointer justify-start gap-2">
                <input type="checkbox" className="checkbox checkbox-sm" required />
                <span className="text-xs leading-tight">
                  I agree to the{" "}
                  <span className="text-primary hover:underline">terms of service</span> and{" "}
                  <span className="text-primary hover:underline">privacy policy</span>
                </span>
              </label>
            </div>

            {/* Submit */}
            <button type="submit" className="btn btn-primary w-full">
              {isPending ? (
                <>
                  <span className="loading loading-spinner loading-xs"></span>
                  Loading...
                </>
              ) : (
                "Create Account"
              )}
            </button>

            <div className="text-center mt-4">
              <p className="text-sm">
                Already have an account?{" "}
                <Link to="/login" className="text-primary hover:underline">
                  Sign in
                </Link>
              </p>
            </div>
          </form>
        </div>

        {/* ILLUSTRATION – RIGHT SIDE */}
        <div className="hidden lg:flex w-full lg:w-1/2 bg-base-300 items-center justify-center">
          <div className="max-w-md p-8">
            <div className="relative aspect-square max-w-sm mx-auto">
              <img
                src="/i5.png"
                alt="Language connection illustration"
                className="w-full h-full object-contain drop-shadow-lg"
              />
            </div>

            <div className="text-center space-y-3 mt-6">
              <h2 className="text-xl font-semibold text-primary">
                Speak. Connect. Grow.
              </h2>
              <p className="opacity-70">
                Find language partners worldwide. Practice through conversation, not just textbooks.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
