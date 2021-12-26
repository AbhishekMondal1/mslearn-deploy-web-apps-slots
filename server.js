const app = require('express')();
const port =3000; 

   

   app.get('/api/test', async(req, res) => {
 

      res.type('text');
      res.send('secret');
   });
   app.get('/', (req,res)=>{
      res.send('test');
      })

   app.get('/tst', (req,res)=>{
      res.send('tst');
      })


   app.listen(port, () => {
      console.log('server running at',port);
   })
