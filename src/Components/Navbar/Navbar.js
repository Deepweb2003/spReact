import React, { useState } from 'react';
import "./styles.css"
import "./navbar.css"

const Navbar = () => {

    const [menu, setMenu] = useState(true);

    const handleMenu = () => {
        setMenu(!menu);
    }
    return (
        <>
            <nav className='navbar' data-aos="fade-down"
                data-aos-delay="100"
                data-aos-duration="500"
                data-aos-easing="ease-out"
                data-aos-mirror="true"
                data-aos-once="false" style={{background:"none"}}>
                <div className="nav_wrapper">
                    <div className="logo">
                        SANGANAN PRAYOG
                    </div>
                    <div className="nav_menu">
                        <ul className='nav_menu_list'>
                            <li className='nav_menu_item'><a href="#about">Projects</a></li>
                            <li className='nav_menu_item'><a href="#problems">Events</a></li>
                            <li className='nav_menu_item'><a href="#timeline">Team</a></li>
                            <li className='nav_menu_item'><a href="#faqs">Contact Us</a></li>
                        </ul>
                        <i onClick={handleMenu} className={`nav_menu_icon fa-solid fa-bars`} />
                    </div>
                </div>
            </nav>

            <ul className={menu ? 'nav_mobile' : 'nav_mobile mobile_active'}>
                <li onClick={() => setMenu(!menu)} className='mobile_menu_item'><a href="#about">Projects</a></li>
                <li onClick={() => setMenu(!menu)} className='mobile_menu_item'><a href="#problems">Events</a></li>
                <li onClick={() => setMenu(!menu)} className='mobile_menu_item'><a href="#timeline">Team</a></li>
                {/* <li onClick={() => setMenu(!menu)} className='mobile_menu_item'><a href="#sponsors">Sponsors</a></li> */}
                <li onClick={() => setMenu(!menu)} className='mobile_menu_item'><a href="#faqs">Contact Us</a></li>
            </ul>
        </>
    );
}

export default Navbar;