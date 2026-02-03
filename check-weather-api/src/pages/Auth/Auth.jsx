//textfield 
//btn 
//checkbox 
// core design system MUI 
// install react MUI
//npm install @mui/material @emotion/react @emotion/styled
import { useState } from 'react';
import { TextField, Box, Card, Typography, InputAdornment, Button } from '@mui/material';

export const Auth = () => {
    const [login, setLogin] = useState('')
    const [psw, setPsw] = useState('')

    const handleChangeLogin = (e) => {
        const { value } = e.target; // p
        console.log(value)
        setLogin(value);
    }

    const handleChangePsw = (e) => {
        const { value } = e.target; // p
        console.log(value)
        setPsw(value);
    }
    return (
        <Box sx={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}> 
            <Card sx={{ width: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', padding: '40px' }}>
                <Typography sx={{ marginBottom: '50px' }} variant="h6">Рога и копыта</Typography>

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '25px'}}>
                    <TextField 
                        // label="Логин"
                        placeholder="Логин"
                        helperText="Введите значение логина"
                        value={login}
                        onChange={handleChangeLogin}
                    />

                    <TextField 
                        // label="Пароль"
                        placeholder="Пароль"
                        helperText="Введите значение пароль"
                        value={psw}
                        onChange={handleChangePsw}
                    />

                    <Button variant="contained"> Войти</Button>
                </Box>
            
            </Card>
        </Box>
    )
}