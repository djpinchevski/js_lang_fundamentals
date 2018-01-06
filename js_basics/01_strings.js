// Discussion
// First of all, there is a SyntaxError in assigning the paragraph to the paragraph variable. It is not easily visible, but there are spaces at the end of line 5 following the backslash (\) character. The purpose of the backslash is to escape the newline character at the end of the line. However, the extra whitespace prevents this from happening, causing a SyntaxError to be raised.

// The program still has a bug, even after removing the extra whitespace on line 5: there are extra spaces in the middle of some of the sentences. This is because the program considers the whole string to be continuous, so the spaces at the beginning of each line (lines 2 to 6) are interpreted as part of the string.

var paragraph = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed \
                ligula at risus vulputate faucibus. Aliquam venenatis nibh ut justo dignissim \
                dignissim. Proin dictum purus mollis diam auctor sollicitudin. Ut in bibendum \
                ligula. Suspendisse quam ante, dictum aliquam tristique id, porttitor pulvinar \
                diam. Maecenas blandit aliquet ipsum. Integer vitae sapien sed nulla rutrum \
                hendrerit ac a urna. Interdum et malesuada fames ac ante ipsum primis in faucibus.';

console.log(paragraph);
