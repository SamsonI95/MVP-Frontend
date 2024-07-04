import { useContext, useEffect } from 'react';
import AuthContext from '../context/AuthProvider';
import secureLocalStorage from 'react-secure-storage';

const useAuth = () => {
    const { auth, setAuth } = useContext(AuthContext);

    useEffect(() => {
        const accessToken = secureLocalStorage.getItem('accessToken');
        const firstName = secureLocalStorage.getItem('firstName');

        if (accessToken && firstName) {
            setAuth({ user: firstName, accessToken });
        }
    }, [setAuth]);

    return { auth, setAuth };
};

export default useAuth;
