document.addEventListener('DOMContentLoaded', function() {
    var holidays = document.querySelectorAll('.holiday');
    var reasonDiv = document.getElementById('holiday-reason');
    
    holidays.forEach(function(holiday) {
        holiday.addEventListener('mouseover', function() {
            var reason = this.getAttribute('data-reason');
            reasonDiv.innerText = reason;
            if (reasonDiv.style.display === 'none' || reasonDiv.style.display === '') {
                reasonDiv.style.display = 'block';
            } else {
                reasonDiv.style.display = 'none';
                setTimeout(function() {
                    reasonDiv.innerText = reason;
                    reasonDiv.style.display = 'block';
                }, 100); 
            }
        });
    });
});