const input= document.querySelector('input')
const button= document.querySelector('button')

const inputContainer= document.querySelector('.input')
const labelElements=document.querySelector('.content label')
const confirmedTicket=document.querySelector('#confirmed_ticket')

const photo_profile=document.querySelector('#photo_profile')
const name_elements=document.querySelector('#name_elements')
const errorElements=document.querySelector('#error')


button.addEventListener('click', async () => {
    const username= input.value
    const response = await fetch(`https://api.github.com/users/${username}`)
    const data = await response.json();
    
    const name= data.name;
    const photo= data.avatar_url;

   if(data !== undefined && data.message === "Not Found" && input.value == '' ){
    errorElements.style.display='block';
   
   
   }else{
    errorElements.style.display='none';
    name_elements.innerHTML=name;
    photo_profile.setAttribute('src', photo)
    inputContainer.style.display='none';
    labelElements.style.display='none';
    confirmedTicket.style.display='flex';
    button.innerText='Fazer Download'
   }
})