

import React, {useState} from "react";
import logo from '../../assets/images/favicon.png';
import moon from '../../assets/images/moon.png';
import sun from '../../assets/images/sun.png';
import styled, {ThemeProvider} from 'styled-components';
import {lightTheme, darkTheme, GlobalStyles} from '../../theme';

const StyledApp = styled.div`
color: ${props => props.theme.fontColor};
`


export default function Navbar() {
   const [ theme, setTheme] = useState("light");
   const themeToggler = () => {
     theme === 'light' ? setTheme('dark') : setTheme("light");
   }
return (
<React.Fragment>
<ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
   <GlobalStyles/>
   <StyledApp>
   <header>
 
      <div className="main-nav ms rel">
         <div className="top-btn-mob d-block d-lg-none">
            <div className="d-flex align-items-center right-butns">
               <a href="/" className="top-btn order-lg-2 me-4 ms-lg-4 me-lg-0">
               EDEN DeFi 
               </a>
               <button onClick={() => themeToggler()} className="moon-icon order-lg-1"></button>
            </div>
         </div>
         <nav className="navbar navbar-expand-lg">
            <div className="container-lg">
               <a className="navbar-brand" href="#"><img src={logo} alt="Logo" /> <span>MsDoge</span></a>
               <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
               <i className="fas fa-bars"></i>
               </button>
               <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                     <li className="nav-item">
                        <a className="nav-link active" href="/">Home</a>
                     </li>
                     <li className="nav-item">
                        <a className="nav-link" href="/coin">Stake</a>
                     </li>
                  </ul>
                  <div className="float-end d-none d-lg-block">
                     <div className="d-flex align-items-center right-butns">
                     
                        <a href="#" className="top-btn order-lg-2 me-4 ms-lg-4 me-lg-0">
                        EDEN DeFi 
                        </a>
                        <button onClick={() => themeToggler()} className="moon-icon order-lg-1"></button>
                     </div>
                  </div>
               </div>
            </div>
         </nav>
      </div>
  
   </header>
   </StyledApp>
   </ThemeProvider>
   </React.Fragment>
)
}

