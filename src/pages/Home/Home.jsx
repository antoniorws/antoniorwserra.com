import React from 'react';
import './Home.css';
import Typed from "react-typed";

function Home(){
    return (
        <main>
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