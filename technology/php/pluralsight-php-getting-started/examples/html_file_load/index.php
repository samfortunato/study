<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>HTML File Load</title>
</head>
<body>
  <h1>HTML File Load</h1>

  <p>This file loads some HTML below.</p>

  <?php readfile('./other_file.html'); ?>

  <footer>End of page.</footer>
</body>
</html>
