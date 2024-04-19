"use client";

import Link from "next/link";

interface ErrorPageProps {
  error: Error,
  reset: () => void,
}

const ErrorPage = ({error, reset}:ErrorPageProps) => {
  return (
    <div className="py-7 text-center">
      <div className="text-3xl font-semibold text-red-700">
        Something Went Wrong
        <h2 className="text-gray-400 text-lg my-4">{error.message}</h2>
        <button className="bg-yellow-600 p-2 rounded-md border border-1 border-slate-200 shadow-sm text-white" onClick={()=>reset()}>Try again</button>
      </div>
      <Link className="text-xl text-blue-600 block mt-6" href="/">Go Home</Link>
    </div>
  )
}

export default ErrorPage
