function wordblanks(mynoun, myadjective, myverb, myadverb){
    var result = "";
    result += "the" + " " + myadjective + " " + mynoun + " " + myverb + " " + "to the hospital" + " " + myadverb 

    return result;

}


console.log(wordblanks("doctor", "spanish", "ran", "hurridly"));
console.log(wordblanks("mosquito", "tiny", "buzzed", "noisily")); 

