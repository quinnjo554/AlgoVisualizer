import { ChangeEvent, useRef, useState } from "react";
import { KeyboardEvent } from "react";
import { loop,declare,classType,keywords } from "../Constants/TypescriptKeywords";
function IDE() {
  const [text, setText] = useState("");
  const textRef = useRef<HTMLTextAreaElement>(null);

  // Generate an array of line numbers based on the number of newlines in the text
  let lines = text.split('\n');
  const lineNumbers = Array.from({ length: lines.length }, (_, index) => index + 1);
  const handleChange = (event:ChangeEvent<HTMLTextAreaElement>) => {

    setText(event.target.value);
  };


function handleKeyDown(event: KeyboardEvent<HTMLTextAreaElement>) {
    if(event.key ==='Tab'){
        event.preventDefault();
        if (textRef.current) {
            const { selectionStart, selectionEnd } = textRef.current;
            const newText = `${text.slice(0, selectionStart)}    ${text.slice(selectionEnd)}`;
            setText(newText);
          }   
    }
}

  

  return (
    <div className="editor">
      <div className="line-numbers">
        {lineNumbers.map(lineNumber => <div key={lineNumber}>{lineNumber}</div>)}
      </div>
      <textarea
        ref={textRef}
        className="text-area"
        value={text}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder="Type your code here..."
      />
    </div>
  );
}

export default IDE;
