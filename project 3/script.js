$(document).ready(function () {
    const quotes = [
        "The only limit to our realization of tomorrow is our doubts of today.",
        "The future belongs to those who believe in the beauty of their dreams.",
        "Do not watch the clock. Do what it does. Keep going.",
        "Keep your face always toward the sunshine—and shadows will fall behind you.",
        "The best way to predict the future is to create it."
    ];

    function getQuote() {
        return quotes[Math.floor(Math.random() * quotes.length)];
    }

    function updateQuote() {
        $('#quote-text').fadeOut(500, function () {
            $(this).text(getQuote()).fadeIn(500);
        });
    }

    function updateTheme() {
        const hours = new Date().getHours();
        let theme = { bgColor: '', textColor: '', buttonColor: '' };

        if (hours >= 6 && hours < 12) {
            theme.bgColor = '#FFFAE3';
            theme.textColor = '#333';
            theme.buttonColor = '#FFA500';
            $('#quote-text').text("Let's start our morning with a new quote.");
        } else if (hours >= 12 && hours < 18) {
            theme.bgColor = '#FFF5E3';
            theme.textColor = '#333';
            theme.buttonColor = '#FF4500';
            $('#quote-text').text("Let's start our afternoon with a new quote.");
        } else {
            theme.bgColor = '#2C3E50';
            theme.textColor = '#ecf0f1';
            theme.buttonColor = '#3498DB';
            $('#quote-text').text("Let's start our evening with a new quote.");
        }

        $('body').css('background-color', theme.bgColor);
        $('#quote-text').css('color', theme.textColor);
        $('#new-quote-btn').css('background-color', theme.buttonColor);
    }

    updateTheme();

    $('#new-quote-btn').click(function () {
        updateQuote();
    });
});