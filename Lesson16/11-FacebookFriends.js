var facebookProfile = {
  name: "Con Solo",
  friends: 4,
  messages: ["Who shot first?", "The Millennium Falcon is my friend!"],
  postMessage: function postMessage(message) {
    facebookProfile.messages.push(message);
  },
  deleteMessage: function deleteMessage(index) {
    facebookProfile.messages.splice(index, 1);
  },
  addFriend: function addFriend() {
    var count = 1;
    facebookProfile.friends += count;
  },
  removeFriend: function removeFriend() {
    var count = 1;
    facebookProfile.friends -= count;
  }
};