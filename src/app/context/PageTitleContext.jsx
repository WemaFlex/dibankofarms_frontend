"use client"

import { createContext, useContext, useState } from 'react';

const PageTitleContext = createContext(undefined);

export function PageTitleProvider({ children }) {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    return (
        <PageTitleContext.Provider value={{ title, desc, setTitle, setDesc, }}>
            {children}
        </PageTitleContext.Provider>
    );
}

export function usePageTitle() {
    const context = useContext(PageTitleContext);

    if (!context) {
        throw new Error("usePageTitle must be used within a PageTitleProvider");
    }

    return context;
}