import {css} from "lit-element";

export default css`

.card {
  margin: 10px auto;
    width: 350px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-shadow: 2px 2px 8px rgba(0,0,0,0.1);
    overflow: hidden;
    margin: 10px;
  }
  
  .card-header {
    background-color: #333;
    padding: 16px;
    text-align: center;
  }
  
  .card-header .text-header {
    margin: 0;
    font-size: 18px;
    color: rgb(255, 255, 255);
  }
  
  .card-body {
    padding: 16px;
  }
  
  .form-group {
    margin-bottom: 10px;
  }
  
  .form-group label {
    display: block;
    font-size: 14px;
    color: #333;
    font-weight: bold;
    margin-bottom: 1px;
  }
  
  .form-group input[type="text"],
  .form-group input[type="email"],
  .form-group input[type="password"] {
    width: 90%;
    padding: 8px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  .btn {
    padding: 12px 24px;
    margin-left: 13px;
    font-size: 16px;
    border: none;
    border-radius: 4px;
    background-color: #333;
    color: #fff;
    text-transform: uppercase;
    transition: background-color 0.2s ease-in-out;
    cursor: pointer
  }
  
  .btn:hover {
    background-color: #ccc;
    color: #333;
  }
  .data-section table {
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
    margin-bottom: 20px;
  }
  
  .data-section th,
  .data-section td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: left;
  }
  
  .data-section th {
    background-color: #f0f0f0;
    font-weight: bold;
  }
  
  .data-section tbody tr:nth-child(even) {
    background-color: #e7e7e7;
  }
  
  
  .data-section button {
    padding: 5px 10px;
    cursor: pointer;
    background-color: #dc3545;
    color: #fff;
    border: none;
    border-radius: 4px;
  }
  
  .data-section button:hover {
    background-color: #c82333;
  }
  .form-control{
    width: 95%;
    padding: 8px;
  }
  

`