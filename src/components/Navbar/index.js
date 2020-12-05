import React, { useState } from 'react';
import 'firebase/auth';
// import { Link } from 'react-router-dom';
// import {
//   Collapse,
//   Navbar,
//   NavbarToggler,
//   Nav,
//   NavItem,
//   UncontrolledDropdown,
//   DropdownToggle,
//   DropdownMenu,
//   DropdownItem,
// } from 'reactstrap';
// import SearchInput from '../SearchInput';

export default function MyNavbar(props) {
  // const [isOpen, setIsOpen] = useState(false);
  // const toggle = () => setIsOpen(!isOpen);
  return (
    <div className="nav-container">
      <div className="nav-link-container">
        <ul className="nav-links">
          <li><a href="/about">about</a></li>
          <li><a href="/my-work">work</a></li>
          <li><a href="/contact">contact</a></li>
        </ul>
      </div>
      {/* <Navbar color='white' dark expand='md' className='navbar-container justify-content-between'>
        <Link className="navbar-brand" to='/'>liz barnes</Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className='mr-auto' navbar>
          <NavItem>
              <Link className="nav-link" to='/about'>about</Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to='/my-work'>work</Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to='/contact'>
                contact
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar> */}
    </div>
  );
}
// import React from 'react';

// export default function MyNavbar() {
//   return (
//     <div className="navbar-container">
//       <ul class="nav justify-content-center">
//         <li class="nav-item">
//           <a class="nav-link active" href="#">Active</a>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link" href="#">Link</a>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link" href="#kgk">Link</a>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
//         </li>
//       </ul>
//     </div>
//   );
// }
// import React, { StrictMode } from 'react';
// import { Link } from 'react-router-dom';
// import {
//   Navbar,
//   Nav,
//   NavItem,
// } from 'reactstrap';

// export default function MyNavbar() {
//   return (
//     <div></div>
//       <StrictMode>
//       <Navbar expand='md' className='navbar justify-content-between'>
//           <Nav className='mr-auto' navbar>
//             <NavItem>
//               <Link className='nav-bar-home' to='/about'>about</Link>
//             </NavItem>
//             <NavItem>
//               <Link className='nav-bar-flash' to='/my-work'>work</Link>
//             </NavItem>
//             <NavItem>
//               <Link className='nav-bar-my-cards' to='/contact'>contact</Link>
//             </NavItem>
//           </Nav>
//           </Navbar>
//     </StrictMode>
//   );
// }
