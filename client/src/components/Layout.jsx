import { Outlet, NavLink } from "react-router-dom";

export default function Layout() {
  return (
    <div className="site-wrap" style={{ padding: "16px 20px" }}>
      <h1>My Portfolio</h1>

      {/* Simple nav for the assignment */}
      <nav style={{
        display: "inline-flex",
        gap: "14px",
        background: "#2c2f36",
        padding: "10px 14px",
        borderRadius: "12px"
      }}>
        <NavLink to="/" end style={{ color: "#fff", textDecoration: "none" }}>
          Home
        </NavLink>
        <NavLink to="/about" style={{ color: "#fff", textDecoration: "none" }}>
          About
        </NavLink>
        <NavLink to="/projects" style={{ color: "#fff", textDecoration: "none" }}>
          Projects
        </NavLink>
        <NavLink to="/services" style={{ color: "#fff", textDecoration: "none" }}>
          Services
        </NavLink>
        <NavLink to="/contact" style={{ color: "#fff", textDecoration: "none" }}>
          Contact
        </NavLink>
      </nav>

      <hr style={{ opacity: 0.3, margin: "14px 0" }} />
      <Outlet />
    </div>
  );
}
