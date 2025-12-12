// табы для компонента Tabs
export interface TabItem {
  // метка вкладки
  label: string;
  // значение вкладки
  value: string;
}

// свойства компонента Tabs
export interface TabsProps {
  // массив вкладок
  tabs: TabItem[];
  // текущее активное значение вкладки
  activeTab: string;
  // функция обратного вызова при изменении вкладки
  onTabChange: (value: string) => void;
}
