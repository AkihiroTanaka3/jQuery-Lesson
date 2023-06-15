const swiper = new Swiper('.swiper', {
    // オプションの設定
    loop: true, // 最後までスライドしたら最初のスライドに戻る

    // ページネーションの表示の設定
    pagination: {
        el: '.swiper-pagination', // ページネーションの要素
    },

    //ナビゲーションボタンの表示の設定
    navigation: {
        nextEl: '.swiper-button-next', // 次のボタンの要素
        prevEl: '.swiper-button-prev', // 前のボタンの要素
    }
});