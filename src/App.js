import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home'
import Enrollee from './pages/Enrollee'
import { EducationActivity } from './pages/EducationActivity';
import { ScientificMethodicalWork } from './pages/ScientificMethodicalWork';
import { EducationalActivities } from './pages/EducationalActivities';
import { CareerGuidance } from './pages/CareerGuidance';
import { Partners } from './pages/Partners';
import { MoreNews } from './pages/additionalPages/MoreNews';
import { MoreAchievment } from './pages/additionalPages/MoreAchievment';
import { MorePlaces } from './pages/additionalPages/MorePlaces';
import { MoreEducationsCenters } from './pages/additionalPages/MoreEducationsCenters';
import { MoreEducationsCenter } from './pages/additionalPages/MoreEducationsCenter';
import { MoreCareerGuidance } from './pages/additionalPages/MoreCareerGuidance';
import { ProfessionalTraining } from './pages/ProfessionalTraining';

export const App = () => {

    useEffect(() => {
        const clearLocalStorage = () => {
            localStorage.clear();
        };

        window.addEventListener('beforeunload', clearLocalStorage);

        return () => {
            window.removeEventListener('beforeunload', clearLocalStorage);
        };
    }, []);
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/enrollee' element={<Enrollee />}></Route>
                <Route path='/education-activity' element={<EducationActivity />}></Route>
                <Route path='/scientific-and-methodical-work' element={<ScientificMethodicalWork />}></Route>
                <Route path='/educational-activities' element={<EducationalActivities />}></Route>
                <Route path='/career-guidance' element={<CareerGuidance />}></Route>
                <Route path='/partners' element={<Partners />}></Route>

                <Route path='/news/:id' element={<MoreNews />}></Route>
                <Route path='/achievments' element={<MoreAchievment/>}></Route>
                <Route path='/rooms' element={<MorePlaces/>}></Route>
                <Route path='/education-centers' element={<MoreEducationsCenters/>}></Route>
                <Route path='/education-centers/education-center/:id' element={<MoreEducationsCenter/>}></Route>
                <Route path='/career-guidance/more-info/:id' element={<MoreCareerGuidance/>}></Route>
                <Route path='/prof-training' element={<ProfessionalTraining/>}></Route>
                
            </Routes>
        </div>
    )
}
export default App;