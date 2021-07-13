/**
Given students' names along with the grade that they are in, create a roster for the school and display each list in alphabetical order

Expected structure

{
  'Grade 1': [
    { name: 'Ana', grade: 'Grade 1' },
    { name: 'Bert', grade: 'Grade 1' },
    { name: 'Ernie', grade: 'Grade 1' }
  ],
  'Grade 2': [
    { name: 'Andy', grade: 'Grade 2' },
    { name: 'Bob', grade: 'Grade 2' },
    { name: 'David', grade: 'Grade 2' }
  ]
}
 */

const roster = arr => {
  const sort = arr.sort((a, b) => a.name > b.name ? 1 : -1)

  const grades = {}
  for (let i = 0; i < sort.length; i++) {
    const curr = sort[i]

    if (grades[curr.grade] === undefined) {
      grades[curr.grade] = []
    }

    grades[curr.grade].push(curr)
  }

  return grades
}

const list = [
  { name: 'Ana', grade: 'Grade 1' },
  { name: 'Ernie', grade: 'Grade 1' },
  { name: 'David', grade: 'Grade 2' },
  { name: 'Andy', grade: 'Grade 2' },
  { name: 'Bert', grade: 'Grade 1' },
  { name: 'Bob', grade: 'Grade 2' }
]

roster(list)
