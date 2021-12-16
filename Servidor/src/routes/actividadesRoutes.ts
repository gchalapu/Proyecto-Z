import {Router} from 'express';
import actividadesController from '../controllers/actividadesController';
class ActividadesRoutes {
    public router: Router = Router();
constructor(){
    this.config();
}
config(): void{
   // this.router.get('/',actividadesController.list);
   // this.router.get('/:id',actividadesController.obteneruno);
  //  this.router.post('/', actividadesController.create);
   // this.router.put('/:id',actividadesController.update);
   // this.router.delete('/:id',actividadesController.delete);

    }
}

const actividadesRoutes = new ActividadesRoutes();
export default actividadesRoutes.router;