export async function GET() {
  let MyRequest = await fetch(
    "https://dinmaegler.onrender.com/homes"
    // {
    //   headers: {
    //     Authorization: "Bearer " + access_token,
    //   },
    // }
  );

  let MyRequest2 = await MyRequest.json();

  // console.log(MyRequest2);

  return new Response(JSON.stringify(MyRequest2), {
    status: 200,
    headers: {"Content-Type": "application/json"},
  });
}
