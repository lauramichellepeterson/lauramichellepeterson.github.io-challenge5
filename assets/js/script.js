

let btns = document.querySelectorAll('button');

btns.forEach(function (i) {
    i.addEventListener('click', function() {
        var btn_id=i.id;
        var task_id = 'task_'+btn_id;
        var input = document.getElementById(task_id).value;
        console.log(input);
        localStorage.setItem(task_id, input);

        var storedValue = localStorage.getItem(task_id);
        console.log("stored in "+task_id+": "+storedValue);
    });
});