$(function() {
  $.ajax("/api/coffeehouse/" + id, {
    type: "GET"
  }).then(function(beans) {
    console.log(beans);
    console.log("");
    for (let i = 0; i < beans.length; i++) {
      $("#list-option").append(
        `<div class = "coffeename" data-id = "${beans[i].id}>${beans[i].coffeeHouseName}</div>`
      );
    }
  });
});

$(function() {
  $.ajax("/api/user-profile/", {
    type: "GET"
  }).then(function(users) {
    console.log(users);
    console.log("");
    for (let i = 0; i < users.length; i++) {
      $("#list-option").append(
        `<div class = "username" data-id = "${users[i].id}>${users[i].userProfileName}</div>`
      );
    }
  });
});

$(function() {
  $.ajax("/api/view-user/", {
    type: "GET"
  }).then(function(toView) {
    console.log(toView);
    console.log("");
    for (let i = 0; i < toView.length; i++) {
      $("#list-option").append(
        `<div class = "viewname" data-id = "${toView[i].id}>${toView[i].viewUserName}</div>`
      );
    }
  });
});
