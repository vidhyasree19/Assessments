import React, { useState } from 'react'
import * as XLSX from 'xlsx';
const ExcelToTable = () => {
    const [excelData, setExcelData] = useState(null);
    const [error, setError] = useState(null);
    const [sheetNames, setSheetNames] = useState([]);
    const [activeSheet, setActiveSheet] = useState(null);
    const [sheetData, setSheetData] = useState({});


    const handleChange = async (e) => {
        const myFile = e.target.files[0];
        if (!myFile) return;
        let reader = new FileReader();
        reader.onload = (e) => {
            const data = new Uint8Array(e.target.result)
            try {
                const wb = XLSX.read(data, { type: 'array' });
                setSheetNames(wb.SheetNames);
                const mySheetData = {};
                wb.SheetNames.forEach(sheetName => {
                    const worksheet = wb.Sheets[sheetName];
                    const Data = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
                    mySheetData[sheetName] = Data;
                });
                setSheetData(mySheetData);
                setActiveSheet(wb.SheetNames[0]);
            }
            catch (error) {
                setError("Error reading the file");
            }

            setExcelData(myFile);
        }
        reader.readAsArrayBuffer(myFile)
    };


    return (
        <div>
            <input type='file' accept='.xlsx,.xls' onChange={handleChange} />
            <div> {sheetNames?.map((sheetName, index) => (
                <button key={index} onClick={() => setActiveSheet(sheetName)}> {sheetName} </button>))}</div>
            {activeSheet && sheetData[activeSheet] && (
                <table className="table">
                    <thead className='table_heading'>
                        <tr className='each_heading'> {sheetData[activeSheet][0]?.map((head, index) => (
                            <th key={index}>{head}</th>))}
                        </tr>
                    </thead>
                    <tbody className='table_body'> {sheetData[activeSheet]?.slice(1)?.map((eachData, index) => (
                        <tr key={index}>
                            {eachData?.map((cell, cellIndex) => (
                                <td key={cellIndex}>{cell}</td>
                            ))}
                        </tr>
                    ))} </tbody>
                </table>
            )}
            {!excelData && (<h1>No data</h1>)} {error && (<h2>{error}</h2>)}
        </div>
    );
};

export default ExcelToTable
