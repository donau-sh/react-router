import React, { useEffect } from 'react';
import {useNavigate, Link, Routes, Route} from 'react-router-dom';

import ProfileEdit from './ProfileEdit';
import ProfileView from './ProfileView';

/*
const Profile = () => {
  return (
    <h1>
        Profile Page
    </h1>
  )
}
*/

// use history to check [if login -> Profile; else -> Home]
const Profile = ({login}) => {
    // useHistory will be replaced to useNavigate by react-router-dom v6
    const navigate = useNavigate();
    //const history = useHistory();
    useEffect(() => {
        if(!login) {
            //history.push('/');
            navigate('/');
        } /*else {
            navigate('/profile');
        }*/
    }, [login, navigate]);
    return (
        <>
            <h1>
                Profile Page
            </h1>
            <nav>
                <Link to='/profile/view'>View Profil</Link>
                <Link to='/profile/edit'>Edit Profil</Link>
            </nav>

            {/*<ul>
                <li><Link to='/view'>View Profil</Link></li>
                <li><Link to='/edit'>Edit Profil</Link></li>
    </ul>*/}
            <Routes>
                <Route path='view' element={<ProfileView />} />
                <Route path='edit' element={<ProfileEdit />} />
            </Routes>
        </>
      
    )
  }

export default Profile
