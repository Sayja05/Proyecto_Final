class ProductosController{ 
    construct(){
    }
    consultar(req,res){
        try {
            let data = [
                {codigo: '1', nombres: 'Item 1', descripcion: 'Value 1', precio:'12'},
                {codigo: '2', nombres: 'Item 2', descripcion: 'Value 2', precio:'13'},
                {codigo: '3', nombres: 'Item 3', descripcion: 'Value 3', precio:'14'},
                {codigo: '4', nombres: 'Item 4', descripcion: 'Value 4', precio:'15'},
                {codigo: '5', nombres: 'Item 5', descripcion: 'Value 5', precio:'16'},
                {codigo: '6', nombres: 'Item 6', descripcion: 'Value 6', precio:'17'},
                {codigo: '7', nombres: 'Item 7', descripcion: 'Value 7', precio:'18'},
                {codigo: '8', nombres: 'Item 8', descripcion: 'Value 8', precio:'19'},
                {codigo: '9', nombres: 'Item 9', descripcion: 'Value 9', precio:'122'},
                {codigo: '10', nombres: 'Item 10', descripcion: 'Value 10', precio:'123'},
            ];
            res.status(200).json(data);
        }catch(err){
            res.status(500).send(err.message);
        }
    }
}
module.exports = new ProductosController();
