class Person {
  get courses() { return this.#courses; }

  set courses(courses) { this.#courses = courses; }
}

// |
// v

class Person {
  get courses() { return this.#courses.slice(); }

  addCourse(course) {
    this.#courses.push(course);
  }

  removeCourse(course) {
    this.#courses = this.#courses.filter(currentCourse => currentCourse.name !== course.name);
  }
}
