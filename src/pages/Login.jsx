import { Link, Form, useNavigation, redirect } from "react-router-dom";
import { customFetch } from "../utils";
import { loginUser } from "../features/user/userSlice";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";

export const action =
  (store) =>
  async ({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    try {
      const response = await customFetch.post("/auth/login", data, {
        withCredentials: true,
      });
      console.log(response);
      store.dispatch(loginUser(response.data));
      toast.success("Logged in Successfully");
      return redirect("/");
    } catch (error) {
      const errorMessage = error.response.data.msg || "Check Credentials";
      toast.error(errorMessage);
      return null;
    }
  };

const Login = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return (
    <div className="min-h-screen w-full flex justify-center items-center px-4 md:px-16 bg-gradient-to-br from-blue-400 via-blue-600 to-blue-900 overflow-hidden">
      <Form
        method="POST"
        className="bg-gradient-to-br from-blue-400 via-blue-600 to-blue-900 shadow-xl px-6 py-8 md:px-12 md:py-12 grid place-items-center gap-4 border-2 border-blue-100 rounded-md w-full max-w-md"
      >
        <div className="grid gap-2 md:gap-4 w-full">
          <label className="input input-bordered flex items-center gap-2 w-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input
              type="text"
              name="email"
              className="grow w-full"
              placeholder="Email or PhoneNumber"
            />
          </label>
          <label className="input input-bordered flex items-center gap-2 w-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                clipRule="evenodd"
              />
            </svg>
            <input
              type="password"
              name="password"
              className="grow w-full"
              placeholder="Password"
            />
          </label>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="btn bg-blue-900 hover:bg-blue-600 mt-4 w-full text-center text-white"
        >
          {isSubmitting ? (
            <>
              <span className="loading loading-bars"></span>
              Submitting...
            </>
          ) : (
            <span className="text-white">Login</span>
          )}
        </button>
        <p className="text-gray-50">
          Have no account?{" "}
          <Link to="/register" className="link link-hover text-blue-300">
            Register
          </Link>
        </p>
      </Form>
    </div>
  );
};

export default Login;
