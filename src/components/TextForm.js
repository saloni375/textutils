import React,{useState} from 'react'

export default function TextForm(props) {
  

    const handleUpClick = ()=>{
        console.log("upercase was clicked");
        let newText = text.toUpperCase();
        setText(newText);
        props.showalert("converted to uppercase","success");
    }


    const handleLoClick = ()=>{
      console.log("lowercase was clicked");
      let newText = text.toLowerCase();
      setText(newText);
      props.showalert("converted to lowercase","success");
  }
    const handleclClick = ()=>{
      console.log("lowercase was clicked");
      let newText = ' ';
      setText(newText);
      props.showalert("text was cleared","success");
  }

  const handleCapitalizeClick = () => {
    console.log("capitalize case was clicked");
    
    let newText = text.toLowerCase().split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");

    setText(newText);
    props.showalert("it was capitalized","success");
}


    const handleOnChange = (event)=>{
        console.log("on change");
        setText(event.target.value);
        
    }

    const handleCopyClick = () => {
      console.log("text copied to clipboard");
      navigator.clipboard.writeText(text);
      props.showalert("copeid to clipboard","success");
  };
  
  const [text,setText] = useState('');

 
  return (
    <>
    <div  className="container" style = {{color: props.mode === 'dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
    <div className="mb-3">
   <textarea className="form-control" value={text} onChange={handleOnChange}  style = {{backgroundColor: props.mode === 'dark'?'#13466e':'white' ,  color: props.mode === 'dark'?'white':'black'}} id="myBox" rows="8"></textarea>
   </div>  
   <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Upercase</button>
  
   <button  disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to lowercase</button>

   <button  disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleclClick}>Clear text</button>

   <button  disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCapitalizeClick}>capitalize text</button>

   <button  disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopyClick}>copy to clipboard</button>
   </div>

<div className="container my-2" style = {{color: props.mode === 'dark'?'white':'black'}} >
  <h2>your text summary</h2>
  <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
   <p>{ 0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minuts read</p>
   <h3><b>preview</b></h3>
   <p>{text.length>0? text:"nothing to preview"}</p>
</div>


    </>
  )
}
