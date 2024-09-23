
### Eq Filter
Find users with 'John' as their first name

`GET /api/users?filters[name][$eq]=JalalLinuX`

```ts
apiClient.get('users', {
  filters: {
    username: {
      $eq: 'JalalLinuX'
    }
  }
})
```

### In Filter
Find multiple restaurants with ids 3, 6, 8

`GET /api/restaurants?filters[id][$in][0]=3&filters[id][$in][1]=6&filters[id][$in][2]=8`

```ts
apiClient.get('restaurants', {
  filters: {
    id: {
      $in: [3, 6, 8],
    },
  }
})
```

### Between Filter
Find users with age between 20 and 30

`GET /api/users?filters[age][$between][0]=20&filters[age][$between][1]=30`

```ts
apiClient.get('users', {
  filters: {
    age: {
      $between: [20, 30],
    },
  }
})
```

### Complex Filtering
Complex filtering is combining multiple filters using advanced methods such as combining $and & $or. This allows for more flexibility to request exactly the data needed.

Find books with two possible dates and a specific author.

`GET /api/books?filters[$or][0][date][$eq]=2020-01-01&filters[$or][1][date][$eq]=2020-01-02&filters[author][name][$eq]=Kai%20doe`

```ts
apiClient.get('books', {
  filters: {
    $or: [
      {
        date: {
          $eq: '2020-01-01',
        },
      },
      {
        date: {
          $eq: '2020-01-02',
        },
      },
    ],
    author: {
      name: {
        $eq: 'Kai doe',
      },
    },
  }
})
```

### Relation Filtering
Relation filtering is filtering on a relation's fields.

Find restaurants owned by a chef who belongs to a 5-star restaurant

`GET /api/restaurants?filters[chef][restaurants][stars][$eq]=5`

```ts
apiClient.get('restaurants', {
  filters: {
    chef: {
      restaurants: {
        stars: {
          $eq: 5,
        },
      },
    },
  }
})
```

### Complex Relation Filtering
Complex relation filtering is combining multiple relation filters using advanced methods such as combining $and & $or. This allows for more flexibility to request exactly the data needed.

Find restaurants owned by a chef who belongs to a 5-star restaurant and has a specific cuisine

`GET /api/restaurants?filters[chef][restaurants][stars][$eq]=5&filters[chef][restaurants][cuisine][$eq]=Italian`

```ts
apiClient.get('restaurants', {
  filters: {
    chef: {
      restaurants: {
        stars: {
          $eq: 5,
        },
        cuisine: {
          $eq: 'Italian',
        },
      },
    },
  }
})
```