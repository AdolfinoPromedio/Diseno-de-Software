import React from 'react'
import * as XLSX from 'xlsx';
import products from '../API/data.json';

console.log(products)
console.log(products[0])
console.log(products[0]['id'])
console.log(products[0]['nombreProducto'])
console.log(products[0]['precio'])
console.log(products[0]['url'])

/*const workbook = XLSX.readFile('productos.xlsx');
let worksheets = {}
for (const sheetName of workbook.SheetNames){
    worksheets[sheetName] = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName])
}

console.log(worksheets)*/

const readUploadFile = (e) => {
    e.preventDefault();
    if (e.target.files) {
        const reader = new FileReader();
        reader.onload = (e) => {
            const data = e.target.result;
            console.log(data);
            const workbook = XLSX.read(data, { type: "array" });
            console.log(workbook);
            const sheetName = workbook.SheetNames[0];
            console.log(sheetName);
            const worksheet = workbook.Sheets[sheetName];
            console.log(worksheet);
            const json = XLSX.utils.sheet_to_json(worksheet);
            console.log(json);
        };
        reader.readAsArrayBuffer(e.target.files[0]);
    }
}

export const DataJson = () => {
  return (
    <form>
        <label htmlFor="upload">Upload File</label>
        <input
            type="file"
            name="upload"
            id="upload"
            onChange={readUploadFile}
        />
    </form>
  )
}

export default DataJson;