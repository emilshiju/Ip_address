export async function GET(request) {
  

  const forwarded = request.headers.get("x-forwarded-for");
  const ip = forwarded ? forwarded.split(',')[0] : request.headers.get("host");

  console.log("Client IP:", ip);

  
  return new Response(JSON.stringify({ success: true }), {
    status: 200, // HTTP status code for success
    headers: {
      "Content-Type": "application/json",
    },
  });
}
