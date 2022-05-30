const students = [
    {id:1, name: `peter`, score:80, favoriteSubject: `math`},
    {id:2, name: `bob`, score:90, favoriteSubject: `art`},
    {id:3, name: `johln`, score:100, favoriteSubject: `art`},
    {id:4, name: `susy`, score:60, favoriteSubject: `math`},
    {id:5, name: `mary`, score:50, favoriteSubject: `english`}
];
 
//MAP
//Cria um novo array, com a mesma quantidade de itens, podendo alterar os valores livremente, modificando, adicionando... 
const updatedStudents = students.map(function(student){
    student.role = `student`;
    return student;
});

//FILTER
//Cria um novo array à partir com os itens cujos valores coincidem com o "filtro" indicado na condição 
const highScores = updatedStudents.filter(function(student){
    if(student.score >= 80){
        return student;
    }
});

//FIND
//Retorna um único item do array, o primeiro encontrado de acordo com a condição usada
const specId = updatedStudents.find(function(student){
    if(student.id === 3){
        return student;
    }
});

//REDUCE
//Retorna um item do array, geralmente um acumulo de valores que são indicados pela função
//Usa dois parametros: acc, ou o acumulador, e curr representando o item atual 
const avgScore = updatedStudents.reduce(function(scores, student){
    return scores + student.score;
},0)/ updatedStudents.length;

const survey = updatedStudents.reduce(function(survey, student){
    const subject = student.favoriteSubject;
    if (survey[subject] >= 1){
        survey[subject]++;
    }
    else{
    survey[subject] = 1;
    }
    return survey;
},{});