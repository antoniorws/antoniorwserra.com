import React from 'react';
import './Home.css';
import Typed from "react-typed";
import { inject } from '@vercel/analytics';

function Home(){
    inject();
    console.log("Hi Dev :D");
    return (
        <main className="mainHome">
            <div>
                <h1 class="name">Antonio Serra</h1>
                <strong>
                    <div class="softwareDeveloper">
                        <Typed
                            strings={[
                            "Software Developer",
                            ]}
                            typeSpeed={150}
                        />
                    </div>
                </strong>
            </div>
        </main>
    )
}

export default Home;