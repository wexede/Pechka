import React from 'react';
import Logo from './pictures/Logo.svg'


const Header = () => {
    return (
        <div>
            <div className='header'>
                <img className='logo' src={Logo}/>

                <a className='headerLinks' href='avito.com'>Где купить?</a>
                <a className='headerLinks' href='avito.com'>Список товаров</a>
                <a className='headerLinks' href='avito.com'>Как готовим?</a>
                <a className='headerLinks' href='avito.com'>О нашей пекарне</a>
                <a className='headerLinks' href='avito.com'>Как доставим?</a>
            </div>
        </div>
    );
};

export default Header;