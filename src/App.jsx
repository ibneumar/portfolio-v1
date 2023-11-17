import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import ProfilePage from './Screens/ProfilePage';
import WorkExperience from './Screens/WorkExperience';
import Education from './Screens/Education';
import MyServices from './Screens/MyServices';
import MySkills from './MySkills';
import LatestProject from './Screens/LatestProjext';
import ContactScreen from './Screens/ContactScreen';

const App = () => {
    return (
        <>
            <div className="wrapper">
                    <div className='menu'>
                        <ul>
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='work-experience'>Work Experience</Link></li>
                            <li><Link to='education'>Education</Link></li>
                            <li><Link to='my-services'>My Services</Link></li>
                            <li><Link to='latest-project'>Latest Project</Link></li>
                            <li><Link to='contact'>Contact Me</Link></li>
                        </ul>
                    </div>
                <div className="cover">
                    <div className="book">
                        <div className="book-page">
                            <Routes>
                                <Route path='/' element={<ProfilePage />} />
                                <Route path='work-experience' element={<WorkExperience />} />
                                <Route path='education' element={<Education />} />
                                <Route path='my-services' element={<MyServices />} />
                                <Route path='my-skills'  element={<MySkills />}/>
                                <Route path='latest-project' element={<LatestProject />}/>
                                <Route path='contact' element={<ContactScreen />}/>
                            </Routes>    
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default App;