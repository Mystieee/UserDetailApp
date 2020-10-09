import React, { Component, useRef } from 'react'
import SignaturePad from "react-signature-canvas";
import "../styles/signature.css";
import trimCanvas from 'trim-canvas'

function Signature() {
    const sigCanvas = useRef({});
     const getTrimmedCanvas = () => {
        // copy the canvas
        let copy = document.createElement('canvas')
        copy.width = this._canvas.width
        copy.height = this._canvas.height
        copy.getContext('2d').drawImage(this._canvas, 0, 0)
        // then trim it
        return trimCanvas(copy)
      }
    const uploadSignature=() =>{
        console.log("sigCanvas", sigCanvas);
        console.log("sigCanvas.getTrimmedCanvas: ", sigCanvas.current.getTrimmedCanvas());
        console.log(sigCanvas.current.getTrimmedCanvas().toDataURL("image/png"));

        const sign = sigCanvas.current.getTrimmedCanvas().toDataURL("image/png");
    }
    return (
        <div>
            <SignaturePad
                ref={sigCanvas}
                canvasProps={{
                    className:"signatureCanvas"
            }} />

            <button onClick={uploadSignature}>Save</button>
        </div>
    )
}

export default Signature;