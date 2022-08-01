export interface Skills {
  id: number | string;
  percentage: number;
  skillName: string;
}

// let skill: { id: number | string; skillName: string; percentage: number }[] =
//   [];

// export async function fetchSkills() {
//   const response = await fetch(
//     "https://portfolio-2661e-default-rtdb.firebaseio.com/skills.json"
//   );

//   if (!response.ok) {
//     throw new Error("Something went wrong");
//   }
//   const responseData = await response.json();
//   console.log(responseData[1]);

//   let index: number = 0;
//   responseData.map((data: number) => {
//     index + 1;
//     console.log(skill);
//     skill.push({
//       id: data,
//       skillName: responseData[index].skillName,
//       percentage: responseData[index].percentage,
//     });

//     console.log(skill);
//   });

// for (const key in responseData) {
//   skill.push({
//     id: key,
//     skillName: responseData[key].skillName,
//     percentage: responseData[key].percentage,
//   });
// }
// }

// export const skills: Skills[] = [...skill];

export const skills: Skills[] = [
  {
    id: 1,
    percentage: 80,
    skillName: "Javascript",
  },
  {
    id: 2,
    percentage: 80,
    skillName: "HTML",
  },
  {
    id: 3,
    percentage: 70,
    skillName: "CSS",
  },
  {
    id: 4,
    percentage: 50,
    skillName: "Bootstap",
  },

  {
    id: 5,
    percentage: 80,
    skillName: "Figma",
  },

  {
    id: 6,
    percentage: 80,
    skillName: "Adobe XD",
  },
  {
    id: 7,
    percentage: 80,
    skillName: "React",
  },
  {
    id: 8,
    percentage: 40,
    skillName: "Angular",
  },
  {
    id: 7,
    percentage: 20,
    skillName: "Solidity",
  },
  {
    id: 7,
    percentage: 20,
    skillName: "Laravel",
  },
];
