import { useState } from "react";

const Login = ({ handleLogin }) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault()
    handleLogin(email, password)
    setEmail("")
    setPassword("")
  }
{/* <div class="w-24 h-24 border-4 animate-rgb-border"></div> */}


  return (
    <div className='flex w-screen h-screen items-center justify-center '>
      <div className="border-4 border-emerald-600 p-20 rounded-xl animate-pulse animate-rgb-border">
        <form onSubmit={(e) => submitHandler(e)} className="flex flex-col items-center justify-center">

          <input name="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="border-2 border-emerald-600 rounded-full py-4 px-3 text-xl outline-none bg-transparent placeholder:text-gray-400 " type="email" placeholder="Enter your email" />

          <input name="password" value={password} onChange={(e) => setPassword(e.target.value)} required className="border-2 border-emerald-600 rounded-full py-4 px-3 text-xl outline-none bg-transparent placeholder:text-gray-400 mt-3" type="password" placeholder="Enter your password" />

          <button className="bg-green-500 px-24 rounded-full mt-3 py-4">Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login


