### Recursion
- Describing an action interm of itself
- Why
    - Task that are composed of similar subtask
    - Shorter code (may be easier)
    - Nested loops can be avoided
```js
function recursion(){
    // Base case
    if(anyBaseCase()){
        return;
    }
    // Recursive case
    recursion();
}

```

#### Memory in Recursion
A Recursive function call itself
- The memory for a called function is allocated on top of memory allocated from wich function called.
- Each function call gets different copy of local variables
- <b>When base case is reached,</b> child function returns value to the function from which it was called & the process continues
- Unwinding is a process where function return after reaching from base condition (comming out from stack in JavaScript)
- Two Types
1. Direct Recursion
    ```js
    function fact(n){
        if(n == 0) return 1;
        return n* fact(n-1);
    }

    fact(5);
    
    ```
2. InDirect Recusion
    ```js
    function printNumber(min,max){
        if(min>max){
            return;
        }
        console.log(min);
        min = min+1;
        logic(min,max);
    }

    function logic(min,max){
        if(min>max){
            return;
        }
        printNumber(min,max);
    }

    printNumber(1,5);
    ```
