'use client'

import { createContext, useContext, useEffect, useState } from 'react';
import Cookies from 'js-cookie';

const BasketContext = createContext();

export function BasketProvider({ children }) {
    const [basket, setBasket] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const basketData = Cookies.get('basket');
        if (basketData && basketData !== 'undefined') {
            setBasket(JSON.parse(basketData));
        }
        setLoading(false);
    }, []);

    const updateBasket = (newBasket) => {
        setBasket(newBasket);
        Cookies.set('basket', JSON.stringify(newBasket), { expires: 14 });
    };

    const refreshBasket = async (basketIdent) => {
        const response = await fetch('/api/fetchBasket', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ basketIdent })
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || 'Neuspješno dohvaćanje košarice');
        }

        updateBasket(data.basket);
        return data;
    };

    const addToBasket = async (basketIdent, package_id, quantity) => {
        const user = Cookies.get('user');

        try {
            const response = await fetch('/api/addToBasket', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    basketIdent,
                    package_id,
                    quantity,
                    discordId: JSON.parse(user).discordId
                })
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Neuspješno dodavanje u košaricu');
            }

            if (data.basket?.data?.ident) {
                updateBasket(data.basket);
            }

            return data;
        } catch (error) {
            throw error;
        }
    };

    const updateQuantity = async (basketIdent, package_id, quantity) => {
        try {
            const response = await fetch('/api/updateQuantity', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    basketIdent,
                    package_id,
                    quantity
                })
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Neuspješno ažuriranje količine');
            }

            updateBasket(data.basket);
            return data;

        } catch (error) {
            throw error;
        }
    };

    const removeFromBasket = async (basketIdent, package_id) => {
        try {
            const response = await fetch('/api/removeFromBasket', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    basketIdent,
                    package_id
                })
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Neuspješno uklanjanje iz košarice');
            }

            updateBasket(data.basket);
            return data;

        } catch (error) {
            throw error;
        }
    };

    const applyCoupon = async (basketIdent, coupon_code) => {
        const response = await fetch('/api/coupons/apply', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ basketIdent, coupon_code })
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || 'Neuspješno primjenjivanje kupona');
        }

        updateBasket(data.basket);
        return data;
    };

    const removeCoupon = async (basketIdent) => {
        const response = await fetch('/api/coupons/remove', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ basketIdent })
        });

        const data = await response.json().catch(() => ({}));

        if (!response.ok) {
            throw new Error(data.message || 'Neuspješno uklanjanje kupona');
        }

        return await refreshBasket(basketIdent);
    };

    const applyGiftCard = async (basketIdent, card_number) => {
        const response = await fetch('/api/giftcards/apply', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ basketIdent, card_number })
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || 'Neuspješno primjenjivanje poklon kartice');
        }

        updateBasket(data.basket);
        return data;
    };

    const removeGiftCard = async (basketIdent, card_number) => {
        const response = await fetch('/api/giftcards/remove', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ basketIdent, card_number })
        });

        const data = await response.json().catch(() => ({}));

        if (!response.ok) {
            throw new Error(data.message || 'Neuspješno uklanjanje poklon kartice');
        }

        return await refreshBasket(basketIdent);
    };

    const applyCreatorCode = async (basketIdent, creator_code) => {
        const response = await fetch('/api/creator-codes/apply', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ basketIdent, creator_code })
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || 'Neuspješno primjenjivanje kreatorskog koda');
        }

        updateBasket(data.basket);
        return data;
    };

    const removeCreatorCode = async (basketIdent) => {
        const response = await fetch('/api/creator-codes/remove', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ basketIdent })
        });

        const data = await response.json().catch(() => ({}));

        if (!response.ok) {
            throw new Error(data.message || 'Neuspješno uklanjanje kreatorskog koda');
        }

        return await refreshBasket(basketIdent);
    };

    return (
        <BasketContext.Provider value={{
            basket,
            loading,
            updateBasket,
            addToBasket,
            updateQuantity,
            removeFromBasket,
            applyCoupon,
            removeCoupon,
            applyGiftCard,
            removeGiftCard,
            applyCreatorCode,
            removeCreatorCode,
            refreshBasket
        }}>
            {children}
        </BasketContext.Provider>
    );
}

export function useBasket() {
    const context = useContext(BasketContext);
    if (context === undefined) {
        throw new Error('useBasket mora biti korišten unutar BasketProvider-a');
    }
    return context;
}
