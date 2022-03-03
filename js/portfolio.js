
$(document).ready(function(){
    $('#fullpage').fullpage({
        // navigationTooltips: ['intro', 'about', 'web', 'editable', 'contact'],
        // showActiveTooltip : true,
        anchors: ['intro', 'about', 'web', 'editable', 'contact'],
        menu:"#myMenu",
        afterLoad:function(anchorLink, index){
            if(index==1 || index==5 || index==2){
                $('.intro_sub_text').fadeIn();
            }else{
                $('.intro_sub_text').fadeOut();
            }

            
        }
    
    });
    var swiper = new Swiper(".mySwiper", {
        cssMode: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        mousewheel: true,
        keyboard: true,
      });
    var swiper = new Swiper(".mySwiper2", {
        cssMode: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        mousewheel: true,
        keyboard: true,
      });
});

// 포트폴리오 web1 k2
function Web1()  {
    window.open('https://choiyouree.github.io/k2/');
  }
function Ven1()  {
    window.open('https://www.hanafind.com/');
  }
//   포트폴리오 web2 agoda
function Web2()  {
    window.open('https://choiyouree.github.io/agoda/');
  }
function Ven2()  {
    window.open('https://www.jisanresort.co.kr');
  }
//   포트폴리오 web3 국가문화유산포털
function Web3()  {
    window.open('https://choiyouree.github.io/culture/');
  }
function Ven3()  {
    window.open('http://pollexzone.com/');
  }
//  포트폴리오 web4 스타벅스
function Web4()  {
    window.open('https://choiyouree.github.io/starbucks/');
  }
function Tab4()  {
    window.open('https://choiyouree.github.io/starbucks/', '_blank', 'width=768 height=1000,location=no,menubar=no,status=no,toolbar=no');
  }
function Mo4()  {
    window.open('https://choiyouree.github.io/starbucks/', '_blank', 'width=480 height=1000,location=no,menubar=no,status=no,toolbar=no'); 
  }
function Ven4()  {
    window.open('https://www.neoforet.co.kr/');
  }
//  포트폴리오 web5 키엘
function Web5()  {
    window.open('https://choiyouree.github.io/kiehl/');
  }
function Tab5()  {
    window.open('https://choiyouree.github.io/kiehl/', '_blank', 'width=1199 height=1000,location=no,menubar=no,status=no,toolbar=no');
  }
function Mo5()  {
    window.open('https://choiyouree.github.io/kiehl/', '_blank', 'width=480 height=1000,location=no,menubar=no,status=no,toolbar=no');
  }
function Ven5()  {
    window.open('https://www.restaurantoneul.com/');
  }
//  포트폴리오 web6 코엑스
function Web6()  {
    window.open('https://choiyouree.github.io/coex/', '_blank', 'width=480 height=1000,location=no,menubar=no,status=no,toolbar=no');
  }
function Ven6()  {    
    window.open('https://www.poscoonm.com/');
  }
function insta1()  {
    window.open('https://instagram.com/yuri__c_');
  } 
  // contact me 팝업효과
$(function(){

    $('.popup_btn').click(function(){
        $('.popup').show();
    });
    $('.close').click(function(){
        $('.popup').hide();
    }); 
});

