import React from 'react'
import {Routes,Route} from 'react-router-dom'
import App from '../App'
import CertificateCFP from './CertificateCFP'
import CertificateIAM from './CertificateIAM'

const Router = () => {
  return (
    <Routes>
        <Route exact path='/' element={<App />} />
        <Route exact path='CertificateCFP.pdf' element={<CertificateCFP />} />
        <Route exact path='CertificateIAM.pdf' element={<CertificateIAM />} />
    </Routes>
            
  )
}

export default Router