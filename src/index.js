import './less/index.less'

// Örnek bir event kullanımı aşağıdadır. Çalıştırmak için comment dışına alın
// document.querySelector("h1").addEventListener("click",function(e){
// alert("Bana tıkladın!")
// });


// Kodlar buraya gelecek!
const navSection = document.querySelector('nav');
navSection.addEventListener('mouseover', function(e) {
    e.target.style.backgroundColor = '#ebc034';
    e.target.style.color = 'white';
})

navSection.addEventListener('mouseout', function(e) {
    e.target.style.backgroundColor = '';
    e.target.style.color = '';
})