//Number extractor
let text = "We have to extract these numbers 12, 47, 48 The integers numbers are also interesting: 189 2036 314 ',' is a separator, so please extract these numbers 125,789,1450 and also these 564,90456 We like to offer you 7890$ per month in order to complete this task... we are joking You are going to learn 3 things, the first one is not to extract, and 2 and 3 are simply digits. Have fun with our mighty test, you are going to support science, progress, mankind wellness and you are going to waste 30 or 60 minutes of your life. you can also extract exotic stuff like a456 gb67 and 45678911ghth Writing 1 example is not funny, please consider that 66% is validation+testing You are a programmer, I think that you like arrays A LOT, [3,45,67,900,1974] Who loves arrays more than me? {366,78,90,5}Yes, there are only 4 numbers inside Integers are fine but sometimes you like 99 cents after the 99 dollars 100€ are better than 99€ I like to give you 1000 numbers now: 12 3 56 21 67, and more, [45,67,7] Ok ok 1 2 3 4 5 and the last one is 6 33 trentini entrarono a Trento, tutti e 33 di tratto in tratto trotterellando We have to extract these numbers 12, 47, 48 The integers numbers are also interesting: 189 2036 314 ',' is a separator, so please extract these numbers 125,789,1450 and also these 564,90456 We like to offer you 7890$ per month in order to complete this task... we are joking You are going to learn 3 things, the first one is not to extract, and 2 and 3 are simply digits. Have fun with our mighty test, you are going to support science, progress, mankind wellness and you are going to waste 30 or 60 minutes of your life. you can also extract exotic stuff like a456 gb67 and 45678911ghth Writing 1 example is not funny, please consider that 66% is validation+testing You are a programmer, I think that you like arrays A LOT, [3,45,67,900,1974] Who loves arrays more than me? {366,78,90,5}Yes, there are only 4 numbers inside Integers are fine but sometimes you like 99 cents after the 99 dollars 100€ are better than 99€ I like to give you 1000 numbers now: 12 3 56 21 67, and more, [45,67,7] Ok ok 1 2 3 4 5 and the last one is 6 33 trentini entrarono a Trento, tutti e 33 di tratto in tratto trotterellando"

let regEx = /\d+/gi;

console.log(text.match(regEx));
/*
(106) 
["12", "47", "48", "189", "2036", "314", "125", "789", "1450", "564", "90456", 
"7890", "3", "2", "3", "30", "60", "456", "67", "45678911", "1", "66", "3", "45", 
"67", "900", "1974", "366", "78", "90", "5", "4", "99", "99", "100", "99", "1000", 
"12", "3", "56", "21", "67", "45", "67", "7", "1", "2", "3", "4", "5", "6", "33", 
"33", "12", "47", "48", "189", "2036", "314", "125", "789", "1450", "564", "90456", 
"7890", "3", "2", "3", "30", "60", "456", "67", "45678911", "1", "66", "3", "45", 
"67", "900", "1974", "366", "78", "90", "5", "4", "99", "99", "100", "99", "1000", 
"12", "3", "56", "21", "67", "45", "67", "7", "1", "2", "3", "4", "5", "6", "33", "33"]
*/