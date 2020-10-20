/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package ReactNativeBackend;

import io.javalin.Javalin;

/**
 *
 * @author wa1
 */
public class Main {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        // TODO code application logic here
        Javalin app = Javalin.create().start(7000);
        app.get("/", ctx -> ctx.result("Bye World"));

    }
    
}
