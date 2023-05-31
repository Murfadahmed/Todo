let todoList = [];

let form = document.querySelector('.Todoform')

let addBtn = document.querySelector('.buttunAdd')

let TodoItem =  document.querySelector('.todoItem')

//graping input 
//push value into TodoList
    // console.log(form.todoName.value)
    //check existance in local storage
    let storedItems = localStorage.getItem('todoList')
    
    
    //if exixt so creat an li element in DOM
if(storedItems)
{
    var parseStoredItems = JSON.parse(storedItems)
    todoList = parseStoredItems 
    renderTodo(todoList)
    console.log(parseStoredItems)
}
//creat LIST item 
function creatList (valueOfInput,TodoIndex){
    let list = document.createElement('li')
    list.setAttribute('class','list');
    list.innerText = valueOfInput;

    //creat delete icon
    var icon = document.createElement('i')
    icon.setAttribute('class','fa-regular fa-trash-can')
    list.appendChild(icon)
    
    
    icon.addEventListener('click',(event)=>{
        //remove from DOM
       event.target.parentElement.remove()
        //remove from array
        todoList.splice(TodoIndex,1);
        localStorage.setItem("todoList" , JSON.stringify(todoList))
        // /remove from local storage
    })
    
    return list;
}
//MAKE A FUNCTION to loop the item
function renderTodo (todoList ,index){
    todoList.forEach( function(todo) {
        var list = creatList(todo.value , index)
        TodoItem.appendChild(list)
    });
}

addBtn.addEventListener('click',(e)=>{
    if(form.todoName.value != ""){
        e.preventDefault() 
    }
    // store into a variable to reuse it
    
    let valueOfInput = form.todoName.value
    
    //push into an array with an object form
    todoList.push({
        value: valueOfInput,
        completed: false,
    })
    
    //save matter into localStorage 
    //and json.stingify to make object into string
    localStorage.setItem("todoList" , JSON.stringify(todoList))
    //emty an input field
    form.todoName.value = "" 
    
    //creat li item were stored
    //set inner html
    //set class 
    // let list = document.createElement('li')
    // list.innerText = valueOfInput;
    // list.setAttribute('class','list');
    var list = creatList(valueOfInput)
    TodoItem.appendChild(list)
    
    
})

