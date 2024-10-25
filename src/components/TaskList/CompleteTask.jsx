
const CompleteTask = ({data}) => {
  return (
    <div className=" p-5 flex-shrink-0 h-full w-[300px] bg-green-400 rounded-xl">
    <div className="flex justify-between items-center">
        <h3 className="bg-red-600 text-sm px-3 py-2 rounded">{data.category}</h3>
        <h4 className="text-sm">20feb 2024</h4>
    </div>
    <h2 className="mt-5 text-2xl font-semibold">
    {data?.taskTitle}
    </h2>
    <p className="text-sm mt-2">{data.taskDescription}</p>

    <div className=" mt-2 ">
        <button className="w-full">Completed</button>
    </div>
    </div>
   
  )
}

export default CompleteTask