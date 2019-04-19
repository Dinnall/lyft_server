# Lyft Apprenticeship server

 Node server that accepts a POST request to the route `/test` which accepts one argument `string_to_cut`.

 Returns a JSON object with the key `return_string` and a string containing every third letter from the param string.

 E.g. POST `{"string_to_cut": "iamyourlyftdriver"}`, expect a JSON return: `{"return_string": "muydv"}`.


## Routes
- `GET /`       : Home.
- `POST /test/` : Returns 3rd character of a given param string. 



Test Cases:
# 1
```
$ curl -X POST http://localhost:3000/test --data '{"string_to_cut": "iamyourlyftdriver"}' -H 'Content-Type: application/json'
```

expected return:

`{"return_string": "muydv"}`


# 2
```
$ curl -X POST http://localhost:3000/test --data '{"string_to_cut": "california"}' -H 'Content-Type: application/json'
```

expected return:

`{"return_string": "'loi'"}`


# 3
```
$ curl -X POST http://localhost:3000/test --data '{"string_to_cut": "IloveJamaicanFood"}' -H 'Content-Type: application/json'
```

expected return:

`{"return_string": "'oJaao'"}`












