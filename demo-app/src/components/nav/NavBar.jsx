import React from 'react';
import './AppBar.css'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { HashLink as Link } from "react-router-hash-link";



export default function NavBar() {

  //const list = ['HOME', 'TEAM', 'SERVICES', 'CONTACT']

  /*const lst = list.map((value,index) => {
    return <div className="div-list">
      <ul>
        <li  key={index}><Router><Link to="/Service">{value}</Link></Router></li>
      </ul>
    </div>
  })
*/
  return (
    <>


      <div className="root">
        <AppBar position="fixed">
          <div className="tool-bar">
            <Toolbar>
              <li>
                <Link to="#home" className="link"><div className="nav-icon"></div>
</Link>
              </li>
              <Typography variant="h6" className="title">
                <div className="div-list">
                  <ul >
                    <li>
                      <Link to="#" className="link">HOME</Link>
                    </li>
                    <li>
                      <Link to="#team" className="link">TEAM</Link>
                    </li>
                    <li>
                      <Link to="#service" className="link">SERVICES</Link>
                    </li>
                    <li>
                      <Link to="#contact" className="link">CONTACT</Link>
                    </li>
                  </ul>
                </div>

              </Typography>
            </Toolbar>
          </div>
        </AppBar>
      </div>
    </>
  );
}
