import { useRef, useEffect } from 'react'


const Hello = () => {
    const canvasRef = useRef(null)
    const stars = useRef([])
  
    useEffect(() => {
      const canvas = canvasRef.current
      const ctx = canvas.getContext('2d')
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
  
      const centerX = canvas.width / 2
      const centerY = canvas.height / 2
  
      // Фон с туманностью
      function drawBackground() {
        const gradient = ctx.createRadialGradient(
          centerX, centerY, canvas.width * 0.1,
          centerX, centerY, canvas.width * 0.8
        )
        gradient.addColorStop(0, 'rgba(0, 0, 0, 1)')
        ctx.fillStyle = gradient
        ctx.fillRect(0, 0, canvas.width, canvas.height)
      }
  
      // Функция для создания новой звезды (из центра)
      function createStar() {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
      
        // Центр экрана — точка, куда направлены все звезды
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
      
        // Направление звезды: лететь от своего места к центру (на зрителя)
        const angle = Math.atan2(y - centerY, x - centerX);
      
        return {
          x,
          y,
          angle, // Направление движения к центру
          speed: Math.random() * 3 + 1, // Скорость увеличена для динамики
          size: Math.random() * 2 + 0.5, // Размер звезды
          color: ['#ffffff', 'rgb(43, 43, 43)', 'rgb(114, 114, 114)', 'rgb(192, 192, 192)'][Math.floor(Math.random() * 4)],
          lifeTime: Date.now() + 4000,
        };
      }
      
      
  
      // Создаем звезды
      stars.current = Array.from({ length: 300 }).map(createStar)
  
      const animate = () => {
        drawBackground()
  
        stars.current.forEach((star, index) => {
          // Увеличиваем расстояние от центра
          star.distance += star.speed
  
          // Вычисляем координаты на основе угла и расстояния
          star.x += Math.cos(star.angle) * star.speed
          star.y += Math.sin(star.angle) * star.speed
  
          // Если звезда улетела за границы экрана или прошло 4 секунды – пересоздаем
          if (
            star.x < -50 || star.x > canvas.width + 50 ||
            star.y < -50 || star.y > canvas.height + 50 ||
            Date.now() > star.lifeTime
          ) {
            stars.current[index] = createStar()
          }
  
          // Рисуем звезду
          ctx.beginPath()
          ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2)
          ctx.fillStyle = star.color
          ctx.fill()
        })
  
        requestAnimationFrame(animate)
      }
  
      animate()
    }, [])
  return (
    <div className="back-hello">
        <canvas ref={canvasRef} style={{ position: 'absolute', top: 0, left: 0, width: '100vw', height: '100vh' }} />
        <div className='back-block'>
            <h1> Hello</h1>
        </div>
    </div>
  );
};

export default Hello;