let leftarrow = document.querySelector('#arrow-1')
const box1 = document.querySelector('#box-1')
const box2 = document.querySelector('#box-2')

leftarrow.addEventListener('click', function () {
      box1.scrollIntoView({ behavior: "smooth", block:'nearest'});
      box2.scrollIntoView({ behavior: "smooth", block:'nearest'});
})


let rightarrow = document.querySelector('#arrow-2')
const box4 = document.querySelector('#box-4')
const box5 = document.querySelector('#box-5')

rightarrow.addEventListener('click', function(){
      box4.scrollIntoView({ behavior: "smooth", block:'nearest'});
      box5.scrollIntoView({ behavior: "smooth", block:'nearest'});
})

let arrow1 = document.querySelector('#d-arrow1')
arrow1.addEventListener('click', function(){
      let about = document.querySelectorAll('.about')
      about.forEach(about=>{
            about.style.display ='flex'
      })
      
      arrow1.addEventListener('click', function(){
            about.forEach(about => {
                  about.style.display = 'none'
                  
            })
      })
      
})
let arrow2 = document.querySelector('#d-arrow2')
arrow2.addEventListener('click', function(){
      let resposibility = document.querySelectorAll('.responsibility')
      resposibility.forEach(resposibility=>{
            resposibility.style.display ='flex'
      })
      
      arrow2.addEventListener('click', function(){
            resposibility.forEach(resposibility => {
                  resposibility.style.display = 'none'
                  
            })
      })
      
})
let arrow3 = document.querySelector('#d-arrow3')
arrow3.addEventListener('click', function(){
      let quicklinks = document.querySelectorAll('.quicklinks')
      quicklinks.forEach(quicklinks=>{
            quicklinks.style.display ='flex'
      })
      
      arrow3.addEventListener('click', function(){
            quicklinks.forEach(quicklinks => {
                  quicklinks.style.display = 'none'
                  
            })
      })
      
})