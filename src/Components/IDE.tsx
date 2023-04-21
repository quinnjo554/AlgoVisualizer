import { ChangeEvent, useRef, useState } from "react";
import { KeyboardEvent } from "react";
import { loop,declare,classType,keywords } from "../Constants/TypescriptKeywords";

function IDE() {
  const [text, setText] = useState("");
  const textRef = useRef<HTMLDivElement>(null);

  // Generate an array of line numbers based on the number of newlines in the text
  let lines = text.split('\n');
  const lineNumbers = Array.from({ length: lines.length }, (_, index) => index + 1);

  const handleChange = (event:ChangeEvent<HTMLDivElement>) => {
    setText(event.target.textContent || '');
  };

  //use node to execute js code
  function handleKeyDown(event: KeyboardEvent<HTMLElement>) {
    let caretPos = 0;
    let end = 0;
    let sel:any;
    let range: Range;
    console.log(event.key);
    if(event.key ==='Tab'){
        event.preventDefault();
        if (textRef.current) {
            const start = window.getSelection();
            if(start?.rangeCount){
              range = start.getRangeAt(0)
              end = range.startOffset;
              caretPos = range.endOffset;
              
            }
            const newText = `${text.slice(0, caretPos)}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${text.slice(caretPos)}`;

            textRef.current.innerHTML = newText;
          }   
    }
  }

  return (
    <div className="editor">
      <div className="line-numbers">
        {lineNumbers.map(lineNumber => <div key={lineNumber}>{lineNumber}</div>)}
      </div>
      <div
        ref={textRef}
        className="text-area"
        onInput={handleChange}
        onKeyDown={handleKeyDown}
        placeholder="Type your code here..."
        contentEditable="true"
      ></div>
      
    </div>
  );
}

export default IDE;
