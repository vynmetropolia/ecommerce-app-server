import React from 'react'
import { BrowserRouter as Router, Switch, useLocation } from 'react-router-dom'

import Header from '../../components/Header/index'
import UserAccountNavigation from '../../components/UserAccountNavigation/index'
import './userProfile.scss'

function UserProfile() {
  let location = useLocation()
  return (
    <div className="profile__wrapper">
      <Header />
      <div className="profile__content">
        <h1>MY ACCOUNT</h1>
        <hr />
        <div className="account__container">
            <UserAccountNavigation/>
        </div>
      </div>
    </div>
  )
}

export default UserProfile
