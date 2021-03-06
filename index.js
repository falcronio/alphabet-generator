var alphabets = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I',
    'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',
    'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
], alphabetsQuery;

resetAlphabets();

function resetAlphabets() {
    alphabetsQuery = [].concat(alphabets);
}

var AlphabetGenerator = {
    get: function() {
        var result = [].concat(alphabetsQuery);
        resetAlphabets();
        return result;
    },
    range: function(lower, upper) {
        lower = lower || 'A';
        upper = upper || 'Z';
        var lowerCharCode = lower.charCodeAt(0);
        var upperCharCode = upper.charCodeAt(0);
        alphabetsQuery = [];
        for (var i = lowerCharCode; i <= upperCharCode; i++) {
            alphabetsQuery.push(String.fromCharCode(i));
        }
        return this;
    },
    random: function(n) {
        n = n || 1;
        var tmp = [], index = 0;
        for (var i = 0; i < n; i++) {
            index = Math.floor(Math.random() * alphabetsQuery.length);
            tmp.push(alphabetsQuery[index]);
        }
        alphabetsQuery = tmp;
        return this;
    },
    lower: function() {
        alphabetsQuery = alphabetsQuery.map(function(alphabet) {
            return alphabet.toLowerCase();
        });
        return this;
    },
    upper: function() {
        alphabetsQuery = alphabetsQuery.map(function(alphabet) {
            return alphabet.toUpperCase();
        });
        return this;
    }
};

module.exports = AlphabetGenerator;