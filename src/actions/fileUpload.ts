"use client";

import sibilaReq from "./config/sibilaReq";
import setAuthTokenHeader from "./config/setAuthTokenHeader";


export const upladUserAvatar = async (
  file: File
): Promise<{ file_url: string }> => {
  setAuthTokenHeader();

  const formData = new FormData();
  formData.append("file_to_upload", file);

  const res = await sibilaReq.post(
    "/api/v1/uploads/?folder_name=avatars",
    formData,
    { headers: { "Content-Type": "multipart/form-data" } }
  );

  return res.data.data;
};

export async function uploadFile(file: File): Promise<string> {
  const formData = new FormData();
  formData.append("file", file);

  const res = await sibilaReq.post(
    "/api/v1/fileupload/upload", 
    formData, 
    { headers: {"Content-Type": "multipart/form-data"},
  });

  return res.data.data.url;
}

// export const uploadFile = async (file: RcFile): Promise<string> => {
//   setAuthTokenHeader();

//   const formData = new FormData();
//   formData.append("file_to_upload", file);

//   const res = await sibilaReq.post(
//     "/api/v1/uploads/business_file_upload",
//     formData,
//     { headers: { "Content-Type": "multipart/form-data" } }
//   );

//   return res.data.data;
// };
