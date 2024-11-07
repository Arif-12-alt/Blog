import React from "react";
import './App.css';

const Form=()=>{
return(
<>
<div class="form-floating">
    <h1>Type To Search</h1><br/><br/>
  <input type="text" class="form-control" id="floatingInput" placeholder="Search"/><br/><br/>
  <button>Go</button>
</div>
</>
);
}
export default Form;