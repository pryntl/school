let school = {
    name: "school",
    classes: {
      classA: {
        students: {
          student1: {
            name: "kyumers",
            family: "kyumersi",
            phone: "09111111111",
            address: "bu.07",
            score: "7",
          },
          student2: {
            name: "akbar",
            family: "akbari",
            phone: "09222222222",
            address: "shz.03",
            score: "9",
          },
          student3: {
            name: "kolsum",
            family: "kolsumi",
            phone: "09333333333",
            address: "teh.06",
            score: "4",
          },
        },
      },
      classB: {
        students: {
          student1: {
            name: "jafar",
            family: "jafari",
            phone: "09444444444",
            address: "esf.09",
            score: "13",
          },
          student2: {
            name: "kobra",
            family: "kobraee",
            phone: "09555555555",
            address: "krj.02",
            score: "0",
          },
          student3: {
            name: "javad",
            family: "javadi",
            phone: "09666666666",
            address: "ark.08",
            score: "17",
          },
        },
      },
    },
  };
  
  //test
  console.log(school.classes.classB.students.student2.family);
