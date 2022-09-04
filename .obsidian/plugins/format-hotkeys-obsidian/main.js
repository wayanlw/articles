"use strict";var e=require("obsidian"),n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])})(e,t)};
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function t(e,n){for(var t=0,o=n.length,i=e.length;t<o;t++,i++)e[i]=n[t];return e}var o=function(e){return"string"==typeof e||e instanceof String},i=function(e,n,t){if(void 0===t&&(t=!1),n.length<=0)return e.length+1;for(var o=0,i=0,r=t?1:n.length;(i=e.indexOf(n,i))>=0;)++o,i+=r;return o},r="^(\\s*)\\d+\\. ",a="^(\\s*)[-*] \\[[ xX]\\] ",l="^(\\s*)([-*]) ",d=["^(#+) ",r,"^>\\s*",a,l],c=function(e,n){return void 0===n&&(n="gm"),o(e)&&(e=[e]),new RegExp(e.join("|"),n)},f=function(e,n){return o(n)&&(n=c(n)),-1!==e.search(n)},s=function(e){if(e.somethingSelected()){var n=e.getCursor("from"),t=e.getCursor("to");return{start:i={line:n.line,ch:0},end:r={line:t.line,ch:e.getLine(t.line).length},content:a=e.getRange(i,r),hasSelection:!0,editor:e}}var o=e.getCursor().line,i={line:o,ch:0},r={line:o,ch:e.getDoc().getLine(o).length},a=e.getRange(i,r),l=e.getCursor("head");return{start:i,end:r,content:a,hasSelection:!1,editor:e,originalHead:l}},g=function(e,n){return(n.match(new RegExp("(.*\n?){"+e+"}(.*)(\n?)"))||[])[2]||""},u=function(e,n,t){var i=e.start,r=e.end,a=e.editor,l=e.hasSelection,d=e.originalHead;if(l)a.setSelection(i,{line:r.line,ch:a.getLine(r.line).length});else if(d){var c=d.line,f=0,s=d.line-i.line;o(n)&&o(t)&&(f=g(s,t).length-g(s,n).length);var u=d.ch+f;a.setSelection({line:c,ch:u})}},m=function(e){var n=e.content,o=e.prefix,i=e.preserveIndent,r=void 0!==i&&i,a=e.replace,l=void 0===a?[]:a;if(r){var d=n.split("\n");return d.forEach((function(e,n){var i=(e.match("^(\\s*)")||[])[1]||"",r=e.replace(c(t(t([],l),["^(\\s*)"])),"");d[n]=""+i+o+r})),d.join("\n")}return n.replace(c(t(t([],l),["^(\\s*)"])),o)},h=function(e){for(var n=[],o=1;o<arguments.length;o++)n[o-1]=arguments[o];console.log.apply(console,t(["[FormatHotkeys] "+e],n))},p=function(o){function g(){var n=null!==o&&o.apply(this,arguments)||this;return n.onload=function(){h("Loading..."),n.registerCommands(),h("Loaded!")},n.onunload=function(){h("Cleanly shutdown")},n.registerCommands=function(){n.addCommand({id:"fho-todo",name:"Toggle checklist for selection",callback:n.toggleTodo,hotkeys:[{modifiers:["Mod","Shift"],key:"6"}]}),n.addCommand({id:"fho-quote",name:"Toggle blockquote for selection",callback:n.toggleQuote,hotkeys:[{modifiers:["Mod","Shift"],key:"9"}]}),n.addCommand({id:"fho-ul",name:"Toggle bulleted List for selection",callback:n.toggleUL,hotkeys:[{modifiers:["Mod","Shift"],key:"8"}]}),n.addCommand({id:"fho-ol",name:"Toggle numbered List for selection",callback:n.toggleOL,hotkeys:[{modifiers:["Mod","Shift"],key:"7"}]}),n.addCommand({id:"fho-normal",name:"Remove formatting",callback:n.removeFormatting,hotkeys:[{modifiers:["Mod","Alt"],key:"0"}]}),n.addCommand({id:"fho-h1",name:"Apply Heading 1 to selection",callback:n.getFormatHeading(1),hotkeys:[{modifiers:["Mod","Alt"],key:"1"}]}),n.addCommand({id:"fho-h2",name:"Apply Heading 2 to selection",callback:n.getFormatHeading(2),hotkeys:[{modifiers:["Mod","Alt"],key:"2"}]}),n.addCommand({id:"fho-h3",name:"Apply Heading 3 to selection",callback:n.getFormatHeading(3),hotkeys:[{modifiers:["Mod","Alt"],key:"3"}]}),n.addCommand({id:"fho-h4",name:"Apply Heading 4 to selection",callback:n.getFormatHeading(4),hotkeys:[{modifiers:["Mod","Alt"],key:"4"}]}),n.addCommand({id:"fho-h5",name:"Apply Heading 5 to selection",callback:n.getFormatHeading(5),hotkeys:[{modifiers:["Mod","Alt"],key:"5"}]}),n.addCommand({id:"fho-h6",name:"Apply Heading 6 to selection",callback:n.getFormatHeading(6),hotkeys:[{modifiers:["Mod","Alt"],key:"6"}]}),n.addCommand({id:"fho-heading-increase",name:"Increase heading level",callback:n.getIncrementHeadingLevel("+"),hotkeys:[{modifiers:["Mod","Shift"],key:"+"}]}),n.addCommand({id:"fho-head-decrease",name:"Decrease heading level",callback:n.getIncrementHeadingLevel("-"),hotkeys:[{modifiers:["Mod","Shift"],key:"-"}]})},n.getActiveEditor=function(){var t,o=n.app.workspace.getActiveViewOfType(e.MarkdownView);return(null===(t=null==o?void 0:o.sourceMode)||void 0===t?void 0:t.cmEditor)||null},n.addPrefix=function(e){var t=e.replace,o=void 0===t?[]:t,i=e.prefix,r=void 0===i?"":i,a=n.getActiveEditor();if(a){var l=s(a),d=l.start,c=l.end,f=l.content,g=m({content:f,prefix:r,replace:o,preserveIndent:!0});a.replaceRange(g,d,c),u(l,f,g)}},n.removePrefix=function(e){var t=(void 0===e?{}:e).searches,o=void 0===t?d:t,i=n.getActiveEditor();if(i){var r=s(i),a=r.start,l=r.end,f=r.content,g=f.replace(c(o),"");i.replaceRange(g,a,l),u(r,f,g)}},n.togglePrefix=function(e){var o=e.searches,i=void 0===o?[]:o,r=e.replace,a=void 0===r?[]:r,l=e.prefix,d=void 0===l?"":l,g=e.remove,u=e.add,m=n.getActiveEditor();m&&(s(m).content.split("\n").every((function(e){return f(e,c(i||[d]))}))?(g||n.removePrefix)({searches:i}):(u||n.addPrefix)({replace:t(t([],i),a),prefix:d}))},n.toggleTodo=function(){n.togglePrefix({searches:[a],prefix:"- [ ] ",replace:[r,l]})},n.toggleQuote=function(){return n.togglePrefix({searches:["^>\\s*"],prefix:"> "})},n.toggleOL=function(){n.togglePrefix({searches:[r],replace:[a,l],add:function(e){var t=e.replace,o=void 0===t?[]:t,i=n.getActiveEditor();if(i){var r=s(i),a=r.start,l=r.end,d=r.content,c=d.split("\n");c.forEach((function(e,n){c[n]=m({content:e,prefix:n+1+". ",preserveIndent:!0,replace:o})}));var f=c.join("\n");i.replaceRange(f,a,l),u(r,d,f)}}})},n.toggleUL=function(){n.togglePrefix({searches:[l],prefix:"- ",replace:[a,r]})},n.removeFormatting=function(){n.removePrefix()},n.getFormatHeading=function(e){return function(){n.addPrefix({replace:d,prefix:t(t([],new Array(e).fill("#")),[" "]).join("")})}},n.getIncrementHeadingLevel=function(e){return function(){var t=n.getActiveEditor();if(t){var o=s(t),r=o.start,a=o.end,l=o.content,d=l.split("\n");d.forEach((function(n,t){var o=n.match("^(#+) ");if(o){var r=i(o[1],"#");1===r&&"+"===e||(r>1&&"+"===e?d[t]=n.substring(1):r<6?d[t]="#"+n:6===r&&(d[t]=n.substring(7)))}else d[t]=("+"===e?"###### ":"")+n}));var c=d.join("\n");t.replaceRange(c,r,a),u(o,l,c)}}},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function o(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(o.prototype=t.prototype,new o)}(g,o),g}(e.Plugin);module.exports=p;
