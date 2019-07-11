        function palindrome(message) {
            var reversemessage = message.split("").reverse().join("");
            if (reversemessage == message) {
                return true;
            } else {
                return false;
            }
        }
