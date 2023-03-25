let books = [
       {
           title:   'The Turn of the Screw',
           author:  'Henry James  ',
           genre:   'horror'
       } ,
       {
           title:   'The War of the  Worlds',
           author:  'H.G.Wells',
           genre:   'science fiction'
       } ,
       {
       title:  'The Big Sleep',
       author: 'Raymond Chandler',
       genre:  'mystery'
   } ,
       {
           title:   'The Postman Always Rings Twice',
           author:  'James M.Cain',
           genre:   'mystery'
       } ,
       {
           title:   'Mission of Gravity',
           author:  'Hal Clement',
           genre:   'science fiction'
       } ,
       {
           title:   'Frankenstein',
           author:  'Shelley',
           genre:   'horror'
       }
    ];
    let newRRR = books.filter((book)=>
    {
        if(book.genre==="science fiction")
        return book;
    }
    ).map((book)=>
    {
       return book.title; 
    }
    )
    // console.log(newRRR);
    newRRR.forEach(book=>
    {
        console.log(book)
    })
