var CheckList = CheckList || {};

(function ($) {
    CheckList = {
        bootstrap: function () {
            this.toggleTopicList();
        },
        toggleTopicList: function () {
            // ref : https://www.w3schools.com/jsref/met_document_execcommand.asp
            let $toggle_btn = $('.toggle-topic-list');
            const colors = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark'];
            // add random class
            $('.topic-list').find('.btn').each(function (index, topic) {
                $(topic).addClass('bg-' + colors[index % colors.length])
                    .addClass('text-white')
                    .addClass('my-2')
                    .addClass('mx-2')
            });

            $toggle_btn.click(function (e) {
                e.preventDefault();
                let $nav = $(this).parent().siblings('.nav');
                let $topics = $nav.find('.btn');
                console.log($topics);
                let list = [];
                if ($topics.length > 0) {
                    $topics.each((index, topic) => {
                        list.push($(topic).html());
                    })
                }
                if ($nav.siblings('.topic-list').length == 0) {
                    let topicList = document.createElement('textarea');
                    topicList.classList.add('topic-list');
                    topicList.value = list.join('\n');
                    $nav.parent().append(topicList);
                    topicList.onblur = function () {
                        topicList.remove();
                    }
                }
                $nav.siblings('.topic-list').select();
                document.execCommand('copy');
            });
        }
    }
})(jQuery);

export default CheckList;