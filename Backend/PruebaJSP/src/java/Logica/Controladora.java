
package Logica;

import Persistencia.ControladoraPersistencia;
import java.util.List;

public class Controladora {
    
    ControladoraPersistencia controlPersis = new ControladoraPersistencia ();
    
    public void crearPersona(Persona per) {
        controlPersis.crearPersona(per);
    }
    
    public void eliminarPersona(int id) {
        controlPersis.eliminarPersona(id);
    }
    
    public void eliminarPersona(Persona per) {
        controlPersis.eliminarPersona(per);
    }
    
    public List<Persona> traerPersonas() {
        return controlPersis.traerPersona();
    }
    
}
