import React from 'react';
import './NavTop.css';
import activity from './activity.svg';
import logobeeteller from './logobeeteller.svg';

function NavTop(props) {
    return (
        <div className="nav-top">
            <div className='nav-infos'>
                <div className='logos'>
                    <nav className='logo-beeteller'>
                        <nav className='b'><img src={logobeeteller} alt='b'></img></nav>
                    </nav>
                    <nav className='divider'></nav>
                    <nav className='cotacoes'>
                        <nav className='t-cotacoes'>cotações</nav>
                        <nav className='activity'>
                            <nav className='v-activity'><img src={activity} alt='activity'></img></nav>
                        </nav>     
                    </nav>
                </div>
                <div className='idioma'>EN</div>
            </div>
        </div>     
    );
}
export default NavTop;