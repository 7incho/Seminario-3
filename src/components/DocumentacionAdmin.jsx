import React, { useState, useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import { FiUpload, FiFile, FiTrash2, FiEye } from 'react-icons/fi'

function DocumentacionAdmin({ user }) {
  const [documents, setDocuments] = useState([])
  const [documentToDelete, setDocumentToDelete] = useState(null)

  const onDrop = useCallback((acceptedFiles) => {
    const newDocuments = acceptedFiles.map(file => ({
      id: Date.now() + Math.random(),
      name: file.name,
      file: file,
      uploadDate: new Date().toLocaleString()
    }))
    setDocuments(prevDocuments => [...prevDocuments, ...newDocuments])
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'application/pdf': ['.pdf'],
      'application/msword': ['.doc'],
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx']
    }
  })

  const removeDocument = (id) => {
    setDocumentToDelete(id)
  }

  const confirmDelete = () => {
    if (documentToDelete) {
      setDocuments(prevDocuments => prevDocuments.filter(doc => doc.id !== documentToDelete))
      setDocumentToDelete(null)
    }
  }

  const cancelDelete = () => {
    setDocumentToDelete(null)
  }

  const viewDocument = (file) => {
    const fileURL = URL.createObjectURL(file)
    window.open(fileURL, '_blank')
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Documentación Profesor</h1>
      <p className="mb-4">Bienvenido, {user.nombre}. Aquí puedes subir y gestionar los documentos.</p>

      <div {...getRootProps()} className={`p-6 mt-4 border-2 border-dashed rounded-lg text-center cursor-pointer ${isDragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300'}`}>
        <input {...getInputProps()} />
        <FiUpload className="mx-auto text-4xl mb-2 text-gray-400" />
        <p>Arrastra y suelta archivos aquí, o haz clic para seleccionar archivos</p>
        <p className="text-sm text-gray-500">(Solo se aceptan archivos .pdf, .doc y .docx)</p>
      </div>

      {documents.length > 0 && (
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Documentos existentes</h2>
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            {documents.map((doc) => (
              <div key={doc.id} className="flex items-center justify-between p-4 border-b last:border-b-0">
                <div className="flex items-center">
                  <FiFile className="text-gray-500 mr-2" />
                  <span>{doc.name}</span>
                </div>
                <div className="flex items-center">
                  <span className="text-sm text-gray-500 mr-4">{doc.uploadDate}</span>
                  <button
                    onClick={() => viewDocument(doc.file)}
                    className="text-blue-500 hover:text-blue-700 mr-2 p-1"
                    aria-label="Ver documento"
                  >
                    <FiEye />
                  </button>
                  <button
                    onClick={() => removeDocument(doc.id)}
                    className="text-red-500 hover:text-red-700 p-1"
                    aria-label="Eliminar documento"
                  >
                    <FiTrash2 />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {documentToDelete && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-4">¿Está seguro?</h3>
            <p className="mb-4">Esta acción eliminará permanentemente el documento.</p>
            <div className="flex justify-end space-x-2">
              <button
                onClick={cancelDelete}
                className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
              >
                Cancelar
              </button>
              <button
                onClick={confirmDelete}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Eliminar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default DocumentacionAdmin