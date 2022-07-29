
package servlets;

import Logica.Controladora;
import Logica.Persona;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;


@WebServlet(name = "SvPersona", urlPatterns = {"/SvPersona"})
public class SvPersona extends HttpServlet {

    Controladora control = new Controladora();
    
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
    
    }

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
        
        List<Persona> listaPersonas = control.traerPersonas();
        
        HttpSession miSession = request.getSession();
        miSession.setAttribute ("listaPersonas", listaPersonas);
        
        response.sendRedirect("verPersonas.jsp");
        
    }

    
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
        
        String id = request.getParameter("id");
        String dni = request.getParameter("dni");
        String nombre = request.getParameter("nombre");
        String apellido = request.getParameter("apellido");
        String telefono = request.getParameter("telefono");
        String mail = request.getParameter("mail");
        /*
        System.out.println("dni: "+ dni);
        System.out.println("dni: "+ nombre);
        System.out.println("dni: "+ apellido);
        System.out.println("dni: "+ telefono);
        System.out.println("dni: "+ mail);*/
        
        Persona pers = new Persona (0, dni, nombre, apellido, telefono, mail);
        control.crearPersona(pers);
        
        response.sendRedirect("index.jsp");
    }

    
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
