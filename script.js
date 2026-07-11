// ============================================================
// script.js — Shared JavaScript for COS 106 Student Portfolio
// ============================================================

document.addEventListener('DOMContentLoaded', () => {

 // ========== Sidebar Toggle (All Pages) ==========
 const sidebar = document.getElementById('sidebar');
 const openSidebarBtn = document.getElementById('open-sidebar');
 const closeSidebarBtn = document.getElementById('close-sidebar');

 // Open Sidebar (Mobile)
 if (openSidebarBtn && sidebar) {
 openSidebarBtn.addEventListener('click', () => {
 sidebar.style.transform = 'translateX(0)';
 sidebar.style.boxShadow = '0 3.5em 2.5em 0 #00000020';
 });
 }

 // Close Sidebar (Mobile)
 if (closeSidebarBtn && sidebar) {
 closeSidebarBtn.addEventListener('click', () => {
 sidebar.style.transform = '';
 sidebar.style.boxShadow = '';
 });
 }

 // Handle click outside sidebar to close on mobile
 document.addEventListener('click', (event) => {
 const isMobile = window.innerWidth <= 998;
 if (isMobile && sidebar && !sidebar.contains(event.target) && openSidebarBtn && !openSidebarBtn.contains(event.target)) {
 sidebar.style.transform = '';
 sidebar.style.boxShadow = '';
 }
 });


 // ========== Academic Planner (planner.html) ==========
 const taskInput = document.getElementById('task-input');
 const addTaskForm = document.getElementById('add-task-form');
 const taskListContainer = document.getElementById('task-list-container');
 const statsTotal = document.getElementById('stats-total');
 const statsCompleted = document.getElementById('stats-completed');
 const statsPending = document.getElementById('stats-pending');

 if (addTaskForm && taskListContainer) {
 let tasks = [
 { id: 1, text: "Read COS 106 Web Technologies Module 1", completed: true },
 { id: 2, text: "Complete academic portfolio HTML index layout", completed: false },
 { id: 3, text: "Submit GitHub repository folder link", completed: false }
 ];

 // Render list of tasks
 function renderTasks() {
 taskListContainer.innerHTML = '';

 if (tasks.length === 0) {
 taskListContainer.innerHTML = '<span class="text-bold" style="opacity:.4;font-size:13px">No tasks in your schedule. Add one above!</span>';
 } else {
 tasks.forEach(task => {
 const itemDiv = document.createElement('div');
 itemDiv.className = `task-item ${task.completed ? 'completed' : ''}`;

 itemDiv.innerHTML = `
 <div class="flex align gap-05">
 <input type="checkbox" class="task-checkbox" ${task.completed ? 'checked' : ''} />
 <span class="text-med" style="font-size:13.5px">${task.text}</span>
 </div>
 <button class="btn-delete">Delete</button>
 `;

 // Checkbox toggle listener
 const checkbox = itemDiv.querySelector('.task-checkbox');
 checkbox.addEventListener('change', () => toggleTask(task.id));

 // Delete button listener
 const delBtn = itemDiv.querySelector('.btn-delete');
 delBtn.addEventListener('click', () => deleteTask(task.id));

 taskListContainer.appendChild(itemDiv);
 });
 }

 updateStats();
 }

 // Add a task
 addTaskForm.addEventListener('submit', (e) => {
 e.preventDefault();
 const text = taskInput.value.trim();
 if (!text) return;

 const newTask = {
 id: Date.now(),
 text: text,
 completed: false
 };

 tasks.push(newTask);
 taskInput.value = '';
 renderTasks();
 });

 // Toggle Task Completion
 function toggleTask(id) {
 tasks = tasks.map(task => {
 if (task.id === id) {
 return { ...task, completed: !task.completed };
 }
 return task;
 });
 renderTasks();
 }

 // Delete a task
 function deleteTask(id) {
 tasks = tasks.filter(task => task.id !== id);
 renderTasks();
 }

 // Update stats counters
 function updateStats() {
 const total = tasks.length;
 const completed = tasks.filter(t => t.completed).length;
 const pending = total - completed;

 if (statsTotal) statsTotal.textContent = total;
 if (statsCompleted) statsCompleted.textContent = completed;
 if (statsPending) statsPending.textContent = pending;
 }

 // Initial render
 renderTasks();
 }


 // ========== Contact Form Validation (contact.html) ==========
 const contactForm = document.getElementById('contact-form');
 const nameInput = document.getElementById('contact-name');
 const emailInput = document.getElementById('contact-email');
 const phoneInput = document.getElementById('contact-phone');
 const messageInput = document.getElementById('contact-message');
 const successMsg = document.getElementById('success-message');

 const errorName = document.getElementById('error-name');
 const errorEmail = document.getElementById('error-email');
 const errorPhone = document.getElementById('error-phone');
 const errorMessage = document.getElementById('error-message');

 if (contactForm) {
 // Helper: show error
 function showError(el, msg) {
 el.textContent = msg;
 el.style.display = 'block';
 }

 // Helper: hide error
 function hideError(el) {
 el.textContent = '';
 el.style.display = 'none';
 }

 // Helper: validate email format
 function isValidEmail(email) {
 const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
 return pattern.test(email);
 }

 // Helper: validate phone is digits only
 function isDigitsOnly(str) {
 return /^\d+$/.test(str);
 }

 // Clear errors on input
 nameInput.addEventListener('input', () => hideError(errorName));
 emailInput.addEventListener('input', () => hideError(errorEmail));
 phoneInput.addEventListener('input', () => hideError(errorPhone));
 messageInput.addEventListener('input', () => hideError(errorMessage));

 // Focus style: highlight border on focus
 [nameInput, emailInput, phoneInput, messageInput].forEach(input => {
 input.addEventListener('focus', () => {
 input.style.borderColor = 'var(--col-main)';
 });
 input.addEventListener('blur', () => {
 input.style.borderColor = 'var(--col-semi-grey)';
 });
 });

 // Form submission
 contactForm.addEventListener('submit', (e) => {
 e.preventDefault();
 let isValid = true;

 // Hide previous success message
 successMsg.style.display = 'none';

 // Validate Name (non-empty)
 if (nameInput.value.trim() === '') {
 showError(errorName, 'Please enter your full name.');
 isValid = false;
 } else {
 hideError(errorName);
 }

 // Validate Email (non-empty + valid format)
 if (emailInput.value.trim() === '') {
 showError(errorEmail, 'Please enter your email address.');
 isValid = false;
 } else if (!isValidEmail(emailInput.value.trim())) {
 showError(errorEmail, 'Please enter a valid email address (e.g. name@domain.com).');
 isValid = false;
 } else {
 hideError(errorEmail);
 }

 // Validate Phone (non-empty + digits only)
 if (phoneInput.value.trim() === '') {
 showError(errorPhone, 'Please enter your phone number.');
 isValid = false;
 } else if (!isDigitsOnly(phoneInput.value.trim())) {
 showError(errorPhone, 'Phone number must contain digits only (no spaces, dashes, or letters).');
 isValid = false;
 } else {
 hideError(errorPhone);
 }

 // Validate Message (non-empty)
 if (messageInput.value.trim() === '') {
 showError(errorMessage, 'Please enter a message.');
 isValid = false;
 } else {
 hideError(errorMessage);
 }

 // If all valid, show success and reset form
 if (isValid) {
 successMsg.style.display = 'block';
 contactForm.reset();

 // Auto-hide success after 5 seconds
 setTimeout(() => {
 successMsg.style.display = 'none';
 }, 5000);
 }
 });

 // Reset button also hides errors and success message
 contactForm.addEventListener('reset', () => {
 [errorName, errorEmail, errorPhone, errorMessage].forEach(hideError);
 successMsg.style.display = 'none';
 });
 }

});
