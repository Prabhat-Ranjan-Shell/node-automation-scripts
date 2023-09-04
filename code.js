// sum(1)(3)(7)(9).....();

function sum(x) {
    return (y) => {
        if (y) {
            return sum(x + y);
        }
        return x;
    }
}

// console.log(sum(1)(2)(3)(4)(5)());

function sumAll(...rest) {
    const x = [...rest];
    return (...y) => {
        if (y.length) {
            return sumAll(...x, ...y);
        }
        return x.reduce((a,b) => a+b, 0);
    }
}

// console.log(sumAll(1,2,3)(2,3,4)(3,4,5)(4,5,6)(5,6)());


// function memSum(a, b) {
    
// }

// "MO\nGOV\nभरत सरकार\nNMENT OF IND\nनाम / Name:\nAdarsh kumar\nजन्म तारीख / DOB: 17/06/1995\nपुरुष / Male\n493285756210\nआधार आदमी का अधकिार\n"



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function extractNames(text) {
    const extras = ['permanent', 'account', 'number',
    'signature', 'government', 'india', 'gov', 'ind', 'name',
    'income', 'tax', 'department', 'govt', 'of'
    ];
    // Remove punctuation and extra whitespace
    text = text.replace(/[^\w\s]/g, '').trim();
  
    // Split the text into individual words
    const words = text.split(/\s+/);
  
    // Define a regex pattern to match capitalized words
    const pattern = /^[A-Z][a-z]*$/;
    const p2 = /^[A-Z][A-Z]*$/; // not required names should follow caps first then small
  
    // Find all the words that match the pattern
    const names = words.filter((word) => pattern.test(word) || p2.test(word));
  
    return names.reduce((m,n) => {
        if(!extras.includes(n.toLowerCase())) {
            m.push(n);
        }
        return m;
    },[]).join(' ');
  }

const getGender = (ele) => {
    if(ele.toLowerCase().includes('female')) {
       return 'Female';
    } else if(ele.toLowerCase().includes('male')) {
        return 'Male';
    }
    return '';
}

const getAdhaar = (ele) => {
    const n = ele.split(" ").join("");

    if(parseInt(ele) && n.length === 12) {
        return parseInt(n);
    }
    return '';
}

const getDob = (ele) => {
    const regex = /\d{2}[/-]\d{2}[/-]\d{4}/;
    if(ele.includes('DOB')) {
        return ele.split(":")[1].trim();
    } else if(regex.test(ele)) {
        return ele;
    }
    return '';
}

const getPan = (ele) => {
    const regEx = /[A-Z]{3}[PCHFATBLJG]+[A-Z]+\d{4}[A-Z]+/;
    if(regEx.test(ele)) {
        return ele;
    }
    return "";
}

const getData = (isAdhaar, isPan, isPassport, nm, pan, adhaar, passport, gender, DOB) => {
    switch(true) {
        case isAdhaar: 
            return {
                Name: nm,
                Gender: gender,
                Adhaar: adhaar,
                DOB,
            }
        case isPan:
            return {
                Name: nm,
                PAN: pan,
                DOB,
            }
        case isPassport:
            return {
                Name: nm,
                Gender: gender,
                Passport: passport,
                DOB,
            }
    }

    return {}
}

function stringManipulation(str) {
    const strArr = str.split("\n");
    const regex = /[A-Za-z]+/;

    let gender = '';
    let DOB = '';
    let adhaar = '';
    let pan = '';
    let passport = '';
    let isAdhaar = false;
    let isPan = false;
    let isPassport = false;

    strArr.forEach((ele, id) => {
        if(getGender(ele)) {
            gender = getGender(ele);
            strArr.splice(id, 1, "");
        }
        if(getAdhaar(ele)) {
            adhaar = getAdhaar(ele);
            isAdhaar = true;
            strArr.splice(id, 1, "");
        }
        if(getPan(ele)) {
            pan = getPan(ele);
            isPan = true;
            strArr.splice(id, 1, "");
        }
        if(getDob(ele)) {
            DOB = getDob(ele);
            strArr.splice(id, 1, "");
        }
    });

    const l = strArr.reduce((a,b) => {
        if(regex.test(b)) {
            a.push(b);
        }
        return a;
    },[]);

    return getData(isAdhaar, isPan, isPassport, extractNames(l.join(' ')), pan, adhaar, passport, gender, DOB);
}


console.log("--", stringManipulation("आयकर विभाग\nINCOME TAX DEPARTMENT\nD MANIKANDAN\nDURAISAMY\n16/07/1986\nPermanent Account Number\nBNZPM2501F\nD. maniikanmalgar\nSignature\nभारत सरकार\nGOVT. OF INDIA\n04082011\n"));