"use strict";
const params = {
    amount: 200,
    size: {
      min: 1,
      max: 5,
      giant: 9
    },
    duration: {
      min: 5,
      max: 25,
    }
  }
  const randomBetween = (a, b) => {
    return (a + (Math.random() * (b - a)));
  }
  
  for (let i = 0; i < params.amount; i++) {
    let star = $("<div></div>");
    let size = Math.round(Math.random() * 10) === 0 ? params.size.giant : randomBetween(params.size.min, params.size.max);
    star.css({
      "width": size + "px",
      "height": size + "px",
      "left": randomBetween(0, 100) + "%",
      "top": randomBetween(0, 100) + "%",
      "box-shadow": "0 0 " + size + "px " + size / 2 + "px #043668",
      "animation-duration": randomBetween(params.duration.min, params.duration.max) + "s"
    });
  
    $("#root").append(star);
  }


  let rootBlock = document.getElementById('root');

  let header=document.querySelector('.header');
  let container=document.querySelector('.container');
  let headerBg=document.querySelector('.header-bg');

  let headerRight=document.querySelector('.header__right');
  let headerLeftEdupartner=document.querySelector('.header__left-edupartner');
  let headerLeftEduexp=document.querySelector('.header__left-eduexp');
  let headerRightTitle=document.querySelector('.header__right-title');
  let headerRightBlockss = document.querySelector('.header__right-blocks');

  let headerRightBlocks = document.querySelectorAll('.header__right-block');


  function headerRightBlockAnimatin(){
    headerRightBlocks[3].style.display = 'block';
    /* headerRightBlockss.style.marginRight = '280' + 'px'; */
    headerRightBlocks[3].style.opacity = '1';
    headerRightBlocks[3].style.width =  headerRightBlocks[2].offsetWidth+'px';
    if(header.offsetWidth>1024){
      headerRightBlocks[3].style.marginRight = '50'+'px';};
    if(header.offsetWidth<1025){
      headerRightBlocks[3].style.marginRight = '25'+'px';};
  }

  function headerRightBlocBack(){
    let flagRightBlock = headerRightBlocks[0].innerHTML;
    headerRightBlocks[0].innerHTML=headerRightBlocks[1].innerHTML;
    headerRightBlocks[1].innerHTML=headerRightBlocks[2].innerHTML;
    headerRightBlocks[2].innerHTML=headerRightBlocks[3].innerHTML;
    headerRightBlocks[3].innerHTML=flagRightBlock;
    
    var img = $( headerRightBlocks[0]).css('background-image');
    console.log( img);




    headerRightBlocks[0].style.backgroundImage = $( headerRightBlocks[1]).css('background-image');
    
    headerRightBlocks[1].style.backgroundImage = $( headerRightBlocks[2]).css('background-image');
    headerRightBlocks[2].style.backgroundImage = $( headerRightBlocks[3]).css('background-image');
    headerRightBlocks[3].style.backgroundImage = img;

    headerRightBlocks[3].classList.add('transition_zero');
    headerRightBlocks[3].style.width = '0';
    headerRightBlocks[3].style.opacity = '0';
    
    if(header.offsetWidth>1200){
      headerRightBlocks[3].style.marginRight = '20'+'px';};
    if(header.offsetWidth>1024&& header.offsetWidth<1201){
      headerRightBlocks[3].style.marginRight = '10'+'px';};
    if(header.offsetWidth>768&& header.offsetWidth<1025){
      headerRightBlocks[3].style.marginRight = '0'+'px';};

    setTimeout(function(){ 
      headerRightBlocks[3].classList.remove('transition_zero');
     
    }, 100);

  }

  function headerBgFuncBack(backgroundBlcok){
    
    backgroundBlcok.style.zIndex='-1';
    backgroundBlcok.style.height=1+"px";
    backgroundBlcok.style.width=1+"px";
    backgroundBlcok.style.marginTop=0+ 'px';
    backgroundBlcok.style.marginLeft=0+ 'px';
    backgroundBlcok.style.borderRadius=20+ 'px';
    setTimeout(function(){ 
      backgroundBlcok.style.display='block';
     
    }, 100);
  }

  function headerBgFunc(backgroundBlcok){
    backgroundBlcok.style.zIndex='2';

    headerRightBlockAnimatin();
    backgroundBlcok.style.borderRadius='0';
    backgroundBlcok.style.height=header.offsetHeight+"px";
    backgroundBlcok.style.width=header.offsetWidth+"px";
    if(header.offsetWidth>1200){
    backgroundBlcok.style.marginTop='-356' + 'px';

    backgroundBlcok.style.marginLeft=-(container.offsetWidth-headerRight.offsetWidth)-(header.offsetWidth -container.offsetWidth)/2 +210+ 'px';};
    if(header.offsetWidth>1024&& header.offsetWidth<1201){
    backgroundBlcok.style.marginTop='-356' + 'px';

    backgroundBlcok.style.marginLeft=-(container.offsetWidth-headerRight.offsetWidth)-(header.offsetWidth -container.offsetWidth)/2 +150+ 'px';};
    if(header.offsetWidth>768&& header.offsetWidth<1025){
    backgroundBlcok.style.marginTop='-260' + 'px';

    backgroundBlcok.style.marginLeft=-(container.offsetWidth-headerRight.offsetWidth)-(header.offsetWidth -container.offsetWidth)/2 +120+ 'px';};

        
    setTimeout(function(){ 
      backgroundBlcok.style.display='none';
      header.style.backgroundImage = "url('https://eduexp.ru/wp-content/uploads/2021/09/notebook-bg.png')";
    }, 1000);
    headerBg.style.zIndex='-1';
    
  }

    headerRightBlocks[0].addEventListener('click',function(){


        headerLeftEdupartner.style.display = 'block';
        headerRightTitle.style.display = 'block';
        this.style.display='none';

        setTimeout(function(){ 
          headerBgFunc(headerBg);
        }, 100); 



        rootBlock.style.display='none';
        headerLeftEdupartner.style.display='none';
        headerRightTitle.style.display='none';
        setTimeout(function(){ 
          headerLeftEduexp.style.display='block';
  
          headerLeftEdupartner.classList.remove('header-show');
          headerRightTitle.classList.remove('header-show');
        }, 600);

        setTimeout(function(){ 
          headerLeftEduexp.classList.add('header-show');
          headerRightBlocBack();
          headerBgFuncBack(headerBg)
        headerRightBlocks[0].style.display = 'block';
        }, 1500);
    }); 




    
  let opportunitiesRight = document.querySelectorAll('.opportunities__right');
  console.log(opportunitiesRight[2].offsetWidth);
  opportunitiesRight[5].style.width=opportunitiesRight[2].offsetWidth +'px';
  opportunitiesRight[4].style.width=opportunitiesRight[2].offsetWidth +'px';
  console.log(opportunitiesRight[5].offsetWidth);
 
  


  
  let root=document.querySelector('.root');
  
  root.style.height=header.offsetHeight +'px';