console.log('console.log');
console.log('where is my php? :( ')

fetch('./echo.php')
  .then((res) => res.text())
  .then((post) => {
    console.log(post)
  })
