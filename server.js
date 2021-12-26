const { DefaultAzureCredential } = require("@azure/identity");
const { SecretClient } = require("@azure/keyvault-secrets");
const app = require('express')();
const port =8080; 
const keyVaultName = 'the-matrix-kv' // process.env["VAULT_NAME"];
   const KVUri = "https://" + keyVaultName + ".vault.azure.net";

   const credential = new DefaultAzureCredential();
   const client = new SecretClient(KVUri, credential);
   
   const secretName = "MyPass";
   app.get('/api/test', async(req, res) => {
   const secret = await getSecret();

      res.type('text');
      res.send('secret');
   });
   app.get('/', (req,res)=>{
      res.send('test');
      })

   app.get('/tst', (req,res)=>{
      res.send('tst');
      })
async function getSecret() {
      const retrievedSecret = await client.getSecret(secretName);
      return retrievedSecret;
   }


   app.listen(port, () => {
      console.log('server running at',port);
   })
