import React from 'react';
import './LoginPage.css';
import activity from './activity.svg';
import logobeeteller from './logobeeteller.svg';
import Login from './Login.svg';



function LoginPage() {

    function handleClick() {
        alert('Login');
      }
    return (
        <div className="nav-top">
            <div className='nav-infos'>
                <div className='logos'>
                    <nav className='logo-beeteller'>
                        <nav className='logo-beeteller'><img src={logobeeteller} alt='logo'></img></nav>
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
            <div className='imagem' ><img src={Login} alt='activity'></img></div>
            <div className='section-login'>
                <div className='head'>
                    <div className='title'>
                        <div className='t1'>Olá! Bem vindo de volta</div>
                        <div className='t2'>Faça login com seus dados inseridos durante o registro</div>
                    </div>
                    <div className='form'>
                        <div className='inputs'>
                            <div className='e-mail'>
                                <div className='t-e-mail'>E-mail</div>
                                <input className='frame30' type="e-mail" id="1" name="e-mail" placeholder="Exemplo@email.com"/>  
                            </div>
                            <div className='password'>
                                <div className='frame33'>
                                    <div className='t-senha'>Senha</div>
                                    <button onClick={handleClick} className='t-esqueceu-a-senha'>Esqueceu a senha</button>
                                </div> 
                                <input className='frame30' type="password" id="2" name="password" placeholder="Enter password"/>    
                            </div>
                        </div>
                        <div >
                        <button onClick={handleClick} className='btn-login'>Login</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>     
    );
}
export default LoginPage;