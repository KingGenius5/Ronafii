import React from 'react'
import './Header.css'
import SearchIcon from "@material-ui/icons/Search"
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket"

function Header() {
    return (
        // Logo on navbar + searchbar + buttons on navbar, sign in + orders + cart
        <div className='header'>
            <img className="header__logo" src="https://financialtribune.com/sites/default/files/styles/360x260/public/field/image/17january/coronavirus.png?itok=uGQ6wXam&c=3063b7d0d2b2eedd412294286f2cfa3b"></img>
    
            <div className="header__search">
                <input className="header__searchInput" type="text" />
                <SearchIcon className="header__searchIcon"/>
            </div>
            
            <div className="header__nav">
                <div className='header__option'>
                    <span className="header__optionLineOne">Hello, User</span>
                    <span className="header__optionLineTwo">Sign In</span>
                </div>

                <div className='header__option'>
                    <span className="header__optionLineOne">Returns</span>
                    <span className="header__optionLineTwo">& Orders</span>
                    
                </div>

                <div className='header__option'>
                    <span className="header__optionLineOne">Your</span>
                    <span className="header__optionLineTwo">Prime</span>
                    
                </div>

                <div className="header__optionBasket">
                    <ShoppingBasketIcon />
                    <span className="header__optionLineTwo header__basketCount">0</span>
                </div>

            </div>

        </div>
    )
}

export default Header
