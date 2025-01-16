This is a React Starter Project for use in Stephen Grider's courses on Udemy.

markdown reference - [link](https://www.codecademy.com/resources/docs/markdown/)

tables
# Data Structuring for Media project

both BE and FE can have same or different data structures and alter according it to the need;
Eg: Permutations

1. BE - normalised form , FE - denormalised form
2. BE - normalised, FE - normalised
3. BE - demormalised, FE - normalised
4. BE - denormalised, FE - denormalised

depending on the selected DB type relational or non-relational DB the requirements can be decided - elaborate

There are many users
Each user has many albums
Each album has many photos

## Data JSON - denormalised form

```yaml
[
  {
    userId: 1,
    name: "John",
    albums:
      [
        {
          albumId: 1,
          name: "NYE holiday",
          photos: [{ photoId: 1, name: cat }, { photoId: 2, name: dog }],
        },
      ],
  },
  {
    userId: 2,
    name: "Jane",
    albums:
      [
        {
          albumId: 1,
          name: "Christmas party",
          photos: [{ photoId: 1, name: nana }, { photoId: 2, name: uncle }],
        },
      ],
  },
]
```

## normalised form

stores different entities in separate spaces with their relationships to other entities within the space, need to write more code to retrieve each relationship but better clarity on entities.

**users**
| id | name |
| --- | --- |
| 1 | John |
| 2 | Jane |

**Albums**
| id | name | userId |
| --- | --- | --- |
| 1 | NYE Holiday | 1 |
| 2 | Christmas Party | 2 |

**Photos**
| id | name | albumId |
| --- | --- | --- |
| 1 | cat | 1 |
| 2 | dog | 1 |
| 3 | aunt | 2 |
| 4 | uncle | 2 |

Redux helps in lazy loading compared to eager loading
lazy loading - loads the chunk of data that is needed
eager laoding - loads all data at once

# ISSUES
1. Why is separate loading states maintained for creating, fetching, deleteing users in the component leve but use the same state for loading and error in the reducer?
 - loading state in the component level is different from the loading state in the reducer.
 - loading in the component uses async dispatch to update loading state hence use dispatch unwrap method to convert disptach into a normal Promise 
 - loading in the user reducer becomes stale when we use the component level loading and error states
