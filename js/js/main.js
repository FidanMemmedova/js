const count = {};
function symbolCounter(text) {
    var counter = 1;
    for (var i = 0; i < text.length; i++) {
        for (var j = 1; j < text.length; j++) {
            // const letter = text[i];
            if (text[i] == text[j]) {
                counter++;
                // count={`${text[i]}:${counter}`};
            }
            
        }
    }
    console.log(count);

}
symbolCounter("Kamran")