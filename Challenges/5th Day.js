function generateList (){
        
    //SETCOLOR
        var divColor = document.createElement('input');
        divColor.type = 'color';
        divColor.className = 'divColor'
        divColor.value = '#FFFF99'

        divColor.addEventListener('change', function(){
            titleDiv.style.backgroundColor = divColor.value;
        })


    //ERROR MESSAGE DISPLAY

    var errorMessage = document.querySelector('.errorMessage')


    //ADD NEW LIST
        var listsContainer = document.querySelector('.listsContainer');
        var addListInput = document.querySelector('.listInput');
        var titleDiv = document.createElement('section');
            titleDiv.className = addListInput.value;

        //NEW LIST CONTENT
        var title = document.createElement('h3');
        var itemsInput = document.createElement('input');
            itemsInput.type = 'text';
            itemsInput.placeholder = "Press enter to submit"; 
        var itensContainer = document.createElement('div');
        var divColorContainer = document.createElement('div');


        if (addListInput.value != ''){
            errorMessage.style.display = 'none'
            title.innerText = addListInput.value.toUpperCase();
            listsContainer.appendChild(titleDiv)

            titleDiv.appendChild(title)
            titleDiv.appendChild(itemsInput)
            titleDiv.appendChild(itensContainer)
            titleDiv.appendChild(divColor)

            addListInput.value = '';
        }

         else { errorMessage.style.display = 'block' };
        

    //ERASE THE LIST
        title.addEventListener('click', function(){
            title.style.textDecoration = "line-through"
        })
        title.addEventListener('dblclick', function(){
            listsContainer.removeChild(titleDiv)
        })


    //ADD ITEM TO LIST
        itemsInput.addEventListener('keypress', function(e){
            if (e.key === 'Enter') {
                var item = document.createElement('p');

                if (itemsInput.value != ''){
                    item.innerHTML = itemsInput.value
                    itensContainer.appendChild(item)
                    itemsInput.value = ''
                }

            //ERASE THE ITEM
                item.addEventListener('click', function(){
                    item.style.textDecoration = "line-through"
                })
                item.addEventListener('dblclick', function(){
                    itensContainer.removeChild(item)
                })   

            }
        })

    }