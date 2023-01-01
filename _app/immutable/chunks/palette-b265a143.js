function $(e){let s;if(e==null)s="";else{const[l,t,h]=e;s=`
    --back: hsl(${l}, 10%, 19%);
    --back-1: hsl(${l}, 20%, 26%);
    --back-1-hover: hsl(${l}, ${t}%, ${h}%);
    --back-2: hsl(${l}, 20%, 34%);
    --back-2-hover: hsl(${l}, ${t}%, ${h+5}%);
    --text: hsl(${l}, 29%, 88%);
    --text-strong: hsl(${l}, 0%, 100%);
    --text-weak: hsl(${l}, 18%, 70%);
    --link: hsl(${l}, 64%, 61%);
    --link-hover: hsl(${l}, 100%, 81%);
  `}return s}export{$ as g};
