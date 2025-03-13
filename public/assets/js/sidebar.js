document.addEventListener('DOMContentLoaded', function() {
  const sidebarContainer = document.getElementById('sidebar-container');
  sidebarContainer.innerHTML = `
    <nav class="relative w-64 h-full bg-blue-600 text-white transform -skew-y-6">
      <div class="absolute inset-0 transform skew-y-6">
        <ul class="py-8 space-y-4">
          <li>
            <a href="/" class="block px-4 py-2 hover:bg-blue-500 rounded transition">
              Home
            </a>
          </li>
          <li>
            <a href="/git" class="block px-4 py-2 hover:bg-blue-500 rounded transition">
              Git
            </a>
          </li>
          <li>
            <a href="/nodejs" class="block px-4 py-2 hover:bg-blue-500 rounded transition">
              Node.js
            </a>
          </li>
          <li>
            <a href="#" class="block px-4 py-2 hover:bg-blue-500 rounded transition">
              Express.js
            </a>
          </li>
          <li>
            <a href="#" class="block px-4 py-2 hover:bg-blue-500 rounded transition">
              Rest API
            </a>
          </li>
          <li>
            <div class="group">
              <a href="/javascript" class="block px-4 py-2 hover:bg-blue-500 rounded transition">
                JavaScript
              </a>
              <ul class="hidden group-hover:block bg-blue-700 mt-1 space-y-2 rounded">
                <li>
                  <a href="#" class="block px-4 py-2 hover:bg-blue-600 transition">
                    Datatypes in JavaScript
                  </a>
                </li>
                <li>
                  <a href="#" class="block px-4 py-2 hover:bg-blue-600 transition">
                    Scopes in JavaScript
                  </a>
                </li>
                <li>
                  <a href="#" class="block px-4 py-2 hover:bg-blue-600 transition">
                    Functions in JavaScript
                  </a>
                </li>
                <li>
                  <a href="#" class="block px-4 py-2 hover:bg-blue-600 transition">
                    Loops in JavaScript
                  </a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  `;
});
