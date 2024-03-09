import React from "react";

const CertificateCFP = () => {
  return (
    <div>
      <object
        data={require("../docs/CertificadoCFP.pdf")}
        type="application/pdf"
        className="w-full h-full absolute"
      ></object>
    </div>
  );
};

export default CertificateCFP;
