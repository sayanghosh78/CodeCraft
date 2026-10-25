import { Link } from "react-router-dom"


const Notfound404 = () => {
  return (
    <div className="min-h-screen w-full bg-black flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center space-y-2">
            <h1 className="text-9xl font-bold">
                404
            </h1>
            
        </div>
        <div className="mt-5 flex flex-col items-center justify-center">
            <h4 className="text-3xl font-semibold">
                This page wandered off.
            </h4>
            <p className="text-sm text-gray-400">
                Oops! The page you are looking for does not exist or has been moved.
            </p>
        </div>
        <div className="flex items-center justify-center gap-6 mt-15">
            <Link 
                to={"/"}
                className="bg-indigo-600 px-6 py-4 rounded-full text-[16px] font-semibold"
            >
                Go to home page
            </Link>
            <Link
                className="px-6 py-4 rounded-full text-[16px] font-bold border border-white/40"
            >
                Go back
            </Link>
        </div>
    </div>
  )
}

export default Notfound404