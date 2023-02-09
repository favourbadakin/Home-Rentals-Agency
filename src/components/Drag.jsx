import React from "React";
import { useDropzone } from "react-dropzone";

function Drag() {
  const { getRootProps, getInputProps, acceptedFiles } = useDropzone({});
  const files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));
  return (
    <div
      {...getRootProps({
        className:
          "border-dashed border-[1px] md:border-2 border-tertiary rounded py-3",
      })}
    >
      <input {...getInputProps()} />
      <div className="text-center">
        <div className="font-medium">
          Drag your images here or
          <span className="text-tertiary font-semibold cursor-pointer ml-1">
            browse
          </span>
          <p className="opacity-50">Supported: JPG, JPEG, PNG</p>
        </div>
      </div>
      <aside>
        <ul>{files}</ul>
      </aside>
    </div>
  );
}

export default Drag;