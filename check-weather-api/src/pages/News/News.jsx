import { Typography } from "@mui/material"
import { useNavigate } from 'react-router-dom';

const News = ({ isLogin }) => {
    
    const navigate = useNavigate();

    const handleNavigateToAuth = () => {
        navigate('/Auth')
    }

     const handleNavigateToProfile = () => {
        navigate('/profile')
    }

    return(
        <>
            <Typography variant="h2">Новости</Typography>
            {!isLogin && <Typography variant="body2" color="textSecondary" onClick={handleNavigateToAuth}>Войти</Typography>}
            {isLogin && <Typography variant="body2" color="textSecondary" onClick={handleNavigateToProfile}>Профиль</Typography>}
        </>


    )
}

export default News;