import {css} from "lit-element";

export default css`
.card {
    width: 350px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-shadow: 2px 2px 8px rgba(0,0,0,0.1);
    overflow: hidden;
    margin: 10px auto;
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

  .btnRuta{
    padding: 12px 24px;
    font-size: 16px;
    border: none;
    border-radius: 4px;
    background-color: red;
    color: #fff;
    text-transform: uppercase;
    transition: background-color 0.2s ease-in-out;
    cursor: pointer
  }

`