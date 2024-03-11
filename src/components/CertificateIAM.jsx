import React,{Component} from "react";
import Bowser from "bowser";

class CertificateIAM extends Component {
  componentDidMount() {
    const parser = Bowser.getParser(navigator.userAgent);
    if (parser.getPlatformType() === "mobile") {
      document.getElementById("idLinkCertificadoIAM").click();
      window.close();
    }
  }
  render() {
    return (
      <div>
        <object
          data={require("../docs/CertificadoIAM.pdf")}
          type="application/pdf"
          className="w-full h-full absolute"
        >
          <br />
          <a
            href={require("../docs/CertificadoIAM.pdf")}
            id="idLinkCertificadoIAM"
            download="CertificadoIAM.pdf"
          >
            Your device cannot visualize the pdf, click here to download it
          </a>
        </object>
      </div>
    );
  }
}

export default CertificateIAM;
