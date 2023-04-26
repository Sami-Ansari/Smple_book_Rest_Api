

export default function Home() {
  return (
    <main >
      <div className="flex flex-col items-center px-5">
        <h1 className="text-6xl text-center mt-20 text-red-500"> END POINTS :</h1>
        <div className="text-start  mt-16 space-y-5 text-slate-500 max-w-lg ">
          
            <p>/api-clients ------ (POST request, create clients, and name and email as body)</p>
            <p> /books ------ (GET request, get all books, type and limit as query params Optional)</p>
            <p>  /books/:bookId ------ (GET request, get single books, id as params)</p>
            <p> /orders ------ (GET and POST requests, get and post orders, for post bookId and customerName as body)</p>
            <p>/orders/:id ------ (GET and PATCH and DELETE requests, get and update and delete order, for update customerName as body and id as params for all requests)</p>
            <p>/status ------ (to check API status)</p>
         
        </div>

      </div>
    </main>
  );
}
