# Recruitment task

## In the project directory, you can run:
### `npm install`
### `npm start`

## FIY
`https://reqres.in/api/products` - behaviors weirdly, responses are inconsistent

Parameter `id` theoretically works when used, but in reality, he changes the response body format

Normally: 
```
https://reqres.in/api/products

Gives us: 
{
  data: Product[]
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
}
```
When `id` used: 
```
https://reqres.in/api/products?id=2

Gives us: 
{
  data: Product
}

Which response is equal to request:

https://reqres.in/api/products/2
```

To overcome this "bug", [`services.ts`](./src/api//services.ts) contains a condition that checks if `id` parameter was provided during fetch and parses the response to the right format.  <br />
Also parameter `is` causes to ignore other parameters like `page`

```
https://reqres.in/api/products?page=2&id=2
```
In my opinion request above shouldn't return any value, but it returns (`page` value ignored)

Unit tests are not provided because there is no place where they would be of any value
