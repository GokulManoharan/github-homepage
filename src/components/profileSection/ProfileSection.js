import React from 'react'

// import profilePicture from '../../resources/img/profile-pic.jfif'
import './ProfileSection.css'
import PeopleIcon from 'react-ionicons/lib/MdPeople'
import PinIcon from 'react-ionicons/lib/MdPin'
import MailIcon from 'react-ionicons/lib/MdMail'

class ProfileSection extends React.Component {
    render(){
        return (
            <section className="section-profile">
                <img src={} className="profilePic" />
                <h4>Supreet Singh</h4>
                <h6 className="userName">supreetsingh247</h6>
                <button class="btn btn-light max">Follow</button>
                <p className="paras mt-2">Front end developer since 1.5 years</p>
                <p className="paras"><PeopleIcon fontSize="20px" color='#555' className="mr-1" />Target Corporation</p>
                <p className="paras"><PinIcon fontSize="20px" color='#555' className="mr-1" />India</p>
                <p className="paras"><MailIcon fontSize="20px" color='#555' className="mr-1" /><a href="#" >supreetsingh.247@gmail.com</a></p>
                <small><a href="#" className="blockUserBtn" >Block or report user</a></small>
            </section>
        )
    }
}

export default ProfileSection
