let users = {
  baby_yoda: {
    id: 'baby_yoda',
    name: 'Baby Yoda',
    avatarURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGFZqA2PQU0DsfdQkXxqcXylwi3AjneBDJfm7_qkhe98GgGVA1&s',
    answers: {
      "loxhs1bqm25b708cmbf3g": 'd',
      "xj352vofupe1dqz9emx13r": 'a',
    },
    polls: ['loxhs1bqm25b708cmbf3g', 'vthrdm985a262al8qx3do']
  },
  captain_marvel: {
    id: 'captain_marvel',
    name: 'Captain Marvel',
    avatarURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR3YbPLIYiY_01zvfzVi_FYO6dh6Q63Gt-uv31Y1sfwvAOwfCPJ',
    answers: {
      "xj352vofupe1dqz9emx13r": 'a',
      "vthrdm985a262al8qx3do": 'd',
      "6ni6ok3ym7mf1p33lnez": 'd'
    },
    polls: ['6ni6ok3ym7mf1p33lnez', 'xj352vofupe1dqz9emx13r'],
  },
  doctor_manhattan: {
    id: 'doctor_manhattan',
    name: 'Doctor Manhattan',
    avatarURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt-4GKpRkTmlWYYObzFax64OfRtp6CFCQzPM566nneqMmEChA35g&s',
    answers: {
      "8xf0y6ziyjabvozdd253nd": 'a',
      "6ni6ok3ym7mf1p33lnez": 'a',
      "am8ehyc8byjqgar0jgpub9": 'b',
      "loxhs1bqm25b708cmbf3g": 'd'
    },
    polls: ['8xf0y6ziyjabvozdd253nd', 'am8ehyc8byjqgar0jgpub9'],
  },
}

let polls = {
  "8xf0y6ziyjabvozdd253nd": {
    id: '8xf0y6ziyjabvozdd253nd',
    question: "Who is the best basketball player to ever live?",
    author: 'doctor_manhattan',
    timestamp: 1467166872634,
    a: {
      text: 'Michael Jordan',
      votes: ['doctor_manhattan'],
    },
    b: {
      text: 'Giannis Antetokounmpo',
      votes: [],
    },
    c: {
      text: 'Lebron James',
      votes: [],
    },
    d: {
      text: 'Kobe Bryant',
      votes: [],
    }
  },
  "6ni6ok3ym7mf1p33lnez": {
    id: '6ni6ok3ym7mf1p33lnez',
    question: "How will we build UI's in 2020?",
    author: 'captain_marvel',
    timestamp: 1468479767190,
    a: {
      text: 'Next.js',
      votes: ['doctor_manhattan'],
    },
    b: {
      text: 'Svelte.js',
      votes: [],
    },
    c: {
      text: 'Vue.js',
      votes: [],
    },
    d: {
      text: 'Gatsby.js',
      votes: ['captain_marvel'],
    }
  },
  "am8ehyc8byjqgar0jgpub9": {
    id: 'am8ehyc8byjqgar0jgpub9',
    question: "What is your favorite book?",
    author: 'doctor_manhattan',
    timestamp: 1488579767190,
    a: {
      text: 'Blink',
      votes: [],
    },
    b: {
      text: 'Lord of the Flies',
      votes: ['doctor_manhattan'],
    },
    c: {
      text: 'To Kill a Mockingbird',
      votes: [],
    },
    d: {
      text: 'Catch And Kill',
      votes: [],
    }
  },
  "loxhs1bqm25b708cmbf3g": {
    id: 'loxhs1bqm25b708cmbf3g',
    question: "Which artist do you prefer?",
    author: 'baby_yoda',
    timestamp: 1482579767190,
    a: {
      text: 'Joey Bada$$',
      votes: [],
    },
    b: {
      text: 'Anderson .Paak',
      votes: [],
    },
    c: {
      text: 'Childish Gambino',
      votes: [],
    },
    d: {
      text: 'Kendrick Lamar',
      votes: ['baby_yoda', 'doctor_manhattan'],
    }
  },
  "vthrdm985a262al8qx3do": {
    id: 'vthrdm985a262al8qx3do',
    question: "Where is the best place to live?",
    author: 'baby_yoda',
    timestamp: 1489579767190,
    a: {
      text: 'Amsterdam, Holland',
      votes: [],
    },
    b: {
      text: 'Honolulu, HI',
      votes: [],
    },
    c: {
      text: 'Tokyo, Japan',
      votes: [],
    },
    d: {
      text: 'Other',
      votes: ['captain_marvel'],
    }
  },
  "xj352vofupe1dqz9emx13r": {
    id: 'xj352vofupe1dqz9emx13r',
    question: "Who will win the election in 2020?",
    author: 'captain_marvel',
    timestamp: 1493579767190,
    a: {
      text: 'Bernie Sanders',
      votes: ['baby_yoda', 'captain_marvel'],
    },
    b: {
      text: 'Donald Trump',
      votes: [],
    },
    c: {
      text: 'Andrew Yang',
      votes: ['doctor_manhattan'],
    },
    d: {
      text: 'Joe Biden',
      votes: [],
    }
  },
}

function generateUID () {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

export function _getUsers () {
  return new Promise((res, rej) => {
    setTimeout(() => res({...users}), 1000)
  })
}

export function _getPolls () {
  return new Promise((res, rej) => {
    setTimeout(() => res({...polls}), 1000)
  })
}

function formatPoll (poll) {
  return {
    ...poll,
    id: generateUID(),
    timestamp: Date.now(),
    a: {
      text: poll.a,
      votes: [],
    },
    b: {
      text: poll.b,
      votes: [],
    },
    c: {
      text: poll.c,
      votes: [],
    },
    d: {
      text: poll.d,
      votes: [],
    },
  }
}

export function _savePoll (poll) {
  return new Promise((res, rej) => {
    const formattedPoll = formatPoll(poll)

    setTimeout(() => {
      polls = {
        ...polls,
        [formattedPoll.id]: formattedPoll,
      }

      res(formattedPoll)
    }, 1000)
  })
}

export function _savePollAnswer ({ authedUser, id, answer }) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      const user = users[authedUser]
      const poll = polls[id]

      users = {
        ...users,
        [authedUser]: {
          ...user,
          answers: {
            ...user.answers,
            [id]: answer
          }
        }
      }

      polls = {
        ...polls,
        [id]: {
          ...poll,
          [answer]: {
            ...poll[answer],
            votes: poll[answer].votes.concat([authedUser])
          }
        }
      }

      res()
    }, 500)
  })
}