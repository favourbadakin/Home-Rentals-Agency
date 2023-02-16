import React from "react";
import { useDropzone } from "react-dropzone";

function Drag() {
  const { getRootProps, getInputProps, acceptedFiles, fileRejections } = useDropzone({
    accept: {
      "image/jpg": [],
      "image/jpeg": [],
      "image/png": []
    }
  });
  const acceptedFileItems = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {Math.round(file.size / 1024)}KB
    </li>
    
    
    
  ));

  const rejectedFileItems = fileRejections.map(({ file, errors }) => (
    <li key={file.path}>
      {file.path} - {Math.round(file.size / 1024)}KB
      <ul>
        {errors.map((e) => (
          <li key={e.code}>{e.message}</li>
        ))}
      </ul>
    </li>
  ));
  return (
    <div
      {...getRootProps({
        className: "",
      })}
    >
      <input {...getInputProps()} />
      <div className="text-center border-dashed border-[1px] md:border-2 border-tertiary rounded py-3">
        <div className="font-medium">
          Drag your images here or
          <span className="text-tertiary font-semibold cursor-pointer ml-1">
            browse
          </span>
          <p className="opacity-50">Supported: JPG, JPEG, PNG</p>
        </div>
      </div>
      <aside>
        <ul className="text-[#4BB543]">{acceptedFileItems}</ul>
        <ul className="text-[#ED4337]">{rejectedFileItems}</ul>
      </aside>
    </div>
  );
}

export default Drag;