import { Outlet, Link } from "react-router-dom";

const NavBar = () => {
    return (
        <>
       <nav>
<ul>
<li>
    <Link to="/">Home</Link>
</li>
<li>
    <Link to="/contact">Contact</Link>
</li>
<li>
    <Link to="/register">Register</Link>
</li>

</ul>

       </nav>
        <Outlet />
        </>
    )
};
export default NavBar;
