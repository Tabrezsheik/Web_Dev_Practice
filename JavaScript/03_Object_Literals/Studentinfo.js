const student = {
  name: 'John',
  age: 20,
  gpa: 3.7,
  major: 'Computer Science',
  courses: ['JavaScript', 'Python', 'Data Structures'],
  info: function() {
    console.log(`${this.name} is a ${this.age} year old ${this.major} student`);
  }
};

student.info();