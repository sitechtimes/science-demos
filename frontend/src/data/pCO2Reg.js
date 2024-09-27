
function peakRegression(yearNum){
    let month = 0.75; // represents september, most frequent pCO2 peak month
    return {
        x: yearNum,
        y: ((yearNum+month)*1.9)+343
    };
}

function troughRegression(yearNum){
    let month = 5/24; // represents between feb & mar, avg of two most frequent trough month
    return {
        x: yearNum,
        y: ((yearNum+month)*1.9)+309
    };
}

export default function hundredYearReg(yearNum){
    let data = [];
    for(let i=1; i<=yearNum; i++){
        data.push(troughRegression(i));
        data.push(peakRegression(i));
    }
    return data;
}