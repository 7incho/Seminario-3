import React, { createContext, useState, useContext } from 'react';

const DocumentsContext = createContext();

export function useDocuments() {
  return useContext(DocumentsContext);
}

export function DocumentsProviders({ children }) {
  const [documents, setDocuments] = useState([]);

  const addDocuments = (newDocuments) => {
    setDocuments(prevDocuments => [...prevDocuments, ...newDocuments]);
  };

  const removeDocument = (id) => {
    setDocuments(prevDocuments => prevDocuments.filter(doc => doc.id !== id));
  };

  return (
    <DocumentsContext.Provider value={{ documents, addDocuments, removeDocument }}>
      {children}
    </DocumentsContext.Provider>
  );
}