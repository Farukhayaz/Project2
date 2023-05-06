import React, { useState, useEffect } from 'react'
import { CCard, CCardBody, CCol, CCardHeader, CRow } from '@coreui/react'
import {
  CChartBar,
  CChartDoughnut,
  CChartLine,
  CChartPie,
  CChartPolarArea,
  CChartRadar,
} from '@coreui/react-chartjs'
import axios from 'axios'
// import {
//   CAvatar,
//   CButton,
//   CButtonGroup,
//   CCard,
//   CCardBody,
//   CCardFooter,
//   CCardHeader,
//   CCol,
//   CProgress,
//   CRow,
//   CTable,
//   CTableBody,
//   CTableDataCell,
//   CTableHead,
//   CTableHeaderCell,
//   CTableRow,
// } from '@coreui/react'
// import { CChartLine } from '@coreui/react-chartjs'
// import { getStyle, hexToRgba } from '@coreui/utils'
// import CIcon from '@coreui/icons-react'
// import {
//   cibCcAmex,
//   cibCcApplePay,
//   cibCcMastercard,
//   cibCcPaypal,
//   cibCcStripe,
//   cibCcVisa,
//   cibGoogle,
//   cibFacebook,
//   cibLinkedin,
//   cifBr,
//   cifEs,
//   cifFr,
//   cifIn,
//   cifPl,
//   cifUs,
//   cibTwitter,
//   cilCloudDownload,
//   cilPeople,
//   cilUser,
//   cilUserFemale,
// } from '@coreui/icons'

// import avatar1 from 'src/assets/images/avatars/1.jpg'
// import avatar2 from 'src/assets/images/avatars/2.jpg'
// import avatar3 from 'src/assets/images/avatars/3.jpg'
// import avatar4 from 'src/assets/images/avatars/4.jpg'
// import avatar5 from 'src/assets/images/avatars/5.jpg'
// import avatar6 from 'src/assets/images/avatars/6.jpg'

// import WidgetsBrand from '../widgets/WidgetsBrand'
// import WidgetsDropdown from '../widgets/WidgetsDropdown'

const Dashboard = () => {


  const [data, setData] = useState("")
  console.log(data, "dadhsgv");
  useEffect(() => {
    getdata()
  }, [])

  const getdata = () => {
    axios.get("https://last-3b395-default-rtdb.firebaseio.com/Searched.json").then((res) => {
      setData(res.data);
      console.log(res.data, "search");
    })
  }

  const random = () => Math.round(Math.random() * 100)


  return (
    <>
      <CRow>

        <CCol xs={4}>
          <CCard className="mb-4">
            <CCardHeader>Interest Based News</CCardHeader>
            <CCardBody>
              <CChartLine


                data={{
                  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                  datasets: [
                    {
                      label: 'My Second dataset',
                      backgroundColor: 'rgba(151, 187, 205, 0.2)',
                      borderColor: 'rgba(151, 187, 205, 1)',
                      pointBackgroundColor: 'rgba(151, 187, 205, 1)',
                      pointBorderColor: '#fff',
                      data: [random(), random(), random(), random(), random(), random(), random()],
                    },
                  ],
                }}

              />
            </CCardBody>
          </CCard>
        </CCol>
        <CCol xs={4}>
          <CCard className="mb-4">
            <CCardHeader> Latest Based News</CCardHeader>
            <CCardBody>
              <CChartLine
                data={{
                  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                  datasets: [
                    {
                      label: 'My Second dataset',
                      backgroundColor: 'rgba(151, 187, 205, 0.2)',
                      borderColor: 'rgba(151, 187, 205, 1)',
                      pointBackgroundColor: 'rgba(151, 187, 205, 1)',
                      pointBorderColor: '#fff',
                      data: [random(), random(), random(), random(), random(), random(), random()],
                    },
                  ],
                }}
              />
            </CCardBody>
          </CCard>
        </CCol>
        <CCol xs={4}>
          <CCard className="mb-4">
            <CCardHeader>Trends</CCardHeader>
            <CCardBody>
              <CChartLine
                data={{
                  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                  datasets: [
                    {
                      label: 'My Second dataset',
                      backgroundColor: 'rgba(151, 187, 205, 0.2)',
                      borderColor: 'rgba(151, 187, 205, 1)',
                      pointBackgroundColor: 'rgba(151, 187, 205, 1)',
                      pointBorderColor: '#fff',
                      data: [random(), random(), random(), random(), random(), random(), random()],
                    },
                  ],
                }}
              />
            </CCardBody>
          </CCard>
        </CCol>

      </CRow >

    </>
  )
}

export default Dashboard
