import {useNavigate} from "react-router-dom";
import Input from "../componentes/Input.jsx";
import {useState} from "react";
import ButtonCreate from "../componentes/ButtonCreate.jsx";
import API_URL from "../services/api";

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
                `${API_URL}/users`,
                {
                    method: "POST",
                    headers:{"Content-Type":"application/json", "ngrok-skip-browser-warning": "true"},
                    body:JSON.stringify({name, login, password}),
                }
            );
        } catch (error){
            console.error(error);
            alert("Failed to connect to the server");
        }
    }

    return (
        <div className="w-screen h-screen flex justify-center p-6">
            <div className="w-[500px] space-y-4">
                <div className="flex justify-center relative mb-4">
                    <h1 className="font-inter text-4xl text-center font-bold">
                        CREATE ACCOUNT
                    </h1>
                </div>
                <div className="flex flex-col p-4 gap-y-3">
                    <div className="flex flex-col justify-center">
                        <h3 className="font-inter text-xl text-left text-center mb-1 font-bold">
                            NAME
                        </h3>
                        <Input
                            class="font-inter bg-white hover:bg-gray-50 border-b-1 border-black/20 p-2 text-gray-150 mb-4"
                            type="text"
                            placeholder="Enter your name:"
                            value={name}
                            onChange={(event => setName(event.target.value))}
                        />
                    </div>
                    <div className="flex flex-col justify-center">
                        <h3 className="font-inter text-xl text-left text-center mb-1 font-bold">
                            LOGIN
                        </h3>
                        <Input
                            class="font-inter bg-white hover:bg-gray-50 border-b-1 border-black/20 p-2 text-gray-150 mb-4"
                            type="text"
                            placeholder="Create a login:"
                            value={login}
                            onChange={(event => setLogin(event.target.value))}
                        />
                    </div>
                    <div className="flex flex-col justify-center">
                        <h3 className="font-inter text-xl text-left text-center mb-1 font-bold">
                            PASSWORD
                        </h3>
                        <Input
                            class="font-inter bg-white hover:bg-gray-50 border-b-1 border-black/20 p-2 text-gray-150 mb-4"
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
                        CREATE
                        </ButtonCreate>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CreateAccount
