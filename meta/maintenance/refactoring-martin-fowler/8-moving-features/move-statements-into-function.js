result.push(`<p>title: ${person.photo.title}</p>`);
result.concat(buildPhotoData(person.photo));

function buildPhotoData(photo) {
  return [
    `<p>location: ${photo.location}</p>`,
    `<p>date: ${photo.date.toDateString()}</p>`
  ];
}

// |
// v

result.concat(buildPhotoData(person.photo));

function buildPhotoData(photo) {
  return [
    `<p>title: ${photo.title}</p>`,
    `<p>location: ${photo.location}</p>`,
    `<p>date: ${photo.date.toDateString()}</p>`,
  ];
}
