import React from 'react'
import ProfileHeader from '../../components/ProfileHeader/ProfileHeader'
import ProfileBody from '../../components/ProfileBody/ProfileBody'
import image1 from './images/img1.png'
import { useNavigate } from "react-router-dom";


export default function PageProfile() {
    let navigate = useNavigate();
    const routeChange = () => {
        navigate('/');
    }
    return (
        <>
            <ProfileHeader
                handleClick={routeChange}
            ></ProfileHeader>
            <ProfileBody
                img_path={image1}>
            </ProfileBody>
        </>
    )
}
