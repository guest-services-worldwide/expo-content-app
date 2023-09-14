var $inner = $('.inner'),
    $spin = $('#spin'),
    $reset = $('#reset'),
    $data = $('.data'),
    $mask = $('.mask'),
    maskDefault = 'Click the Spin Button',
    timer = 9000;

var red = [32,19,21,25,34,27,36,30,23,5,16,1,14,9,18,7,12,3];

$reset.hide();

$mask.text(maskDefault);

var roulettehtml = [
    '<br>',
    '<div align="center">',
    '<a href="https://stakerino.com/html/roulette/" target="_blank"><img width="32" height="40" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAoCAMAAACo9wirAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAClUExURQAAAGJAW2NBX2RBYFJlc15HX2RBYGFGYlRlc2RBYGRBX0teamRBYFdcbVRlc1Rlc2RBYP///0xea0pYYvr6++jo69PW3WJBX1tTaElQV09jcN3e415ygJmKl4R0hmxbd2pLZ/X2966wuc7N0qWlsEtERr/Ayuzt8cXL1XiCkY+WorS3wJScpWd4hVNpeYKOmY2Ck6WXobenrlBUXZefp56mrV8+Vrzc/yQAAAAPdFJOUwAf7p+KMIj3n5Tmi3nfWyuppisAAAF6SURBVDjLvdRre4IgFABg23RbrQanAEsMr9PUstrW/v9PG1AzdVjfdp5HOXBeLvJBy3qboV7MRlYrHPQnlpO2sA0At8WLCbSFGeCJcwdcxRBoxCDAD84dcBE3wFkYAHLbwgSW3+4lpDAB9PkuY7VaLRavZqCErg8CtDjX5waQbHUz1/Uu2KlXSfza10LVPfsKSkY82bAN8kmyl5kn6w3wYwo8lUlBClTLDo195HkNOJFIT0Io47rZJySSZ2lASqKs0CtFXxoUm4iorNliV+XATwjFuezUKQda6ZOi1iG36pC0UssQVv6O2t3P3EZqXr27jtndi9qX/Wuzh676X8H4+WY8WY/4ZpzBgab4SA+cUno8yjyjIqBVC6whxh+w3uTA1hkwN4c0gE0H8IzBGicQYhaRAyFZH+ScnoGbs4jznPWB3kKBkGQJVJwGwMrCBATEKYiEBADANBjLdygCHIhQPjINQ6E6QshBjKeW83DrGtSvaDQdD8Z0ZP0AqxVUMuKNicsAAAAASUVORK5CYII=" title="Roulette HTML" alt="Roulette HTML Code Icon"></a>',
    '</div>'
].join('');

$('.previous-list').append(roulettehtml);

$spin.on('click',function(){

    var  randomNumber = Math.floor(Math.random() * 36),
        color = null;
    $inner.attr('data-spinto', randomNumber).find('li:nth-child('+ randomNumber +') input').prop('checked','checked');

    $(this).hide();

    $reset.addClass('disabled').prop('disabled','disabled').show();

    $('.placeholder').remove();


    setTimeout(function() {
        $mask.text('No More Bets');
    }, timer/6);

    setTimeout(function() {
        $mask.text(maskDefault);
    }, timer+500);


    setTimeout(function() {
        $reset.removeClass('disabled').prop('disabled','');

        if($.inArray(randomNumber, red) !== -1){ color = 'red'} else { color = 'black'};
        if(randomNumber == 0){color = 'green'};

        $('.result-number').text(randomNumber);
        $('.result-color').text(color);
        $('.result').css({'background-color': ''+color+''});
        $data.addClass('reveal');
        $inner.addClass('rest');

        $thisResult = '<li class="previous-result color-'+ color +'"><span class="previous-number">'+ randomNumber +'</span><span class="previous-color">'+ color +'</span></li>';
        $('.previous-list').prepend($thisResult);
    }, timer);

});

$reset.on('click',function(){
    $inner.attr('data-spinto','').removeClass('rest');
    $(this).hide();
    $spin.show();
    $data.removeClass('reveal');
});

var myElement = document.getElementById('plate');
var mc = new Hammer(myElement);
mc.on("swipe", function(ev) {
    if(!$reset.hasClass('disabled')){
        if($spin.is(':visible')){
            $spin.click();
        } else {
            $reset.click();
        }
    }
});