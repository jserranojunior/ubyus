<script>
window.onload = initPage;

function initPage(){
 	console.log(window.location.pathname)
	if(window.location.pathname == "/home-paginaemingles" || window.location.pathname == "/home-paginaemingles/"){
    localStorage.setItem('lang', 'us');
	}else if(window.location.pathname == "/home" || window.location.pathname == "/" || window.location.pathname == ""){
    localStorage.setItem('lang', 'br');
  }
  const lang = localStorage.getItem('lang');
	console.log(lang)


  let itensMenu = [...document.querySelectorAll('.menu-link')]; 
 if(lang == 'us'){
    itensMenu.forEach(item =>{
    if(item.innerHTML == "O QUE NOS MOVE"){
      item.innerHTML = 'WHAT MOVE US';
      item.href = "https://ubyusadvisors.com/what-move-us/"
    }
    if(item.innerHTML == "CENTROS DE EXCELÊNCIA"){
      item.innerHTML = "CENTERS OF EXCELLENCE";
            item.href = "https://ubyusadvisors.com/centers-of-excellence/"
    }
    if(item.innerHTML == "QUEM SOMOS"){
      item.innerHTML = "Who We Are";
            item.href = "https://ubyusadvisors.com/who-we-are/"
    }
      if(item.innerHTML == "CONTATO"){
        item.innerHTML = "CONTACT";
        item.href = "https://ubyusadvisors.com/contact/"
      }  
      if(item.innerHTML == "ENGLISH"){
        item.innerHTML = "<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/275px-Flag_of_Brazil.svg.png' width='10'> PORTUGUÊS";
        item.href = "https://ubyusadvisors.com"
      }  
    })
  }else if(lang == 'br'){
      itensMenu.forEach(item =>{
          if(item.innerHTML == "ENGLISH"){
            item.innerHTML = "<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/320px-Flag_of_the_United_States.svg.png' width='15'> ENGLISH";
          }  
        });
      }
}

</script>