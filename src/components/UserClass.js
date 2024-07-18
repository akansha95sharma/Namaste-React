import React from "react";

class UserClass extends React.Component {
    constructor (props) {
        super(props);
        console.log(props);
        this.state = {
            userInfo : {
                name : "Dummy",
                location: "Default",
                //avatar_url: "http://dummy-photo.com"
            }
        };
       // console.log(this.props.name + "Child Constructor");
    }
    async componentDidMount(){
        //console.log(this.props.name + "Child Compount Did Mount");
        /// API calls this method

        const data = await fetch("https://api.github.com/users/akansha95sharma");
        const json = await data.json();
        this.setState({
            userInfo:json,
        });
        console.log(json);
    }
    componentDidUpdate(){
        console.log("Component did update");
    }
    componentWillUnmount(){
        console.log("Component will Unmounted");
    }
    render() {
        const {login,location,avatar_url} = this.state.userInfo;
        //const {count} = this.state;
        //console.log("Child render");
        return (
        <div className="user-card">
        <img src={avatar_url} />
        <h2>Name: {login}</h2>
        <h2>Location: {location}</h2>
        <h2>Contact: akansha.sharma18395@gmail.com</h2>
     </div> 
     );
    }
}
export default UserClass;


/**
 constructor(dummy)
 render(dummy data)
 <html dummy>
 Component did mount
 <API Call>
 <this.setState> -> State variable is updated
 ------Update
 render(API data)
 <HTML (new API data)>
 Component did update
 */