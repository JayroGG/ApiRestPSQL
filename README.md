<h1>API Server</h1>
<p>This is an API server that provides routes to get, post, update and delete movies from a PostgreSQL database.</p>
<h2>Prerequisites</h2>
<p>To use this API server, you will need the following:</p>
<ul>
  <li>Node.js installed</li>
  <li>A PostgreSQL database running</li>
</ul>
<h2>Getting Started</h2>
<ol>
  <li>Clone this repository to your local machine</li>
  <li>Install dependencies by running <code>npm install</code></li>
  <li>Create a <code>.env</code> file in the root directory of the project with the following variables:</li>
</ol>
<pre>
  <div class="bg-black mb-4 rounded-md">
    <div class="flex items-center relative text-gray-200 bg-gray-800 px-4 py-2 text-xs font-sans"><span class="">makefile</span>
      <button class="flex ml-auto gap-2"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg>Copy code</button>
    </div>
    <div class="p-4 overflow-y-auto">
      <code class="!whitespace-pre hljs language-makefile">
ORIGIN=http://localhost:3000
APP_PORT=3000
DB_HOST=localhost
DB_PORT=5432
DB_NAME=your_database_name
DB_USER=your_database_user
DB_PASSWORD=your_database_password
      </code>
    </div>
  </div>
</pre>
<ol start="4">
  <li>Start the API server by running <code>npm start</code></li>
</ol>
<h2>Usage</h2>
<p>Once the API server is running, you can use the following endpoints:</p>
<ul>
  <li><code>GET /movies</code>: Returns a list of all movies in the database</li>
  <li><code>GET /movies/:title</code>: Returns a list of movies that match the given title</li>
  <li><code>POST /movies</code>: Adds a new movie to the database</li>
  <li><code>PUT /movies/:id</code>: Updates the movie with the given id</li>
  <li><code>DELETE /movies/:id</code>: Deletes the movie with the given id</li>
</ul>
<h2>License</h2>
<p>This project is licensed under the <a href="https://opensource.org/licenses/MIT" target="_new">MIT License</a>.</p>
