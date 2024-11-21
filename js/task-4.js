const clients = [
    { name: "Moore Hensley", gender: "male", balance: 2811 },
    { name: "Sharlene Bush", gender: "female", balance: 3821 },
    { name: "Ross Vazquez", gender: "male", balance: 3793 },
    { name: "Elma Head", gender: "female", balance: 2278 },
    { name: "Carey Barr", gender: "male", balance: 3951 },
    { name: "Blackburn Dotson", gender: "male", balance: 1498 },
    { name: "Sheree Anthony", gender: "female", balance: 2764 }
  ];
  
  const getTotalBalanceByGender = (users, gender) => 
    users.filter(user => user.gender === gender).reduce((acc, user) => acc + user.balance, 0);
  
  const task4ResultsDiv = document.getElementById('task-4-results');
  
  let totalBalanceMale = getTotalBalanceByGender(clients, "male");
  let totalBalanceFemale = getTotalBalanceByGender(clients, "female");
  
  task4ResultsDiv.innerHTML += `<p>Male total balance: ${totalBalanceMale}</p>`;
  task4ResultsDiv.innerHTML += `<p>Female total balance: ${totalBalanceFemale}</p>`;
  