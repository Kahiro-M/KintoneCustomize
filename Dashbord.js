$(document).ready(function(){
    // [アプリ] > [設定] > [一覧] > [カスタム]で作成した擬似ダッシュボードのスタイル整形
    if($('.gaia-app-indexview-customview-html iframe').length > 0){
        $('.gaia-app-indexview-customview-html iframe').wrap('<div class="iframe-wrapper-custom">');
        $('.gaia-app-indexview-customview-html iframe').on('load', function(){
            // iframe内部の要素はcontents()で取得する;
            let content = $(this).contents();
            let google_link_style = $('<link>').attr({
                'rel': 'stylesheet',
                'href': 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200'
            });
            content.find('head').append(google_link_style);
            console.log(content.find('.graph-title-gaia').css('background:#333;'));
        });
    };
});
