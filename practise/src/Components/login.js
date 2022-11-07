import { Link } from "react-router-dom"
const Login=()=>{
    return(
        <div>
            <center>
            <form>
                <label>Email</label>
                <input type="email" name="email"/><br/>
                <label>password</label>
                <input type="password" name="password"/><br/>
                
                <Link to="/home">
                <input type="submit" value="login"/>
                </Link>
                <Link to="/signup">
                <input type="submit" value="signup"/>
                </Link>
        
            </form>
            </center>
            
        </div>
    )
}
export default Login