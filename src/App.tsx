import { Container, Box, ThemeProvider, Typography } from '@mui/material';
import { theme } from './theme';
import './App.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box className="app-root">
        <Container maxWidth="sm" className="app-container">
          {/* Header */}
          <Typography className="app-title">
            Способ вывода
          </Typography>

          {/* Tabs */}

          {/* Amount Input Section */}

          {/* Save Requisites Checkbox */}

          {/* Requisite Type Selection */}

          {/* Requisites Items */}

        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;