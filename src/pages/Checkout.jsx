import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

function Checkout() {
    const { cart, total } = useContext(CartContext);

    const placeOrder = () => {
        alert("Order Place Successfully.....")
    }

    return (
        // <div classNameName="max-w-2xl mx-auto">
        //     <h1 classNameName="text-2xl font-bold mb-4">Checkout</h1>

        //     {cart.map(item => (
        //         <div key={item.id} classNameName="border p-3 mb-2 flex justify-between">
        //             <span>{item.title}(x{item.quantity})</span>
        //             <span>₹{item.price * item.quantity}</span>

        //         </div>
        //     ))}

        //     <h2 classNameName="text-xl font-bold mt-4">
        //         Total: ₹{total}
        //     </h2>

        //     <button onClick={placeOrder} classNameName="bg-green-500 text-white px-4 py-2 rounded mt-4 w-full">
        //         Place Order
        //     </button>
        // </div>

        <>
            <div className="relative mx-auto w-full bg-white">
                <div className="grid min-h-screen grid-cols-10">
                    
                    <div className="col-span-full py-6 px-4 sm:py-12 lg:col-span-6 lg:py-24">
                        
                        <div className="mx-auto w-full max-w-lg">
                            <Link to="/cart" className="flex font-semibold text-teal-600 text-sm mb-1 underline hover:text-teal-400">
                            {/* <svg className="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512">
                                <path
                                    d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
                            </svg> */}
                            Go Back to Cart
                        </Link>
                            <h1 className="relative text-2xl font-medium text-gray-700 sm:text-3xl">Secure Checkout<span className="mt-2 block h-1 w-10 bg-teal-600 sm:w-20"></span></h1>
                            <form action="" className="mt-10 flex flex-col space-y-4">
                                <div><label for="email" className="text-xs font-semibold text-gray-500">Email</label><input type="email" id="email" name="email" placeholder="john.capler@fang.com" className="mt-1 block w-full rounded border-gray-300 bg-gray-50 py-3 px-4 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500" /></div>
                                <div className="relative"><label for="card-number" className="text-xs font-semibold text-gray-500">Card number</label><input type="text" id="card-number" name="card-number" placeholder="1234-5678-XXXX-XXXX" className="block w-full rounded border-gray-300 bg-gray-50 py-3 px-4 pr-10 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500" /><img src="/images/uQUFIfCYVYcLK0qVJF5Yw.png" alt="" className="absolute bottom-3 right-3 max-h-4" /></div>
                                <div>
                                    <p className="text-xs font-semibold text-gray-500">Expiration date</p>
                                    <div className="mr-6 flex flex-wrap">
                                        <div className="my-1">
                                            <label for="month" className="sr-only">Select expiration month</label
                                            ><select name="month" id="month" className="cursor-pointer rounded border-gray-300 bg-gray-50 py-3 px-2 text-sm shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500">
                                                <option value="">Month</option>
                                                <option value="01">January</option>
                                                <option value="02">February</option>
                                                <option value="03">March</option>
                                                <option value="04">April</option>
                                                <option value="05">May</option>
                                                <option value="06">June</option>
                                                <option value="07">July</option>
                                                <option value="08">August</option>
                                                <option value="09">September</option>
                                                <option value="10">October</option>
                                                <option value="11">November</option>
                                                <option value="12">December</option>
                                            </select>
                                        </div>
                                        <div className="my-1 ml-3 mr-6">
                                            <label for="year" className="sr-only">Select expiration year</label
                                            ><select name="year" id="year" className="cursor-pointer rounded border-gray-300 bg-gray-50 py-3 px-2 text-sm shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500">
                                                <option value="">Year</option>
                                                <option value="1">2021</option>
                                                <option value="2">2022</option>
                                                <option value="3">2023</option>
                                                <option value="4">2024</option>
                                            </select>
                                        </div>
                                        <div className="relative my-1"><label for="security-code" className="sr-only">Security code</label><input type="text" id="security-code" name="security-code" placeholder="Security code" className="block w-36 rounded border-gray-300 bg-gray-50 py-3 px-4 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500" /></div>
                                    </div>
                                </div>
                                <div><label for="card-name" className="sr-only">Card name</label><input type="text" id="card-name" name="card-name" placeholder="Name on the card" className="mt-1 block w-full rounded border-gray-300 bg-gray-50 py-3 px-4 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500" /></div>
                            </form>
                            <p className="mt-10 text-center text-sm font-semibold text-gray-500">By placing this order you agree to the <a href="#" className="whitespace-nowrap text-teal-400 underline hover:text-teal-600">Terms and Conditions</a></p>
                            <button type="submit" className="mt-4 inline-flex w-full items-center justify-center rounded bg-teal-600 py-2.5 px-4 text-base font-semibold tracking-wide text-white text-opacity-80 outline-none ring-offset-2 transition hover:text-opacity-100 focus:ring-2 focus:ring-teal-500 sm:text-lg" onClick={placeOrder}>Place Order</button>
                        </div>
                    </div>



                    <div className="relative col-span-full flex flex-col py-6 pl-8 pr-4 sm:py-12 lg:col-span-4 lg:py-24">
                        <h2 className="sr-only text-w">Order summary</h2>
                        <div>
                            
                            <img src="https://images.unsplash.com/photo-1581318694548-0fb6e47fe59b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" className="absolute inset-0 h-full w-full object-cover" />
                            <div className="absolute inset-0 h-full w-full bg-gradient-to-t from-teal-800 to-teal-400 opacity-85"></div>
                        </div>
        
                        <div className="relative" >
                            {cart.map((item) => (
                                <ul className="space-y-5">
                                    <li className="flex justify-between my-2" key={item.id}>
                                        <div className="inline-flex">
                                            <img src={item.image} alt={item.title} className="w-16 h-16 object-contain" />
                                            <div className="ml-3">
                                                <p className="text-base font-semibold text-white">{item.title} <p className="text-sm font-normal text-white">Quantity : ({item.quantity})</p></p>
                                                {/* <p className="text-sm font-medium text-white text-opacity-80">Pdf, doc Kindle</p> */}
                                            </div>
                                        </div>
                                        <p className="text-sm font-semibold text-white">₹{item.price.toFixed(2)}</p>
                                    </li>
                                </ul>
                            ))

                            }
                            <div className="my-5 h-0.5 w-full bg-white bg-opacity-30"></div>
                            <div className="space-y-2">
                                <p className="flex justify-between text-lg font-bold text-white"><span>Total price:</span><span>₹{total.toFixed(2)}</span></p>
                                <p className="flex justify-between text-sm font-medium text-white"><span>Discount : 10%</span><span>₹{ (total * 0.1).toFixed(2) }</span></p>
                            </div>
                        </div>


                        <div className="relative mt-10 text-white">
                            <h3 className="mb-5 text-lg font-bold">Support</h3>
                            <p className="text-sm font-semibold">+01 653 235 211 <span className="font-light">(International)</span></p>
                            <p className="mt-1 text-sm font-semibold">support@nanohair.com <span className="font-light">(Email)</span></p>
                            <p className="mt-2 text-xs font-medium">Call us now for payment related issues</p>
                        </div>
                        <div className="relative mt-10 flex">
                            <p className="flex flex-col"><span className="text-sm font-bold text-white">Money Back Guarantee</span><span className="text-xs font-medium text-white">within 30 days of purchase</span></p>
                        </div>
                    </div>


                </div>
            </div>

        </>
    )
}

export default Checkout;