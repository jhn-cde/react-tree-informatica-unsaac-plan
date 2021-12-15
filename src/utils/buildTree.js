const initialData = {
    name: "IF666",
    atributes:{
      nombre:"Ingenieria de Software 2021",
      creditos:"",
      categoria:""
    },
    children: [
      {
        name: "2"
      },
      {
        name: "6",
        children: [
          {
            name: "3",
            children: [
              {
                name: "3"
              }
            ]
          },
          {
            name: "4",
            children: [
              {
                name: "3",
                children: [
                  {
                    name: "3"
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  };

function buildTree(json) {
    // recorrer categorias
    for(var p = 0; p < (json.Plan).length; p++){
        var plan = json.Plan[p]
        var cat = plan.categoria
        for(var c = 0; c < plan.Cursos.length; c++){
            var curso = plan.Cursos[c]
            console.log(curso)
        }
    }
    return initialData
}
  
export default buildTree;
  