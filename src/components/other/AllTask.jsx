import { useContext } from "react"
import { AuthContext } from "../../context/AuthProvider"

const AllTask = () => {

  const [userData,setUserData] = useContext(AuthContext)

  return (
    <div className=" p-5 rounded mt-5 h-60">

      <div className="bg-pink-400 mt-2 py-2 px-4 flex justify-between rounded">
        <h2 className=" w-1/5 text-lg font-medium   rounded">Employee Name</h2>
        <h3 className="w-1/5  text-lg font-medium  rounded">New Task</h3>
        <h5 className="w-1/5  text-lg font-medium  rounded">Active Task</h5>
        <h5 className="w-1/5  text-lg font-medium  rounded">Completed</h5>
        <h5 className="w-1/5  text-lg font-medium  rounded">Failed</h5>
      </div>

      <div className="">
        {userData?.map((e) => (
          <div key={e.id} className="border mt-2 py-2 px-4 flex justify-between rounded">
            <h2 className=" w-1/5 text-lg font-medium  rounded">{e.firstName} </h2>
            <h3 className="w-1/5 text-lg font-medium text-blue-300 rounded">{e.taskCount.newTask}</h3>
            <h5 className="w-1/5 text-lg font-medium text-yellow-300 rounded">{e.taskCount.active}</h5>
            <h5 className="w-1/5 text-lg font-medium text-green-300 rounded">{e.taskCount.completed}</h5>
            <h5 className="w-1/5 text-lg font-medium text-red-300 rounded">{e.taskCount.failed}</h5>
          </div>
        ))}
      </div>


    </div>
  )
}

export default AllTask