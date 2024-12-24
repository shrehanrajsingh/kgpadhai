'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';
import Cookies from 'js-cookie';
import LoginBG from '../assets/login-bg.jpg';
import IconGoogle from '../assets/icon-google.svg';
import IconFacebook from '../assets/icon-facebook.svg';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();

    useEffect(() => {
        const token = Cookies.get('token');
        if (token) {
            toast.success('You are already logged in');
            router.push('/');
        }
    }, [router]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Handle login logic here
        // Example: Send a POST request to your login API endpoint
        try {
            const response = await fetch('/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            if (response.ok) {
                const data = await response.json();
                Cookies.set('token', data.token, { expires: 7 }); // Store token in cookie for 7 days
                toast.success('Login successful!');
                // Redirect to the dashboard or home page after successful login
                router.push('/');
            } else {
                const data = await response.json();
                setError(data.message || 'Login failed');
                toast.error(data.message || 'Login failed');
            }
        } catch (error) {
            setError('Error logging in');
            toast.error('Error logging in');
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <ToastContainer />
            <div className="absolute inset-0 z-0">
                <img
                    alt=""
                    src={LoginBG.src}
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 opacity-75"></div>
            </div>
            <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-lg z-10">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                        Welcome to KGPadhai
                    </h2>
                    <p className="mt-2 text-center text-sm text-gray-600">
                        Please sign in to your account
                    </p>
                </div>
                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                            <label htmlFor="email" className="sr-only">
                                Email address
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Email address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="sr-only">
                                Password
                            </label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input
                                id="remember-me"
                                name="remember-me"
                                type="checkbox"
                                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                            />
                            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                                Remember me
                            </label>
                        </div>

                        <div className="text-sm">
                            <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                                Forgot your password?
                            </a>
                        </div>
                    </div>

                    {error && <div className="text-red-500 text-sm">{error}</div>}

                    <div>
                        <button
                            type="submit"
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Sign in
                        </button>
                    </div>

                    <div className="text-sm">
                        <a href="/signup" className="font-medium text-indigo-600 hover:text-indigo-500">
                            Create account
                        </a>
                    </div>
                </form>

                <div className="text-center text-sm">
                    <p className="text-gray-600">Or continue with</p>
                    <div className="mt-1 grid grid-cols-2 gap-3">
                        <a href="#" className="w-full inline-flex justify-center items-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                            <img src={IconGoogle.src} alt="Google" className="w-4 h-4 ms-2" />&nbsp;
                            Google
                        </a>
                        <a href="#" className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                            <img src={IconFacebook.src} alt="Facebook" className="w-5 h-5 ms-2" />&nbsp;
                            Facebook
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}