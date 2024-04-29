// Day 04 Assignment

//1.Create your own resume data in JSON format

let myResume={
    "basics": {
      "name": "SHAMMU.S",
      "email": "shammusaleem85@gmail.com",
      "phone": "9626029233",
      "degree": "BSc",
      "location": {
        "address": "No 5, St Thomas Street, Pattabiram",
        "postalCode": "600071",
        "city": "Chennai",
        "state": "Tamilnadu",
        "country": "India"
      },
      "profiles": [
        {
          "network": "LinkedIn",
          "url": "https://www.linkedin.com/in/shammu-s-bba90b1aa/"
        },
        {
          "network": "GitHub",
          "url": "https://github.com/shammusaleem"
        }
      ]
    },
    "work": [
      {
        "company": "TELEPERFORMANCE",
        "position": "CSA",
        "startDate": "2022-06-10",
        "endDate": "2023-10-23",
        "summary": "Voice customer support roles involve resolving inquiries and issues through verbal communication, ensuring customer satisfaction."
      }
    ],
    "education": [
      {
        "institution": "SRI SANKARA ARTS AND SCIENCE COLLEGE",
        "department": "Computer Science",
        "studyType": "full-time",
        "batchStartYear": 2017,
        "batchEndYear": 2020,
        "gpa": 8.5
      }
    ],
    "skills": [
      {
        "name": "MS Office, customer support",
      }
    ],
    "languages": [
      {
        "language": "Tamil, English"
      }
    ],
    "interests": [
      {
        "name": "Dance"
      }
    ]
  }
  console.log(myResume);


//2.For the above JSON iterate over all for loops (for, for in, for of, for Each)

//Using for loop:

console.log("Using for loop:");

for (let key in myResume) {
    if (Array.isArray(myResume[key])) {
      console.log(key + ": ");
      for (let i = 0; i < myResume[key].length; i++) {
        let item = myResume[key][i];
        for (let subKey in item) {
          console.log("  " + subKey + ": " + item[subKey]);
        }
      }
    } else if (typeof myResume[key] === "object") { 
      console.log(key + ": ");
      for (let subKey in myResume[key]) {
        console.log("  " + subKey + ": " + myResume[key][subKey]);
      }
    } else { 
      console.log(key + ": " + myResume[key]);
    }
  }

  //using for in loop

  console.log("Using for...in loop:");

  for (let key in myResume) {
    if (Array.isArray(myResume[key])) {
      console.log(key + ": ");
      for (let i = 0; i < myResume[key].length; i++) {
        let item = myResume[key][i];
        for (let subKey in item) {
          console.log("  " + subKey + ": " + item[subKey]);
        }
      }
    } else if (typeof myResume[key] === "object") { 
      console.log(key + ": ");
      for (let subKey in myResume[key]) {
        console.log("  " + subKey + ": " + myResume[key][subKey]);
      }
    } else { 
      console.log(key + ": " + myResume[key]);
    }
  }
  
  //using for of loop

  console.log("Using for...of loop:");

for (const key of Object.keys(myResume)) {
  const value = myResume[key];
  if (Array.isArray(value)) {
    console.log(key + ": ");
    for (const item of value) {
      for (const subKey of Object.keys(item)) {
        console.log("  " + subKey + ": " + item[subKey]);
      }
    }
  } else if (typeof value === "object") { 
    console.log(key + ": ");
    for (const subKey of Object.keys(value)) {
      console.log("  " + subKey + ": " + value[subKey]);
    }
  } else { 
    console.log(key + ": " + value);
  }
}


