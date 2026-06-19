"use client";

import { APIResponse, ItemAPIResponse, User } from "@/types";
import sibilaReq from "./config/sibilaReq";
import { filterFalslyValues } from "@/utils/common";
import setAuthTokenHeader from "./config/setAuthTokenHeader";

export const register = async ( data: object ): Promise<ItemAPIResponse<User>> => {
  const filterdVals = filterFalslyValues(data);

  const res = await sibilaReq.put(
    "/api/v1/auth/register",
    filterdVals
  );

  return res.data;
};

export const signIn = async (identifier: string, password: string) => {
  // Initialize payload with required base fields
  const data: Record<string, string> = { 
    password, 
    app: "merchant" 
  };

  // 1. Detect if the identifier is an email using Regex
  const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(identifier);

  // 2. Assign the identifier to the correct key
  if (isEmail) {
    data.email = identifier;
  } else {
    // If it's not an email, we assume it passed the phone validation
    data.phone = identifier;
  }

  // 3. Make the request
  const res = await sibilaReq.post("/api/v1/auth/login", data);

  if (res.data.data.mfa) {
    localStorage.setItem(process.env.NEXT_PUBLIC_LOGIN_TOKEN!, res.data.data.loginToken)
    localStorage.setItem(process.env.NEXT_PUBLIC_USER_MFA!, JSON.stringify(res.data.data.mfa))      
  } else {
    localStorage.setItem(process.env.NEXT_PUBLIC_API_AUTH_TOKEN!, res.data.data.token)
  }

  // Return the extracted data
  return res.data.data;
};

export const signIn2fa = async (
    loginToken: string | null | undefined,
    verificationCode: string,
    mfaType: string
  ): Promise<ItemAPIResponse<User & {token: string}> | null> => {

  const res = await sibilaReq.post("/api/v1/auth/login2fa", {
    loginToken,
    verificationCode,
    mfaType,
  });

  return res.data;
}

export const loadUser = async (token: string) => {
  const options = { headers: {} };

  if (token) {
    options.headers = { Authorization: `Bearer ` + token };
  }

  const res = await sibilaReq.get("/api/v1/auth/user", options);

  return res.data;
}

export const logout = async (): Promise<undefined> => {
  const res = await sibilaReq.get("/api/v1/auth/logout");

  return res.data;
}

export const forgotPassword = async (
  email: string | undefined, phone: string | undefined
) => {
  const data: {
    email?: string, phone?: string, app: "merchant"
  } = { app: "merchant"  };

  if (email) data.email = email;
  if (phone) data.phone = phone;

  await sibilaReq.post("/api/v1/auth/forgotpassword", data);
}

export const resetPassword = async (
  resetToken: string, newPassword: string
): Promise<ItemAPIResponse<null>> => {
  const res = await sibilaReq.post("/api/v1/auth/resetpassword",
    { resetToken, newPassword }
  );

  return res.data.data;
}

export const updateAvatar = async (url: string): Promise<APIResponse<User>> => {
  const res = await sibilaReq.put(
    "/api/v1/auth/user/updatedetails",
     { avatarUrl: url }
  );

  return res.data;
};

export const verifyUserEmail = async (
  token: string
): Promise<APIResponse<User>> => {
  const res = await sibilaReq.post("/api/v1/verify_token", {
    token,
  });

  return res.data.info;
};

export const verifyUserPhone = async (
  token: string
): Promise<APIResponse<User>> => {
  const res = await sibilaReq.post("/api/v1/verify_token", {
    token,
  });

  return res.data.info;
};

export const changePassword = async (
  data: object
): Promise<{ message: string }> => {
  setAuthTokenHeader();
  const filterdVals = filterFalslyValues(data);

  const res = await sibilaReq.put(
    "/api/v1/auth/user/updatepassword",
    filterdVals
  );

  return { message: res.data.message };
};

export const changeEmail = async (
  data: object
): Promise<{ message: string }> => {
  setAuthTokenHeader();
  const filterdVals = filterFalslyValues(data);

  const res = await sibilaReq.put("/api/v1/auth/user/updateemail", filterdVals);

  return { message: res.data.message };
};

export const changePhone = async (
  data: object
): Promise<{ message: string }> => {
  setAuthTokenHeader();
  const filterdVals = filterFalslyValues(data);

  const res = await sibilaReq.put(
    "/api/v1/auth/user/updatemobile",
    filterdVals
  );

  return { message: res.data.message };
};

export const updateProfile = async (
  data: object
): Promise<{ message: string }> => {
  const filterdVals = filterFalslyValues(data);

  const res = await sibilaReq.put(
    "/api/v1/auth/user/updatedetails",
    filterdVals
  );

  return { message: res.data.message };
};

export const getQrCode = async (): Promise<string> => {
  setAuthTokenHeader();

  const qrCode = await sibilaReq.get("/api/v1/auth/genqrcode");

  return qrCode.data.data?.qrImage;
};

export const getSmsMfaOtp = async (): Promise<APIResponse<null>> => {
  setAuthTokenHeader();

  const res = await sibilaReq.get("/api/v1/auth/smsmfaotp");

  return res.data;
};

export const enableSmsMfa = async (
  verificationCode: string
): Promise<APIResponse<null>> => {
  setAuthTokenHeader();

  const res = await sibilaReq.post("/api/v1/auth/enablesmsmfa", {
    verificationCode,
  });

  return res.data;
};

export const disableSmsMfa = async (
  password: string
): Promise<APIResponse<null>> => {
  setAuthTokenHeader();

  const res = await sibilaReq.post("/api/v1/auth/disablesmsmfa", {
    password,
  });

  return res.data;
};

export const enable2Fa = async (
  verificationCode: string
): Promise<APIResponse<null>> => {
  setAuthTokenHeader();

  const res = await sibilaReq.post("/api/v1/auth/enablemultifa", {
    verificationCode,
  });

  return res.data;
};

export const disable2Fa = async (
  password: string
): Promise<APIResponse<null>> => {
  setAuthTokenHeader();

  const res = await sibilaReq.post("/api/v1/auth/disablemultifa", {
    password,
  });

  return res.data;
};

// export const signUpUser = async (
//   newUserDetails: SignUpData & { invite_status: boolean }
// ): Promise<APIResponse<User>> => {
//   const filterdVals = filterFalslyValues(newUserDetails) as object & {
//     invite_status: boolean;
//   };

//   const res = await sibilaReq.post("/api/v1/users/", {
//     ...filterdVals,
//     role: "customer",
//     invite_status: filterdVals?.invite_status ?? false,
//     status: "active",
//   });

//   return res.data.data;
// };