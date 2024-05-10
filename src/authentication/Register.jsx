import { useState } from "react";
import registerLottie from "../assets/lottie/register.json"
import Lottie from "lottie-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";
import { Helmet, HelmetProvider } from "react-helmet-async";

const Register = () => {
  const { createUser, updateUserProfile, logOut } = useAuth();
  const [passwordError,setPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // navigation systems
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state || "/";

  const handleEmailRegister = event => {
    event.preventDefault();
    
    const form = event.target;
    
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    if(password.length<6){
      setPasswordError("Password must be 6 characters")
      return
    }

    if(!/[A-Z]/.test(password)){
      setPasswordError("Password must have at least 1 Uppercase letter")
      return
    }
    
    if(!/[a-z]/.test(password)){
      setPasswordError("Password must have at least 1 Lowercase letter")
      return
    }

    setPasswordError('')
      
    //create user and update profile
    createUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        logOut();
        Swal.fire({
          title: 'Successful!',
          text: 'New user successfully created. Now you can login!',
          icon: 'success',
          confirmButtonText: 'Cool'
        })
        updateUserProfile(name, photo)
          .then(() => {
            navigate(from);
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode)
        console.log(errorMessage)
        Swal.fire({
          title: 'Error!',
          text: 'Sorry! We were not able to register your account.',
          icon: 'error',
          confirmButtonText: 'Try Again'
        })
      });
  }

  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <title>Register | RoomReady</title>
        </Helmet>
        <div className="hero mx-auto container">
          <div className="hero-content flex-col lg:flex-row gap-10">
            <div className="text-center lg:text-left text-3xl p-4">
              <Lottie  animationData={registerLottie} loop={true} />
            </div>
            {/* Register form */}
            <div className="w-full mx-auto max-w-md shadow-lg sm:p-8 dark:bg-gray-900 dark:text-gray-100">
              <h2 className="mb-3 text-3xl font-semibold text-center">Create new account</h2>
              {/* login link */}
              <p className="text-sm text-center dark:text-gray-400">Already have an account? Login
                <Link to="/login" className="ml-2 focus:underline hover:underline text-indigo-600">here</Link>
              </p>

              {/* email register */}
              <form onSubmit={handleEmailRegister} className="space-y-8 p-4" >
                <div className="space-y-4">
                  {/* name */}
                  <div className="space-y-2">
                    <label className="block text-sm">Your Name</label>
                    <input type="text" name="name" placeholder="Enter full name" required
                    className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 
                    dark:text-gray-100 focus:dark:border-indigo-400" />
                  </div>
                  {/* name */}
                  <div className="space-y-2">
                    <label className="block text-sm">Your Photo</label>
                    <input type="text" name="photo" placeholder="Enter a valid URL" required
                    className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 
                    dark:text-gray-100 focus:dark:border-indigo-400" />
                  </div>
                  {/* email */}
                  <div className="space-y-2">
                    <label className="block text-sm">Email address</label>
                    <input type="email" name="email" placeholder="leroy@jenkins.com" required
                    className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 
                    dark:text-gray-100 focus:dark:border-indigo-400" />
                  </div>
                  {/* password */}
                  <div className="space-y-2 relative">
                    <label  className="text-sm">Password</label>
                    <input type={showPassword ? "text" : "password"} 
                    name="password" placeholder="*****" required
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
                  </div>
                  {
                    passwordError && <small className='text-red-500'>{passwordError}</small>
                  }
                </div>
                {/* submit button */}
                <input type="submit" value="Register"
                className="w-full px-8 py-3 font-bold rounded-md btn btn-outline text-indigo-600" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </HelmetProvider>
  );
};

export default Register;