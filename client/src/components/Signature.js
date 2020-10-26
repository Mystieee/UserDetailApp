import React, { useRef } from "react";
import SignaturePad from "react-signature-canvas";
import "../styles/signature.css";

function Signature() {
  const sigCanvas = useRef({});

  return (
    <div className="form-horizontal-canvas">
      <SignaturePad
        ref={sigCanvas}
        canvasProps={{
          className: "signatureCanvas"
        }}
      />
    </div>
  );
}

export default Signature;
