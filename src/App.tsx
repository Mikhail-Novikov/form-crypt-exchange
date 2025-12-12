import { Container, Box, ThemeProvider, Typography } from '@mui/material';
import { theme } from './theme';
import { useState } from 'react';
import { Tabs } from './components/Tabs';

import { VolumesInputs } from './components/Volumes';
import { RequisiteTypes } from './components/Requisite';

import './App.css';

const tabs = [
  { label: 'Банки', value: 'bank' },
  { label: 'Наличные', value: 'cash' },
  { label: 'Курьер', value: 'courier' },
];

function App() {
  const [activeTab, setActiveTab] = useState('bank');
  
  return (
    <ThemeProvider theme={theme}>
      <Box className="app-root">
        <Container maxWidth="sm" className="app-container">
          {/* Header */}
          <Typography variant="h1" className="app-title">
            Способ вывода
          </Typography>

          {/* Tabs */}
           <Tabs tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />

          {/* Amount Input Section */}

          <VolumesInputs sendAmount={1300000000} receiveAmount={120000} />

          {/* Requisite Type Selection */}

          <RequisiteTypes />

          {/* Requisites Items */}

        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;