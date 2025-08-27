import Header from "./header"
import { Link } from "react-router-dom"
function NavBar(){
    return(
        <nav className="bg-stone-300 px-4 py-2  mb-10">
      <div className="flex items-center justify-between max-w-screen-xl mx-auto h-16">
        <Header/>
        <div className="flex gap-4 items-center">
          <Link to="/card">
           <button className="text-amber-950">View Card</button>
          </Link>
          <Link to="/">
           <button className="text-amber-950">Home</button>
          </Link>
          
        </div>
      </div>
    </nav>
    )

}
export default NavBar