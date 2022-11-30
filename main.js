window.addEventListener('load', () => {
	const form = document.querySelector("#new-task-form");
	const input = document.querySelector("#new-task-input");
	const list_el = document.querySelector("#tasks");
	const flist_el = document.querySelector("#finished-tasks");
	

	form.addEventListener('submit', (e) => {
		
		e.preventDefault();

		const task = input.value;

		const task_el = document.createElement('div');
		task_el.classList.add('task');

		const task_content_el = document.createElement('div');
		task_content_el.classList.add('content');

		task_el.appendChild(task_content_el);

		const task_input_el = document.createElement('input');
		task_input_el.classList.add('text');
		task_input_el.type = 'text';
		task_input_el.value = task;
		task_input_el.setAttribute('readonly', 'readonly');

		task_content_el.appendChild(task_input_el);

		const task_actions_el = document.createElement('div');
		task_actions_el.classList.add('actions');
		
		const task_edit_el = document.createElement('button');
		task_edit_el.classList.add('edit');
		task_edit_el.innerText = 'Edit';

		const task_delete_el = document.createElement('button');
		task_delete_el.classList.add('delete');
		task_delete_el.innerText = 'Delete';

		const task_finish_el = document.createElement('button');
		task_finish_el.classList.add('finish');
		task_finish_el.innerText = 'Finish';

		task_actions_el.appendChild(task_edit_el);
		task_actions_el.appendChild(task_delete_el);
		task_actions_el.appendChild(task_finish_el);

		task_el.appendChild(task_actions_el);

		list_el.appendChild(task_el);

		input.value = '';

		task_edit_el.addEventListener('click', (e) => {
			if (task_edit_el.innerText.toLowerCase() == "edit") {
				task_edit_el.innerText = "Save";
				task_input_el.removeAttribute("readonly");
				task_input_el.focus();
			} else {
				task_edit_el.innerText = "Edit";
				task_input_el.setAttribute("readonly", "readonly");
			}
		});

		task_delete_el.addEventListener('click', (e) => {
			if(task_finish_el.innerText.toLowerCase() == "finished"){
				flist_el.removeChild(task_el);
			}
			else{
				list_el.removeChild(task_el);
			}
		});

        task_finish_el.addEventListener('click', (e) => {
			if (task_finish_el.innerText.toLowerCase() == "finish") {
				task_finish_el.innerText = "Finished";
				flist_el.appendChild(task_el);
				list_el.removeChild(task_el);
			} else {
				task_finish_el.innerText = "Finish";
				list_el.appendChild(task_el);
				flist_el.removeChild(task_el);
			}
		});



	});
});