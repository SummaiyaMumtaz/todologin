import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom"
import Login from "./login";

export default function Home() {
    let navigate = useNavigate();
    let sign= ()=>{
    navigate("/signup")
    }
    return(
       <>
       
       <Box className="header">
       <h1 >Todo App</h1>
       </Box>

       <Box>
       <Login/>
       <p>Are you a new user? <span><a className="navigate" onClick={sign}>Signup</a>
      </span></p>
       </Box>
       </>
    )
}