var Title,TaskDate,Description,count;
count=0;
function addTask()
{
   count++;
    Title=document.getElementById("title").value;
    TaskDate=document.getElementById("date").value;
    Description=document.getElementById("desc").value;
    console.log(Title+ ","+TaskDate+" ,"+Description);
    var dynamicDiv="<div class='newDiv' id='div"+count+"'><input type='checkbox' onchange='taskDone("+count+")'><h4>"+Title +"</h4><span>"+TaskDate+"</span><br><p>"+Description+"</p> </div>";
    document.getElementById("pendingTask").innerHTML+=dynamicDiv;
    document.getElementById("title").value="";
    document.getElementById("date").value="";
    document.getElementById("desc").value="";
}

function taskDone(id)
{
    document.getElementById("activeTaskDiv").innerHTML+="<div class='newDiv' id='active"+id+"'><input type='button' value='X' onclick='taskRemove("+count+")'><h4>"+Title +"</h4><span>"+TaskDate+"</span><br><p>"+Description+"</p> </div>";
    document.getElementById("div"+id).remove();
}

function taskRemove(id)
{
    document.getElementById("active"+id).remove();
}