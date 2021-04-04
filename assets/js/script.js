currentHour = parseInt(moment().format('H'))
rows = ['9', '10', '11', '12', '13', '14', '15', '16', '17']
tasks = ['task_9', 'task_10', 'task_11', 'task_12', 'task_1', 'task_2', 'task_3', 'task_4', 'task_5']

Array.from(rows).forEach(row => {
    rowHour = 0;
    
    if (row) {
        rowHour = parseInt(row);
    }
    if (rowHour) {
        // Compares row id to current hour and sets color accordingly
        if (currentHour === rowHour) {
            setColor(row, "red");
        } else if (currentHour < rowHour)  {
            setColor(row, "green");
        } else if (currentHour > rowHour)  {
            setColor(row, "lightgrey");
        } else {
            setColor(row, "white");
        }
    }
  });
  
function setColor(element, color) {
    element = document.getElementById(element);  
    element.style.backgroundColor = color;
};


tasks.forEach(getValues); 

function getValues(value, index, array) {
    task_id=value;
    var storedValue = localStorage.getItem(task_id);
    document.getElementById(task_id).value = storedValue;
};

let btns = document.querySelectorAll('button');

btns.forEach(function (i) {
    i.addEventListener('click', function() {
        var btn_id=i.id;
        var id_num = btn_id.split("_",1);
        var task_id = 'task_'+id_num;
        var input = document.getElementById(task_id).value;
        localStorage.setItem(task_id, input);
    });
});