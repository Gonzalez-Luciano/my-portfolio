import React from 'react'

const CertificateIAM = () => {
  return (
    <div>
        <object
        data={require("../docs/CertificadoIAM.pdf")}
        type="application/pdf"
        className="w-full h-full absolute"
      ></object>
    </div>
  )
}

export default CertificateIAM