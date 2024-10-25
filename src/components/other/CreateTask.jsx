import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

const CreateTask = () => {

  const [userData,setUserData] = useContext(AuthContext)


    const [taskTitle, setTaskTitle] = useState("");
    const [taskDate, setTaskDate] = useState("");
    const [assignName, setAssignName] = useState("");
    const [category, setCategory] = useState("");
    const [taskDescription, setTaskDescription] = useState("");

    const [newTask, setNewTask] = useState({})

    const submitHandler = (e) => {
        e.preventDefault();

        setNewTask({ taskTitle, taskDate, category, taskDescription, active: false, newTask: true, failed: true, completed: false })

        const data = userData



        data?.forEach((e) => {
            if (assignName === e.firstName) {
                e.tasks.push(newTask)
                e.taskCount.newTask = e.taskCount.newTask +1
            }
        });

        setUserData(data)
        console.log(userData);

        setTaskTitle("")
        setTaskDate("")
        setAssignName("")
        setCategory("")
        setTaskDescription("")

    }

    return (
        <>
            <div className="p-5 bg-[#1c1c1c] mt-7 rounded">
                <form className="flex flex-wrap w-full items-start justify-between" onSubmit={(e) => submitHandler(e)}>
                    <div className="w-1/2">
                        <div>
                            <div>
                                <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
                                <input value={taskTitle} onChange={(e) => setTaskTitle(e.target.value)} type="text" className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4" />
                            </div>
                            <div>
                                <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
                                <input value={taskDate} onChange={(e) => setTaskDate(e.target.value)} type="date" className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4" />
                            </div>
                            <div>
                                <h3 className="text-sm text-gray-300 mb-0.5">Assign to</h3>
                                <input value={assignName} onChange={(e) => setAssignName(e.target.value)} type="text" className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400" />
                            </div>
                            <div>
                                <h3 className="text-sm text-gray-300 mb-0.5">Category</h3>
                                <input value={category} onChange={(e) => setCategory(e.target.value)} type="text" className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4" />
                            </div>
                        </div>


                    </div>
                    <div className="w-2/5 flex flex-col items-start">
                        <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
                        <textarea type="text" className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4" onChange={e => setTaskDescription(e.target.value)} defaultValue={taskDescription}></textarea>
                        <button className="bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full">Create Task</button>
                    </div>

                </form>
            </div>

        </>
    )
}

export default CreateTask