import { NextScript } from 'next/document'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Head from '../components/Head'

export default function Document() {
    return (
        <>
            {/* <!DOCTYPE html> */}
            <html>
                <Head />
                <body>
                    <Header />
                    <Nav />
                    
                    <NextScript />

                    <Footer />
                </body>
            </html>
        </>
    )}