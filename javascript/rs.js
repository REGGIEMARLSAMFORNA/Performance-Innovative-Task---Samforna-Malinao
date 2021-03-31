
const rsInput = document.querySelector('.rs-input');
const rsButton = document.querySelector('.rs-button');
const rsList = document.querySelector('.rs-list');
const filterOption = document.querySelector('.filter-rs');


rsButton.addEventListener('click', addrs);
rsList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterrs);


function addrs(event)
{
    event.preventDefault();
    
    const rsDiv = document.createElement('div');
    rsDiv.classList.add('rs');
    
    const newrs = document.createElement('li');
    newrs.classList.add('rs-item');
    newrs.innerText = rsInput.value;
    rsDiv.appendChild(newrs);
    
    const completedButton = document.createElement('button');
    completedButton.classList.add('complete-btn');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    rsDiv.appendChild(completedButton);
    
    const trashButton = document.createElement('button');
    trashButton.classList.add('trash-btn');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    rsDiv.appendChild(trashButton);
    
    rsList.appendChild(rsDiv);
    
    rsInput.value = "";
}
function deleteCheck(e)
{
    
    const item = e.target;
    if(item.classList[0] === 'trash-btn')
    {
        const parent = item.parentElement;
        parent.classList.add('fall');
        parent.addEventListener('transitionend', function(){
            parent.remove();
        });
    }
    
    if(item.classList[0] === 'complete-btn')
    {
        const parent = item.parentElement;
        parent.classList.toggle('completed');
    }
}
