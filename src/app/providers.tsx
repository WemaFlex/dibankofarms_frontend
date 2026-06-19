"use client"
import theme from "@/theme/default";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ConfigProvider } from "antd";

export default function Providers({ children }: { children: React.ReactNode }) {
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: { refetchOnWindowFocus: true },
        },
    });

    return (
        <QueryClientProvider client={queryClient}>
            <ConfigProvider theme={theme} >
                <AntdRegistry>{children}</AntdRegistry>
            </ConfigProvider>
        </QueryClientProvider>
    )
}
