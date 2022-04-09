const newEmployees = (dadosEmplyee) => {
  const employees = {
    id1: dadosEmplyee('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: dadosEmplyee('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: dadosEmplyee('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

const dadosEmplyee = (nomeCompleto) => {
  let emailFormatado = `${nomeCompleto.replace(' ', '_').toLowerCase()}@betrybe.com`;
  return {
    nome: nomeCompleto,
    email: emailFormatado
  }
}

console.log(newEmployees(dadosEmplyee));