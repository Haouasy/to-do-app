
  class App{
    #form = document.querySelector(".form");
    #addbtn = document.querySelector(".btn");
    #tasksContainer = document.querySelector(".tasks");
    constructor(){
      this.#addbtn.addEventListener("click",function(){
        this._addTask();
      }.bind(this));

      this.#form.addEventListener("submit",function(e){
          e.preventDefault();
          this._addTask()
      }.bind(this));

      this.#tasksContainer.addEventListener("click",function(e){
        this._deleteTask(e)
      }.bind(this));
      
      this.#tasksContainer.addEventListener("click",function(e){
        this._checkTask(e);
      }.bind(this));
    }
    _addTask(){
      const task = document.querySelector(".input__task").value;
      const html = `<li class="task">
        <div class="task__whole">
            <p class="task__text">${task}</p>
            <div>
            <button class="delete__btn"></button>
            <button class="check__btn"></button>
            </div>
        </div>
        <hr>
        </li>`;
      this.#tasksContainer.insertAdjacentHTML('beforeend', html);
    };

    _deleteTask(e){
        if (e.target.classList.contains("delete__btn")) {
          const task = e.target.closest(".task");
          if (task) {
            task.remove();
          }
        }

    }
    _checkTask(e){
      if (e.target.classList.contains("check__btn")) {
        const task = e.target.closest(".task");
        if(task){
          const p = task.querySelector("p");
          p.classList.add("checked");
        }
     }
  }
}
const app = new App();