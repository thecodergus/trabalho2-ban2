import { NextScript } from 'next/document'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Nav from '../components/Nav'

export default function Document() {
    return (
        <>
            {/* <!DOCTYPE html> */}
            <html>
                <head>
                    <title>BAN2</title>
                    {/* <link rel="stylesheet" href="/style.css"> */}
                        {/* <script src="https://kit.fontawesome.com/9da116f39f.js" crossorigin="anonymous"></script> */}
                </head>
                <body>
                    <Header />
                    <Nav />
                    
                    <NextScript />

                    <Footer />
                </body>
            </html>
        </>
    )}