"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const SuccessPage = () => {
  const router = useRouter();
  useEffect(() => {
    localStorage.removeItem("cartItems");
    localStorage.removeItem("shippinInfo");
    localStorage.removeItem("clientSecret");
    localStorage.clear();
    router.refresh();
  }, []);
  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <svg
          className="w-16 h-16 mx-auto mb-4 text-green-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 11l3 3L22 4M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"
          ></path>
        </svg>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Payment Successful!
        </h2>
        <p className="text-gray-600 mb-6">
          Thank you for your purchase. Your payment was successful.
        </p>
        <Link
          href="/"
          className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg"
        >
          Go to Homepage
        </Link>
      </div>
    </div>
  );
};

export default SuccessPage;
