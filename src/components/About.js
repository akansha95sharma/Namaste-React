import React from 'react';
import User from './User';
import UserClass from './UserClass';
import {UserContext} from '../utils/UserContext';

class About extends React.Component {
    constructor(props){
        super(props);
        //console.log("Parent Constructor");
    }
    //component did mount is used to make API calls
    componentDidMount(){
        //console.log("Parent Compount Did Mount");
    }
    render(){
        console.log("Parent Render");
        return(
            <div>
            <h1>About</h1>
            <div>LoggedIn User: <UserContext.Consumer>
            {(data)=> <h1 className='text-xl font-bold'>{data.loggedInUser}</h1>}
            </UserContext.Consumer></div>
            <h2>This is Namaste React Web Series</h2>
            <UserClass name={"Akansha Sharma (Class)"} location = {"Shrimadhopur"}/>
        </div>
        )
    }
}
// const About = () => {
//     return (
//         <div>
//             <h1>About</h1>
//             <h2>This is Namaste React Web Series</h2>
//             <UserClass name={"Akansha Sharma (Class)"} location = {"Shrimadhopur"}/>
//         </div>
//     )
// }
/*
    Parent Constructor
    Parent Render

    First Constructor
    First Render

    Second Constructor
    Second Render

 <DOM UPDATED - IN SINGLE BATCH>

    First componentdidmount
    Second componentdidmount
    Parent componentdidmount
*/
export default About;
