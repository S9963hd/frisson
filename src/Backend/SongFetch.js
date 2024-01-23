let axios=require('axios');
console.log(axios('https://app.box.com/s/q3rbw9prdb89u3qc3vhwuoe3bm5lvwj0').then(result=>result.data).then(err=>console.log(err)));
