const $ = jQuery;

const Dashboard = {
    init: function () {
        // handle accordion
        $(document).on('click', '.accordion-item .accordion-header', Dashboard.handleToggleItem);
        $(document).on('click', '.ai1wpsa-review-notice .notice-btns a.action', Dashboard.handleReviewNotice);

    },

    handleToggleItem: function (e) {
        e.preventDefault();
        $(this).closest('.accordion-item').toggleClass('active');
        $(this).find('i').toggleClass('dashicons-arrow-up-alt2');
    },

    handleReviewNotice: function (e) {
        e.preventDefault();

        const action = $(this).data('action');

        wp.ajax.post('ai1wpsa_review_notice', {
            data: action,
            nonce: ai1wpsa.nonce,
        }).done((response) => {
            if (response.length > 0) {
                $('.ai1wpsa-review-notice').fadeOut();
            }
        }).fail((error) => {
            console.log(error);
        })
    }
}

export default Dashboard;