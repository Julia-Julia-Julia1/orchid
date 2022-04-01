(function ($) {
    $(document).ready(function () {




        $('.order-link1').click(function () {
            $.magnificPopup.open({
                items: [
                    {
                        src: 'https://www.youtube.com/watch?v=lQmOKJ0i5ZQ',
                        type: 'iframe'
                    }
                ]
            });

        });

        $('.order-link2').click(function () {
            $.magnificPopup.open({
                items: [
                    {
                        src: '/img/orhidei.jpg',
                        type: 'image'
                    }
                ]
            });
        });




        $('.order-link3').click(function () {
            $.magnificPopup.open({
                items: [
                    {
                        src: '/img/opisanie orh.docx',
                        type: 'iframe'
                    }
                ]
            });
        });

    });
})(jQuery);

