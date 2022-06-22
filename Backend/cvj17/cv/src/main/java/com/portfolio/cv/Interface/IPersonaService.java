package com.portfolio.cv.Interface;





import com.portfolio.cv.Entity.Persona;
import java.util.List;

public interface IPersonaService {
    
    //Traer una lista de persona
    public List<Persona> getPersona();
    
    //Guardar un objeto del tipo Persona
    public void savePersona(Persona persona);
    
    //Eliminar una persona por ID
    public void deletePersona(Long id);
    
    //Buscar una persona por ID
    public Persona findPersona(Long id);
}
