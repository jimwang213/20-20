import React from 'react';
const reactStringReplace = require('react-string-replace');

export function processText(text) {
    if (!text) return text;

    // ^SOMETHING^ -> <p>SOMETHING</p>
    let processed = reactStringReplace(text, /\^([^\^]*?)\^/g, (match, i) => (
        <p>{match}</p>
      ));

    // &SOMETHING& -> <li>SOMETHING</li>
    processed = reactStringReplace(processed, /\&([^\&]*?)\&/g, (match, i) => (
        <li>{match}</li>
      )).filter((t) => {
          return !(typeof t === "string" && t.trim() === "")
        });
    

    // <li>A</li><li>B</li> -> <ul><li>A</li><li>B</li></ul>
    let count = 0;
    let li = [];
    let new_processed = [];
    while (count < processed.length) {
        if (processed[count] && typeof processed[count] !== "string" &&  processed[count].type === "li") {
            li.push(processed[count]);
        } else {
            if (li.length > 0) {
                new_processed.push(<ul>{li}</ul>)
                li = [];
            }
            new_processed.push(processed[count]);
        }
        count++;
    }
    if (li.length > 0) {
        new_processed.push(<ul>{li}</ul>)
        li = [];
    }
    return new_processed;
}
