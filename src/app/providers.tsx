import theme from "@/theme/default";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ConfigProvider } from "antd";

export default function Providers({ children }: { children: React.ReactNode }) {
    return (
        <ConfigProvider theme={theme} >
            <AntdRegistry>{children}</AntdRegistry>
        </ConfigProvider>
    )
}
