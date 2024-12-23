
$(document).ready(function () {
  var $card = $(".card"),
    $bgCard = $(".bgCard"),
    $icon = $(".icon"),
    cartPageBottomP = document.querySelector(".cart-page-bottom p"),
    cartPageBottomH4 = document.querySelector(".cart-page-bottom h4");
    let textTitle = "Merry Christmas!";
    let charArrTitle = textTitle.split('');
let text = "Merry Christmas, Mẫn Khôi! 🎄✨     Chúc anh một mùa Giáng sinh tràn ngập niềm vui, hạnh phúc và may mắn và luôn có được em. Em luôn đếm từng ngày anh về với em, em hiểu những áp lực, mệt mỏi của anh hiện tại nhưng khom sao đã có vợ anh ở đây. 🎅🎁❤️Hy vọng mọi điều tốt đẹp nhất sẽ đến với anh trong năm mới nhé. Em yêu anhhhhh! ✨💫 "
let charArrContent = text.split('');
var currentIndexTitle = 0;
var currentIndexContent = 0;
var textIntervalTitle;
var textIntervalContent;
function resetText(){
    clearInterval(textIntervalTitle)
    clearInterval(textIntervalContent)
    cartPageBottomH4.textContent = "";
    cartPageBottomP.textContent = "";
    currentIndexTitle = 0;
    currentIndexContent = 0;
}
  $card.on("click", function () {
    $(this).toggleClass("is-opened");
    if($card.hasClass("is-opened")){
        textIntervalTitle = setInterval(function(){
            if(currentIndexTitle < charArrTitle.length){
                cartPageBottomH4.textContent += charArrTitle[currentIndexTitle];
                currentIndexTitle++;
                console.log(currentIndexTitle)
            }
            else{
                clearInterval(textIntervalTitle)
                textIntervalContent = setInterval(function(){
                    if(currentIndexContent < charArrContent.length){
                        cartPageBottomP.textContent += charArrContent[currentIndexContent];
                        currentIndexContent++;
                console.log(currentIndexContent)
                    }
                    else{
                        clearInterval(textIntervalContent)
                    }
                },100)
            }
        },100)
    }
    else{
        resetText()
    }
  });

  $(".centerer").on("click", function () {
    $card.fadeIn();
    $bgCard.fadeIn();
    $icon.fadeIn();
  });
  $(".fa-xmark").on("click", function () {
    $card.fadeOut();
    $bgCard.fadeOut();
    $icon.fadeOut();
    $card.removeClass("is-opened");
    resetText()
  });

});
