import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../api/api";
import { useNavigate } from "react-router-dom";

function Login() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem("token")) {
            navigate("/dashboard");
        }

    }, []);

    const handleLogin = async () => {
        try {
            if (!username || !password) {
                alert("Username or Password cannot be null...");
            } else {
                const response = await api.post("/user/login", {
                    username: username,
                    password: password,
                });

                localStorage.setItem("token", response.data.token);
                console.log(response.data);
                navigate("/dashboard");
                
            }
        } catch (error) {
            console.log(error);
            alert("Login Failed")
        }
    };


    return (

        <div className="min-h-screen bg-gray-100">
            <div className="flex justify-center items-center h-screen bg-grey-100">
                <div className="bg-white px-10 py-16 rounded shadow-md w-80">
                    <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
                    <input type="text"
                        placeholder="username"
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full border p-2 mb-3 rounded"
                    />
                    <br />

                    <input type="password"
                        placeholder="password"
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full border p-2 mb-4 rounded"
                    />

                    <br />

                    <button onClick={handleLogin} className="w-full bg-blue-500 text-white px-4 py-2 rounded transition delay-50 duration-200 ease-in-out hover:-translate-y-1 hover:scale-100 hover:bg-indigo-400">Login</button>
                    <br />
                    <br />
                    <div className="flex justify-center items-center ">
                        <p>New User? &nbsp;</p><Link to="/register" className="text-blue-600">Register here</Link>
                    </div>
                    <div className="flex justify-center items-center ">
                        <Link to="/" >Back to home</Link>
                    </div>

                </div>
            </div>
        </div>



    );

}

export default Login;