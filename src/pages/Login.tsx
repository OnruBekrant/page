import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';


function Login() {
    const [passIsVisible, setpassIsVisible] = useState(false);
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    useEffect(()=>{
        const isLoggedIn = localStorage.getItem('isAuthenticated');
        if (isLoggedIn === 'true') {
            navigate('/dashboard');
        }
    },[navigate]);

    const HandleLogin = ()=>{
        if (username === 'admin' && password === '12345') {
            localStorage.setItem('isAuthenticated', 'true');
            navigate('/dashboard');
        } else alert('hatalı kullanıcı adı veya şifre');
    };

  return (
    <div className="login-container">
        <h1 className="login-title">Hoşgeldiniz</h1>
        
        <div className="input-group">
            <h3 className="input-label">Kullanıcı Adı</h3>
            <input 
                className="login-input"
                type="text" 
                placeholder='Kullanıcı adı' 
                onChange={(e)=>setUserName(e.target.value)}
            />
        </div>
        
        <div className="input-group">
            <h3 className="input-label">Şifre</h3>
            <div className="password-wrapper">
                <input 
                    className="login-input"
                    type={passIsVisible ? "text": "password"} 
                    placeholder='Şifre' 
                    onChange={(e)=>setPassword(e.target.value)}
                />
                <button 
                    className="toggle-btn"
                    onClick={()=>setpassIsVisible(!passIsVisible)}
                >
                    {passIsVisible ? "Gizle" : "Göster"}
                </button>
            </div>
        </div>
        
        <button className="login-btn" onClick={HandleLogin}>Giriş Yap</button>
    </div>
  )
}

export default Login