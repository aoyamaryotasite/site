
let text = document.querySelector(".text");

const cb =function(entries,observer){
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            text.classList.toggle("move");
        }else{
            text.classList.toggle("move");
        }
    });
    // alert('intersecting');
}
const io = new IntersectionObserver(cb);
io.observe(text);
// io.observe(text1);
// io.observe(text2);
const progressBar = document.querySelector('.progress__bar');

window.addEventListener('scroll', () => {
  const windowYPos = window.pageYOffset;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = (windowYPos / height) * 100;
  progressBar.style.width = scrolled + "%";
});

function changeColor() {
    let timing = 40; 

let box1 =document.querySelector('.box_1');
let box2 =document.querySelector('.box_2')  
let nav =document.querySelector('.js_nav');
let trigger1Y = box1.getBoundingClientRect().top; 
let trigger2Y = box2.getBoundingClientRect().top; 

if(trigger2Y - timing > 0 && 0 >= trigger1Y - timing) {
    nav.classList.remove('bg-is-black');
  } else {
    nav.classList.add('bg-is-black');
  }
}

window.addEventListener('scroll', changeColor);


if(navigator.userAgent.match(/(iPhone|iPad|iPod|Android)/i)){
	
}else{
	// PCの場合の処理を記述
  const el = document.querySelector('.side-scroll-list');

gsap.to(el, {
  xPercent: -80,
  ease: 'none',
  scrollTrigger: {
    trigger: '.side-scroll',
    start: 'top top',
    end: `+=${el.clientWidth}`,
    scrub: true,
    pin: true,
  },
});
}



  let toTop = document.querySelector('.totop-arrow');
toTop.addEventListener("click", function () {
	window.scrollTo(0, 0);
});
(new IntersectionObserver(function (entries) {
	toTop.hidden = entries[0].isIntersecting;
})).observe(document.querySelector('.box_1'));

if(navigator.userAgent.match(/(iPhone|iPad|iPod|Android)/i)){
	document.body.style.backgroundColor = 'white';
}else{
	// PCの場合の処理を記述
  const el = document.querySelector('.side-scroll-list');


window.addEventListener("scroll", function() {

    let scroll = window.pageYOffset;
  
    if (scroll >5000) {
      
      document.body.style.backgroundColor = 'beige';
    }else if (scroll > 4500) {
      document.body.style.backgroundColor = '#f5fffa';
    }else if (scroll > 4000) {
      document.body.style.backgroundColor = '#f5fffa';
    } else if (scroll > 3000) {
      document.body.style.backgroundColor = '#add8e6';
    } else if (scroll > 2000) {
      document.body.style.backgroundColor = '#f0fff0';
    } else {
      document.body.style.backgroundColor = '#000';
      document.body.style.opacity = '0.8';
    }
  
  });
}



function spToggle(){
    let hamTrigger =document.querySelector('.js-ham');
// let slide =document.querySelector('.js_slide');
let base =document.querySelector('.sp-nav_base');
    hamTrigger.addEventListener('click', function() {
        base.classList.toggle('js_slide');
      
    });
}

spToggle();


$('.slider').slick({
    autoplay: true,//自動的に動き出すか。初期値はfalse。
    infinite: true,//スライドをループさせるかどうか。初期値はtrue。
    speed: 500,//スライドのスピード。初期値は300。
    slidesToShow: 3,//スライドを画面に3枚見せる
    slidesToScroll: 1,//1回のスクロールで1枚の写真を移動して見せる
    prevArrow: '<div class="slick-prev"></div>',//矢印部分PreviewのHTMLを変更
    nextArrow: '<div class="slick-next"></div>',//矢印部分NextのHTMLを変更
    centerMode: true,//要素を中央ぞろえにする
    variableWidth: true,//幅の違う画像の高さを揃えて表示
    dots: true,//下部ドットナビゲーションの表示
  });

