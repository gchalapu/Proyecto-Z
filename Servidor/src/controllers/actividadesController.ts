import {Request, Response} from 'express';
import pool from '../database';

class actividadesController {
    public async list (req: Request, res: Response) {
        await pool.query('SELECT * FROM tbl_actividades', function(err, actividades, fields) {
            if (err) throw err;
            res.json(actividades);
        });
    }
    public async obteneruno (req: Request, res: Response): Promise<any> {
        const { id }  = req.params;
        await pool.query('SELECT * FROM tbl_actividades WHERE id_usu = ?', [id],  function(err, result, fields) {
            console.log(result.length);  
            if (result.length > 0) {
                return res.json(result[0]);
            }
            res.status(404).json({ text: "Actividad no encontrada " });  

        });
    }

    public async create (req:Request, res:Response): Promise<void>{
        await pool.query('INSERT INTO tbl_actividades set ?',[req.body]);
        res.json({message: 'Actividad creada'});


    }

    public async update (req:Request, res:Response): Promise<void>{
        const { id } = req.params;
        await pool.query('UPDATE tbl_actividades set ? WHERE id_usu = ?', [req.body, id]);
        res.json({ message: "Actividad actualizada" });


    }
    public async delete(req:Request, res:Response): Promise<void>{
        const { id } = req.params;
        await pool.query('DELETE FROM tbl_usuarios WHERE id_usu = ?', [id]);
        res.json({ message: "Cliente eliminado" });
        
        // res.json({text:'Cliente borrado '+req.params.id});

    }

}
const ActividadesController = new actividadesController();
export default actividadesController;