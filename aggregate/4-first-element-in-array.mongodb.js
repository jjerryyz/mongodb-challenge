
/**
  4 - find first element in array 
  ---

  ### Question 

  找到数组中元素

  ### Expected
 
  ```js
 [
    {
    _id: ObjectId("637b4b8a86fac07908ef98b3"),
    building: 'WestAnnex-1',
    room_sizes: [
      { width: 9, length: 5 },
      { width: 8, length: 7 },
      { width: 7, length: 9 },
      { width: 9, length: 8 }
    ],
    firstLargeEnoughRoom: { width: 7, length: 9 }
  }
  ]
  ```
}
 */


use('challenge')

db.test.drop();

db.test.insertOne({
  "building": "WestAnnex-1",
  "room_sizes": [
    { "width": 9, "length": 5 },
    { "width": 8, "length": 7 },
    { "width": 7, "length": 9 },
    { "width": 9, "length": 8 },
  ]
});



/** start here */