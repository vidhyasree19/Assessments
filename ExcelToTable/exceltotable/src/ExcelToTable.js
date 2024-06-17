import React, { useState, useRef } from 'react';
import * as XLSX from 'xlsx';
import config from './config';

const ExcelToTable = () => {
  const [excelData, setExcelData] = useState(null);
  const [filters, setFilters] = useState([]);
  const [dropdownOptions, setDropdownOptions] = useState([]);
  const [sortOrder, setSortOrder] = useState('');
  const [sortColumn,setSortColumn]=useState('')
  const fileInputRef = useRef(null);

  const { temp, slice, filterableColumns, ageColumnIndex ,bonusColumnIndex} = config;

  const handleChange = (e) => {
    const selectedFile = e.target.files[0];
    let reader = new FileReader();
    reader.onload = (e) => {
      const result = new Uint8Array(e.target.result);
      const workbook = XLSX.read(result, { type: 'array' });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const data = XLSX.utils.sheet_to_json(sheet, { header: 1 });
      setExcelData(data);
      setFilters(new Array(data[0].length).fill(''));
      setDropdownOptions(createDropdownOptions(data));
    };
    reader.readAsArrayBuffer(selectedFile);
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFilterChange = (index, value) => {
    const newFilters = [...filters];
    newFilters[index] = value;
    setFilters(newFilters);
  };

  const handleSortChange = (order,column) => {
    setSortOrder(order);
    setSortColumn(column)
  };

  const createDropdownOptions = (data) => {
    return data[0].map((_, colIndex) => {
      if (filterableColumns.includes(colIndex)) {
        const uniqueValues = Array.from(new Set(data.slice(1).map(row => row[colIndex])));
        return uniqueValues;
      }
      return [];
    });
  };

  const filterData = (data) => {
    return data.filter((row) => {
      return filters.every((filter, index) => {
        if (!filter) return true;
        return row[index] === filter;
      });
    });
  };

  const sortData = (data) => {
    if (sortOrder === 'lowToHigh') {
      return [...data].sort((a, b) => a[sortColumn] - b[sortColumn]);
    }
    if (sortOrder === 'highToLow') {
      return [...data].sort((a, b) => b[sortColumn] - a[sortColumn]);
    }
    return data;
  };

  const processedData = excelData ? sortData(filterData(excelData.slice(slice))) : [];

  return (
    <div>
      <button className='fileinput' onClick={handleButtonClick}>Select File</button>
      <input
        type="file"
        accept=".xlsx,.xls"
        onChange={handleChange}
        style={{ display: 'none' }}
        ref={fileInputRef}
      />
      {excelData ? (
        <div>
          <table className="table">
            <thead className="table_heading">
              <tr className="each_heading">
                {excelData[temp].map((head, index) => (
                  <th key={index}>
                    {head}
                    {filterableColumns.includes(index) && (
                      <>
                        <br />
                        <select
                          value={filters[index] || ''}
                          onChange={(e) => handleFilterChange(index, e.target.value)}
                        >
                          <option value="">All</option>
                          {dropdownOptions[index].map((option, idx) => (
                            <option key={idx} value={option}>{option}</option>
                          ))}
                        </select>
                      </>
                    )}
                    {index === ageColumnIndex && (
                      <>
                        <br />
                        <button id='sortbutton' onClick={() => handleSortChange('lowToHigh',ageColumnIndex)}><img src="./images/downarrow.png"/></button>
                        <button id='sortbutton' onClick={() => handleSortChange('highToLow',ageColumnIndex)}><img src="./images/upload.png"/></button>
                      </>
                    )}
                    {index === bonusColumnIndex && (
                      <>
                        <br />
                        <button id='sortbutton' onClick={() => handleSortChange('lowToHigh',bonusColumnIndex)}><img src="./images/downarrow.png"/></button>
                        <button id='sortbutton' onClick={() => handleSortChange('highToLow',bonusColumnIndex)}><img src="./images/upload.png"/></button>
                      </>
                    )}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="table_body">
              {processedData.map((eachData, index) => (
                <tr key={index}>
                  {eachData.map((cell, cellIndex) => (
                    <td key={cellIndex}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <h4>Please upload your file</h4>
      )}
    </div>
  );
};

export default ExcelToTable;
