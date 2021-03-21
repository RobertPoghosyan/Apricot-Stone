
// PUT data to firebase

/*
import todosMockup from 'api/todos-mockup';

componentDidMount(){
  fetch('https://apricot-stone-default-rtdb.firebaseio.com/tours.json',{
      method:"PUT",
      body:JSON.stringify(todosMockup.map(el => ( {...el, id: el.id-1 } ) ) )
  })
  .then(res => res.json())
}
*/

const todosMockup = [
    
      {
        body: "Must visit",
        completed: false,
        id: 1,
        title: "Noravank Monastery",
        userId: 1
      }, {
        body: "Must visit",
        completed: false,
        id: 2,
        title: "Tatev Monastery",
        userId: 1
      }, {
        body: "Must visit",
        completed: false,
        id: 3,
        title: "Khor Virap",
        userId: 1
      }, {
        body: "Visited",
        completed: true,
        id: 4,
        title: "Temple of Garni",
        userId: 1
      }, {
        body: "Must visit",
        completed: false,
        id: 5,
        title: "Geghard Monastery",
        userId: 1
      }, {
        body: "Must visit",
        completed: false,
        id: 6,
        title: "Orbelian’s Caravanserai",
        userId: 1
      }, {
        body: "Must visit",
        completed: false,
        id: 7,
        title: "Noratus Cemetery",
        userId: 1
      }, {
        body: "Visited",
        completed: true,
        id: 8,
        title: "Ughtasar Petroglyphs",
        userId: 1
      }, {
        body: "Must visit",
        completed: false,
        id: 9,
        title: "Lake Sevan",
        userId: 1
      }, {
        body: "Visited",
        completed: true,
        id: 10,
        title: "Debed Canyon",
        userId: 1
      }, {
        body: "Visited",
        completed: true,
        id: 11,
        title: "Dilijan National Park",
        userId: 1
      }, {
        body: "Visited",
        completed: true,
        id: 12,
        title: "Azhdahak",
        userId: 1
      }, {
        body: "Must visit",
        completed: false,
        id: 13,
        title: "Lastiver Cave",
        userId: 1
      }, {
        body: "Visited",
        completed: true,
        id: 14,
        title: "Armenian Alphabet Monument",
        userId: 1
      }, {
        body: "Visited",
        completed: true,
        id: 15,
        title: "Byurakan Observatory",
        userId: 1
      }, {
        body: "Visited",
        completed: true,
        id: 16,
        title: "Gyumri",
        userId: 1
      }, {
        body: "Visited",
        completed: true,
        id: 17,
        title: "Goris",
        userId: 1
      }, {
        body: "Must visit",
        completed: false,
        id: 18,
        title: "Vanadzor",
        userId: 1
      }, {
        body: "Visited",
        completed: true,
        id: 19,
        title: "Echmiadzin",
        userId: 1
      }, {
        body: "Visited",
        completed: true,
        id: 20,
        title: "Shushi",
        userId: 1
      }, {
        body: "Must visit",
        completed: false,
        id: 21,
        title: "Stepanakert",
        userId: 2
      }, {
        body: "Visited",
        completed: true,
        id: 22,
        title: "Jermuk",
        userId: 2
      }, {
        body: "Must visit",
        completed: false,
        id: 23,
        title: "Vayots Dzor Province",
        userId: 2
      }, {
        body: "Must visit",
        completed: false,
        id: 24,
        title: "Areni-1 Caves",
        userId: 2
      }, {
        body: "Visited",
        completed: true,
        id: 25,
        title: "Yerevan",
        userId: 2
      },
        {
            body: "Must visit",
            completed: false,
            id: 26,
            title: "Noravank Monastery",
            userId: 1
          }, {
            body: "Must visit",
            completed: false,
            id: 27,
            title: "Tatev Monastery",
            userId: 1
          }, {
            body: "Must visit",
            completed: false,
            id: 28,
            title: "Khor Virap",
            userId: 1
          }, {
            body: "Visited",
            completed: true,
            id: 29,
            title: "Temple of Garni",
            userId: 1
          }, {
            body: "Must visit",
            completed: false,
            id: 30,
            title: "Geghard Monastery",
            userId: 1
          }, {
            body: "Must visit",
            completed: false,
            id: 31,
            title: "Orbelian’s Caravanserai",
            userId: 1
          }, {
            body: "Must visit",
            completed: false,
            id: 32,
            title: "Noratus Cemetery",
            userId: 1
          }, {
            body: "Visited",
            completed: true,
            id: 33,
            title: "Ughtasar Petroglyphs",
            userId: 1
          }, {
            body: "Must visit",
            completed: false,
            id: 34,
            title: "Lake Sevan",
            userId: 1
          }, {
            body: "Visited",
            completed: true,
            id: 35,
            title: "Debed Canyon",
            userId: 1
          }, {
            body: "Visited",
            completed: true,
            id: 36,
            title: "Dilijan National Park",
            userId: 1
          }, {
            body: "Visited",
            completed: true,
            id: 37,
            title: "Azhdahak",
            userId: 1
          }, {
            body: "Must visit",
            completed: false,
            id: 38,
            title: "Lastiver Cave",
            userId: 1
          }, {
            body: "Visited",
            completed: true,
            id: 39,
            title: "Armenian Alphabet Monument",
            userId: 1
          }, {
            body: "Visited",
            completed: true,
            id: 40,
            title: "Byurakan Observatory",
            userId: 1
          }, {
            body: "Visited",
            completed: true,
            id: 41,
            title: "Gyumri",
            userId: 1
          }, {
            body: "Visited",
            completed: true,
            id: 42,
            title: "Goris",
            userId: 1
          }, {
            body: "Must visit",
            completed: false,
            id: 43,
            title: "Vanadzor",
            userId: 1
          }, {
            body: "Visited",
            completed: true,
            id: 44,
            title: "Echmiadzin",
            userId: 1
          }, {
            body: "Visited",
            completed: true,
            id: 45,
            title: "Shushi",
            userId: 1
          }, {
            body: "Must visit",
            completed: false,
            id: 46,
            title: "Stepanakert",
            userId: 2
          }, {
            body: "Visited",
            completed: true,
            id: 47,
            title: "Jermuk",
            userId: 2
          }, {
            body: "Must visit",
            completed: false,
            id: 48,
            title: "Vayots Dzor Province",
            userId: 2
          }, {
            body: "Must visit",
            completed: false,
            id: 49,
            title: "Areni-1 Caves",
            userId: 2
          }, {
            body: "Visited",
            completed: true,
            id: 50,
            title: "Yerevan",
            userId: 2
          },
          {
            body: "Must visit",
            completed: false,
            id: 51,
            title: "Noravank Monastery",
            userId: 1
          }, {
            body: "Must visit",
            completed: false,
            id: 52,
            title: "Tatev Monastery",
            userId: 1
          }, {
            body: "Must visit",
            completed: false,
            id: 53,
            title: "Khor Virap",
            userId: 1
          }, {
            body: "Visited",
            completed: true,
            id: 54,
            title: "Temple of Garni",
            userId: 1
          }, {
            body: "Must visit",
            completed: false,
            id: 55,
            title: "Geghard Monastery",
            userId: 1
          }, {
            body: "Must visit",
            completed: false,
            id: 56,
            title: "Orbelian’s Caravanserai",
            userId: 1
          }, {
            body: "Must visit",
            completed: false,
            id: 57,
            title: "Noratus Cemetery",
            userId: 1
          }, {
            body: "Visited",
            completed: true,
            id: 58,
            title: "Ughtasar Petroglyphs",
            userId: 1
          }, {
            body: "Must visit",
            completed: false,
            id: 59,
            title: "Lake Sevan",
            userId: 1
          }, {
            body: "Visited",
            completed: true,
            id: 60,
            title: "Debed Canyon",
            userId: 1
          }, {
            body: "Visited",
            completed: true,
            id: 61,
            title: "Dilijan National Park",
            userId: 1
          }, {
            body: "Visited",
            completed: true,
            id: 62,
            title: "Azhdahak",
            userId: 1
          }, {
            body: "Must visit",
            completed: false,
            id: 63,
            title: "Lastiver Cave",
            userId: 1
          }, {
            body: "Visited",
            completed: true,
            id: 64,
            title: "Armenian Alphabet Monument",
            userId: 1
          }, {
            body: "Visited",
            completed: true,
            id: 65,
            title: "Byurakan Observatory",
            userId: 1
          }, {
            body: "Visited",
            completed: true,
            id: 66,
            title: "Gyumri",
            userId: 1
          }, {
            body: "Visited",
            completed: true,
            id: 67,
            title: "Goris",
            userId: 1
          }, {
            body: "Must visit",
            completed: false,
            id: 68,
            title: "Vanadzor",
            userId: 1
          }, {
            body: "Visited",
            completed: true,
            id: 69,
            title: "Echmiadzin",
            userId: 1
          }, {
            body: "Visited",
            completed: true,
            id: 70,
            title: "Shushi",
            userId: 1
          }, {
            body: "Must visit",
            completed: false,
            id: 71,
            title: "Stepanakert",
            userId: 2
          }, {
            body: "Visited",
            completed: true,
            id: 72,
            title: "Jermuk",
            userId: 2
          }, {
            body: "Must visit",
            completed: false,
            id: 73,
            title: "Vayots Dzor Province",
            userId: 2
          }, {
            body: "Must visit",
            completed: false,
            id: 74,
            title: "Areni-1 Caves",
            userId: 2
          }, {
            body: "Visited",
            completed: true,
            id: 75,
            title: "Yerevan",
            userId: 2
          },
          {
            body: "Must visit",
            completed: false,
            id: 76,
            title: "Noravank Monastery",
            userId: 1
          }, {
            body: "Must visit",
            completed: false,
            id: 77,
            title: "Tatev Monastery",
            userId: 1
          }, {
            body: "Must visit",
            completed: false,
            id: 78,
            title: "Khor Virap",
            userId: 1
          }, {
            body: "Visited",
            completed: true,
            id: 79,
            title: "Temple of Garni",
            userId: 1
          }, {
            body: "Must visit",
            completed: false,
            id: 80,
            title: "Geghard Monastery",
            userId: 1
          }, {
            body: "Must visit",
            completed: false,
            id: 81,
            title: "Orbelian’s Caravanserai",
            userId: 1
          }, {
            body: "Must visit",
            completed: false,
            id: 82,
            title: "Noratus Cemetery",
            userId: 1
          }, {
            body: "Visited",
            completed: true,
            id: 83,
            title: "Ughtasar Petroglyphs",
            userId: 1
          }, {
            body: "Must visit",
            completed: false,
            id: 84,
            title: "Lake Sevan",
            userId: 1
          }, {
            body: "Visited",
            completed: true,
            id: 85,
            title: "Debed Canyon",
            userId: 1
          }, {
            body: "Visited",
            completed: true,
            id: 86,
            title: "Dilijan National Park",
            userId: 1
          }, {
            body: "Visited",
            completed: true,
            id: 87,
            title: "Azhdahak",
            userId: 1
          }, {
            body: "Must visit",
            completed: false,
            id: 88,
            title: "Lastiver Cave",
            userId: 1
          }, {
            body: "Visited",
            completed: true,
            id: 89,
            title: "Armenian Alphabet Monument",
            userId: 1
          }, {
            body: "Visited",
            completed: true,
            id: 90,
            title: "Byurakan Observatory",
            userId: 1
          }, {
            body: "Visited",
            completed: true,
            id: 91,
            title: "Gyumri",
            userId: 1
          }, {
            body: "Visited",
            completed: true,
            id: 92,
            title: "Goris",
            userId: 1
          }, {
            body: "Must visit",
            completed: false,
            id: 93,
            title: "Vanadzor",
            userId: 1
          }, {
            body: "Visited",
            completed: true,
            id: 94,
            title: "Echmiadzin",
            userId: 1
          }, {
            body: "Visited",
            completed: true,
            id: 95,
            title: "Shushi",
            userId: 1
          }, {
            body: "Must visit",
            completed: false,
            id: 96,
            title: "Stepanakert",
            userId: 2
          }, {
            body: "Visited",
            completed: true,
            id: 97,
            title: "Jermuk",
            userId: 2
          }, {
            body: "Must visit",
            completed: false,
            id: 98,
            title: "Vayots Dzor Province",
            userId: 2
          }, {
            body: "Must visit",
            completed: false,
            id: 99,
            title: "Areni-1 Caves",
            userId: 2
          }, {
            body: "Visited",
            completed: true,
            id: 100,
            title: "Yerevan",
            userId: 2
          }
]

export default todosMockup;