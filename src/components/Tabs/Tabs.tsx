import React from "react";
import { Box, Button } from "@mui/material";
import { TabsProps } from "./types";

/**
 * Tabs компонент для переключения между вкладками
 *
 * @param props - свойства компонента Tabs
 * @param props.tabs - массив вкладок с их метками и значениями.
 * @param props.activeTab - текущее активное значение вкладки.
 * @param props.onTabChange - функция обратного вызова при изменении вкладки.
 *
 * @returns JSX элемент компонента Tabs.
 */
export const Tabs: React.FC<TabsProps> = ({
  tabs,
  activeTab,
  onTabChange,
}): JSX.Element => (
  <Box>
    {tabs.map((tab) => (
      <Button
        key={tab.value}
        onClick={() => onTabChange(tab.value)}
        variant={activeTab === tab.value ? "contained" : "outlined"}
        className={`tab-button ${
          activeTab === tab.value ? "tab-button-active" : ""
        }`}>
        {tab.label}
      </Button>
    ))}
  </Box>
);
