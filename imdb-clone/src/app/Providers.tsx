"use client";

import React, { FC } from "react";
import { ThemeProvider } from "next-themes";

const Providers: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <div
        className={`
          dark:bg-gray-700 
          dark:text-gray-200 
          text-gray-700 
          transition-colors 
          duration-300 
          min-h-screen 
          select-none
        `}
      >
        {children}
      </div>
    </ThemeProvider>
  );
};

export default Providers;
