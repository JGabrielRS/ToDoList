import {useNavigate, useSearchParams} from "react-router-dom";
import {ChevronLeftIcon} from "lucide-react";
import Title from "../componentes/Title.jsx";

function TaskPage(){
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const content = searchParams.get("content");
    const title = searchParams.get("title");

    return (
        <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
            <div className="w-[500px] space-y-4">
                <div className="bg-slate-200 p-4 rounded-md">
                    <div className="flex justify-center relative mb-6">
                        <button
                            onClick={() => navigate(-1)}
                            className="rounded-md absolute left-0 top-0 bottom-0 text-gray-500 flex items-center justify-center hover:bg-gray-300 cursor-pointer"
                        >
                            <ChevronLeftIcon className="h-8 w-8"/>
                        </button>
                        <Title>
                            Detalhes da Task
                        </Title>
                    </div>
                    <h2 className="text-3xl text-slate-700 font-bold">
                        {title}
                    </h2>
                    <p className="text-slate-700 break-words">
                        {content}
                    </p>
                </div>
            </div>
        </div>
    )
}
export default TaskPage
