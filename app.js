<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="styles.css" />
    <title>Aim Training | Проект 5</title>
  </head>
  <body>
    <div class="screen">
      <h1>Aim Training</h1>
      <a href="#" class="start" id="start">Начать игру</a>
    </div>

    <div class="screen">
      <h1>Выберите время</h1>
      <ul class="time-list" id="time-list">
        <li>
          <button class="time-btn"
          data-time="10">
            10 сек
          </button>
        </li>
        <li>
          <button class="time-btn"
          data-time="20">
            20 сек
          </button>
        </li>
        <li>
          <button class="time-btn"
          data-time="30">
            30 сек
          </button>
        </li>
        <li>
          <button class="time-btn"
          data-time="40">
            40 сек
          </button>
        </li>
      </ul>
    </div>

    <div class="screen">
      <h3>Осталось <span id="time">00:00</span></h3>
      <div class="board" id="board"></div>
    </div>
    <script src="app.js"></script>
  </body>
</html>
