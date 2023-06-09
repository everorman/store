import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, map, shareReplay, tap } from 'rxjs/operators';

import { Product } from './product.model';
import { LoadingService } from '../../../shared/loading/loading.service';
import { MessagesService } from '../../../shared/messages/messages.service';

@Injectable({
  providedIn: 'root',
})
export class CoursesStore {
  private subject = new BehaviorSubject<Product[]>([]);

  courses$: Observable<Product[]> = this.subject.asObservable();

  constructor(
    private http: HttpClient,
    private loading: LoadingService,
    private messages: MessagesService
  ) {
    this.loadAllCourses();
  }

  private loadAllCourses() {
    const loadCourses$ = this.http.get<Product[]>('/api/courses').pipe(
      //   map((response) => response['payload']),
      tap((res) => {
        console.log(res);
      }),
      catchError((err) => {
        const message = 'Could not load courses';
        this.messages.showMessage(message);
        console.log(message, err);
        return throwError(err);
      })
      //   tap((courses) => this.subject.next(courses))
    );

    this.loading.showLoaderUntilCompleted(loadCourses$).subscribe();
  }

  //   saveCourse(courseId: string, changes: Partial<Course>): Observable<any> {
  //     const courses = this.subject.getValue();

  //     const index = courses.findIndex((course) => course.id == courseId);

  //     const newCourse: Course = {
  //       ...courses[index],
  //       ...changes,
  //     };

  //     const newCourses: Course[] = courses.slice(0);

  //     newCourses[index] = newCourse;

  //     this.subject.next(newCourses);

  //     return this.http.put(`/api/courses/${courseId}`, changes).pipe(
  //       catchError((err) => {
  //         const message = 'Could not save course';
  //         console.log(message, err);
  //         this.messages.showErrors(message);
  //         return throwError(err);
  //       }),
  //       shareReplay()
  //     );
  //   }

  //   filterByCategory(category: string): Observable<Course[]> {
  //     return this.courses$.pipe(
  //       map((courses) =>
  //         courses
  //           .filter((course) => course.category == category)
  //           .sort(sortCoursesBySeqNo)
  //       )
  //     );
  //   }
}
