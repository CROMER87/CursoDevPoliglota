import { SessionFactory } from "./infra/session-factory.js";
import { Animal } from "./model/animal.js";
import { Person } from "./model/person.js";



new SessionFactory({
    dbName: 'db-dm',
    dbVersion: 1,
    mappers: [
        {
            clazz: Person,
            converter:data => new Person(data.name, data.surname)
        },
        {
            clazz: Animal,
            converter: data => new Animal(data.name)
        }
    ]
});