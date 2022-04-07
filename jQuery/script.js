$('document').ready(function(){
	var $calc = $("#calculator");
	var $display = $("#display");
	var $digits = $(".digits");
	var $operations = $(".operations");
	
	var init = 0;
	var operand = init;
	var operation = null;
	var afterOperation = false;
	
	var reset = function() {
		$display.text(init);
		operand = null;
		operation = null;
	};
	
	$digits.not($('#dot, #sign')).click(function(event) {
		event.preventDefault();
		if (afterOperation == false) {
			if ($display.text() == init && $display.text().indexOf('.')<0) {
				$display.text($(this).text());
			} else {
				$display.append($(this).text());
			}
		} else {
			$display.text($(this).text());
			afterOperation = false;
		}
	});
	
	$operations.click(function(event){
		event.preventDefault();
		var currOperation = $(this).text();
		var currOperand = parseFloat($display.text());
		if (currOperation != 'CE') {
			// Do the math
			if (operation != null && !afterOperation) {
				switch(operation) {
					case '+': {
						$display.text(operand + currOperand);
						break;
					}
					case '-': {
						$display.text(operand - currOperand);
						break;
					}
					case '*': {
						$display.text(operand * currOperand);
						break;
					}
					case '/': {
						if (currOperand != 0) {
							$display.text(operand / currOperand);
						} else {
							alert("What the fuck?!");
							reset();
						}
						break;
					}
				}
			}
			if (currOperation != '=') {
				operation = currOperation;
			} else {
				operation = null;
				afterOperation = false;
				return;
			}
			operand = parseFloat($display.text());
			afterOperation = true;
		} else {
			reset();
		}
	});
	
	$('#dot').click(function(event){
		event.preventDefault();
		if (!afterOperation) {
			if ($display.text().indexOf('.') < 0) {
				$display.append('.');
			}
		} else {
			$display.text('0.');
			afterOperation = false;
		}
	});
	$("#sign").click(function(event){
		event.preventDefault();
		if (afterOperation) {
			return;
		} else {
			$display.text(parseFloat($display.text())*(-1));
		}
	});
});