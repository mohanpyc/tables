col_array = ['c1']


function multiply_number(){

	var current_col_id = col_array[col_array.length-1];
	if (!document.getElementById(current_col_id)) {

		var new_row = document.getElementById('r1');
		var new_col_id = document.createElement('div');
			new_col_id.id = current_col_id;
			new_col_id.className = 'col-sm-3';
			new_row.appendChild(new_col_id);

		var table_div = document.createElement('div')
			table_div.id = 'table_id'+current_col_id;
			new_col_id.appendChild(table_div);

		var input_no = document.getElementById('number_input').value;

		for (var i = 1; i <= 10; i++) {
			var number_para = document.createElement('p');
				number_para.textContent = `${input_no} * ${i} = ${input_no*i}`;
				table_div.appendChild(number_para);
		}

		col_array.push(current_col_id.charAt(0)+(parseInt(current_col_id.substr(1, 3))+1));
	}
	else 

	if (!current_col_id.childElementCount > 0) {
	var input_no = document.getElementById('number_input').value;
	var column = document.getElementById('c1');
	var table_div = document.createElement('div')
		table_div.id = 'table_id'+ current_col_id;
		column.appendChild(table_div);


	for (var i = 1; i <= 10; i++) {
		var number_para = document.createElement('p');
			number_para.textContent = `${input_no} * ${i} = ${input_no*i}`;
			table_div.appendChild(number_para);
	}

	col_array.push(current_col_id.charAt(0)+(parseInt(current_col_id.substr(1, 3))+1));
	
	}

}