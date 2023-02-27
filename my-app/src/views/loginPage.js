
import { Link } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import './styles/LoginPage.css';
import activity from './Icons/activity.svg';
import logobeeteller from './Icons/logobeeteller.svg';
import Login from './Icons/Login.svg';
import { Redirect } from 'react-router'

const LoginPage = () => {
  const { loginUser } = useContext(AuthContext);
  const handleSubmit = e => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;
    username.length > 0 && loginUser(username, password);
  };

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
            <section className='section-login'>
                <div className='head'>
                    <div className='title'>
                        <div className='t1'>Olá! Bem vindo de volta</div>
                        <div className='t2'>Faça login com seus dados inseridos durante o registro</div>
                    </div>
                    <form className='form' onSubmit={handleSubmit}>
                        <div className='inputs'>
                            <div className='e-mail'>
                                <div className='t-e-mail'>E-mail</div>
                                <input className='frame30' type="text" id="username" name="e-mail" placeholder="Exemplo@email.com"/>  
                            </div>
                            <div className='password'>
                                <div className='frame33'>
                                    <div className='t-senha'>Senha</div>
                                    <Link to="/register" className='t-esqueceu-a-senha'>Esqueceu a senha</Link>
                                </div> 
                                <input className='frame30' type="password" id="password" name="password" placeholder="Enter password"/>    
                            </div>
                        </div>
                        <div >
                        <button type="submit" className='btn-login'  >Login</button>
                        </div>
                    </form>
                </div>
            </section>
        </div>
  );
};

export default LoginPage;