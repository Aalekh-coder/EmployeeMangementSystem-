import { useContext, useEffect, useState } from "react"
import Login from "./components/Auth/Login"
import AdminDashboard from "./components/Dashboard/AdminDashboard"
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard"
import { AuthContext } from "./context/AuthProvider"


const App = () => {

  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const [usetData,setUserData] = useContext(AuthContext)

  // useEffect(() => {
  //   const loggedInUser = localStorage.getItem("loggedInUser")

  //   if (loggedInUser) {
  //     const userData = JSON.parse(loggedInUser);
  //     setUser(userData.role);
  //     setLoggedInUserData(userData.data)
  //   }
  // }, [])


  const handleLogin = (email, password) => {
    if (email === "aalekh@gmail.com" && password === "123") {
      setUser({ role: "admin" })
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }))
    } else if (usetData) {
      const employee = usetData.find((e) => email === e.email && e.password === password);
      if (employee) {
        setUser({ role: "employee" });
        setLoggedInUserData(employee)
        localStorage.setItem("loggedInUser", JSON.stringify({ role: "employee",data: employee }))
      }
    } else {
      alert("Invaild Credentials")
    }
  }


  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user?.role == "admin" ? <AdminDashboard changeUser={setUser} /> : (user?.role == "employee" ? <EmployeeDashboard changeUser={setUser} data={loggedInUserData} /> : null)}
    </>
  )
}

export default App