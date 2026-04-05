import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function BooksCard({books}){
    const { addToCart } = useContext(CartContext);

    return(
        <div className="border p-4 rounded-lg shadow hover:scale-105 transition">
            <img src={books.image} alt={books.title}
            className="w-full h-40 object-cover"
            />

            <h2 className="text-lg font-semibold mt-2">
                {books.title}
            </h2>

            <h3 className="text-sm">
                {books.Author}
            </h3>

            <p className="text-green-600 font-bold">
                ₹{books.price}
            </p>

            <button className="bg-blue-500 text-white px-3 py-1 rounded mt-2 w-full" 
                onClick={() => addToCart(books)}>  
            
                Add to Cart
            </button>
        </div>
    )
}

export default BooksCard;