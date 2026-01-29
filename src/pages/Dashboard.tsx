import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/Dashboard.css'; // CSS import edildi

function Dashboard() {
    const navigate = useNavigate();

    useEffect(()=>{
        const isLoggedIn = localStorage.getItem('isAuthenticated');
        if (isLoggedIn === 'false' || !isLoggedIn) { // null kontrolü de eklendi
            navigate('/');
        }
    },[navigate]);

    const HanddleLogout = () => {
        localStorage.setItem('isAuthenticated','false');
        navigate('/');
    };
    
  return (
    <div className="dashboard-container">
        <h1 className="welcome-text">Hoşgeldiniz</h1>
        <p>Yönetim paneline başarıyla giriş yaptınız.</p>
        <button className="logout-btn" onClick={HanddleLogout}>Çıkış Yap</button>
    </div>
  )
}

export default Dashboard