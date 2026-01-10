import { Link } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import { LogOut, MessageSquare, Settings, User } from "lucide-react";

const Navbar = () => {
  const { logout, authUser } = useAuthStore();

  return (
    // <header
    //   className="bg-base-100 border-b border-base-300 fixed w-full top-0 z-40 
    // backdrop-blur-lg bg-base-100/80"
    // >
    //   <div className="container mx-auto px-4 h-16">
    //     <div className="flex items-center justify-between h-full">
    //       <div className="flex items-center gap-8">
    //         <Link to="/" className="flex items-center gap-2.5 hover:opacity-80 transition-all">
    //           <div className="size-9 rounded-lg bg-primary/10 flex items-center justify-center">
    //             <MessageSquare className="w-5 h-5 text-primary" />
    //           </div>
    //           <h1 className="text-lg font-bold">Chatty</h1>
    //         </Link>
    //       </div>

    //       <div className="flex items-center gap-2">
    //         <Link
    //           to={"/settings"}
    //           className={`
    //           btn btn-sm gap-2 transition-colors
              
    //           `}
    //         >
    //           <Settings className="w-4 h-4" />
    //           <span className="hidden sm:inline">Settings</span>
    //         </Link>

    //         {authUser && (
    //           <>
    //             <Link to={"/profile"} className={`btn btn-sm gap-2`}>
    //               <User className="size-5" />
    //               <span className="hidden sm:inline">Profile</span>
    //             </Link>

    //             <button className="flex gap-2 items-center" onClick={logout}>
    //               <LogOut className="size-5" />
    //               <span className="hidden sm:inline">Logout</span>
    //             </button>
    //           </>
    //         )}
    //       </div>
    //     </div>
    //   </div>
    // </header>
    <header
  className="bg-white/70 backdrop-blur-md border-b border-gray-200 fixed w-full top-0 z-50 shadow-sm"
>
  <div className="container mx-auto px-6 h-16 flex items-center justify-between">
    {/* Logo */}
    <Link
      to="/"
      className="flex items-center gap-3 hover:scale-105 transition-transform duration-200"
    >
      <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
        <MessageSquare className="w-5 h-5 text-blue-600" />
      </div>
      <h1 className="text-xl font-extrabold text-gray-800">Talkie</h1>
    </Link>

    {/* Right Buttons */}
    <div className="flex items-center gap-3">
      <Link
        to={"/settings"}
        className="btn btn-sm gap-2 bg-blue-50 text-blue-600 hover:bg-blue-100 hover:text-blue-700 transition-colors duration-200"
      >
        <Settings className="w-4 h-4" />
        <span className="hidden sm:inline">Settings</span>
      </Link>

      {authUser && (
        <>
          <Link
            to={"/profile"}
            className="btn btn-sm gap-2 bg-green-50 text-green-600 hover:bg-green-100 hover:text-green-700 transition-colors duration-200"
          >
            <User className="w-4 h-4" />
            <span className="hidden sm:inline">Profile</span>
          </Link>

          <button
            className="flex gap-2 items-center bg-red-50 text-red-600 hover:bg-red-100 hover:text-red-700 px-3 py-1 rounded-md transition-colors duration-200"
            onClick={logout}
          >
            <LogOut className="w-4 h-4" />
            <span className="hidden sm:inline">Logout</span>
          </button>
        </>
      )}
    </div>
  </div>
</header>

  );
};
export default Navbar;
