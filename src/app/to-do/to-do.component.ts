import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'to-do',
  imports: [FormsModule,CommonModule],
  templateUrl: './to-do.component.html',
  styleUrl: './to-do.component.css'
})
export class ToDoComponent{
  taskArr: { taskName: string; isCompleted: boolean }[] = 
  [];




ngOnInit():void{

}
onSubmit(form: NgForm) {
  console.log(form);

  this.taskArr.push({
    taskName: form.value.taskk,
    isCompleted: false
  });

  setTimeout(() => form.resetForm(), 0); // ✅ This ensures the input clears properly
}


onDelete(i:number){
  console.log(i);
this.taskArr.splice(i,1);
}

onCheck(i:number){
this.taskArr[i].isCompleted=!this.taskArr[i].isCompleted
}
}
