
const stringSize = (text) => {
    return text.length;

}
const replaceCharacterE = (text) => {
    return text.replace('e', " ");

}
const concatString = (text1, text2) => {
    return text1 + text2;
 
}
const showChar5 = (text) => {
    return text.charAt(4);

}
const showChar9 = (text) => {
    return text.slice(0, 9);

}
const toCapitals = (text) => {
    return text.toUpperCase();

}
const toLowerCase = (text) => {
    return text.toLowerCase();

}
const removeSpaces = (text) => {
    return text.trim();

}
const IsString = (text) => {
    return typeof(text) === "string";

}

const getExtension = (text) => {
    return text.substring(text.lastIndexOf('.') + 1, text.length);

}
const countSpaces = (text) => {
    let count = 0;
    for (let i=0; i<text.length; i++) {
        if (text.charAt(i) === " ")
        count++;
}
const InverseString = (text) => {
    return text.split("").reverse().join("")

}

const power = (x, y) => {
    return Math.pow(x,y);

}
const absoluteValue = (num) => {
    return Math.abs(num);

}
const absoluteValueArray = (array) => {
    return array.map(Math.abs);

}
const circleSurface = (radius) => {
    return Math.round(Math.PI * radius**2);

}
const hypothenuse = (ab, ac) => {
    return Math.hypot(ab, ac);

}
const BMI = (weight, height) => {
    return parseFloat((weight / (height **2)).toFixed(2));

}

const createLanguagesArray = () => {
    let arr = ["Html", "CSS", "Java","PHP"]
    return arr
}

const createNumbersArray = () => {
    let arr = [0,1,2,3,4,5]
    return arr
}

const replaceElement = (languages) => {
    languages[2] = "Javascript";
    return languages
}
}

const addElement = (languages) => {
    languages.push("Ruby","Python")
    return languages
}


const addNumberElement = (numbers) => {
    numbers.unshift(-2,-1)
    return numbers
}

const removeFirst = (languages) => {
    languages.shift()
    return languages
}

const removeLast = (languages) => {
    languages.pop()
    return languages
}

const convertStrToArr = (social_arr) => {
    social_arr=social_arr.split(",");
    return social_arr
}

const convertArrToStr = (languages) => {
    languages = languages.toString()
    return languages
}

const sortArr = (social_arr) => {
    social_arr.sort()
    return social_arr;
}

const invertArr = (social_arr) => {
    social_arr.reverse();
    return social_arr;

}