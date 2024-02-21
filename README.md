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
Also parameter `id` causes to ignore other parameters like `page`

```
https://reqres.in/api/products?page=20&id=2
```
Also above request returns value (`page` value ignored)

