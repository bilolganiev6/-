// Объект для хранения информации о пользователях и их ролях
const users = {
    'user1': {
      username: 'user1',
      password: 'password',
      roles: ['admin'] // Роли пользователя (например, admin)
    },
    'user2': {
      username: 'user2',
      password: 'password',
      roles: ['editor'] // Роли пользователя (например, editor)
    }
  };
  
  // Функция для проверки прав доступа пользователя
  function checkAccess(username, requiredRole) {
    const user = users[username];
    if (!user) return false; // Пользователь не найден
    if (!user.roles.includes(requiredRole)) return false; // У пользователя нет нужной роли
    return true; // Доступ разрешен
  }
  
  // Пример использования функции
  function protectedFunction() {
    const username = prompt('Введите имя пользователя');
    const password = prompt('Введите пароль');
    
    if (checkAccess(username, 'admin')) {
      console.log('У вас есть права администратора.');
      // Здесь может быть код, доступный только администраторам
    } else {
      console.log('У вас нет прав для выполнения этой операции.');
    }
  }
  
  protectedFunction(); // Вызов защищенной функции
  