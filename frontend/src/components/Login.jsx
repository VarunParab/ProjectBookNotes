import React, { useEffect, useState } from 'react'
import "./../App.css"
import jwt_decode from 'jwt-decode'

function Login() {

  const [ user , setUser ] = useState({})

  function handleCallbackResponse(response){
    console.log("Encoded Jwt: "+ response.credential);
    var userObject = jwt_decode(response.credential);
    console.log(userObject);
    console.log(userObject.email);
    setUser(userObject);
    document.getElementById("signInDiv").hidden=true;
  }

  function handleSignOut(event){
    setUser({});
    document.getElementById("signInDiv").hidden=false;
  }

  useEffect(()=>{
        /*global google */
        google.accounts.id.initialize({
         client_id: "1024383244288-e0kd30fge6230kin1ei11bj1bfbatmbk.apps.googleusercontent.com",
         callback:handleCallbackResponse
        })

        google.accounts.id.renderButton(
        document.getElementById("signInDiv"),
        {theme:"outline",size:"large"}
        )
        google.accounts.id.prompt()
    },[])
    
  return (
    <div>
        <div id="signInDiv"></div>
        {
          Object.keys(user).length!==0 &&
        <button onClick={(e)=>{handleSignOut()}}>Signout</button>
        }
        {user &&
        <div>
          <img src={user.picture} alt=""/>
          <h2>{user.name}</h2>
        </div>
        }
    </div>
  )
}

export default Login