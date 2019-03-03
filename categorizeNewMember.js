// 7 kyu 

// The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.

// To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.


// SOLVED

function openOrSenior(data){
    let memberStatus = []
    for (let i = 0; i< data.length; i++){
        if (data[i][0] >=55 && data[i][1] > 7){
        memberStatus.push('Senior')
      }
        else{
            memberStatus.push('Open')
        }
    }
    return memberStatus
}


// SOLVED


// ALTERNATE SOLUTIONS

// USING ARROW FUNCTIONS, map() AND TERNARY OPERATORS

function openOrSenior(data){
  return data.map(([age, handicap]) => (age > 54 && handicap > 7) ? 'Senior' : 'Open');
}

// USING map() AND TERNARY OPERATORS

function openOrSenior(data){
  return data.map(function(d){
    return d[0] >= 55 && d[1] > 7 ? 'Senior' : 'Open';
  });
}

