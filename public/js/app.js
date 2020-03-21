$(function() {
      // Send the PUT request.
      $.ajax("/api/coffeehouse/" {
        type: "GET",
      }).then(
        function(beans) {
            console.log(beans);
          console.log("");
          for (let i = 0; i < beans.length; i++) {
              $("#list-option").append(`<div class = "coffeename" data-id = "${beans[i].id}>${beans[i].coffeehousename}</div>`)
          }
        }
      );
    });