// import React, { useEffect, useState } from 'react'
// import axios from "axios"
// import { useNavigate } from 'react-router-dom'
// import "./feedBack.css"
// import app from '../firebase'
// import 'firebase/compat/auth';





// export default function Charts() {
//     const [data, setData] = React.useState({})
//     console.log(data, "data");
//     const navigate = useNavigate()
//     useEffect(() => {
//         getdata()
//     }, [])

//     const getdata = async () => {
//         axios.get("https://last-3b395-default-rtdb.firebaseio.com/.json").then((res) => {
//             setData(res.data);
//         })
//     }


//     const feedb = () => {

//         navigate("/widgets")
//     }
//     return (
//         <div>
//             <div>
//                 {Object.keys(data).map((id) => {
//                     // console.log(data.userid, "id");
//                     return <>
//                         <li className="feedBackListItem" >
//                             <div style={{ width: "40vh", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
//                                 <img
//                                     src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
//                                     alt=""
//                                     className="feedBackImg"
//                                 />
//                                 <div className="feedbackUser" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
//                                     {/* <span className="Username">{data[id].Feedback}</span> */}
//                                     {
//                                         console.log(data[id], "name")

//                                     }
//                                 </div>
//                             </div>
//                             <div className='paragraph'>
//                             </div>
//                             <div>
//                                 <button className="feedbackButton" onClick={feedb}>
//                                     Respond
//                                 </button>
//                             </div>
//                         </li>

//                     </>
//                 })}
//             </div>


//         </div>
//     )

// }
import React, { useEffect, useState } from 'react';
import 'firebase/firestore';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "./feedBack.css"
// import { feedbackRef } from '../firebase';

const Charts = () => {
    const navigate = useNavigate()
    const [data, setData] = useState("")
    console.log(data, "dadhsgv");
    useEffect(() => {
        getdata()
    }, [])

    const getdata = () => {
        axios.get("https://last-3b395-default-rtdb.firebaseio.com/.json").then((res) => {
            setData(res.data);
            console.log(res.data, "da");
        })
    }

    const feedb = () => {

        navigate("/widgets")
    }
    return (
        <div>
            {Object.keys(data).map((id) => {
                console.log(data.Feedback, "feedback");
                return <>
                    <li className="feedBackListItem" >
                        <div style={{ width: "40vh", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <img
                                src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
                                alt=""
                                className="feedBackImg"
                            />
                            <div className="feedbackUser" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                <span className="Username">{data.UserUID}</span>
                                {
                                    console.log(data, "name")
                                }
                            </div>
                        </div>
                        <div className='paragraph'>
                        </div>
                        <div>
                            <button className="feedbackButton" onClick={feedb}>
                                Respond
                            </button>
                        </div>
                    </li>
                </>
            })}
        </div >
    );
};

export default Charts;
