
        // 1. Grab references to the DOM elements
        const toggleControlSearch = document.getElementById('toggleControlSearch');
        const targetElementSearch = document.getElementById('targetElementSearch');
        const searchText = document.getElementById('searchText');

        // 2. Define the toggle function
        function toggleElementSearch() {
            // Toggle the 'active' class on the switch button itself (for visual state)
            const isActive = toggleControlSearch.classList.toggle('active');
            
            // Toggle the 'hidden' class on the target element
            targetElementSearch.classList.toggle('hidden');
            
            // Optional: Update the text label dynamically
            if (isActive) {
                searchText.textContent = "On";
            } else {
                searchText.textContent = "Off";
            }
        }

        // 3. Attach the function to the click event
        toggleControlSearch.addEventListener('click', toggleElementSearch);

        // Initialize state as 'hidden' on startup to match the default "Off" text
        targetElementSearch.classList.add('hidden');

    
        // 1. Grab references to the DOM elements
        const toggleControlHome = document.getElementById('toggleControlHome');
        const targetElementHome = document.getElementById('targetElementHome');
        const homeText = document.getElementById('homeText');

        // 2. Define the toggle function
        function toggleElementHome() {
            // Toggle the 'active' class on the switch button itself (for visual state)
            const isActive = toggleControlHome.classList.toggle('active');
            
            // Toggle the 'hidden' class on the target element
            targetElementHome.classList.toggle('hidden');
            
            // Optional: Update the text label dynamically
            if (isActive) {
                homeText.textContent = "On";
            } else {
                homeText.textContent = "Off";
            }
        }

        // 3. Attach the function to the click event
        toggleControlHome.addEventListener('click', toggleElementHome);

        // Initialize state as 'hidden' on startup to match the default "Off" text
        targetElementHome.classList.add('hidden');


    
        // 1. Grab references to the DOM elements
        const toggleControlMenu = document.getElementById('toggleControlMenu');
        const targetElementMenu = document.getElementById('targetElementMenu');
        const menuText = document.getElementById('menuText');

        // 2. Define the toggle function
        function toggleElementMenu() {
            // Toggle the 'active' class on the switch button itself (for visual state)
            const isActive = toggleControlMenu.classList.toggle('active');
            
            // Toggle the 'hidden' class on the target element
            targetElementMenu.classList.toggle('hidden');
            
            // Optional: Update the text label dynamically
            if (isActive) {
                menuText.textContent = "On";
            } else {
                menuText.textContent = "Off";
            }
        }

        // 3. Attach the function to the click event
        toggleControlMenu.addEventListener('click', toggleElementMenu);

        // Initialize state as 'hidden' on startup to match the default "Off" text
        targetElementMenu.classList.add('hidden');


    
        // 1. Grab references to the DOM elements
        const toggleControlClose = document.getElementById('toggleControlClose');
        const targetElementClose = document.getElementById('targetElementClose');
        const closeText = document.getElementById('closeText');

        // 2. Define the toggle function
        function toggleElementClose() {
            // Toggle the 'active' class on the switch button itself (for visual state)
            const isActive = toggleControlClose.classList.toggle('active');
            
            // Toggle the 'hidden' class on the target element
            targetElementClose.classList.toggle('hidden');
            
            // Optional: Update the text label dynamically
            if (isActive) {
                closeText.textContent = "On";
            } else {
                closeText.textContent = "Off";
            }
        }

        // 3. Attach the function to the click event
        toggleControlClose.addEventListener('click', toggleElementClose);

        // Initialize state as 'hidden' on startup to match the default "Off" text
        targetElementClose.classList.add('hidden');


    
        // 1. Grab references to the DOM elements
        const toggleControlSettings = document.getElementById('toggleControlSettings');
        const targetElementSettings = document.getElementById('targetElementSettings');
        const settingsText = document.getElementById('settingsText');

        // 2. Define the toggle function
        function toggleElementSettings() {
            // Toggle the 'active' class on the switch button itself (for visual state)
            const isActive = toggleControlSettings.classList.toggle('active');
            
            // Toggle the 'hidden' class on the target element
            targetElementSettings.classList.toggle('hidden');
            
            // Optional: Update the text label dynamically
            if (isActive) {
                settingsText.textContent = "On";
            } else {
                settingsText.textContent = "Off";
            }
        }

        // 3. Attach the function to the click event
        toggleControlSettings.addEventListener('click', toggleElementSettings);

        // Initialize state as 'hidden' on startup to match the default "Off" text
        targetElementSettings.classList.add('hidden');



    
        // 1. Grab references to the DOM elements
        const toggleControlCss = document.getElementById('toggleControlCss');
        const targetElementCss = document.getElementById('targetElementCss');
        const cssText = document.getElementById('cssText');

        // 2. Define the toggle function
        function toggleElementCss() {
            // Toggle the 'active' class on the switch button itself (for visual state)
            const isActive = toggleControlCss.classList.toggle('active');
            
            // Toggle the 'hidden' class on the target element
            targetElementCss.classList.toggle('hidden');
            
            // Optional: Update the text label dynamically
            if (isActive) {
                cssText.textContent = "On";
            } else {
                cssText.textContent = "Off";
            }
        }

        // 3. Attach the function to the click event
        toggleControlCss.addEventListener('click', toggleElementCss);

        // Initialize state as 'hidden' on startup to match the default "Off" text
        targetElementCss.classList.add('hidden');
