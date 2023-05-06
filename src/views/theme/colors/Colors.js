import React, { useEffect, useState } from 'react'
import axios from "axios"
import firebase from "firebase/compat/app";
import "firebase/compat/database";
import "./color.css"
import DB from "../../firebase"

const Colors = () => {
  const [data, setData] = React.useState({})
  console.log(data, "data");
  useEffect(() => {
    getdata()
  }, [])

  const getdata = async () => {
    axios.get("https://last-3b395-default-rtdb.firebaseio.com/users.json").then((res) => {
      setData(res.data);
    })
  }






  // Initialize Firebase
  const firebaseConfig = {
    apiKey: "AIzaSyCYYgwtBhXBvRTPGc8i8GpqScYYCEte6Ys",
    authDomain: "last-3b395.firebaseapp.com",
    databaseURL: "https://last-3b395-default-rtdb.firebaseio.com",
    projectId: "last-3b395",
    storageBucket: "last-3b395.appspot.com",
    messagingSenderId: "479262466021",
    appId: "1:479262466021:web:2cd50032e15feef041590c"
  };

  firebase.initializeApp(firebaseConfig);

  // Get a reference to the database service
  const database = firebase.database().ref();


  const deluser = (id) => {

    if (window.confirm("Are you sure want to del this record")) {
      database.child(`users/${id}`).remove((err) => {
        console.log(err);
      })
    }
  }

  return (
    <div>
      {Object.keys(data).map((id) => {
        return (
          <>
            {console.log(data[id], "da")}
            <li className="feedBackListItem" >
              <div style={{ width: "100vh", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <img
                  src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
                  alt=""
                  className="img"
                />
                <div className="feedbackUser" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                  <span className="Username">{data[id].name}</span>
                </div>
                <div className="feedbackUser" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                  <span className="feedbackDate">{data[id].email}</span>
                </div>
              </div>

              <div>
                <button className="feedbackButton" onClick={() => { deluser(id) }}>
                  Delete
                </button>
              </div>
            </li >

          </>
        )

      })}
    </div >
  )
}

export default Colors
