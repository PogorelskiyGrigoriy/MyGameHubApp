import { Button } from "@chakra-ui/react";
import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@/components/ui/menu";
import { useState } from "react";
import { LuChevronDown, LuChevronUp } from "react-icons/lu";

/**
 * Интерфейс пропсов с использованием Generic (T).
 * Это позволяет компоненту работать с любым типом данных (Genre, Platform и т.д.)
 */
interface Props<T> {
  data: T[]; // Массив объектов любого типа
  selectedItem: T | undefined; // Текущий выбранный объект из этого массива
  onSelect: (item: T) => void; // Колбэк, вызываемый при клике на элемент списка
  labelPrefix?: string; // Необязательный текст перед значением (например, "Sort by:")
  defaultLabel: string; // Текст, который виден, если ничего не выбрано (например, "Genres")
  getLabel: (item: T) => string; // Функция-хелпер: как достать отображаемое имя из объекта T
  getValue: (item: T) => string | number; // Функция-хелпер: как достать уникальный ключ (id/slug) из объекта T
}

/**
 * MenuSelector — это абстракция над выпадающим списком.
 * Синтаксис <T,> сообщает TypeScript, что это Generic-компонент.
 */
const MenuSelector = <T,>({
  data,
  selectedItem,
  onSelect,
  labelPrefix,
  defaultLabel,
  getLabel,
  getValue,
}: Props<T>) => {
  // Локальное состояние только для анимации иконки (стрелочка вверх/вниз)
  const [isOpen, setIsOpen] = useState(false);

  return (
    <MenuRoot 
      // Синхронизируем состояние открытия с библиотечным компонентом
      onOpenChange={(e) => setIsOpen(e.open)} 
      // Удаляем из DOM при закрытии для оптимизации
      unmountOnExit 
    >
      <MenuTrigger asChild>
        <Button variant="outline" size="sm">
          {/* Если есть префикс — рисуем его. 
            Если выбран элемент — достаем его имя через getLabel, иначе пишем дефолтный текст.
          */}
          {labelPrefix} {selectedItem ? getLabel(selectedItem) : defaultLabel}
          
          {/* Динамическая иконка в зависимости от состояния isOpen */}
          {isOpen ? <LuChevronUp /> : <LuChevronDown />}
        </Button>
      </MenuTrigger>

      <MenuContent 
        portalled // Рендерит меню в отдельном слое (портале), чтобы избежать обрезки в контейнерах с overflow
        maxH="400px" // Ограничиваем высоту для длинных списков (актуально для жанров)
        overflowY="auto" // Включаем внутреннюю прокрутку
      >
        {data.map((item) => (
          <MenuItem
            // Используем хелпер getValue для получения уникального React key
            key={getValue(item)}
            // Chakra UI требует, чтобы value в MenuItem было строкой
            value={getValue(item).toString()}
            // При клике прокидываем весь объект обратно родителю
            onClick={() => onSelect(item)}
          >
            {/* Используем хелпер getLabel для отрисовки текста в списке */}
            {getLabel(item)}
          </MenuItem>
        ))}
      </MenuContent>
    </MenuRoot>
  );
};

export default MenuSelector;