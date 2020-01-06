// rest:junta spread:separa


//usar spread com Objeto
const funcionario = { nome: 'Maria', salario : 1200.00}

const clone = { ativo: true, ...funcionario}

console.log(clone)



//usar spread com array
const grupoA = ['joao','maria', 'ana'] 
const grupoFinal = ['JORGE',...grupoA ,'LUCAS']

console.log(grupoFinal)