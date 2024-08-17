import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Register = () => {
  const {
    signInWithGoogle,
    createUser,
    updateUserProfile,
    user,
    setUser,
    loading,
    setLoading,
  } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state || "/";
  const { register, handleSubmit } = useForm();

  

  const onSubmit = async (data) => {
    console.log(data);
    const {email, password} = data;
    try {
      const result = await createUser(email, password)
      console.log(result);
      navigate(from, { replace: true });
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };




  return (
    <div className="h-screen flex items-center justify-center">
      <div className="w-[500px] border rounded-md p-8">
        <h3 className="text-center text-5xl font-semibold w-fit mx-auto py-4 ">
          Register Now!
        </h3>
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mt-5">
            <label
              className="block mb-2 font-medium"
              htmlFor="username"
            >
              Name
            </label>
            <input
              id="username"
              autoComplete="username"
              name="username"
              className="block w-full px-4 py-2 bg-white border rounded-sm    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
              type="name"
              {...register("name", { required: true })}
            />
          </div>

          <div className="mt-5">
            <label
              className="block mb-2 font-medium"
              htmlFor="LoggingEmailAddress"
            >
              Email Address
            </label>
            <input
              id="LoggingEmailAddress"
              autoComplete="email"
              name="email"
              className="block w-full px-4 py-2 bg-white border rounded-sm    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
              type="email"
              {...register("email", { required: true })}
            />
          </div>

          <div className="mt-5">
            <div className="flex justify-between">
              <label
                className="block mb-2 font-medium "
                htmlFor="loggingPassword"
              >
                Password
              </label>
            </div>

            <input
              id="loggingPassword"
              autoComplete="current-password"
              name="password"
              className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-sm   focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
              type="password"
              {...register("password", { required: true })}
            />
          </div>

          <div className="mt-12">
            <button
              type="submit"
              className="w-full px-6 pt-2 pb-3 text-lg font-semibold tracking-wide capitalize transition-colors duration-300 transform bg-gradient-to-r from-primaryGreen to-green-400 rounded-sm hover:bg-navy hover:text-white focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"
            >
              Sign In
            </button>
          </div>
          <p className="mt-2 font-medium">
            Already Have an account?{" "}
            <Link to="/login" className="underline text-green-700">
              Login now!
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
