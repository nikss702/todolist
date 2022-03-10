var count=0;
function getTask(){
   //Get Values from Form
   var Title=document.getElementById("taskTitle").value;
   var Date=document.getElementById("taskDate").value;
   var Des=document.getElementById("taskDesc").value;

   //Set Null or Reset Form Fields
   document.getElementById("taskTitle").value="";
   document.getElementById("taskDate").value="";
   document.getElementById("taskDesc").value="";


  //Create Dynamic Elements and Append to PendingTaskDiv
   count++;
   var PendingTask=document.getElementById("pendigTaskDiv");
   var AppendDiv=document.createElement("DIV");
   AppendDiv.id="appendDiv"+count;
   AppendDiv.style.border="2px solid black";
   var CheckButton=document.createElement("INPUT");
   CheckButton.type="checkbox";
   CheckButton.id="check"+count;
   Close=document.createElement("SPAN");
   Close.innerHTML="X";
   Close.id="span"+count;
   Close.className="s";
   Close.setAttribute("onclick","Remove('"+count+"')");
   
   AppendDiv.appendChild(Close);
   //CheckButton.onchange=getId;
   CheckButton.setAttribute("onchange","getId('"+count+"')");
   CheckButton.style.margin="10px";
   var P=document.createElement("P");
   P.style.margin="10px";
   P.innerHTML="<span><b>"+Title+"</b></span><br><span>"+Date+"</span><br><span>"+Des+"</span>";
   AppendDiv.appendChild(CheckButton);
   AppendDiv.appendChild(P);
   PendingTask.appendChild(AppendDiv);


}
function getId(a)
{
   var DoneTask=document.getElementById("ativateTaskDiv");
   document.getElementById("span"+a).style.display="block";
   DoneTask.appendChild(document.getElementById("appendDiv"+a));
}
function Remove(a)
{
  document.getElementById("appendDiv"+a).remove();
}
