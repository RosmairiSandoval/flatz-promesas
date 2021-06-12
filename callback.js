function  requesrHandler ( req ,  res )  {
    Usuario . findById ( req . userId ,  function ( err ,  user ) {
        si  ( err )  {
            res . enviar ( err ) ;
        }  más  {
           TextTrackList . findById ( user . taskId  function ( err ,  tasks ) {
si  ( err )  {
    volver  res . enviar ( err ) ;

}  más  {
    tareas . completado  =  verdadero ;
    tareas . guardar ( función  ( err ) {

        si  ( err )  {
           volver  res . enviar ( err ) ; 
        }  más  {
            res . enviar ( 'Tarea completada' )
        }
    } )
}

           } ) 
        }
    } )
}
