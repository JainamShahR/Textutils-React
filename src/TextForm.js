import React, {useState} from 'react'


export default function TextForm(props) {
  const handleupClick= () => {
    console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText) 
  }

   
  const handleLoClick= () => {
    console.log("Uppercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText) 
  }
  const handleClearClick= () => {
    console.log("Text was cleared" + text);
    let newText = '';
    setText(newText) 
  }

  const handleCopy= () => {
    console.log("Text was copied");
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  }

  const handleExtraSpaces= () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
  }


  const handleonChange= (e)=>{
    console.log("Onchange");
    setText(e.target.value);
  }

  const [text,setText] = useState('Enter the text here')

    return (
      <>
    <div className="container">
    
      <h1>{props.heading}</h1>
   <div className="mb-3">
  <label htmlFor="myBox" className="form-label"></label>
  <textarea className="form-control" value ={text} onChange={handleonChange} id="myBox" rows="8"></textarea>
</div>
<button className="btn-btn-primary mx-2" onClick={handleupClick}>Convert to Upper case</button>
<button className="btn-btn-primary mx-2" onClick={handleLoClick}>Convert to lower Case </button>
<button className="btn-btn-primary mx-2" onClick={handleClearClick}> Clear Text </button>
<button className="btn-btn-primary mx-2" onClick={handleCopy}> Copy Text </button>
<button className="btn-btn-primary mx-2" onClick={handleExtraSpaces}> Remove Extra Space </button>

    </div>
    <div
      className = "container my-2">
        <h2> Your Text Summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p> {0.008 *text.split(" ").length} Minutes Read </p>
    </div>
    <h2>Preview </h2>
    <p> {text}</p>
    </>
  )
}
