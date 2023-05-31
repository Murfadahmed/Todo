//empty array to stored items
let todoList = [];

//whole form tag
let form = document.querySelector('.Todoform')

//add button to add item
let addBtn = document.querySelector('.buttunAdd')

//ul ti add item in li
let TodoItem =  document.querySelector('.todoItem')

//graping input 
//push value into TodoList,,array
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

    //get completed true anf false
    list.addEventListener('click',()=>{
        if(todoList[TodoIndex].completed === true)
        {
            todoList[TodoIndex].completed = false
            list.classList.remove("bgcolor")
        }
        else{
            todoList[TodoIndex].completed = true
            list.classList.add("bgcolor")
        }
        localStorage.setItem("todoList" , JSON.stringify(todoList))
        // console.log(todoList[TodoIndex])

    })
    //creat div to insert edit and delete button 
    var divBox = document
    //creat delete icon
    var icon = document.createElement('i')
    icon.setAttribute('class','fa-regular fa-trash-can')
    list.appendChild(icon)
    
    //creat edit icon
    var edit = document.createElement('i')
    edit.setAttribute('class','fa-regular fa-trash-can')
    list.appendChild(edit)


    icon.addEventListener('click',(event)=>{
        event.stopPropagation();
        //remove from DOM
       event.target.parentElement.remove()
        //remove from array
        todoList.splice(TodoIndex,1);
        // remove from local storage
        localStorage.setItem("todoList" , JSON.stringify(todoList))
    })
    
    return list;
}
//MAKE A FUNCTION to loop the item
function renderTodo (todoList ){
    todoList.forEach( function(todo ,index) {
        var list = creatList(todo.value , index)
        TodoItem.appendChild(list)
    });
}

addBtn.addEventListener('click',(e)=>{
    // if(form.todoName.value != ""){
    // }
    e.preventDefault() 
    // store into a variable to reuse it
    
    let valueOfInput = form.todoName.value
    
    //push into an array with an object form
    todoList.push({
        value: valueOfInput,
        completed: false,
    })
    
    //save items into localStorage 
    //and json.stingify to make object into string
    localStorage.setItem("todoList" , JSON.stringify(todoList))
    //empty an input field
    form.todoName.value = "" 
    
    //creat li item were stored
    //set inner html
    //set class 
    // let list = document.createElement('li')
    // list.innerText = valueOfInput;
    // list.setAttribute('class','list');
    var list = creatList(valueOfInput, todoList.length - 1 )
    TodoItem.appendChild(list)
    console.log(todoList.length-1)
    
    
})

