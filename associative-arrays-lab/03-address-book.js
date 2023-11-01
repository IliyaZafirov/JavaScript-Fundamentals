function solve(input) {
  let addressBook = {};

  for (let elem of input) {
      let [name, address] = elem.split(':');

      addressBook[name] = address;
  }

  let entries = Object.entries(addressBook)
  entries.sort((a, b) => a[0].localeCompare(b[0]));

  let sorted = Object.fromEntries(entries);

  for (let elem of Object.entries(sorted)) {
      console.log(elem.join(' -> '));
  }

}

solve(['Bob:Huxley Rd',
    'John:Milwaukee Crossing',
    'Peter:Fordem Ave',
    'Bob:Redwing Ave',
    'George:Mesta Crossing',
    'Ted:Gateway Way',
    'Bill:Gateway Way',
    'John:Grover Rd',
    'Peter:Huxley Rd',
    'Jeff:Gateway Way',
    'Jeff:Huxley Rd'])




  



    

    // function solve(input) {
    //     let addressBook = {};
    
    //     for (let elem of input) {
    //         let [name, address] = elem.split(':');
    
    //         addressBook[name] = address;
    //     }
    
    //     let entries = Object.entries(addressBook);
    //     entries.sort(([keyA, valueA], [keyB, valueB]) => keyA.localeCompare(keyB));
        
    //   let sorted = {};

    //   for (let [name, address] of entries) {
    //     sorted[name] = address

    //   }
    //   console.log(sorted);

    //   for (let [name, address] of Object.entries(sorted)) {
    //     console.log(name, ' -> ', address);
    //   }
    // }
    
