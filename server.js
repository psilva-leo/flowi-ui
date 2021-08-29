const express = require('express');
const path = require('path');
var cors = require('cors');
var axios = require('axios');
const bodyParser = require('body-parser');


const app = express();
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())


app.use(express.static(path.join(__dirname, 'build')));


app.post('/api/trigger_dag', function(req, res){
  let dagName = "FlowiTrainMNIST";   
  let data = {
    "is_paused": false
  };
  console.log('triggering');

  // axios.patch('http://10.152.183.25/api/v1/dags/' + dagName, data,
  //   {
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     auth: {
  //       username: "admin",
  //       password: "admin"
  //     }
  //   })
  //     .then(response => {
  //       console.log('ok response');
  //       res.json({'ok': 'ok'});
  //     })
  //     .catch(error => {
  //       console.log('error');
  //       console.log(error);
  //       res.json(error);
  //     });


  axios.post('http://10.152.183.25/api/v1/dags/' + dagName + '/dagRuns', req.body,
    {
      headers: {
        'Content-Type': 'application/json',
      },
      auth: {
        username: "admin",
        password: "admin"
      }
    })
      .then(response => {
        console.log('ok response');
        res.json({'ok': 'ok'});
      })
      .catch(error => {
        console.log('error');
        console.log(error);
        res.json(error);
      });

});


app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const port = 8080;
app.listen(port, '0.0.0.0', () => {console.log(`Server started on port ${port}`)});