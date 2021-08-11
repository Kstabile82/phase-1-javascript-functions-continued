function wrapAdjective(str="*") {
    return function (param ='special') {
        return `You are ${str}${param}${str}!`;

    }
}
function saturdayFun(arg1 = 'roller-skate') {
    return `This Saturday, I want to ${arg1}!`; 
}

const mondayWork = function(param2 = 'go to the office') {
    return `This Monday, I will ${param2}.`
}