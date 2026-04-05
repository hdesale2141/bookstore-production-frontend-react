import { useNavigate } from "react-router-dom";
import { useState } from "react"
import api from "../api/api";
import { Link } from "react-router-dom";

function Register(){
    const[username, setUsername] = useState("");
    const[password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleRegistration = async () => {
        try{
            if(!username || !password){
                alert("Username or Password cannot be null...");
            }else{
                const response = await api.post("/user/register",{
                username: username,
                password: password
            });

            console.log(response);
            alert("Registration Success...");
            navigate("/login");
            }

        }catch(error){
            console.log(error);
            alert("Registration Faild...!");
        }
    }


    return(
        
        <div className="min-h-screen bg-gray-100">
             <div className="flex justify-center items-center h-screen bg-grey-100">
            <div className="bg-white p-6 rounded shadow-md w-80 px-6 py-16">
                 <h1 className="text-2xl font-bold mb-4 text-center">User Registration</h1>

            <input type="text"
            placeholder="Enter Username"
            onChange={(e) => setUsername(e.target.value)}
            className="w-full border p-2 mb-4 rounded"
            id="username"
            required
            />

            <br />

            <input type="password"
            placeholder="password"
            onChange={(e)=> setPassword(e.target.value)}
            className="w-full border p-2 mb-4 rounded"
            id="password"
            // required
            />

            <br />

            <button onClick={handleRegistration} className="w-full text-white px-4 py-2 rounded bg-blue-500 transition delay-50 duration-200 ease-in-out hover:-translate-y-1 hover:scale-100 hover:bg-indigo-400">Register</button>
            <br />
            
            <div className="flex justify-center items-center text-m pt-4">
                <p>Already have an account?&nbsp;</p><Link to="/login" className="text-blue-600">Login here</Link>
            <br />
            </div>
            <div className="flex justify-center items-center text-m">
                <Link to="/" className="text-blue-600"> Back to home</Link>
            </div>
            </div>
           </div>
        </div>
          
    )
}


export default Register;