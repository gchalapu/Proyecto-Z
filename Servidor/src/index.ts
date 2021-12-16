import express, {Application} from 'express';
import morgan from 'morgan';
import cors from 'cors';
import indexRoutes from './routes/indexRoutes';
import clientesRoutes from './routes/clientesRoutes';
import actividadesRoutes from './routes/actividadesRoutes';



class Servidor {

    public app: Application;
    constructor(){
        this.app=express();
        this.config();
        this.routes();
    }
    // modulos que se utilizan 
    config(): void{
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}));

    }
    //rutas de acceso a las consultas
    routes(): void{
        this.app.use('/',indexRoutes);
        this.app.use('/api/clientes',clientesRoutes);
        this.app.use('/api/actividades',clientesRoutes);
    }
    
    start(): void{
         this.app.listen(this.app.get('port'), ()=>{
            console.log('Servidor en el puerto', this.app.get('port'));
         });

        
    }

}
const servidor = new Servidor();
servidor.start();