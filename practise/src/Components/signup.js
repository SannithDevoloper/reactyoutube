import { Link } from "react-router-dom"
const Signup=()=>{
    return(
        <div>
            <center>
            <form>
                <label>Name:-</label>
                <input type="text" name="name" /><br/>
                <label>PhoneNo:-</label>
                <input type="text" name="phonenumber" /><br/>
                <label>Email</label>
                <input type="email" name="email"/><br/>
                <label>password</label>
                <input type="password" name="password"/><br/>
                <Link to="/">
                <input type="submit" value="signup"/>
                </Link>
            </form>

            </center>
            
        </div>
    )
}
export default Signup