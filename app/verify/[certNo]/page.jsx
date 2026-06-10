
"use client";
import {QRCodeSVG} from "qrcode.react";

export default async function Certificate({ params }) {
  const p = await params;
  const cert={
    certNo:p.certNo,
    name:"ADITYA PAL",
    father:"VEER SINGH",
    caste:"GADERIA",
    category:"OBC"
  };

  const verifyUrl=`https://your-app.vercel.app/verify/${cert.certNo}`;

  return (
    <div style={{maxWidth:1000,margin:"20px auto",padding:30,border:"2px solid #000"}}>
      <h1>OBC CERTIFICATE</h1>
      <p>Certificate No: {cert.certNo}</p>
      <QRCodeSVG value={verifyUrl} size={120} />
      <p>
        This is a demo certificate for {cert.name}, S/o {cert.father},
        belonging to {cert.caste} caste under {cert.category} category.
      </p>
    </div>
  );
}
