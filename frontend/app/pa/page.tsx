"use client"
import React, { useState } from 'react';
import axios from 'axios';

const UploadForm: React.FC = () => {
    const [file, setFile] = useState<File | null>(null);
    const [text, setText] = useState<string>('');

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
            setFile(event.target.files[0]);
        }
    };

    const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value);
    };

    const handleSubmit = async (event: any) => {
        // event.preventDefault();

        if (!file) {
            console.error('No file selected');
            return;
        }

        const formData = new FormData();
        formData.append('audioFile', file);
        formData.append('text', text);

        try {
            await axios.post('http://localhost:8000/transcribe', formData,{
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            } );
            console.log('File uploaded successfully');
            // Optionally, you can perform some action after successful upload
        } catch (error) {
            console.error('Error uploading file:', error);
        }
    };

    return (
        <div>
            <h2>Upload Audio File</h2>
            <form >
                <div>
                    <label>Audio File:</label>
                    <input type="file" accept=".mp3, .wav, .ogg" onChange={handleFileChange} />
                </div>
                <div>
                    <label>Text:</label>
                    <input type="text" value={text} onChange={handleTextChange} />
                </div>
                <button type="submit" onClick={handleSubmit}>Upload</button>
            </form>
        </div>
    );
};

export default UploadForm;
