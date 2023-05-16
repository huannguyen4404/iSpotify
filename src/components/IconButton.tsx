export interface IconButtonProps {
  icon: any
  label: string
}

export function IconButton({ icon: Icon, label }: IconButtonProps) {
  return (
    <button className="flex items-center space-x-2 hover:text-white">
      <Icon className="icon" />
      <span>{label}</span>
    </button>
  )
}
