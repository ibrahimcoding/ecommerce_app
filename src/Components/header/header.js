import React from "react";
import "./header.css";
// import SearchIcon from '@mui/icons-material/Search';
// import Logo from "../../assets/images/Logo.png"
import logo from "../../Assets/images/logo.jfif"
const Header = () => {
    return (
        <>
            <header>
                <div className="container-fluid">
                    <div className="row">
                        {/* Logo Part */}
                        <div className="col-sm-2">
                            {/* <img src={Logo} /> */}
                            <img src={logo} />
                        </div>
                        <div className="col-md-5">
                            <div className="headerSearch d-flex align-items-center">
                                <div className="selectDropDown">
                                    All Categories
                                    <Select/>
                                </div> 
                                <div className="search">
                                    <input type="text" placeholder="Search For Item..."/>
                                    {/* <SearchIcon/> */}
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
export default Header;