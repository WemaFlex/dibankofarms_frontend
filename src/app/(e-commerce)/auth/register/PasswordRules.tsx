"use client";


import useValidatePwd from "@/app/hooks/useValidatePwd";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";
import { Flex, FormInstance, Tag, theme } from "antd";
import { useWatch } from "antd/es/form/Form";

export default function PasswordRules({
  form,
  field,
}: {
  form: FormInstance;
  field?: string;
}) {
  const { token } = theme.useToken();
  const password = useWatch(field || "password", form) || "";

  const [hasMinLength, hasUppercase, hasLowercase, hasNumber] =
    useValidatePwd(password);

  return (
    <Flex gap={token.marginSM} wrap style={{ marginBottom: token.marginSM }}>
      <Tag
        icon={hasMinLength ? <CheckOutlined /> : <CloseOutlined />}
        color={hasMinLength ? "green" : "red"}
      >
        8+ Characters
      </Tag>
      <Tag
        icon={hasNumber ? <CheckOutlined /> : <CloseOutlined />}
        color={hasNumber ? "green" : "red"}
      >
        Number
      </Tag>
      <Tag
        icon={hasUppercase ? <CheckOutlined /> : <CloseOutlined />}
        color={hasUppercase ? "green" : "red"}
      >
        Uppercase Letter
      </Tag>
      <Tag
        icon={hasLowercase ? <CheckOutlined /> : <CloseOutlined />}
        color={hasLowercase ? "green" : "red"}
      >
        Lowercase Letter
      </Tag>
    </Flex>
  );
}
