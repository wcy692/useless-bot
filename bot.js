<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Title of the document</title>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" 
    integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
  <style> p { font-size:120%; } </style> 
</head>
<body>
<div class="container">
  <div class="row">
    <div clss="col-sm-12">
      <h1>Welcome to useless chat bot!</h1>
      <br />
      <div id="conversation">
        <p><strong>Useless bot:</strong> Hello, how are you?</p>
      </div>
      <br />
      <div class="form-group row">
        <div class="col-sm-6">
          <input type="text" class="form-control" id="message" placeholder="Your answer...">
        </div>
        <button class="btn btn-primary col-sm-2" id="sayit">Say it!</button>
      </div>
    </div>
  </div>
</div>
<script src="bot.js"></script>
</body>
</html>
