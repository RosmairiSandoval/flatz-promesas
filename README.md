 función  asíncrona requesstHandler ( req ,  res )  {

prueba  {
    const  user  =  await  User . findById ( req . userId ) ;    
const  tasks  =  aguardar  tareas . findById ( usuario . tasksId ) ;
tareas . completado  =  verdadero ;
aguardar  Tareas . guardar ( ) ;
res . enviar ( 'Tarea completada' ) ;

}
atrapar ( e )  {
    res . enviar ( e ) ;
}


}
