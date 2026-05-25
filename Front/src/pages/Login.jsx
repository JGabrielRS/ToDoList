import {useNavigate} from "react-router-dom";
import Input from "../componentes/Input.jsx";
import {useState} from "react";
import ButtonCreate from "../componentes/ButtonCreate.jsx";

function Login(){
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const API_URL = "https://camper-unstopped-bust.ngrok-free.dev";

    function onCreateAccount(){
        navigate(`/createaccount`);
    }
    async function onLogin(login, password){
        try {
            const response = await fetch(
                `${API_URL}/login`,
                {
                    method: "POST",
                    headers:{"Content-Type":"application/json"},
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
        <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
            <div className="w-[500px] space-y-4">
                <div className="flex justify-center relative mb-4">
                    <h1 className="text-4xl text-amber-50 text-center mb-3 font-bold">
                        ToDoList
                    </h1>
                </div>
                <div className="bg-slate-200 flex flex-col p-4 gap-y-3 rounded-md">
                    <div className="flex flex-col justify-center">
                        <h3 className="text-xl text-left text-gray-500 text-center mb-1 font-bold">
                            Login
                        </h3>
                        <Input
                        type="text"
                        placeholder="Enter your login:"
                        value={login}
                        onChange={(event => setLogin(event.target.value))}
                        />
                    </div>
                    <div className="flex flex-col justify-center">
                        <h3 className="text-xl text-left text-gray-500 text-center mb-1 font-bold">
                            Password
                        </h3>
                        <Input
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
                            Sig in
                        </ButtonCreate>
                    </div>
                    <div className="flex flex-col justify-center">
                        <button
                        className="h-7 w-full text-gray-500 rounded-md text-center font-medium hover:cursor-pointer hover:underline"
                        onClick={() => {
                            onCreateAccount();
                        }}
                        >
                            Don&#39;t have an account? <span className="font-bold">Create</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Login
