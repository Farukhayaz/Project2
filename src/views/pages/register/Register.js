// import React, { useState } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'
import { useNavigate } from 'react-router-dom';
import { DB } from "../../firebase"
// const Register = (e) => {
//   const [name, setName] = useState("")
//   const [email, setEmail] = useState("")
//   const [password, setPassword] = useState("")


//   const auth = getAuth(app);
//   const navigate = useNavigate()

//   const Sinup = () => {

//     createUserWithEmailAndPassword(auth, email, password, name)
//       .then((userCredential) => {
//         // Signed in 
//         const user = userCredential.user;

//         console.log(user);

//         alert("Successfully created a Account")

//         navigate("/")
//         // ...
//       })
//       .catch((error) => {
//         const errorCode = error.code;
//         alert(errorCode)
//         // ..
//       });
//   }




//   return (
//     <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
//       <CContainer>
//         <CRow className="justify-content-center">
//           <CCol md={9} lg={7} xl={6}>
//             <CCard className="mx-4">
//               <CCardBody className="p-4">
//                 <CForm>
//                   <h1>Register</h1>
//                   <p className="text-medium-emphasis">Create your account</p>
//                   <CInputGroup className="mb-3">
//                     <CInputGroupText>
//                       <CIcon icon={cilUser} />
//                     </CInputGroupText>
//                     <CFormInput placeholder="Username"
//                       onChange={(e) => { setName(e.target.value) }}
//                       type={"name"}
//                       autoComplete="username" />
//                   </CInputGroup>
//                   <CInputGroup className="mb-3">
//                     <CInputGroupText>@</CInputGroupText>
//                     <CFormInput placeholder="Email"
//                       onChange={(e) => { setEmail(e.target.value) }}
//                       type={"email"}
//                       autoComplete="email" />
//                   </CInputGroup>
//                   <CInputGroup className="mb-3">
//                     <CInputGroupText>
//                       <CIcon icon={cilLockLocked} />
//                     </CInputGroupText>
//                     <CFormInput
//                       placeholder="Password"
//                       onChange={(e) => { setPassword(e.target.value) }}
//                       type={"password"}
//                       autoComplete="new-password"
//                     />
//                   </CInputGroup>
//                   <div className="d-grid">
//                     <CButton color="success" onClick={Sinup}>Create Account</CButton>
//                   </div>
//                 </CForm>
//               </CCardBody>
//             </CCard>
//           </CCol>
//         </CRow>
//       </CContainer>
//     </div>
//   )
// }

// export default Register
import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { getDatabase, ref, set } from 'firebase/database';
import app from '../../firebase';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate()
  const handleSignUp = async (event) => {
    // event.preventDefault();
    try {
      const { user } = await createUserWithEmailAndPassword(app.auth(), email, password);
      const db = getDatabase(app);
      const usersRef = ref(db, 'users/' + user.uid);
      await set(usersRef, {
        name,
        email, password
      });
      alert("Successfully created a Account")
      navigate("/")
    } catch (error) {
      alert(error)
      console.error(error);
    }
  }

  return (
    <>
      {/* <form onSubmit={handleSignUp}>
        <label>
          Name:
          <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
        </label>
        <label>
          Email:
          <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
        </label>
        <button type="submit">Sign up</button>
      </form> */}


      <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
        <CContainer>
          <CRow className="justify-content-center">
            <CCol md={9} lg={7} xl={6}>
              <CCard className="mx-4">
                <CCardBody className="p-4">
                  <CForm>
                    <h1>Register</h1>
                    <p className="text-medium-emphasis">Create your account</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput placeholder="Username"
                        onChange={(e) => { setName(e.target.value) }}
                        type={"name"}
                        autoComplete="username" />
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>@</CInputGroupText>
                      <CFormInput placeholder="Email"
                        onChange={(e) => { setEmail(e.target.value) }}
                        type={"email"}
                        autoComplete="email" />
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        placeholder="Password"
                        onChange={(e) => { setPassword(e.target.value) }}
                        type={"password"}
                        autoComplete="new-password"
                      />
                    </CInputGroup>
                    <div className="d-grid">
                      <CButton color="success" onClick={handleSignUp}>Create Account</CButton>
                    </div>
                  </CForm>
                </CCardBody>
              </CCard>
            </CCol>
          </CRow>
        </CContainer>
      </div>
    </>


  );
}
