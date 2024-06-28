document.addEventListener("DOMContentLoaded", function() {
    function setCookie(name, value, days) {
        var expires = "";
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "") + expires + "; path=/";
    }

    function getCookie(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }

    function checkAge() {
        var ageVerified = getCookie("age_verified");
        if (ageVerified === "true") {
            document.getElementById("content").style.display = "block";
        } else {
            var isOver18 = confirm("Are you over 18 years old?");
            if (isOver18) {
                setCookie("age_verified", "true", 30);
                document.getElementById("content").style.display = "block";
            } else {
                alert("You must be over 18 to view this content.");
                window.location.href = "https://www.google.com"; // Redirect to a safe page
            }
        }
    }

    checkAge();
});
