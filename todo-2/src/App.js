import React, {useState} from 'react';
import DragDrop from "./DragDrop";


function App() {


    const inittask = [
        {id: 1, name: 'Помолиться за правительство!', status: 1},
        {id: 2, name: 'Провести время с семьей!', status: 2},
        {id: 3, name: 'Cходить в горы!', status: 2},
        {id: 4, name: 'Сделать домашнее задание', status: 3},
        {id: 5, name: 'Подготовиться к рыбалке', status: 1},
        {id: 6, name: 'Купить бензин', status: 4},
        {id: 7, name: 'Постиричь газон', status: 4},
        {id: 8, name: 'Это очень длинная строчка для теста правильности отображения', status: 3},
        {id: 9, name: 'Запланировать репетиции!', status: 1},
    ];


    const [tasks1, setTasks1] = useState(inittask);

    const [isOpenCreateTaskForm, setIsOpenCreateTaskForm] = useState(false);
    const [taskInput, setTaskInput] = useState('');
    const [isActiveButtonTaskCreate, setIsActiveButtonTaskCreate] = useState(false);
    const openCreateTaskForm = () => {
        setIsOpenCreateTaskForm(true);
    };


    const onTaskChange = (e) => {
        setIsActiveButtonTaskCreate(e.target.value.length > 4);
        setTaskInput(e.target.value);
    };


    //Сохранение задачи по нажатию кнопки
    const taskSubmit = (e) => {
        e.preventDefault();
        console.log(taskInput);
        const updateTasks = [...tasks1];
        updateTasks.push({id: Math.random(), name: taskInput, status: 1})
        setTasks1(updateTasks);
        taskReset();

    };


    //Перемещение вправо!

    const Moveright = (id) => {
        const updateTasks = tasks1.map(el => {
            if (el.id === id) return {...el, status: el.status + 1}
            else return el;
       })
        setTasks1(updateTasks);
            };
    //Перемещение вправо!
    const MoveLeft = (id) => {
        const updateTasks = tasks1.map(el => {
            if (el.id === id) return {...el, status: el.status - 1}
            else return el;
        })
        setTasks1(updateTasks);
    };



// Удаление задачи!
    const taskDelete = (id) => {
        const updateTasks = tasks1.filter(el => el.id !== id);
        setTasks1(updateTasks);
    };
// Редактирование задачи!
    const taskEdit = (id) => {
        const updateTasks = tasks1.filter(el => el.id !== id);
        setTasks1(updateTasks);
    };
// Фильтрация массивов!


    const FilterTodo = tasks1.filter(function (task) {
        return task.status == 1;
    });

    const FilterInProgress = tasks1.filter(function (task) {
        return task.status == 2;
    });

    const FilterRewiev = tasks1.filter(function (task) {
        return task.status == 3;
    });
    const FilterDone = tasks1.filter(function (task) {
        return task.status == 4;
    });


    const taskReset = () => {
        setTaskInput('');
        setIsOpenCreateTaskForm(false);
        setIsActiveButtonTaskCreate(false);
    };

    return (


        <div>
            <div className="container">
                <h1>Kanban</h1>
                {!isOpenCreateTaskForm &&
                <button className="btn btn-primary" onClick={openCreateTaskForm}>Create
                    Task</button>}
                <hr/>
                {isOpenCreateTaskForm &&
                <form>
                    <div className="form-group">
                        <input type="text" className="form-control"
                               value={taskInput}
                               onChange={onTaskChange}/>
                    </div>
                    <button type="submit" className="btn btn-primary"
                            onClick={taskSubmit}
                            disabled={!isActiveButtonTaskCreate}>Submit
                    </button>
                    <button className="btn btn-secondary"
                            onClick={taskReset}
                    >Cancel
                    </button>
                </form>
                }

                <div className="row" align='center' >
                    <div className="col-sm" >

                        <p className="font-weight-bold" >To do.</p>


                        <hr/>

                        {

                            FilterTodo.map(el => (
                                    <ul class="shadow p-3 mb-5 bg-white rounded" >


                                        <li key={el.id} class="list-group-item list-group-item-secondary" >


                                                {el.name}

                                                                 </li>

                                        <hr/>

                                        <svg className="bi bi-arrow-left" width="3em" height="1em"
                                             onClick={() => MoveLeft(el.id)}
                                             viewBox="0 0 16 16" fill="currentColor"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd"
                                                  d="M5.854 4.646a.5.5 0 0 1 0 .708L3.207 8l2.647 2.646a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 0 1 .708 0z"/>
                                            <path fill-rule="evenodd"
                                                  d="M2.5 8a.5.5 0 0 1 .5-.5h10.5a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                                        </svg>


                                        <svg className="bi bi-trash-fill" width="3em" height="1em"
                                             onClick={() => taskDelete(el.id)}
                                             viewBox="0 0 16 16" fill="currentColor"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd"
                                                  d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z"/>
                                        </svg>

                                        <svg className="bi bi-arrow-right" width="3em" height="1em"
                                             onClick={() => Moveright(el.id)}
                                             viewBox="0 0 16 16" fill="currentColor"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd"
                                                  d="M10.146 4.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L12.793 8l-2.647-2.646a.5.5 0 0 1 0-.708z"/>
                                            <path fill-rule="evenodd"
                                                  d="M2 8a.5.5 0 0 1 .5-.5H13a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 8z"/>
                                        </svg>

                                    </ul>
                                )
                            )

                        }

                    </div>


                    <div className="col-sm">
                        <p className="font-weight-bold">In progress.</p>
                        <hr/>
                        {
                            FilterInProgress.map(el => (
                                    <ul class="shadow p-3 mb-5 bg-white rounded" >


                                        <li key={el.id} class="list-group-item list-group-item-secondary" >


                                            {el.name}

                                        </li>

                                        <hr/>

                                        <svg className="bi bi-arrow-left" width="3em" height="1em"
                                             onClick={() => MoveLeft(el.id)}
                                             viewBox="0 0 16 16" fill="currentColor"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd"
                                                  d="M5.854 4.646a.5.5 0 0 1 0 .708L3.207 8l2.647 2.646a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 0 1 .708 0z"/>
                                            <path fill-rule="evenodd"
                                                  d="M2.5 8a.5.5 0 0 1 .5-.5h10.5a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                                        </svg>


                                        <svg className="bi bi-trash-fill" width="3em" height="1em"
                                             onClick={() => taskDelete(el.id)}
                                             viewBox="0 0 16 16" fill="currentColor"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd"
                                                  d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z"/>
                                        </svg>

                                        <svg className="bi bi-arrow-right" width="3em" height="1em"
                                             onClick={() => Moveright(el.id)}
                                             viewBox="0 0 16 16" fill="currentColor"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd"
                                                  d="M10.146 4.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L12.793 8l-2.647-2.646a.5.5 0 0 1 0-.708z"/>
                                            <path fill-rule="evenodd"
                                                  d="M2 8a.5.5 0 0 1 .5-.5H13a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 8z"/>
                                        </svg>

                                    </ul>
                                )
                            )

                        }

                    </div>





                    <div className="col-sm">
                        <p className="font-weight-bold">Review.</p>

                        <hr/>

                        {
                            FilterRewiev.map(el => (
                                    <ul class="shadow p-3 mb-5 bg-white rounded" >


                                        <li key={el.id} class="list-group-item list-group-item-secondary" >


                                            {el.name}

                                        </li>

                                        <hr/>

                                        <svg className="bi bi-arrow-left" width="3em" height="1em"
                                             onClick={() => MoveLeft(el.id)}
                                             viewBox="0 0 16 16" fill="currentColor"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd"
                                                  d="M5.854 4.646a.5.5 0 0 1 0 .708L3.207 8l2.647 2.646a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 0 1 .708 0z"/>
                                            <path fill-rule="evenodd"
                                                  d="M2.5 8a.5.5 0 0 1 .5-.5h10.5a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                                        </svg>


                                        <svg className="bi bi-trash-fill" width="3em" height="1em"
                                             onClick={() => taskDelete(el.id)}
                                             viewBox="0 0 16 16" fill="currentColor"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd"
                                                  d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z"/>
                                        </svg>

                                        <svg className="bi bi-arrow-right" width="3em" height="1em"
                                             onClick={() => Moveright(el.id)}
                                             viewBox="0 0 16 16" fill="currentColor"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd"
                                                  d="M10.146 4.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L12.793 8l-2.647-2.646a.5.5 0 0 1 0-.708z"/>
                                            <path fill-rule="evenodd"
                                                  d="M2 8a.5.5 0 0 1 .5-.5H13a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 8z"/>
                                        </svg>

                                    </ul>
                                )
                            )

                        }

                    </div>



                    <div className="col-sm">
                        <p className="font-weight-bold">Done.</p>

                        <hr/>

                        {
                            FilterDone.map(el => (
                                    <ul class="shadow p-3 mb-5 bg-white rounded" >


                                        <li key={el.id} class="list-group-item list-group-item-secondary" >


                                            {el.name}

                                        </li>

                                        <hr/>

                                        <svg className="bi bi-arrow-left" width="3em" height="1em"
                                             onClick={() => MoveLeft(el.id)}
                                             viewBox="0 0 16 16" fill="currentColor"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd"
                                                  d="M5.854 4.646a.5.5 0 0 1 0 .708L3.207 8l2.647 2.646a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 0 1 .708 0z"/>
                                            <path fill-rule="evenodd"
                                                  d="M2.5 8a.5.5 0 0 1 .5-.5h10.5a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                                        </svg>


                                        <svg className="bi bi-trash-fill" width="3em" height="1em"
                                             onClick={() => taskDelete(el.id)}
                                             viewBox="0 0 16 16" fill="currentColor"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd"
                                                  d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z"/>
                                        </svg>

                                        <svg className="bi bi-arrow-right" width="3em" height="1em"
                                             onClick={() => Moveright(el.id)}
                                             viewBox="0 0 16 16" fill="currentColor"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd"
                                                  d="M10.146 4.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L12.793 8l-2.647-2.646a.5.5 0 0 1 0-.708z"/>
                                            <path fill-rule="evenodd"
                                                  d="M2 8a.5.5 0 0 1 .5-.5H13a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 8z"/>
                                        </svg>

                                    </ul>
                                )
                            )

                        }

                    </div>


                </div>

            </div>

            <hr/>


        </div>
    );


}


export default App;