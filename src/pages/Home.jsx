import { Link } from "react-router-dom";
import BooksCard from "../components/BooksCard";
import { useContext, useEffect, useState } from "react";
import api from "../api/api";
import '../style.css'
import { CartContext } from "../context/CartContext";


function Home() {

    const [Books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const { name } = useContext(CartContext);


    useEffect(() => {
        api.get("/book/")
            .then((res) => {
                setBooks(res.data);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <>


            {loading ?
                <div className="flex items-center justify-center">
                    <div className="loader">
                        <div className="justify-content-center jimu-primary-loading"></div>
                    </div>
                </div>
                : (
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
                        {Books.map((book) => (
                            <BooksCard key={book.id} books={book} />
                        ))}
                    </div>

                )
            }

            <h2>{name}</h2>
        </>
    )
}

export default Home;