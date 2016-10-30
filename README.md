# BeatForBeat
Simple implementation of a system similar to the Norwegian music show Beat for Beat.

# Usage
Simply download all the files to a location on your computer, and open index.html in your favourite browser to use the program.
To unhide a word, you can either click on the word itself, or on the key corresponding to its number. You can also hide a word
again by clicking the same key again - which might be useful in a panic situation, depending on how fast you are. To go the 
next task, simply click enter.

To change the tasks, you need to edit the index.html file. Scroll down to the script tags at the bottom of the file, and change,
add or remove add_task calls to suit your need. add_task takes two parameters; the first is the lyrics you want displayed as a 
simple string (with maximum 6 words, as in the original show), and a list of the words that should be red. Keep in mind that
the words are 0-indexed; i.e. the first word is represented by 0, the second by 1, and so on. The last parameter can also be omitted;
in that case, two random words are chosen.
