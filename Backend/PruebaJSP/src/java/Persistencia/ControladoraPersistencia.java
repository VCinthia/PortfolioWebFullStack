package Persistencia;

import Logica.Persona;
import Persistencia.exceptions.NonexistentEntityException;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;

public class ControladoraPersistencia {
    
    PersonaJpaController persJPA = new PersonaJpaController();
    
    public void crearPersona(Persona per) {
        persJPA.create(per);
    }
    public void eliminarPersona (int id){
        try {
            persJPA.destroy(id);
        } catch (NonexistentEntityException ex) {
            Logger.getLogger(ControladoraPersistencia.class.getName()).log(Level.SEVERE, null, ex);
        }
    }
    public void eliminarPersona (Persona pers){
        try {
            persJPA.destroy(pers.getId());
        } catch (NonexistentEntityException ex) {
            Logger.getLogger(ControladoraPersistencia.class.getName()).log(Level.SEVERE, null, ex);
        }
    }
    
    public List<Persona> traerPersona (){
        return persJPA.findPersonaEntities();
    }
}
