



const Homepage = () => {
    return (
            <div>
                <section id="about"> 
                    <section className="container"> 
                        <section className="row"> 
                            <section className="about-col-1">    
                                <img src="/src/assets/IMG_5010.jpeg"/> 
                            </section>
                            <section className="about-col-2">
                                <h1 className="subtitle">About Me</h1>
                                <p> Write a quick about me paragraph here!</p>
                                <section className="tabtitles">
                                    <p className="tablinks activelink" onClick="opentab('Skills')">Skills</p>
                                    <p className="tablinks" onClick="opentab('Experience')">Experience</p>
                                    <p className="tablinks" onClick="opentab('Education')">Education</p>
                                </section>
                                <section className="tabcontents activetab" id="Skills">
                                <ul>
                                    <li><span>Placeholder I</span>HTML</li>
                                    <li><span>Placeholder II</span>CSS</li>
                                    <li><span>Placeholder III</span>JavaScript</li>
                                </ul>
                                </section>    
                                <section className="tabcontents" id="Experience">
                                <ul>
                                    <li><span>Placeholder I</span>Designing Web/App type I</li>
                                    <li><span>Placeholder II</span>Designing Web/App type II</li>
                                    <li><span>Placeholder III</span>Designing Web/App type III</li>
                                </ul>
                                </section>    
                                <section className="tabcontents" id="Education">
                                <ul>
                                    <li><span>Placeholder I</span>High School</li>
                                    <li><span>Placeholder II</span>College</li>
                                    <li><span>Placeholder III</span>Boot Camp</li>
                                </ul>
                                </section>    
                            </section>
                        </section>
                    </section>
                </section>
            </div>
    )
}

export default Homepage;