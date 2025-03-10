import React, { useEffect } from 'react';

declare global {
  interface Window {
    hbspt: any;
  }
}

const FormPage = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "//js.hsforms.net/forms/embed/v2.js";
    script.charset = "utf-8";
    script.type = "text/javascript";
    script.onload = () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          portalId: "19489363",
          formId: "43d372b2-91f1-47c1-8cde-0eefc3ad1d52",
          region: "na1",
          target: "#hubspotForm"
        });
      }
    };
    document.body.appendChild(script);
  }, []);

  return (
    <div className="p-4 flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md">
        <div id="hubspotForm"></div>
      </div>
    </div>
  );
};

export default FormPage;
