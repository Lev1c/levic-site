import React from 'react';
import { Route, Routes, Navigate} from "react-router-dom";
import Hello from '../page/myPage/pageSection/hello';

const SettingRouteMain = () => {

    return (
        <>
            <Routes>
                <Route key={1} path={'/'} element={<Hello/>} exact/>

                <Route path="*" element={<Navigate to="/" />}/>
            </Routes>
        </>
    );
};

export default SettingRouteMain;
