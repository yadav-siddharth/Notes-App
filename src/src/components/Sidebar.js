import {useState} from 'react';
import {FaBars} from 'react-icons/fa';
import {Link} from 'react-router-dom';
import {AiOutlineClose} from 'react-icons/ai';
import {SidebarData} from './SideBarData';
import './navbar.css'; 
import {IconContext} from 'react-icons'

function Sidebar(){
          const [sidebar,setSidebar]= useState(false)

          const showSidebar = ()=>{
                    setSidebar(!sidebar)
          }

          return(
                    <div>
                       <IconContext.Provider value={{color:'#fff'}}>
                                        <div className="navbar">
                                                  <Link to="#" className='menu-bars'>
                                                            <FaBars onClick={showSidebar}/>
                                                  </Link>

                                        </div>
                                        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                                                  <ul className='nav-menu-items' onClick={showSidebar}>
                                                  <li className='navbar-toggle'>
                                                  <Link to='#' className='menu-bars'>
                                                            <AiOutlineClose/>
                                                  </Link>
                                                  </li>
                                                  {SidebarData.map((item,index)=>{
                                                            return(
                                                                      <li key={index} className={item.cName}>
                                                                                <Link to={item.path}>
                                                                                          {item.icon}
                                                                                          <span>{item.title}</span>
                                                                                </Link>
                                                                      </li>
                                                            )
                                                  })}   
                                                  </ul>
                                        </nav> 
                       </IconContext.Provider>

                    </div>

   
          )
}          

export default Sidebar;