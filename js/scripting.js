//this function is called when we click on delete button from pending task
//if the checkbox of a task is checked then it will not Deleted 
//and if it is not checked 
function deleteTaskFunction(a){
        
        var value=$("#"+a.id).parent().parent().attr('id');
        var chkid=value.slice(11,);  
        var checkboxId="chk"+chkid;
         
            if(document.getElementById(checkboxId).checked){
                alert("Your Task is active so please delete from active tab"); 
            }
            else{
                $.ajax({
                    url:"http://localhost/ToDoList/API/php/taskPendingDelete.php",
                    type:"POST",    
                    data:{dbId:chkid},    
                    success:function(data){
                        alert(data);
                        $("#"+value).remove(); 
                    }  
                });
            } 
}


//this function is called when user check the checkbox
function taskCheckboxChange(a){
    var checkboxId=a.id;
    var texttask=checkboxId.slice(3,);
    var textValue=$('#TaskText'+texttask).text();
    if(document.getElementById(a.id).checked){ 
        
        $("#TaskText"+texttask).css("text-decoration","line-through");
		$("#TaskDescp"+texttask).css("text-decoration","line-through");
        $("#TaskDated"+texttask).css("text-decoration","line-through");
        $('#ativateTaskDiv').append("<div id='ActiveTask"+texttask+"' class='panel panel-primary'><div class='panel-body'><span id='ActiveTaskText"+texttask+"' class='TaskAssignFont'>"+textValue+"</span>");  
    }
    else{
         $("#TaskText"+texttask).css("text-decoration","none"); 
    } 
} 


// Jquery is here
$(document).ready(function(){
   
	
    //This function is called when user click on submit and checks textbox is empty or not
    
    $("#btnSubmit").click(function(){
		var title = $("#taskText").val();
	   var desc = $("#taskDesc").val();
	   var date = $("#taskDate").val();
		 
         if($(title && desc && date).val()==""){ 
              $("#invalidText").text(" Please Enter Task");
         }
        else{
			 	
			 
            //here code is to Php page
            $.ajax({
                url:"http://localhost/ToDoList/API/php/taskAdd.php",
                type:"POST",
                data:{Task:{TaskTitle:$("#taskText").val(),TaskDesc:$("#taskDesc").val(),TaskDated:$("#taskDate").val()}},
                success:function(data){
                    alert(data); 
					$("#taskText").val("");
					$("#taskDesc").val("");
					$("#taskDate").val("");
                } 
            });  
        } 
    }); 
    
    //this function is called when keyup in textbox suppose user erase all the text from textbox then it will display an error
    
    $('#taskText,#taskDesc,#taskDate').keyup(function(){
        if($('#taskText,#taskDesc,#taskDate').val()==""){
            $("#invalidText").text(" Invalid Task"); 
        }
        else{
            $("#invalidText").text("");
        } 
    });
    
    //this function is called when user click on pending tab and redirect to pendingTabFunctionality.php file and display pending task
    
    $("#pendingTab").click(function(){
        $.ajax({
                url:"http://localhost/ToDoList/API/php/pendingTabFunctionality.php",
                type:"POST", 
                success:function(data){
                     $("#pendigTaskDiv").html(data);
                    
                } 
            });   
    }); 
});