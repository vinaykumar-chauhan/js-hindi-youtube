// const coding = ["js" , "rs" , "cpp" ,"swift", "java"];

//  const values = coding.forEach( (item) => {               // for-each donot return 
//     console.log(item);
//     return item
//  })

//  console.log(values);
 
//-------------------------------------------------------------

const myNums = [1,2,3,4,5,6,7,8,9];

//  const newNums = myNums.filter( (num) => {
//      return num > 5
// });

// const newNums = [];

// myNums.forEach( (num) => {
//     if (num > 4) {
//         newNums.push(num);
//     }
// })

//  console.log(newNums);
 

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userBooks = books.filter( (bk) => bk.genre === 'History');

   userBooks = books.filter( (bk) => bk.publish >= 1995 && bk.genre === 'History');
    //  console.log(userBooks);

    ///--------------------------------------------------------------

const myNumbers = [1 ,2,3,4,5,6,7,8,9,10];

// const newNums =  myNumbers.map( (num) => num + 10);

const newNums = myNumbers.map((num) => num * 10 ).map((num) => num + 1).filter((num) => num >= 40 )

  // console.log(newNums);

// ---------------------------------------------------

const mynum = [1,2,3,4]
  
const initialValue = 0;
// const sumWithInitial = mynum.reduce((accumulator,currentValue) => accumulator + currentValue,initialValue);

const sumWithInitial = mynum.reduce( function (acc , currval) {
  console.log(`acc: ${acc} and currval: ${currval}`);
  return acc + currval;
  },3 )

// console.log(sumWithInitial);

const shoppingCart = [
  {
    itemName: "js course",
    price: 2999
  },
  {
    itemName: "python",
    price: 1999
  },
  {
    itemName: "mobile dev course",
    price: 3000
  },
  {
    itemName: "data science course",
    price: 4000
  },
]

const totalPrice = shoppingCart.reduce( (acc, item) => { return (acc + item.price)},0);
// console.log(totalPrice);
