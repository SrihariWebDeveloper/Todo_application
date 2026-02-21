import React from "react";

const Todos = ({text,index,id,isCompleted,deleteTask,updateTask}) => {
  return (
    <div className="flex flex-row gap-2 justify-between items-center mt-2" key={index}>
      <div className="flex flex-row gap-2 items-center w-full" onClick={()=>updateTask(id)}>
        <div className={` content-none w-4 h-4 rounded-full ${isCompleted?"bg-amber-600":""}`}></div>
        <p className={`${isCompleted?"line-through":""}`}>{text}</p>
      </div>
      <p className="cursor-pointer bg-slate-50 border border-slate-400 px-2 rounded-full" onClick={()=>deleteTask(id)}>X</p>
    </div>
  );
};

export default Todos;
