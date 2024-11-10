import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash, FaGoogle } from 'react-icons/fa';
import { useState } from "react";
import Swal from "sweetalert2";
import Lottie from "lottie-react";
import useAuth from './../hooks/useAuth';
import loginLottie from "../assets/lottie/login.json";
import { Helmet, HelmetProvider } from "react-helmet-async";

const Login = () => {
  const { login, googleLogin} = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState("");

  // navigation systems
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state  || "/";

  // handle social login
  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        console.log(result.user);
        const userEmail = result.user.email;
        const userUid = result.user.uid; // Extracting UID

        if (userEmail) {
          // Tracking script with UID and Email
          window.gaf('event', 'signup', { email: userEmail, uid: userUid });
        }

        Swal.fire({
          title: 'Successful!',
          text: 'You Login Successful',
          icon: 'success',
          confirmButtonText: 'Cool',
        });

        if (result.user) {
          navigate(from);
        }
      })
      .catch((error) => {
        Swal.fire({
          title: 'Error!',
          text: 'Login Unsuccessful!',
          icon: 'error',
          confirmButtonText: 'Try Again',
        });
        console.log(error);
      });
  };

  // handle email login
  const handleEmailLogin = (event) => {
    event.preventDefault();
    
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    
    setLoginError("");

    login(email, password)
      .then((result) => {
        console.log(result.user);
        const userEmail = result.user.email;
        const userUid = result.user.uid; 
        console.log("Login UID", userUid);

        // Tracking script with UID and Email
        window.gaf('event', 'signup', { email: userEmail, uid: userUid });

        Swal.fire({
          title: 'Successful!',
          text: 'You Login Successful',
          icon: 'success',
          confirmButtonText: 'Cool',
        });

        if (result.user) {
          navigate(from);
        } 
      })
      .catch((error) => {
        Swal.fire({
          title: 'Error!',
          text: 'Password or Email did not match!',
          icon: 'error',
          confirmButtonText: 'Try Again',
        });
        setLoginError(error.message);
      });
  };

  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <title>Login | RoomReady</title>
        </Helmet>
        <div className="hero mx-auto container">
          <div className="hero-content flex-col lg:flex-row gap-10">
            <div className="text-center lg:text-left text-3xl p-4">
              <Lottie  animationData={loginLottie} loop={true} />
            </div>
            {/* login form */}
            <div className="w-full mx-auto max-w-md shadow-lg sm:p-8 dark:bg-gray-900 dark:text-gray-100">
              <h2 className="mb-3 text-3xl font-semibold text-center">Login to your account</h2>
              {/* register link */}
              <p className="text-sm text-center dark:text-gray-400">
                Do not have account? Register
                <Link to="/register" className="ml-2 focus:underline hover:underline text-indigo-600">here</Link>
              </p>
              {/* google login */}
              <div className="my-6 space-y-4 p-4">
                <button aria-label="Login with Google"  onClick={handleGoogleLogin}
                className="flex items-center justify-center gap-2 w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-400 focus:dark:ring-indigo-400">
                  <FaGoogle /> Login with Google
                </button>
              </div>

              <div className="flex items-center w-full my-4">
                <hr  className="w-full dark:text-gray-400" />
                <p className="px-3 dark:text-gray-400">OR</p>
                <hr  className="w-full dark:text-gray-400" />
              </div>

              {/* email login */}
              <form className="space-y-8 p-4 border-[1px] rounded-md shadow-md" onSubmit={handleEmailLogin} >
                <div className="space-y-4">
                  {/* email */}
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm">Email address</label>
                    <input type="email" name="email" id="email" placeholder="leroy@jenkins.com" required
                    className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 
                    dark:text-gray-100 focus:dark:border-indigo-400" />
                  </div>
                  {/* password */}
                  <div className="space-y-2 relative">
                    <label htmlFor="password" className="text-sm">Password</label>
                    <input type={showPassword ? "text" : "password"} 
                    name="password" id="password" placeholder="*****" required
                    className="w-full px-3 py-2 border rounded-md dark:border-gray-700 
                    dark:bg-gray-900 dark:text-gray-100 focus:dark:border-indigo-400" />
                    <span 
                      className="absolute top-9 right-4" 
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {
                        showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                      }
                    </span>
                    {
                      loginError && <small className='text-red-500'>{loginError}</small>
                    }
                  </div>
                </div>
                {/* submit */}
                <input type="submit" value="Login"
                className="w-full px-8 py-3 font-bold rounded-md btn btn-outline text-indigo-600" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </HelmetProvider>
  );
};

export default Login;