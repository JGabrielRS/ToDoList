import {useNavigate} from "react-router-dom";
import Input from "../componentes/Input.jsx";
import {useState} from "react";
import ButtonCreate from "../componentes/ButtonCreate.jsx";
import API_URL from "../services/api";

function Login(){
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    function onCreateAccount(){
        navigate(`/createaccount`);
    }
    async function onLogin(login, password){
        try {
            const response = await fetch(
                `${API_URL}/login`,
                {
                    method: "POST",
                    headers:{"Content-Type":"application/json", "ngrok-skip-browser-warning": "true"},
                    body:JSON.stringify({login, password}),
                }
            );
            const data = await response.json();
            if(data.success){
                localStorage.setItem(
                    "user",
                    JSON.stringify(data)
                );
                navigate("/home");
            } else {
                alert(data.message);
            }
        } catch (error){
            console.error(error);
            alert("Failed to connect to the server");
        }
    }

    return (
        <div className="w-screen h-screen flex justify-center p-6">
            <div className="w-[500px] space-y-4">
                <div className="flex justify-center relative mb-12">
                    <h1 className="font-inter text-6xl text-center mb-3 font-bold">
                        ToDoList
                    </h1>
                </div>
                <div className="flex flex-col p-4 gap-y-8">
                    <div className="flex flex-col justify-center gap-y-2">
                        <h3 className="font-inter text-xl text-left text-center mb-1 font-bold">
                            LOGIN
                        </h3>
                        <Input
                        class="font-inter bg-white hover:bg-gray-50 border border-black/20 p-2 text-gray-150"
                        type="text"
                        placeholder="Enter your login:"
                        value={login}
                        onChange={(event => setLogin(event.target.value))}
                        />
                    </div>
                    <div className="flex flex-col justify-center gap-y-2">
                        <h3 className="font-inter text-xl text-left text-center mb-1 font-bold">
                            PASSWORD
                        </h3>
                        <Input
                            class="font-inter bg-white hover:bg-gray-50 border border-black/20 p-2 text-gray-150"
                            type="password"
                            placeholder="Enter your password:"
                            value={password}
                            onChange={(event => setPassword(event.target.value))}
                        />
                    </div>
                    <div className="flex flex-col justify-center mt-3">
                        <ButtonCreate
                        onClick={() => {
                            if (!login.trim() || !password.trim()){
                                return alert("login and password required")
                            }
                            onLogin(login, password)
                        }}
                        >
                            LOGIN
                        </ButtonCreate>
                    </div>
                    <div className="flex flex-col justify-center">
                        <button
                        className="h-7 w-full text-black rounded-md text-center font-medium hover:cursor-pointer hover:underline"
                        onClick={() => {
                            onCreateAccount();
                        }}
                        >
                            Don&#39;t have an account? <span className="font-bold">Create</span>
                        </button>
                    </div>
                </div>
                <footer className="text-center text-sm text-black/60 w-full mt-auto">
                Created by <a href="https://github.com/JGabrielRS" target="_blank" rel="noopener noreferrer" className="text-black/80 hover:underline">
                João Gabriel
                </a>

                </footer>
            </div>
        </div>
    )
}
export default Login
