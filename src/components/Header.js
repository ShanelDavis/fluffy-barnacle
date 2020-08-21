class Header extends Component {
  render() {
    return (
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">HipJoe</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Order</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Meet</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Find</NavDropdown.Item>
                <NavDropdown.Divider />
              </NavDropdown>
            </Nav>
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
      </header>
    );
  }
}

export default Header;
