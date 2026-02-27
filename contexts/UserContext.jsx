'use client'

import { createContext, useContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';

const UserContext = createContext();

export function UserProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        try {
            const userData = Cookies.get('user');
            if (userData && userData !== 'undefined') {
                setUser(JSON.parse(userData));
            }
        } catch (error) {
            console.error('Greška pri čitanju korisničkih podataka iz kolačića:', error);
        } finally {
            setLoading(false);
        }
    }, []);

    const login = (userData) => {
        setUser(userData);
        Cookies.set('user', JSON.stringify(userData), { expires: 7 });
    };

    const logout = () => {
        setUser(null);
        Cookies.remove('user');
        Cookies.remove('basket');
    };

    return (
        <UserContext.Provider value={{ user, loading, login, logout }}>
            {children}
        </UserContext.Provider>
    );
}

export function useUser() {
    const context = useContext(UserContext);
    if (context === undefined) {
        throw new Error('useUser mora biti korišten unutar UserProvider-a');
    }
    return context;
}
