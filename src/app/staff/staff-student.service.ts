import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from "./staff-student.model";

@Injectable({ providedIn: 'root' })

export class StaffStudentService {
    constructor(private http: HttpClient) { }

    url = "http://localhost:8080/student";

    public addStudent(s: Student) {
        console.log(`firstname: ${s.departmentID}`);

        let student = {
            "department": {
                "departmentID": s.departmentID
            },
            "personDetail": {
                "firstName": s.firstName,
                "lastName": s.lastName,
                "phone": s.phone,
                "email": s.email,
                "password": "pass",
                "role": "student"
            }
        }
        return this.http.post<any>(`${this.url}/add`, student)
    }

    public getStudents() {
        return this.http.get<any>(`${this.url}s`)
    }

    public getStudentsByNameOrID(string: string) {
        return this.http.get<any>(`http://localhost:8080/search/${string}`)
    }

    public getStudentByName() {
        return this.http.get<any>(`${this.url}`)
    }

}