document.addEventListener('DOMContentLoaded', function() {
  const sidebarContainer = document.getElementById('sidebar-container');
  sidebarContainer.innerHTML = `
    <nav class="w-64 h-screen bg-blue-900 text-white shadow-lg">
      <div class="py-6 px-4">
        <h2 class="text-xl font-bold mb-6">Documentation</h2>
        <ul class="space-y-2">
          <li>
            <a href="/" class="block px-3 py-2 rounded hover:bg-blue-800 transition">
              Home
            </a>
          </li>
          <li>
            <a href="/git" class="block px-3 py-2 rounded hover:bg-blue-800 transition">
              Git
            </a>
          </li>
          <li>
            <a href="/nodejs" class="block px-3 py-2 rounded hover:bg-blue-800 transition">
              Node.js
            </a>
          </li>
          <li>
            <a href="/express" class="block px-3 py-2 rounded hover:bg-blue-800 transition">
              Express.js
            </a>
          </li>
          <li>
            <a href="/restapi" class="block px-3 py-2 rounded hover:bg-blue-800 transition">
              Rest API
            </a>
          </li>
          <li class="relative group">
            <a href="/javascript" class="block px-3 py-2 rounded hover:bg-blue-800 transition">
              JavaScript
            </a>
            <ul class="absolute left-full top-0 hidden group-hover:block bg-blue-900 shadow-xl mt-0 space-y-1 w-52">
              <li>
                <a href="#" class="block px-3 py-2 rounded hover:bg-blue-800 transition">
                  Datatypes
                </a>
              </li>
              <li>
                <a href="#" class="block px-3 py-2 rounded hover:bg-blue-800 transition">
                  Scopes
                </a>
              </li>
              <li>
                <a href="#" class="block px-3 py-2 rounded hover:bg-blue-800 transition">
                  Functions
                </a>
              </li>
              <li>
                <a href="/javascript/#loops" class="block px-3 py-2 rounded hover:bg-blue-800 transition">
                  Loops
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  `;
});
