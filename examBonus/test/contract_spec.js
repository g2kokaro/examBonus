// /*global contract, config, it, assert*/

const Foo = require('Embark/contracts/Foo');

let accounts;

// For documentation please see https://embark.status.im/docs/contracts_testing.html
config({
  //deployment: {
  //  accounts: [
  //    // you can configure custom accounts with a custom balance
  //    // see https://embark.status.im/docs/contracts_testing.html#Configuring-accounts
  //  ]
  //},
  contracts: {
    "Foo": {}
  }
}, (_err, web3_accounts) => {
  accounts = web3_accounts
});

contract("Foo", function (){
  this.timeout(0);
  it("Constructor runs successfully", async function () {
    let address = await Foo.options.address;
    assert.ok(address);
  })
})

// contract("SimpleStorage", function () {
//   this.timeout(0);

//   it("should set constructor value", async function () {
//     let result = await SimpleStorage.methods.storedData().call();
//     assert.strictEqual(parseInt(result, 10), 100);
//   });

//   it("set storage value", async function () {
//     await SimpleStorage.methods.set(150).send();
//     let result = await SimpleStorage.methods.get().call();
//     assert.strictEqual(parseInt(result, 10), 150);
//   });

//   it("should have account with balance", async function() {
//     let balance = await web3.eth.getBalance(accounts[0]);
//     assert.ok(parseInt(balance, 10) > 0);
//   });
// }

