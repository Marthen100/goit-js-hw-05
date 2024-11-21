const usersForSorting = [
    { name: "Moore Hensley", friends: ["Sharron Pace"] },
    { name: "Sharlene Bush", friends: ["Briana Decker", "Sharron Pace"] },
    { name: "Ross Vazquez", friends: ["Marilyn Mcintosh", "Naomi Buckner"] },
    { name: "Elma Head", friends: ["Goldie Gentry", "Aisha Tran"] },
    { name: "Carey Barr", friends: ["Jordan Sampson", "Eddie Strong"] },
    { name: "Blackburn Dotson", friends: ["Jacklyn Lucas", "Linda Chapman"] },
    { name: "Sheree Anthony", friends: ["Goldie Gentry", "Briana Decker"] }
  ];
  
  const sortByDescendingFriendCount = users => 
    users.sort((a, b) => b.friends.length - a.friends.length);
  
  const task3ResultsDiv = document.getElementById('task-3-results');
  
  let sortedUsers = sortByDescendingFriendCount(usersForSorting);
  task3ResultsDiv.innerHTML += `<p>${sortedUsers.map(user => user.name).join(', ')}</p>`;
  