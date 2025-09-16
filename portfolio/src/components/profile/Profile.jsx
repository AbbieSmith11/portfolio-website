import { useEffect, useState } from "react";
import './Profile.css'

function Profile () {
    const [write, setWrite] = useState(false);

    useEffect(()=>{
        document.fonts.ready.then(()=>{
            setWrite(true)
        });
    }, []);

    return (
        <section id='profile'>
            <h1 id='intro' className={write ? "write" : ""}>Hello, I'm Abbie</h1>
            <p> I am a Software Engineer that's passionate about solving complex problems and building purposeful, impactful applications.</p>
        </section>

    )
}

export default Profile;