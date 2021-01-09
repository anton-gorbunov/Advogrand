const filter = () => {
    const itemParent = document.querySelector('.comments__menu'),
          items = itemParent.querySelectorAll('.comments__menu li'),
          contentBlocks = document.querySelectorAll('.comments-block'),
          activeTab = itemParent.querySelector('.active');

    function showActiveContent(item){
        const tabClass = item.getAttribute('class').split(' ')[0];

        contentBlocks.forEach(content => {
            content.style.display = 'none';
            content.classList.remove('fade');
        });

        contentBlocks.forEach(content => {
            if (content.classList.contains(tabClass)){
                content.style.display = 'block';
                content.classList.add('fade');
            }   
        });
    }
    showActiveContent(activeTab);
   
    items.forEach(item => {
        item.addEventListener('click', () => {
            showActiveContent(item);
        });
    });

    itemParent.addEventListener('click',(event) => {
        let target = event.target;
        if (target && target.tagName == 'LI') {
            items.forEach(item => {  
                item.classList.remove('active');
            });
            target.classList.add('active');
        }
    });

};

export default filter;