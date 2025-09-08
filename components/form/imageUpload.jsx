"use client";

import { UploadButton } from "../Uploader";

// import { UploadButton } from "";
// type prop = {
//   setFiles:string
//   files:string
// };
export default function ImageButton() {
  return (
    <UploadButton
      endpoint="imageUploader"
      // appearance={
      //   {
      //     button:{
      //    background:"green",
      //    width:"400px"
      //     }
      //   }
      // }
      onClientUploadComplete={(res) => {
        console.log("Files: ", res);
        alert("Upload Completed");
      }}
      onUploadError={(error) => {
        // Do something with the error.
        alert(`ERROR! ${error.message}`);
      }}
    />
  );
}
