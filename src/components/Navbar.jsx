import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

function Navbar() {


    const { cart } = useContext(CartContext);
    console.log("Cart in Navbar:", cart);
    const navigate = useNavigate();
    const Logout = () => {
        localStorage.removeItem("token");
        alert("Logged out");
        navigate("/");
    }

    return (
        <div className="bg-blue-600 text-white px-6 py-3 flex justify-between items-center">
            <h1 className="text-xl font-bold">MyApp</h1>

            <div className="space-x-6 flex items-center">

                {
                    localStorage.getItem("token") ? (
                        <>
                            <Link to="/" className="transition delay-50 duration-200 ease-in-out hover:-translate-y-1 hover:scale-100">Home</Link>
                            <Link to="/dashboard" className="transition delay-50 duration-200 ease-in-out hover:-translate-y-1 hover:scale-100">Dashboard</Link>
                            <button onClick={Logout} className="bg-red-700 hover:bg-red-500 text-white px-3 py-1 rounded "><Link to="/">Logout</Link></button>
                        </>
                    ) :
                        (
                            <button className="bg-blue-500 hover:bg-green-200 hover:text-black text-white px-3 py-1 rounded hover:bg-blue-600-600"><Link to="/login">Login</Link></button>
                        )
                }

                <Link to="/cart">
                    <span className="bg-yellow-400 text-black ml-4  px-1 rounded-full text-sm font-normal">
                        {cart.length}
                    </span>
                    <svg
                        fill="#000000"
                        id="Layer_1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        width="20px"
                        height="20px"
                        viewBox="0 0 20 20"
                        enableBackground="new 0 0 20 20"
                        xmlSpace="preserve"
                    // {...props}
                    >
                        <path d="M17,14H4c-0.6,0-1-0.4-1-1V2H0V0h4c0.6,0,1,0.4,1,1v11h11.2l1.5-6H7V4h12c0.6,0,1.1,0.6,1,1.2l-2,8C17.9,13.7,17.5,14,17,14 z" />
                        <circle cx={5} cy={18} r={2} />
                        <circle cx={16} cy={18} r={2} />
                    </svg>

                </Link>


            </div>
        </div>
    )
}

export default Navbar;