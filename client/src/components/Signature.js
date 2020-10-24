import React, { useRef } from "react";
import SignaturePad from "react-signature-canvas";
import "../styles/signature.css";
import trimCanvas from "trim-canvas";

function Signature() {
  const sigCanvas = useRef({});
  const getTrimmedCanvas = () => {
    let copy = document.createElement("canvas");
    copy.width = this._canvas.width;
    copy.height = this._canvas.height;
    copy.getContext("2d").drawImage(this._canvas, 0, 0);
    return trimCanvas(copy);
  };
  const uploadSignature = () => {
    console.log(sigCanvas.current.getTrimmedCanvas().toDataURL("image/png"));
  };
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
