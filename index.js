const myForm = document.querySelector('.form-inline');
const taskInput = document.querySelector('.form-control');
const taskList = document.querySelector('#tasks');
const msg = document.querySelector('.msg');

//change color of parentNode
console.log(taskList.parentNode);
taskList.parentNode.style.backgroundColor = '#f4f4f4';

//console.log(taskList);
class Tasks{
    static addTask(){
        myForm.addEventListener('submit', onSubmit);
        function onSubmit(e){
            e.preventDefault();
            
            if(taskInput.value === '') {
                msg.classList.add('error');
                msg.innerHTML = 'Please enter you task';   
                msg.style.color = 'red';     
                // two parameters first, function second  time in mm
                setTimeout(() => msg.remove(), 3000);
        
            }else{
                const li = document.createElement('li');
        
                li.appendChild(document.createTextNode(`${taskInput.value}`));
                li.className = 'list-group-item';
                li.style.color = 'coral';
        
                const deleteBtn = document.createElement('button');
        
                deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
                deleteBtn.appendChild(document.createTextNode('X'));
                // Append button to li
                li.appendChild(deleteBtn);
                // Append li to list
                taskList.appendChild(li);
                //Clear fields
                taskInput.value = '';
            }
           
            //console.log(nameInput.value);
            }
    }
    static deleteTask(){
        taskList.addEventListener('click', removeTask);
        function removeTask(e){
            if(e.target.classList.contains('delete')){
              if(confirm('Are You Sure?')){
                var li = e.target.parentElement;
                taskList.removeChild(li);
              }
            }
          }
    }
}


Tasks.addTask();
Tasks.deleteTask();



