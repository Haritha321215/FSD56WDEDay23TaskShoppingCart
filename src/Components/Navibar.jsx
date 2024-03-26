import { useNavigate } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useState } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
function Navibar({ totalItems }) {
  const navigate = useNavigate();
 
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar expanded={expanded} expand="lg" bg="light" variant="light">
      <Navbar.Brand href="#home">Online store</Navbar.Brand>
      <Navbar.Toggle
        aria-controls="responsive-navbar-nav"
        onClick={() => setExpanded(!expanded)}
      />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#" onClick={() => navigate("/")}>
            Home
          </Nav.Link>
          <Nav.Link href="#" onClick={() => navigate("/about")}>
            About
          </Nav.Link>
          <NavDropdown title="Shop" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#">All Products</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#">Popular Items</NavDropdown.Item>
            <NavDropdown.Item href="#">New Arrivals</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#" onClick={() => navigate("/cart")}>
          <ShoppingCartIcon />cart {" "}
            <span className="cart-count">{`  ${totalItems.length}`}</span>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
export default Navibar;
