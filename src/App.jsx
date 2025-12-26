import React, { useState, useEffect, Suspense } from 'react';
import { Analytics } from "@vercel/analytics/react";
import MouseGlowEffect from "./utils/MouseGlowEffect";
import Loader from './components/loader';
import StickyNavbar from "./components/Navbar";

// Lazy load all page components
const HomePage = React.lazy(() => import("./pages/HomePage"));
const About = React.lazy(() => import("./pages/About"));
const Contact = React.lazy(() => import("./pages/Contact"));
const Team = React.lazy(() => import("./pages/Team"));
const Events = React.lazy(() => import("./pages/Events"));
const Flashback = React.lazy(() => import("./pages/Flashback"));

function App() {
    const [showInitialLoader, setShowInitialLoader] = useState(true);    

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowInitialLoader(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    if(showInitialLoader){
        return <Loader />;  
    }
    
    return (
        <div className="relative overflow-hidden">
            {/* Display initial loader for 2 seconds, even if content is ready */}

            <Suspense fallback={<Loader />}>
                <Analytics />
                <div className="fixed inset-0 z-0 pointer-events-none">
                    <MouseGlowEffect />
                </div>
                <div className="relative z-10 flex flex-col items-center">
                    <div className="top-0 w-screen flex justify-center items-center">
                        <StickyNavbar />
                    </div>
                    <section id="home">
                        <HomePage />
                    </section>
                    <section id="about">
                        <About />
                    </section>
                    <section id="team">
                        <Team />
                    </section>
                    <section id="events">
                        <Events />
                    </section>
                    <section id="flashback">
                        <Flashback />
                    </section>
                    <section id="contact">
                        <Contact />
                    </section>
                </div>
            </Suspense>
        </div>
    );
}

export default App
