
var friendsArray = [{
    "name":"Ahmed",
    "photo":"",
    "scores":[
        5,
        1,
        4,
        4,
        5,
        1,
        2,
        5,
        4,
        1
      ]


  },
{
    "name":"Persie",
    "photo":"https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-9/48382871_1241825042636576_4907018754363228160_n.jpg?_nc_cat=108&_nc_ht=scontent-sea1-1.xx&oh=d37b95c3964a87e7491ea7dad1d49b56&oe=5D560D53",
    "scores":[
        3,
        4,
        2,
        4,
        5,
        3,
        2,
        5,
        3,
        1
      ]

},
{
    "name":"Messi",
    "photo":"https://cdn.soccerladuma.co.za/cms2/image_manager/uploads/News/655405/7/default.jpg",
    "scores":[
        2,
        3,
        4,
        4,
        1,
        2,
        2,
        5,
        3,
        1
      ]
},
{
  "name":"Zlatan",
  "photo":"https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Manchester_United_v_Zorya_Luhansk%2C_September_2016_%2808%29_-_Zlatan_Ibrahimovi%C4%87_%28edited%29.jpg/235px-Manchester_United_v_Zorya_Luhansk%2C_September_2016_%2808%29_-_Zlatan_Ibrahimovi%C4%87_%28edited%29.jpg",
  "scores":[
      4,
      4,
      5,
      2,
      4,
      3,
      1,
      5,
      3,
      1
    ]
},
{
  "name":"Nancy Zuma",
  "photo":"https://404store.com/2017/08/15/4949794-random-image.jpg",
  "scores":[
      4,
      4,
      5,
      4,
      4,
      4,
      3,
      5,
      3,
      1
    ]
},
{
  "name":"Aida Mutombo",
  "photo":"data:image/jpeg;base64,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",
  "scores":[
      4,
      4,
      5,
      2,
      1,
      4,
      1,
      1,
      3,
      1
    ]
}];

module.exports = friendsArray;

