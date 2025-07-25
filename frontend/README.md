This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the following command: This will `install package libraries` and run the Json local mock server and the frontend nextjs application. concurrently.
```bash
npm install
npm run concurrently
```

Test Nextjs application by navigating to.
[http://localhost:3000/]

The JSON mock server will be running on
[http://localhost:5000]

Exposed mocked endpoints are as follows.
[http://localhost:5000/volunteers]
[http://localhost:5000/services]
[http://localhost:5000/volunteerRequests]
[http://localhost:5000/volunteerApplications]

```
~My Trail of thought:~
Mocked the Backend Server:
- Used Json Server.
- Populated sever data using - MockApi -  https://mockapi.io/ - uses the FakerJs.
- Created a public api - https://6880d19cf1dcae717b639973.mockapi.io/api/v1/
Stored the URLs in the `.env` file.

Used react context to fetch data from the endpoints to pass data through the component tree without having to pass props down manually.