import React from 'react'
import { NavLink } from 'react-router-dom'
import { assets } from '../assets/assets'
import Lottie from "lottie-react";
import { useAppContext } from '../context/AppContext';

const Navbar = () => {
    const [open, setOpen] = React.useState(false)
    const {user , setUser , setShowUserLogin , navigate} = useAppContext();

    const logout = async () => {
        setUser(null);
        navigate('/');
    }
  return (
    <nav className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-300 bg-white relative transition-all">

            <NavLink to="/" onClick={() => setOpen(false)}>
                <img className="h-16" src="/logo.jpeg" alt="Kpure" />
            </NavLink>

            {/* Desktop Menu */}
            <div className="hidden sm:flex items-center gap-8">
                <NavLink to= "/">Home</NavLink>
                {/* <NavLink to= "/products">Products</NavLink> */}
                {/* <NavLink to = "/about">About</NavLink>
                <NavLink to = "/contact">Contact</NavLink> */}

                <div className="hidden lg:flex items-center text-sm gap-2 border border-gray-300 px-3 rounded-full">
                    <input className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500" type="text" placeholder="Search products" />
                    <Lottie animationData={assets.SearchIcon} className="h-10 w-10" loop={true} />
                </div>

                <div onClick={() => navigate("/cart")} className="relative cursor-pointer">
                    <Lottie animationData={assets.Cart} className="h-10 w-10" loop={true} />
                    <button className="absolute -top-2 -right-3 text-xs text-white bg-primary w-[18px] h-[18px] rounded-full">3</button>
                </div>

                {!user ? (<button onClick={() => setShowUserLogin(true)} className="cursor-pointer px-8 py-2 bg-primary hover:bg-primary-dull transition text-white rounded-full">
                    Login
                </button>) : (<div className='relative group'>
                    <Lottie animationData={assets.User} className="w-10" loop={true} />
                    <ul className='hidden group-hover:block absolute top-10 right-0 bg-white shadow rounded-lg text-sm w-30 py-2.5 z-40 border border-gray-200'>
                        <li onClick={() => navigate("orders")} className='p-1.5 pl-3 hover:bg-primary/10 cursor-pointer'>My Orders</li>
                        <li onClick={logout} className='p-1.5 pl-3 hover:bg-primary/10 cursor-pointer'>Logout</li>
                    </ul>
                </div>)}
            </div>

            <button onClick={() => open ? setOpen(false) : setOpen(true)} aria-label="Menu" className="sm:hidden">
                <Lottie animationData={assets.Menu} className="h-10 w-10" loop={true} />
            </button>

            {/* Mobile Menu */}
            {open && (<div className={`${open ? 'flex' : 'hidden'} absolute top-[60px] left-0 w-full bg-white shadow-md py-4 flex-col items-start gap-2 px-5 text-sm md:hidden`}>
                <NavLink to= "/" onClick={() => setOpen(false)}>Home</NavLink>
                {/* <NavLink to= "/products" onClick={() => setOpen(false)}>Products</NavLink> */}
                {user && <NavLink to= "/orders" onClick={() => setOpen(false)}>My Orders</NavLink>}
                {/* <NavLink to= "/about" onClick={() => setOpen(false)}>About</NavLink>
                <NavLink to= "/contact" onClick={() => setOpen(false)}>Contact</NavLink> */}

                {!user ? (
                    <button onClick={() => {setOpen(false) ; setShowUserLogin(true)}} className="cursor-pointer px-6 py-2 mt-2 bg-primary hover:bg-primary-dull transition text-white rounded-full text-sm">
                    Login
                </button>
                ) : (
                    <button onClick={logout} className="cursor-pointer px-6 py-2 mt-2 bg-primary hover:bg-primary-dull transition text-white rounded-full text-sm">
                    Logout
                </button>
                )}
            </div>)}

        </nav>
  )
}

export default Navbar
