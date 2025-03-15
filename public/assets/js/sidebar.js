document.addEventListener('DOMContentLoaded', function() {
  const sidebarContainer = document.getElementById('sidebar-container');
  
  sidebarContainer.innerHTML = `
    <div class="sidebar-wrapper relative">
      <button id="sidebar-toggle" class="absolute -right-4 top-6 bg-primary-700 text-white w-8 h-8 rounded-full shadow-lg flex items-center justify-center z-10 hover:bg-primary-800 transition-colors duration-200">
        <svg id="toggle-icon-open" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
        </svg>
        <svg id="toggle-icon-closed" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 hidden" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
        </svg>
      </button>
      
      <nav id="sidebar" class="w-64 h-screen bg-white border-r border-secondary-200 shadow-custom text-secondary-800 overflow-y-auto transition-all duration-300">
        <div class="py-6 px-4">
          <h2 class="text-xl font-bold text-primary-700 mb-6 border-b border-secondary-200 pb-2">Documentation</h2>
          <ul class="space-y-1">
            <li>
              <a href="/" class="block px-3 py-2 rounded hover:bg-primary-50 transition text-secondary-700 hover:text-primary-700">
                Home
              </a>
            </li>
            <li>
              <a href="/git" class="block px-3 py-2 rounded hover:bg-primary-50 transition text-secondary-700 hover:text-primary-700">
                Git
              </a>
            </li>
            <li>
              <a href="/nodejs" class="block px-3 py-2 rounded hover:bg-primary-50 transition text-secondary-700 hover:text-primary-700">
                Node.js
              </a>
            </li>
            <li>
              <a href="/express" class="block px-3 py-2 rounded hover:bg-primary-50 transition text-secondary-700 hover:text-primary-700">
                Express.js
              </a>
            </li>
            <li>
              <a href="/restapi" class="block px-3 py-2 rounded hover:bg-primary-50 transition text-secondary-700 hover:text-primary-700">
                Rest API
              </a>
            </li>
            <li class="relative">
              <div class="flex items-center justify-between px-3 py-2 rounded hover:bg-primary-50 transition text-secondary-700 hover:text-primary-700 cursor-pointer">
                <a href="/javascript" class="block flex-grow text-secondary-700 hover:text-primary-700">JavaScript</a>
                <button id="js-dropdown-toggle" class="ml-2 focus:outline-none">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                  </svg>
                </button>
              </div>
              <ul id="js-dropdown" class="hidden bg-secondary-50 rounded-md mt-1 mb-1 py-1 space-y-0">
                <li>
                  <a href="/javascript/#datatypes" class="block px-6 py-1.5 text-sm hover:bg-primary-50 transition text-secondary-700 hover:text-primary-700">
                    Datatypes
                  </a>
                </li>
                <li>
                  <a href="/javascript/#scopes" class="block px-6 py-1.5 text-sm hover:bg-primary-50 transition text-secondary-700 hover:text-primary-700">
                    Scopes
                  </a>
                </li>
                <li>
                  <a href="/javascript/#functions" class="block px-6 py-1.5 text-sm hover:bg-primary-50 transition text-secondary-700 hover:text-primary-700">
                    Functions
                  </a>
                </li>
                <li>
                  <a href="/javascript/#loops" class="block px-6 py-1.5 text-sm hover:bg-primary-50 transition text-secondary-700 hover:text-primary-700">
                    Loops
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  `;
  
  const sidebarToggle = document.getElementById('sidebar-toggle');
  const sidebar = document.getElementById('sidebar');
  const toggleIconOpen = document.getElementById('toggle-icon-open');
  const toggleIconClosed = document.getElementById('toggle-icon-closed');
  const jsDropdownToggle = document.getElementById('js-dropdown-toggle');
  const jsDropdown = document.getElementById('js-dropdown');
  
  let sidebarOpen = true;
  
  function toggleSidebar() {
    if (sidebarOpen) {
      sidebar.classList.remove('w-64');
      sidebar.classList.add('w-0');
      toggleIconOpen.classList.add('hidden');
      toggleIconClosed.classList.remove('hidden');
      sidebarToggle.classList.remove('-right-4');
      sidebarToggle.classList.add('right-0');
    } else {
      sidebar.classList.remove('w-0');
      sidebar.classList.add('w-64');
      toggleIconOpen.classList.remove('hidden');
      toggleIconClosed.classList.add('hidden');
      sidebarToggle.classList.add('-right-4');
      sidebarToggle.classList.remove('right-0');
    }
    sidebarOpen = !sidebarOpen;
  }
  
  jsDropdownToggle.addEventListener('click', function(e) {
    e.preventDefault(); 
    e.stopPropagation();
    jsDropdown.classList.toggle('hidden');
    jsDropdownToggle.querySelector('svg').classList.toggle('rotate-180');
  });
  
  sidebarToggle.addEventListener('click', toggleSidebar);
  
  const style = document.createElement('style');
  style.textContent = `
    .sidebar-wrapper {
      position: relative;
      height: 100vh;
    }
    #sidebar {
      white-space: nowrap;
      overflow-x: hidden;
    }
    .w-0 {
      width: 0;
      padding: 0;
      overflow: hidden;
    }
  `;
  document.head.appendChild(style);
});