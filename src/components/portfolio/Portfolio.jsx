// import React, { useEffect, useState } from 'react'
// import DashBoardBooks from '../DUP/DashBoardBooks'
// import axios from 'axios';

// const Portfolio = ({userDetail, allBooks}) => {
//   // console.log("userDetail: portfolio", userDetail)
//   const bookPossesd = []
//   const bookRented = allBooks.find(book => 
//     book.possesdBy && book.possesdBy.email === userDetail.email
//   );
//   bookPossesd.push(bookRented) 
//  console.log(allBooks)
//   const bookListed = []
//   const bookSeller = allBooks.find(book => 
//     book.listedBy && book.listedBy.email === userDetail.email
//   );
//   console.log("book listed: ",bookSeller)
//   bookListed.push(bookSeller)


//   const [booksCollection, setBooksCollection] = useState([]);

//   const collectionFunc = async () => {
//     try {
//       const allCollections = await axios.get("https://bookbinge-backend.onrender.com/collection/");
//       const bookTest = allCollections.data.filter(book => book.email === userDetail.email);
      
//       if (bookTest.length === 0 || !bookTest[0].collection) {
//         console.log("No collections found for the given email");
//         return;
//       }

//       const newBooksCollection = [];
//       for (let index = 0; index < bookTest[0].collection.length; index++) {
//         const collectionId = bookTest[0].collection[index];
//         for (let index2 = 0; index2 < allBooks.length; index2++) {
//           if (allBooks[index2].id === collectionId) {
//             newBooksCollection.push(allBooks[index2]);
//             break;
//           }
//         }
//       }
//       console.log("newBooksCollection", booksCollection)
//       setBooksCollection(newBooksCollection); 
//     } catch (error) {
//       console.error("Error fetching collections:", error);
//     }
//   };

//   useEffect(() => {
//     collectionFunc(); // Fetch the data when the component mounts
//   }, []); // Empty dependency array ensures it runs only once when the component mounts


//   return (
//     <div className='pt-5 pb-5' style={{backgroundColor:'#f3f4f6'}}>
//         <div className='row col-10 m-auto justify-content-between'>
//             <div className='col-3 p-2 bg-white rounded-1'>
//                 <h6 className='d-flex gap-3'><span className='text-danger'>NAME :</span> <span>{userDetail.name}</span> </h6>
//                 <h6 className='d-flex gap-3'><span className='text-danger'>EMAIL :</span> <span>{userDetail.email}</span> </h6>
//                 {/* <h6 className='d-flex gap-3'><span className='text-danger'>PHONE NO. :</span> <span>7972121968</span> </h6>
//                 <h6 className='d-flex gap-3'><span className='text-danger'>SRN :</span> <span>R23EI027</span> </h6> */}
//             </div>
//             <div className='col-3 p-2 bg-white rounded-1'>
//                 <h6 className='d-flex gap-3'><span className='text-danger'>NAME :</span> <span>Pritam</span> </h6>
//                 <h6 className='d-flex gap-3'><span className='text-danger'>EMAIL :</span> <span>pripritam7@gmail.com</span> </h6>
//                 <h6 className='d-flex gap-3'><span className='text-danger'>PHONE NO. :</span> <span>7972121968</span> </h6>
//                 <h6 className='d-flex gap-3'><span className='text-danger'>SRN :</span> <span>R23EI027</span> </h6>
//             </div>
//         </div>
//       {/* <div>
//         {bookPossesd != undefined ? <DashBoardBooks allBooks={bookPossesd} title={'Books In Possession'} ></DashBoardBooks> : <></>}
//         {booksCollection != undefined ? <DashBoardBooks allBooks={booksCollection} title={'Interested Books'}></DashBoardBooks> : <></>}
//         {bookListed != undefined ? <DashBoardBooks allBooks={bookListed} title={'Your Books'}></DashBoardBooks> : <></>}
//       </div> */}

//       <div>
//          {bookPossesd.length > 0 && (
//            <DashBoardBooks allBooks={bookPossesd} title={'Books In Possession'} />
//          )}
//          {booksCollection.length > 0 && (
//            <DashBoardBooks allBooks={booksCollection} title={'Interested Books'} />
//          )}
//          {bookListed.length > 0 && (
//            <DashBoardBooks allBooks={bookListed} title={'Your Books'} />
//          )}
//        </div>
//     </div>
//   )
// }

// export default Portfolio


import React, { useEffect, useState } from 'react';
import DashBoardBooks from '../DUP/DashBoardBooks';
import axios from 'axios';

const Portfolio = ({ userDetail, allBooks }) => {
  const bookPossesd = [];
  const bookRented = allBooks.filter(
    (book) => book.possesdBy && book.possesdBy.email === userDetail.email
  );

  console.log("bookRented",bookRented)

  if (bookRented) {
    bookPossesd.push(bookRented);
  }

  const bookListed = [];
  const bookSeller = allBooks.find(
    (book) => book.listedBy && book.listedBy.email === userDetail.email
  );

  if (bookSeller) {
    bookListed.push(bookSeller);
  }

  const [booksCollection, setBooksCollection] = useState([]);

  const collectionFunc = async () => {
    try {
      const allCollections = await axios.get("https://bookbinge-backend.onrender.com/collection/");
      const userCollections = allCollections.data.filter((collection) => collection.email === userDetail.email);

      if (userCollections.length > 0 && userCollections[0].collection) {
        const newBooksCollection = [];
        userCollections[0].collection.forEach((collectionId) => {
          const book = allBooks.find((b) => b.id === collectionId);
          if (book) {
            newBooksCollection.push(book);
          }
        });

        setBooksCollection(newBooksCollection);
      } else {
        console.log("No collections found for the given email");
      }
    } catch (error) {
      console.error("Error fetching collections:", error);
    }
  };

  useEffect(() => {
    collectionFunc(); // Fetch the data when the component mounts
  }, []); // Empty dependency array ensures it runs only once when the component mounts

  return (
    <div className='pt-5 pb-5' style={{ backgroundColor: '#f3f4f6' }}>
      <div className='row col-10 m-auto justify-content-between'>
        <div className='col-3 p-2 bg-white rounded-1'>
          <h6 className='d-flex gap-3'><span className='text-danger'>NAME :</span> <span>{userDetail.name}</span></h6>
          <h6 className='d-flex gap-3'><span className='text-danger'>EMAIL :</span> <span>{userDetail.email}</span></h6>
        </div>
      </div>
      <div>
        {bookPossesd.length > 0 && (
          <DashBoardBooks allBooks={bookRented} title={'Books In Possession'} />
        )}
        {booksCollection.length > 0 && (
          <DashBoardBooks allBooks={booksCollection} title={'Interested Books'} />
        )}
        {bookListed.length > 0 && (
          <DashBoardBooks allBooks={bookListed} title={'Your Books'} />
        )}
      </div>
    </div>
  );
};

export default Portfolio;
