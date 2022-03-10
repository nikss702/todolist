$(document).ready( function(){
		var count=1;
		$('#btnSubmit').click(function(){
			 
				var value1 = $("#taskText").val();
			  var value2 = $("#taskDesc").val();
				var value3 = $("#taskDate").val();
				
				if(addItem == ''){
					alert('Please enter a task'); 
				}
				else{
					$.ajax({
							 type:'POST',
							 url:"php/taskData.php",
							 data:{"value1="+value1+"value2="+value2+"value3="+value3},
							 success:function(data){
								  alert("Data Save: " + data);
							 }
						 });
					$("#addList").css("display","block");
					 $("#addList").append("<div id='task"+count+"' class='col-md-8 list-group-item'><input type='checkbox' class='check'   id='chklist'  /> &nbsp;&nbsp;&nbsp;<a >" +  addItem + "</a> <button id='closeBtn' class='btn btn-primary'>"+ "X</button></div>");	
					$('#addTask').val("");
					count=count+1;
				} 
		});	
		 
        
    });
	$(document).on("click","#closeBtn",function(){
		$(this).parent().remove();
		
	}); 
	
	
	 



