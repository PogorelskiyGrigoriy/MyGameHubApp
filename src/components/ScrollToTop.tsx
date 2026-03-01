import { IconButton } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { LuArrowUp } from "react-icons/lu"; // или любая другая иконка стрелки

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Кнопка появится, если прокрутили больше 500px
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Плавный скролл
    });
  };

  if (!isVisible) return null;

  return (
    <IconButton
      aria-label="Back to top"
      onClick={scrollToTop}
      position="fixed"
      bottom="50px"
      right="50px"
      zIndex={100}
      // Ключевые настройки для цвета:
      colorPalette="gray"
      variant="surface" // Автоматически подберет контраст для Light/Dark
      size="lg"
      borderRadius="full"
      boxShadow="md"
    >
      <LuArrowUp />
    </IconButton>
  );
};

export default ScrollToTop;
