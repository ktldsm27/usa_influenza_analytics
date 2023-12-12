jQuery(document).ready(function () {
    var contentSection = $('.content');
    var placeholderContent = $('.placeholder-content');

    function showContent() {
        contentSection.show();
        placeholderContent.hide();
    }

    function showPlaceholder() {
        contentSection.hide();
        placeholderContent.show();
    }

    $('#loadData').on('click', function () {
        setTimeout(function () {
            var dataLoaded = true;

            if (dataLoaded) {
                showContent();
            } else {
                showPlaceholder();
            }
        }, 5000);
    });
});
