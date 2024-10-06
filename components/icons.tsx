import React from 'react'

interface IconProps {
  color?: string; // Color puede ser una variable tailwind como 'text-red-500' o 'text-blue-500'
  size?: string; // Tamaño del ícono (puedes usar clases de Tailwind como 'w-6 h-6')
  strokeWidth?: number; // Espesor del trazo del ícono si se usa con 'stroke'
}

export const Icon: React.FC<IconProps> = ({ color = 'text-gray-500', size = 'w-6 h-6', strokeWidth = 2 }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      stroke='currentColor'
      className={`${size} ${color}`} // Aplicar el tamaño y color de Tailwind
      strokeWidth={strokeWidth}
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M12 4v16m8-8H4'
      />
    </svg>
  )
}
