import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "50px", width: "100%" }}>
        <p style={{ textAlign: "center" }}>&copy; 2023 creativeLabs. Powered by Create by Farukh Developer</p>
        {/* <span className="ms-1"></span>
      </div>
      <div className="ms-auto">
        <span className="me-1"></span>
        <p>r</p> */}
      </div>
    </CFooter >
  )
}

export default React.memo(AppFooter)
