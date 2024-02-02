import React, { useState, useEffect } from 'react';

const Document = () => {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState('');
  const [documents, setDocuments] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleUpload = async () => {
    if (!file || !title) {
      alert('Please choose a file and enter a title.');
      return;
    }

    setLoading(true);

    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('title', title);

      const response = await fetch('http://localhost:8012/api/documents/upload-file', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        alert('Document uploaded successfully.');
        await fetchDocuments();
        setFile(null);
        setTitle('');
      } else {
        console.error('Server Error:', response.statusText);
        alert('Failed to upload document. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An unexpected error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const fetchDocuments = async () => {
    try {
      const response = await fetch('http://localhost:8012/api/documents');
      if (response.ok) {
        const data = await response.json();
        setDocuments(data);
      } else {
        console.error('Server Error:', response.statusText);
        alert('Failed to fetch documents. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An unexpected error occurred. Please try again.');
    }
  };

  useEffect(() => {
    fetchDocuments();
  }, []);

  return (
    <div className="container mt-4">
      <h3 className="mb-3">Document Upload</h3>
      <div className="mb-3">
        <label htmlFor="fileInput" className="form-label">
          Choose a document (JPEG or PDF):
        </label>
        <input type="file" className="form-control" id="fileInput" accept=".jpeg, .pdf" onChange={handleFileChange} />
      </div>
      <div className="mb-3">
        <label htmlFor="titleInput" className="form-label">
          Enter a title:
        </label>
        <input type="text" className="form-control" id="titleInput" value={title} onChange={handleTitleChange} />
      </div>
      <button className="btn btn-primary" onClick={handleUpload} disabled={loading}>
        {loading ? 'Uploading...' : 'Upload Document'}
      </button>

      <div className="mt-4">
        <h4>Document List</h4>
        <ul>
          {documents.map((document) => (
            <li key={document.id}>
              <strong>Title:</strong> {document.title}, <strong>File:</strong> {document.fileName}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Document;
