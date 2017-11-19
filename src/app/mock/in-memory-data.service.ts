export class InMemoryDataService {
  createDb() {
    const contacts = [
      { id: 1, first_name: 'Петр', second_name: 'Иванов', patronymic: 'Евгеньевич',
        phone: '89634523142', email: 'asdf@asd.com'},
      { id: 2, first_name: 'Денис', second_name: 'Петров', patronymic: 'Иванович',
        phone: '89344524141', email: 'fghs@asd.com'},
      { id: 3, first_name: 'Иван', second_name: 'Сидоров', patronymic: 'Александрович',
        phone: '89939642312', email: 'vbsf@asd.com'},
    ];
    return { contacts };
  }
}
