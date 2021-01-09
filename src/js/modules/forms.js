import {closeModal} from './modal';

const forms = () => {
    const postData = async(url, data) => {
        const res = await fetch(url,{
            method: 'POST',
            body:data
        });
    
        return await res.text();
    };

    const form = document.querySelectorAll('form'),
          messages = {
            loading:'Загрузка...',
            success:'Спасибо, скоро мы с вами свяжемся!',
            failure:'Что-то пошло не так...',
            loadingImg: 'icons/spinner.gif',
            okImg: 'icons/ok.png',
            failImg: 'icons/fail.png'
          };

    form.forEach(item => {
        item.addEventListener('submit',(event) => {
            event.preventDefault();
            const statusMessage = document.createElement('div');
            statusMessage.style.cssText = 'display:flex;align-items:center; flex-direction:column';
            item.parentNode.append(statusMessage);
            item.style.display = 'none';

            const statusText = document.createElement('h4');
            statusText.innerHTML = messages.loading;
            statusMessage.style.cssText = 'text-align:center;margin-top:10px;';
            statusMessage.append(statusText);

           const statusImage = document.createElement('img');
           statusImage.setAttribute('src', messages.loadingImg);
           statusMessage.append(statusImage);

            const formData = new FormData(item);
           
            postData('mailer/smart.php', formData)
            .then((res) => {
                console.log(res);
                statusText.textContent = messages.success;
                statusImage.setAttribute('src', messages.okImg);
            })
            .catch(() => {
                statusText.textContent = messages.failure;
                statusImage.setAttribute('src', messages.failImg);
            })
            .finally(() =>{
                item.reset();
                    if (item.closest('.modal')){
                        setTimeout(() => {
                            closeModal('.modal_active');
                        },2500);
                    } 
                setTimeout(() => {
                    statusMessage.remove();
                    item.style.display = 'block';
                    item.classList.add('fade');
                },3000);
            });
        });
    });
};

export default forms;