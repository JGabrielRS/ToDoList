import {useNavigate} from "react-router-dom";
import Input from "../componentes/Input.jsx";
import {useState} from "react";
import ButtonCreate from "../componentes/ButtonCreate.jsx";

function CreateAccount(){
    const [name, setName] = useState("");
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    function onUserCreated(){
        navigate(`/`);
    }

    async function createAccount(name, login, password){
        try {
            await fetch(
                "http://localhost:8080/users",
                {
                    method: "POST",
                    headers:{"Content-Type":"application/json"},
                    body:JSON.stringify({name, login, password}),
                }
            );
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
                        Create Account
                    </h1>
                </div>
                <div className="bg-slate-200 flex flex-col p-4 gap-y-3 rounded-md">
                    <div className="flex flex-col justify-center">
                        <h3 className="text-xl text-left text-gray-500 text-center mb-1 font-bold">
                            Name
                        </h3>
                        <Input
                            type="text"
                            placeholder="Enter your name:"
                            value={name}
                            onChange={(event => setName(event.target.value))}
                        />
                    </div>
                    <div className="flex flex-col justify-center">
                        <h3 className="text-xl text-left text-gray-500 text-center mb-1 font-bold">
                            Login
                        </h3>
                        <Input
                            type="text"
                            placeholder="Create a login:"
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
                            placeholder="Create a password:"
                            value={password}
                            onChange={(event => setPassword(event.target.value))}
                        />
                    </div>
                    <div className="flex flex-col justify-center mt-3">
                        <ButtonCreate
                        onClick={() => {
                            createAccount(name, login, password);
                            onUserCreated();
                        }}
                        >
                            Sig in
                        </ButtonCreate>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CreateAccount
