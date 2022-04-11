    var addListButton = document.querySelector('.addListButton');
    var listsContainer = document.querySelector('.listsContainer');


    function generateList (){
        
        var addListInput = document.querySelector('.listInput');
        var titleDiv = document.createElement('div');
        var title = document.createElement('h3');
        var itemsInput = document.createElement('input');
        itemsInput.placeholder = "Press enter to submit"

        title.innerText = itemsInput.value.toUpperCase();
        title.innerText = addListInput.value.toUpperCase();

        listsContainer.appendChild(titleDiv)
        titleDiv.appendChild(title)
        titleDiv.appendChild(itemsInput)

        title.addEventListener('click', function(){
            title.style.textDecoration = "line-through"
        })
        title.addEventListener('dblclick', function(){
            listsContainer.removeChild(titleDiv)
        })


        itemsInput.innerHTML = ' + '
        addListInput.value = '';

        itemsInput.addEventListener('keypress', function(e){
            if (e.key === 'Enter') {

                var item = document.createElement('p');

                item.innerHTML = itemsInput.value
                titleDiv.appendChild(item)
                itemsInput.value = ''

                item.addEventListener('click', function(){
                    item.style.textDecoration = "line-through"
                })
                item.addEventListener('dblclick', function(){
                    titleDiv.removeChild(item)
                })   

            }
        })

    }