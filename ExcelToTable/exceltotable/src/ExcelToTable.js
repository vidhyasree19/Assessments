import React, { useState } from 'react';
import * as XLSX from 'xlsx';

const ExcelToTable = () => {
  const [excelData, setExcelData] = useState(null);
  const temp = 0;
  const [error, setError] = useState(null);
  const handleChange = (e) => {
    const selectedFile = e.target.files[0];
    setError(null);
    let reader = new FileReader();
    reader.onload = (e) => {
      const result = new Uint8Array(e.target.result)
      const workbook = XLSX.read(result, { type: 'array' });
      console.log('work', workbook)
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const Data = XLSX.utils.sheet_to_json(sheet, { header: 1 });
      setExcelData(Data);
    }
    reader.readAsArrayBuffer(selectedFile)

  }

  console.log('ecel', excelData)


  return (
    <div>
      <input type="file" accept='.xlsx,.xsl' onChange={handleChange} id='inputFile' />
      {(excelData) ?


        (<table className="table">
          <thead className='table_heading'>
            <tr className='each_heading'>
              {excelData[temp].map((head, index) => (
                <th key={index}>{head}</th>
              ))}
            </tr>
          </thead>
          <tbody className='table_body'>

            {excelData.slice(1).map((eachData, index) => (
              <tr key={index}>
                {Object.keys(eachData).map((key) => (
                  <td key={key}>{eachData[key]}</td>
                ))}
              </tr>
            ))}

          </tbody>
        </table>) :

        (<h4> Please upload your file</h4>)}

    </div>
  )
}

export default ExcelToTable
