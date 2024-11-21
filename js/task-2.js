const allUsers = [
    { name: "Moore Hensley", friends: ["Sharron Pace"] },
    { name: "Sharlene Bush", friends: ["Briana Decker", "Sharron Pace"] },
    { name: "Ross Vazquez", friends: ["Marilyn Mcintosh", "Naomi Buckner"] },
    { name: "Elma Head", friends: ["Goldie Gentry", "Aisha Tran"] },
    { name: "Carey Barr", friends: ["Jordan Sampson", "Eddie Strong"] },
    { name: "Blackburn Dotson", friends: ["Jacklyn Lucas", "Linda Chapman"] },
    { name: "Sheree Anthony", friends: ["Goldie Gentry", "Briana Decker"] }
  ];
  
  const getUsersWithFriend = (users, friendName) => 
    users.filter(user => user.friends.includes(friendName)).map(user => user.name);
  
  const task2ResultsDiv = document.getElementById('task-2-results');
  
  let usersWithFriend = getUsersWithFriend(allUsers, "Briana Decker");
  task2ResultsDiv.innerHTML += `<p>${usersWithFriend.join(', ')}</p>`;
  