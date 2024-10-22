import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import { AuthProvider } from './contexts/AuthContext';
import { DocumentsProviders } from './contexts/DocumentsContext';

function App() {
  return (
    <AuthProvider>
      <Router>
      <DocumentsProviders>
        <AppRoutes />
      </DocumentsProviders>
      </Router>
    </AuthProvider>
  );
}

export default App;
