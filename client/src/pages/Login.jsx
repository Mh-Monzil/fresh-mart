import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const { signInWithGoogle, loginUser, user, loading, setLoading } = useAuth();
  // const axiosPublic = UseAxiosPublic();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state || "/";
  const { register, handleSubmit } = useForm();

  // useEffect(() => {
  //   if(user){
  //     navigate('/')
  //   }
  // }, [navigate, user])

  const onSubmit = async (data) => {
    const {email,password} = data;
    console.log(email,password);
    try{
      setLoading(true);
      await loginUser(email, password)

      navigate(from, {replace: true});
      setLoading(false);
      
    }catch(error){
      console.log(error);
      setLoading(false);
    }
  }

  //google sign in
  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();
      navigate(from, { replace: true });
    } catch (error) {
      console.log(error);
    }
  };



  return (
    <div className="h-screen flex items-center justify-center">
      <div className="w-[500px] border rounded-md p-8">
        <h3 className="text-center text-5xl font-semibold w-fit mx-auto py-4 ">
          Login Now!
        </h3>
        <form onSubmit={handleSubmit(onSubmit)}>
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

          <div onClick={handleGoogleSignIn} className="w-full flex items-center justify-center gap-2 border mt-6 py-3 rounded-md">
            <FcGoogle className="text-2xl" />
            <span className="font-semibold">Login With Google</span>
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
            New here?{" "}
            <Link to="/register" className="underline text-green-700">
              Register now!
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
