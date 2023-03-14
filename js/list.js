
      const db = firebase.firestore();

      // Get data from Firestore
      db.collection('repair').get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          // Add data to table
          var row = '<tr>' +
         /*   '<td>' + doc.id + '</td>' +*/
            '<td>' + doc.data().block_n + '</td>' +
            '<td>' + doc.data().req_repair + '</td>' +
            '<td>' + doc.data().req_desc + '</td>' +
            '<td>' + doc.data().unit_n + '</td>' +
            '<td>' + doc.data().req_date + '</td>' +
            '<td>' + doc.data().etc + '</td>' +
            '<td>' +
            '<button class="btn btn-primary edit-btn" data-id="' + doc.id + '">Edit</button> ' +
            '<button class="btn btn-danger delete-btn" data-id="' + doc.id + '">Delete</button>' +
            '</td>' +
            '</tr>';
          $('table tbody').append(row);
        });
      });

      


      
      