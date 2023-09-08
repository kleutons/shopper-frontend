'use client'
import { Toaster as ToasterProvider } from 'react-hot-toast'

export const Toaster = () => {
    return (
        <ToasterProvider
            position='bottom-center'

            toastOptions={{
                success:{
                    duration: 4000,
                    style:{
                        background: '#10b981',
                        color: '#fff',
                    },
                    iconTheme:{
                        primary: '#fff',
                        secondary: '#10b981',
                    },
                },
                error:{
                    duration: 3000,
                    style:{
                        background: '#ef4444',
                        color: '#fff',
                    },
                    iconTheme:{
                        primary: '#fff',
                        secondary: '#ef4444',
                    },
                },
            }}
        />
    )
}