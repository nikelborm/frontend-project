import { useState } from 'react'; // Импортируем useState для управления состоянием
import styles from './registration.module.scss'; // Импортируем стили
import Link from 'next/link';

export default function Mainnn() {
  const [username, setUsername] = useState(''); // Состояние для имени пользователя
  const [password, setPassword] = useState(''); // Состояние для пароля
  const [errorMessage, setErrorMessage] = useState(''); // Состояние для сообщений об ошибках

  const handleAddToCart = async () => {
    setErrorMessage(''); // Очищаем все предыдущие сообщения об ошибках

    try {
      const userData = { username, password }; // Создаем объект данных пользователя
      const response = await fetch('http://localhost:3001/api/auth/register', { // Замените URL-адрес вашего бэкэнда
        mode: 'cors',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        console.log('Пользователь успешно добавлен!'); // Сообщение об успехе
        // Обработайте успешную регистрацию (например, перенаправление, очистка формы)
      } else {
        const error = await response.json();
        setErrorMessage(error.message); // Устанавливаем сообщение об ошибке из ответа
      }
    } catch (error) {
      console.error('Ошибка при добавлении пользователя:', error); // Записываем ошибку для отладки
      setErrorMessage('Произошла ошибка. Повторите попытку позже.'); // Общее сообщение об ошибке для пользователя
    }
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div className={styles.main}>
      <input
        type="text"
        placeholder="Имя пользователя"
        value={username}
        onChange={handleUsernameChange}
      />
      <input
        type="password"
        placeholder="Пароль"
        value={password}
        onChange={handlePasswordChange}
      />
      <Link href={'/'}><button onClick={handleAddToCart}>Зарегистрироваться</button></Link>
      {errorMessage && <p className={styles.error}>{errorMessage}</p>}
    </div>
  );
}
