import { useState } from "react";
import { setLocalStorage } from "../../utils/localStorage";

const Header = (props) => {
  // const [username, setUsername] = useState("");

  // if (!data) {
  //   setUsername("Admin")
  // } else {
  //   setUsername(data?.firstName)
  // }

  const logoutUser = () => {
    localStorage.setItem("loggedInUser", "")
    props?.changeUser("")
  }
  return (
    <div className="flex items-center justify-between">
      <h1 className="text-2xl font-medium">Hello <br /><span className="text-3xl font-semibold">{props?.firstName}👋</span> </h1>
      <button onClick={logoutUser} className="bg-yellow-500 text-white px-5 py-2 rounded-md text-lg font-medium">Logout</button>
    </div>
  )
}

export default Header