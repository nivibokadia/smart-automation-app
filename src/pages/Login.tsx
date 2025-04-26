
import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { User, Lock, Mail, ArrowRight } from "lucide-react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [loginMethod, setLoginMethod] = useState<"password" | "otp">("password");

  const handlePasswordLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, handle authentication here
    console.log("Logging in with email and password:", { email, password });
  };

  const handleOTPRequest = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, send OTP to the email
    setIsEmailSent(true);
    console.log("Sending OTP to email:", email);
  };

  const toggleLoginMethod = () => {
    setLoginMethod(loginMethod === "password" ? "otp" : "password");
    setIsEmailSent(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      
      <div className="flex-1 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div className="text-center">
            <h2 className="mt-6 text-3xl font-bold text-gray-900">
              Welcome back
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Log in to access your Travel Nexus account
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow">
            {loginMethod === "password" ? (
              <form className="space-y-6" onSubmit={handlePasswordLogin}>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email address
                  </label>
                  <div className="mt-1 relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="travel-input pl-10"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    Password
                  </label>
                  <div className="mt-1 relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Lock className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="travel-input pl-10"
                      placeholder="••••••••"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="h-4 w-4 text-travel-primary focus:ring-travel-primary border-gray-300 rounded"
                    />
                    <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                      Remember me
                    </label>
                  </div>

                  <div className="text-sm">
                    <a href="#" className="text-travel-primary hover:text-travel-dark">
                      Forgot your password?
                    </a>
                  </div>
                </div>

                <div>
                  <Button type="submit" className="w-full bg-travel-primary hover:bg-travel-dark text-white">
                    Log in
                  </Button>
                </div>
              </form>
            ) : (
              <form className="space-y-6" onSubmit={handleOTPRequest}>
                <div>
                  <label htmlFor="email-otp" className="block text-sm font-medium text-gray-700">
                    Email address
                  </label>
                  <div className="mt-1 relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      id="email-otp"
                      name="email-otp"
                      type="email"
                      autoComplete="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="travel-input pl-10"
                      placeholder="your@email.com"
                      disabled={isEmailSent}
                    />
                  </div>
                </div>

                {isEmailSent && (
                  <div>
                    <label htmlFor="otp" className="block text-sm font-medium text-gray-700">
                      One-Time Password
                    </label>
                    <div className="mt-1">
                      <input
                        id="otp"
                        name="otp"
                        type="text"
                        required
                        className="travel-input"
                        placeholder="Enter the 6-digit code sent to your email"
                      />
                    </div>
                    <p className="mt-2 text-sm text-gray-500">
                      Didn't receive a code? <button type="button" className="text-travel-primary hover:text-travel-dark">Resend</button>
                    </p>
                  </div>
                )}

                <div>
                  <Button 
                    type="submit" 
                    className="w-full bg-travel-primary hover:bg-travel-dark text-white"
                    disabled={isEmailSent}
                  >
                    {isEmailSent ? 'Verify OTP' : 'Send OTP to Email'}
                  </Button>
                </div>
              </form>
            )}

            <div className="mt-6">
              <button
                type="button"
                onClick={toggleLoginMethod}
                className="text-sm text-travel-primary hover:text-travel-dark"
              >
                {loginMethod === "password"
                  ? "Login with one-time code instead"
                  : "Login with password instead"}
              </button>
            </div>

            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">Or continue with</span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <button
                  type="button"
                  className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                  <span className="sr-only">Sign in with Google</span>
                  <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.545 12.151c0 .866-.563 1.451-1.384 1.451h-2.1V9.034h2.1c.821 0 1.384.584 1.384 1.451v1.666zm-1.238-.75v-.166c0-.399-.19-.658-.548-.658h-.786v1.483h.786c.358 0 .548-.26.548-.659zm6.547.75c0 .866-.563 1.451-1.384 1.451h-2.1V9.034h2.1c.821 0 1.384.584 1.384 1.451v1.666zm-1.238-.75v-.166c0-.399-.19-.658-.548-.658h-.786v1.483h.786c.358 0 .548-.26.548-.659zM12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2z" />
                  </svg>
                </button>

                <button
                  type="button"
                  className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                  <span className="sr-only">Sign in with Facebook</span>
                  <svg className="h-5 w-5 text-blue-600" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-4">
            <p className="text-sm text-gray-600">
              Don't have an account?{" "}
              <Link to="/signup" className="text-travel-primary hover:text-travel-dark">
                Sign up
              </Link>
            </p>
          </div>
          
          <div className="text-center">
            <Link to="/search" className="text-sm text-gray-600 hover:text-gray-900">
              Continue as guest <ArrowRight className="h-4 w-4 inline" />
            </Link>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Login;
