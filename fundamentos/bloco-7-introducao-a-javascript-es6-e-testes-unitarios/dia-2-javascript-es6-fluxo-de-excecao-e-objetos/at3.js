const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const newKey = (object, newKey, content) => {
  object[newKey] = content;
  console.log(object);
}

newKey(lesson2, 'turno', 'noite');

console.log(Object.keys(lesson2));
 
console.log(`Tamanho: ${Object.keys(lesson2).length}`)

const objectValue = (object) => {
  console.log(Object.values(object));
}
objectValue(lesson2)